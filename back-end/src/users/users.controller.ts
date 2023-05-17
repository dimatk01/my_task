import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './create-user.dto';
import { STATUS_CODES } from 'http';

@Controller('api/users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('/registration')
  @UsePipes(ValidationPipe)
  async registration(@Body() createUserDto: CreateUserDto) {
    try {
      await this.userService.createNewUser(createUserDto);
      return HttpStatus.CREATED;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message: [error.message],
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
