import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/Entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './strategies/local.strategy';
import { jwtStrategy } from './strategies/jwt.strategy';
import { RefreshJwtStrategy } from './strategies/refreshTocken.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), JwtModule.register({

    secret: `${process.env.jwt_secret}`,
    signOptions: {
      expiresIn: '60s',
    }
  }),],
  controllers: [AuthController],
  providers: [AuthService, UserService, LocalStrategy, jwtStrategy, RefreshJwtStrategy],
})

export class AuthModule {}
