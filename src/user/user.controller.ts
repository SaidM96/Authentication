import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { UpdateUserDto, UserDto } from './userDto/user.dto';
import { UserService } from './user.service';
import { CommentService } from 'src/comment/comment.service';
import { JwtGuard } from 'src/auth/guards/jwt.guard';

@Controller('user') 
export class UserController {
    constructor(private readonly userservice:UserService, private readonly commentService:CommentService){}

    @UseGuards(JwtGuard)
    @Get()
    findAll(){
        return "ikhan";
        // return this.userservice.findAll();
    }

    @UseGuards(JwtGuard)
    @Get(':id')
    findById(@Param('id') id:number){
        return this.userservice.findById(id);
    }
    
    @UseGuards(JwtGuard)
    @Get(':id/comments')
    findUserComments(@Param('id') id:string , @Param('comments') comments:string){
        return this.commentService.findUserComments(id);
    }
    
    @Put(':id') 
    update(@Param('id') id:number, @Body() updateUserDto:UpdateUserDto){
        return this.userservice.update(id, updateUserDto);
    }

}
