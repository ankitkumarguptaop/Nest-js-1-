const jwt = require('jsonwebtoken');
import { Injectable, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Request, Response, NextFunction } from 'express';
import { UserRepository } from 'src/infrastructure/repositories/user/user.repository';

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
    private configService: ConfigService,
  ) {}
  async use(req: Request, res: Response, next: NextFunction) {
    let token = req?.cookies?.jwt;
    if (token) {
      const authenticatedUser = jwt.verify(
        token,
        this.configService.get<number>('JWT_SECRET'),
      );
      req.body.user = await this.userRepository.findOne({
        where: {
          id: authenticatedUser.id,
        },
      });
      next();
      console.log('successfully authenticate');
    }
  }
}
