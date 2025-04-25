import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  a: string;
  getHello(): string {
    return 'Hello World!';
  }

  sumUntil(limit: number): number {
    let sum = 0;
    let i = 0;
    while (i < limit) {
      sum += i;
      // i++ を書き忘れてる → 無限ループ
    }
    return sum;
  }
}
