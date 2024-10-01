import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './entity/user/user.entity';
import { Hobby } from './entity/hobby/hobby.entity';

import { UserController } from './controller/user/users.controller';
import { HobbyController } from './controller/hobby/hobby.controller';

import { UserService } from './service/user/user.service';
import { HobbyService } from './service/hobby/hobby.service';

import {  UserDAO } from './dao/user/user.dao';
import { HobbyDAO } from './dao/hobby/hobby.dao';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgresdb',
      port: 5432, 
      username: 'user',
      password: '1234',
      database: 'userdb',
      entities:[User, Hobby],
      synchronize: true,
      logging: true
    }),
    TypeOrmModule.forFeature([User, Hobby]),
  ],
  controllers: [UserController, HobbyController],
  providers: [UserService, HobbyService, UserDAO, HobbyDAO],
})
export class AppModule {}
