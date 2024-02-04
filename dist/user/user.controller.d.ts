import { User } from '@prisma/client';
import { UpdateUserDto } from './user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    stringToInteger: (str: string) => number;
    constructor(userService: UserService);
    getMe(user: User): {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        firstName: string;
        lastName: string;
        email: string;
        hash: string;
    };
    editUser(userId: string, dto: UpdateUserDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        firstName: string;
        lastName: string;
        email: string;
        hash: string;
    }>;
}
