import { Injectable } from '@nestjs/common';
import { data } from './mock/index';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getUserInfo(): any {
    return data;
  }
}
