import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // 明示的に undefined を返すプロパティ
  undefinedValue: string | undefined;

  // undefined を返すメソッド
  getUndefined(): string | undefined {
    return undefined;
  }

  getHello(): string {
    return 'Hello World!';
  }
}
