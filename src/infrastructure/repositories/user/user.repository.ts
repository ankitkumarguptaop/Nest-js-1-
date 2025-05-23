import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/user/user.entity';

import { DataSource, Repository } from 'typeorm';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }
  async createUser(payload: any): Promise<any> {
    return await this.save(payload);
  }
  async findUser(id: number): Promise<any> {
    return await this.findOne({
      where: {
        id: id,
      },
    });
  }
  async updateUser(id: number, payload: any): Promise<any> {
    await this.update(id, {
      ...(payload.name && { name: payload.name }),
      ...(payload.password && { password: payload.password }),
    });
    return await this.findOne({
      where: {
        id: id,
      },
    });
  }
}
