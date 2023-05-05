import {IsEmail, IsString} from "class-validator"
import {PartialType} from '@nestjs/mapped-types'
export class UserDto{

    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    password: string;
}

export class UpdateUserDto extends PartialType(UserDto) {} 