import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const unusedValue1 = '未使用の値1';
    const unusedValue2 = '未使用の値2';
    const unusedValue3 = '未使用の値3';
    return 'Hello World!';
  }
}
