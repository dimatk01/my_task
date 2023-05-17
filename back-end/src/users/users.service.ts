import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './create-user.dto';
const bcrypt = require('bcrypt');
const saltRounds = 10;

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async createNewUser(user: CreateUserDto): Promise<User> {
    const password = await bcrypt.hash(user.password, saltRounds);
    const checkUser = await this.usersRepository.findBy({ email: user.email });
    if (checkUser) {
      throw new Error('User already exist!',);
    }

    return await this.usersRepository.save({ ...user, password });
  }
}
