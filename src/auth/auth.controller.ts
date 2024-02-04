import { Controller, Get, Post } from "@nestjs/common";
import { Body, HttpCode, Req } from "@nestjs/common/decorators";
import { HttpStatus } from "@nestjs/common/enums";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth')
export class AuthController{ 
    constructor(private authService: AuthService) { }


    @Post('login')
    login(@Body() dto: AuthDto) { 
        return this.authService.login(dto);
    }
    
    @HttpCode(HttpStatus.OK)
    @Post('signup')
    signup(@Body() dto: AuthDto) {
        console.log(dto)
       return this.authService.signup(dto);
    }
}