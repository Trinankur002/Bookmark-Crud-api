import { IsEmail, IsOptional, IsString } from "class-validator"


export class UpdateUserDto {
    @IsEmail()
    @IsOptional()
    @IsString()
    email?: string

    @IsOptional()
    @IsString()
    firstName?: string

    @IsOptional()
    @IsString()
    lastName?: string
}
