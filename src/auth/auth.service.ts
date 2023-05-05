import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt'
import { UserEntity } from 'src/Entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly userService:UserService, private jwtService:JwtService){}

    async validateUser(username:string, password:string){
        const user = await this.userService.findByUsername(username);
        if (user &&  (await bcrypt.compare(password, user.password)))
        {
            const {password,...result} = user;
            return result;
        }
        return null;
    }

    async login(user:UserEntity){
        const pyload = {
            username:user.email,
            sub:{
                name:user.name,
            }
        }

        return {
                ...user,
                accessTocken: this.jwtService.sign(pyload),
                refreshTocken: this.jwtService.sign(pyload, {expiresIn: '5d'}),
            }
    }

    async refreshTocken(user:UserEntity){
        const pyload = {
            username:user.email,
            sub:{
                name:user.name,
            }
        }

        return {
                accessTocken: this.jwtService.sign(pyload),
            }
    }
}
