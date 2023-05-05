import { Injectable } from '@nestjs/common';
import { UpdateUserDto, UserDto } from './userDto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/Entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
constructor(@InjectRepository(UserEntity) private readonly userRepo: Repository<UserEntity>){}


    async findAll(){
        return await this.userRepo.find();
    }
    
    async findById(id:number){
        
        return await this.userRepo.findOne({where:{id:id}})
    }

    async findByUsername(username:string){
        
        return await this.userRepo.findOne({where:{email:username}})
    }
        
    async createUser( userDto:UserDto){
        const user = await this.userRepo.create(userDto);
        return await this.userRepo.save(user);
    }

    async update(id:number, updateUser:UpdateUserDto){
        return await this.userRepo.update(id, updateUser);
    }
}
