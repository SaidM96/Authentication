import { Body, Controller, Post , Request, UseGuards} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local.guard';
import { UserDto } from 'src/user/userDto/user.dto';
import { UserService } from 'src/user/user.service';
import { RefreshJwtGuard } from './guards/refreshJwt.guard';

@Controller('auth')
export class AuthController {
constructor(private  authService:AuthService, private  userService:UserService){}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req){
        return await this.authService.login(req.user);
    }

    @Post('register')
    async register(@Body() userDto:UserDto){
        return await this.userService.createUser(userDto);
    }

    @UseGuards(RefreshJwtGuard)
    @Post('refresh')
    async refreshTocken(@Request() req){
        return this.authService.refreshTocken(req.user);
    }
}
