import { Injectable } from '@nestjs/common';

import { UserDAO } from '../../dao/user/user.dao';

import { User } from '../../entity/user/user.entity';

import { CreateUserDto } from '../../dto/user/create-user.dto';

import HttpCustomException from '../../exception/HttpCustomException';
import { StatusCodeEnums } from '../../enum/StatusCodeEnum';

@Injectable()
export class UserService {
  constructor(private readonly userDAO: UserDAO) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { name, hobbyIds } = createUserDto;
    const lowerCaseName = name.toLowerCase();

    const existingUser = await this.userDAO.findByName(lowerCaseName);
    if (existingUser) {
      throw new HttpCustomException(
        'El nombre de usuario ya existe.',
        StatusCodeEnums.USER_ALREADY_EXISTS,
      );
    }

    const user = await this.userDAO.createUser(lowerCaseName);

    if (hobbyIds && hobbyIds.length > 0) {
      const hobbies = await this.userDAO.findHobbiesByIds(hobbyIds);
      user.hobbies = hobbies;
    }

    return this.userDAO.saveUser(user);
  }

  async findAll(): Promise<User[]> {
    return this.userDAO.findAllUsers();
  }

  async findOne(id: number): Promise<User | null> {
    return this.userDAO.findOneUserById(id);
  }

  async updateUserHobbies(id: number, name: string, hobbyIds: number[]) {
    const user = await this.userDAO.findOneUserById(id);
    if (!user) {
      throw new HttpCustomException(
        `User with ID ${id} not found`,
        StatusCodeEnums.USER_NOT_FOUND,
      );
    }

    user.name = name;

    const hobbies = await this.userDAO.findHobbiesByIds(hobbyIds);
    if (hobbies.length !== hobbyIds.length) {
      throw new HttpCustomException(
        `Some hobbies were not found`,
        StatusCodeEnums.HOBBY_NOT_FOUNT,
      );
    }

    user.hobbies = hobbies;
    return this.userDAO.saveUser(user);
  }

  async deleteUser(id: number): Promise<void> {
    const user = await this.userDAO.findOneUserById(id);
    if (!user) {
      throw new HttpCustomException(
        `User with ID ${id} not found`,
        StatusCodeEnums.USER_NOT_FOUND,
      );
    }

    await this.userDAO.removeUser(user);
  }
}
