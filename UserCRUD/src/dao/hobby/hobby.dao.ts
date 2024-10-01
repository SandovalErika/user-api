import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Hobby } from '../../entity/hobby/hobby.entity';

@Injectable()
export class HobbyDAO {
  constructor(
    @InjectRepository(Hobby)
    private hobbyRepository: Repository<Hobby>,
  ) {}

  async createHobby(name: string): Promise<Hobby> {
    const hobby = this.hobbyRepository.create({ name });
    return this.hobbyRepository.save(hobby);
  }

  async findByName(name: string): Promise<Hobby | null> {
    return this.hobbyRepository.findOne({ where: { name } });
  }

  async findAll(): Promise<Hobby[]> {
    return this.hobbyRepository.find();
  }

  async findOneById(id: number): Promise<Hobby | null> {
    return this.hobbyRepository.findOneBy({ id });
  }

  async updateHobby(hobby: Hobby): Promise<Hobby> {
    return this.hobbyRepository.save(hobby);
  }
}
