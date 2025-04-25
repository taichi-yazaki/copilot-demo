import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  sumUntil(): number {
    let sum = 0;
    let i = 0;
    while (i < 5) {
      sum += i;
    }
    return sum;
  }
}
