import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './user.dto';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    editUser(userId: number, dto: UpdateUserDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        firstName: string;
        lastName: string;
        email: string;
        hash: string;
    }>;
}
