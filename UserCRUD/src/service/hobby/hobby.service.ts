import { Injectable } from '@nestjs/common';

import { HobbyDAO } from '../../dao/hobby/hobby.dao';

import { Hobby } from '../../entity/hobby/hobby.entity';

import { CreateHobbyDto } from '../../dto/hobby/create-hobby.dto';
import { UpdateHobbyDto } from '../../dto/hobby/update-hobbies.dto';

import HttpCustomException from '../../exception/HttpCustomException';
import { StatusCodeEnums } from '../../enum/StatusCodeEnum';

@Injectable()
export class HobbyService {
  constructor(private readonly hobbyDAO: HobbyDAO) {}

  async create(createHobbyDto: CreateHobbyDto): Promise<Hobby> {
    const { name } = createHobbyDto;

    const lowerCaseName = name.toLowerCase();

    const existingHobby = await this.hobbyDAO.findByName(lowerCaseName);
    if (existingHobby) {
      throw new HttpCustomException(
        'El hobby ya existe.',
        StatusCodeEnums.HOBBY_ALREADY_EXISTS,
      );
    }

    return this.hobbyDAO.createHobby(lowerCaseName);
  }

  async findAll(): Promise<Hobby[]> {
    return this.hobbyDAO.findAll();
  }

  async findOne(id: number): Promise<Hobby | null> {
    return this.hobbyDAO.findOneById(id);
  }

  async update(id: number, name: string): Promise<Hobby | null> {
    const hobby = await this.hobbyDAO.findOneById(id);

    if (!hobby) {
      return null;
    }

    hobby.name = name;
    return this.hobbyDAO.updateHobby(hobby);
  }
}
