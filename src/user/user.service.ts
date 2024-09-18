import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { User } from './interfaces/user.interface';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  private users: User[] = [];

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const saltOrRounds = 10;

    const hashedPassword = await hash(createUserDto.password, saltOrRounds);

    const user: User = {
      ...createUserDto,
      id: this.users.length + 1,
      password: hashedPassword,
    };

    this.users.push(user);

    console.log('passwordHashed', hashedPassword);

    return user;
  }

  async getAllUsers(): Promise<User[]> {
    return this.users;
  }
}
