import { Body, Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '@prisma/client';
import { Request } from 'express';
import { GetUser, GetUserField } from 'src/auth/decoretor/user.decorator';
import { JtwGuard } from 'src/auth/guard';
import { isNumberObject } from 'util/types';
import { UpdateUserDto } from './user.dto';
import { UserService } from './user.service';

@UseGuards(JtwGuard)
@Controller('user')
export class UserController {

    stringToInteger = (str: string): number => {
        return parseInt(str);
    };

    constructor (private userService : UserService){}
    @Get('me')
    getMe(@GetUser('') user : User) {
        console.log({user :user,})
        return user
    }

    @Patch('update')
    async editUser(@GetUserField('id') userId : string, @Body() dto: UpdateUserDto) {
        const id = await this.stringToInteger(userId)
        return this.userService.editUser(id , dto)
    }


    
}
