import { ForbiddenException, Injectable } from "@nestjs/common";
import { User, Bookmark } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library.js";
import { error } from "console";
import { JwtService } from "@nestjs/jwt/dist";
import { ConfigService } from "@nestjs/config/dist/config.service";

@Injectable({})
export class AuthService{ 
    constructor(
        private prisma: PrismaService,
        private jwt: JwtService,
        private config : ConfigService) { }
    async login(dto : AuthDto) { 
        // return { msg: 'This is login' };
        const user = await this.prisma.user.findUnique({
          where: {
                email : dto.email,
            },  
        });
        if (!user) throw new ForbiddenException('EmailId incorrect');

        const pwMatch = await argon.verify(user.hash, dto.password);
        if (!pwMatch) throw new ForbiddenException('Credentials incorrect');

        delete user.hash;
        // return user;
        return this.signToken(user.id, user.email);
    }

    async signup(dto: AuthDto) { 
        const hash = await argon.hash(dto.password)
        try {
            const user = await this.prisma.user.create({
            data: {
                email: dto.email,
                hash,
                }
        })
            delete user.hash;
            return user;     
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new ForbiddenException('Credentials taken');
                }
            }
        } 
        throw error;
    }  

    async signToken(
        userId: number, email : string,
    ): Promise<{ access_token: string }> {
        const payLoad= { sub: userId, email }
        const token = await this.jwt.signAsync(payLoad, {
            expiresIn: '30m', secret: this.config.get('JWT_SECRET'),
        }) 
        return { access_token : token }
    }
}