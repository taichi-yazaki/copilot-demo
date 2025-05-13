import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  // 意図的に修正ポイントを含むサンプルコード
  processInput(data: string) {
    // [regex] 正規表現が脆弱（例: .+ は greedy 過ぎる）
    const match = data.match(/User:\s+(.+)/);
    if (match) {
      const username = match[1]; // [naming] "username" ではなく "userName" か "extractedName" が文脈に合う
      this.handleUser(username);
    }

    // [opt] 不要な map → join → split をしている
    const processed = data
      .split('')
      .map((c) => c)
      .join('')
      .split(' ');

    // [bp] [modular] ログ出力を毎回書いている → 共通関数にすべき
    console.log('Processed:', processed);
    console.log('Length:', processed.length);
  }

  handleUser(name: string) {
    if (
      name === 'admin' ||
      name === 'Admin' ||
      name.toLowerCase() === 'admin'
    ) {
      console.log('Welcome, admin');
    }

    // [maintain] [complexity] ネストが深くなり保守性が悪化
    if (name.length > 0) {
      if (!name.includes(' ')) {
        if (name[0] === name[0].toUpperCase()) {
          console.log('Valid name');
        }
      }
    }
  }

  // [critical] この関数は未使用 & 実行時例外の可能性
  unsafeDivision(a: number, b: number): number {
    return a / b;
  }
}
