import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { UserService } from '../../service/user/user.service';
import { CreateUserDto } from '../../dto/user/create-user.dto';
import { UpdateUserDto } from '../../dto/user/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id/hobbies')
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserHobbiesDto: UpdateUserDto,
  ) {
    const { name, hobbyIds } = updateUserHobbiesDto;
    return this.userService.updateUserHobbies(+id, name, hobbyIds);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(+id);
  }
}
