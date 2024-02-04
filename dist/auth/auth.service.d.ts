import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import { JwtService } from "@nestjs/jwt/dist";
import { ConfigService } from "@nestjs/config/dist/config.service";
export declare class AuthService {
    private prisma;
    private jwt;
    private config;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService);
    login(dto: AuthDto): Promise<{
        access_token: string;
    }>;
    signup(dto: AuthDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        firstName: string;
        lastName: string;
        email: string;
        hash: string;
    }>;
    signToken(userId: number, email: string): Promise<{
        access_token: string;
    }>;
}
