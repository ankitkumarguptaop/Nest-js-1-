import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Res,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './create-user.dto';
import { UpdateUserDto } from './update-user.dto';
import { SignInUserDto } from './signin.dto';
import { Request, Response } from 'express';
import { User } from 'src/domain/user/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/signup')
  signup(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
  @Post('/signin')
  async signin(
    @Body() signInUserDto: SignInUserDto,
    @Req() request: Request,
    @Res() response: Response,
  ) {
    const user = await this.userService.signIn(signInUserDto);
    
    if(user instanceof User){
      response.cookie('jwt', this.userService.generateToken(user.id), {
        maxAge: 900000,
        httpOnly: true,
      });
    }

   return user ;
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
