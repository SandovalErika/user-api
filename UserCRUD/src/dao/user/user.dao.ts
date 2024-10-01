import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '../../entity/user/user.entity';
import { Hobby } from '../../entity/hobby/hobby.entity';

@Injectable()
export class UserDAO {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Hobby)
    private hobbyRepository: Repository<Hobby>,
  ) {}

  async createUser(name: string): Promise<User> {
    const user = this.userRepository.create({ name });
    return this.userRepository.save(user);
  }

  async findByName(name: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { name } });
  }

  async findAllUsers(): Promise<User[]> {
    return this.userRepository.find({ relations: ['hobbies'] });
  }

  async findOneUserById(id: number): Promise<User | null> {
    return this.userRepository.findOne({
      where: { id },
      relations: ['hobbies'],
    });
  }

  async findHobbiesByIds(hobbyIds: number[]): Promise<Hobby[]> {
    return this.hobbyRepository.findByIds(hobbyIds);
  }

  async saveUser(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  async removeUser(user: User): Promise<void> {
    await this.userRepository.remove(user);
  }
}
