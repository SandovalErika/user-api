import { Controller, Post, Get, Body, Param, NotFoundException, Patch } from '@nestjs/common';

import { HobbyService } from '../../service/hobby/hobby.service';

import { CreateHobbyDto } from '../../dto/hobby/create-hobby.dto';
import { UpdateHobbyDto } from '../../dto/hobby/update-hobbies.dto';

@Controller('hobbies')
export class HobbyController {
  constructor(private readonly hobbyService: HobbyService) {}

  @Post()
  create(@Body() createHobbyDto: CreateHobbyDto) {
    return this.hobbyService.create(createHobbyDto);
  }

  @Get()
  findAll() {
    return this.hobbyService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const hobby = await this.hobbyService.findOne(+id);
    if (!hobby) {
      throw new NotFoundException(`Hobby with ID ${id} not found`);
    }
    return hobby;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateHobbyDto: UpdateHobbyDto) {
    const { name } = updateHobbyDto
    const updatedHobby = await this.hobbyService.update(+id, name);
    if (!updatedHobby) {
      throw new NotFoundException(`Hobby with ID ${id} not found`);
    }
    return updatedHobby;
  }

}
