import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User as UserModel } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(params) {
    return this.usersService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne({ id: id });
  }

  @Post('user')
  async create(@Body() userData: UserModel): Promise<UserModel> {
    return this.usersService.create(userData);
  }

  @Patch(':id')
  update(@Param('id') id: number, userData: Partial<UserModel>) {
    return this.usersService.update({ where: { id: id }, data: userData });
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usersService.remove({ id: id });
  }
}
