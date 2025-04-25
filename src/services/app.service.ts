import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  sumUntil(limit: number): number {
    let sum = 0;
    let i = 0;
    while (i < limit) {
      sum += i;
    }
    return sum;
  }
}
