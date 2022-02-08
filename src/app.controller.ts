import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/login')
  responseInfo(@Body() body: any): any {
    const { user, psw } = body;
    console.log(user, psw);
    if (user === 'admin' && psw === '666666') {
      return {
        msg: '登录成功',
        code: 200,
        data: {
          user: 'airhang',
          identity: 'admin',
          ...this.appService.getUserInfo(),
        },
      };
    } else
      return {
        msg: '登录失败',
        code: 403,
      };
  }
}
