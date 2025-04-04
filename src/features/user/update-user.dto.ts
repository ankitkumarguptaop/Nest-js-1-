import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from '../../features/user/create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
