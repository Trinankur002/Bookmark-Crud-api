import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { PrismaService } from 'src/prisma/prisma.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private prisma;
    constructor(configService: ConfigService, prisma: PrismaService);
    validate(payload: {
        sub: number;
        email: string;
    }): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        firstName: string;
        lastName: string;
        email: string;
        hash: string;
    }>;
}
export {};
