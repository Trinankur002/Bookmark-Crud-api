import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './user.dto';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) { }
    async editUser(userId: number, dto : UpdateUserDto) {
        const user = await this.prisma.user.update({
                where: {
                id: userId,
            },
            data:{ 
                ...dto,
            },
        });
        delete user.hash;
        return user;    
    }
}


