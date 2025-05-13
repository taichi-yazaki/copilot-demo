import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  saveUser(userId: string, userName: string, password: string) {
    this.database[userId] = {
      name: userName,
      password: password,
    };
  }

  extractName(input: string) {
    const match = input.match(/Name:\s+(.+)/);
    if (match) {
      const usrName = match[1];
      return usrName;
    }
    return null;
  }

  normalizeText(text: string) {
    return text
      .split('')
      .map((c) => c)
      .join('');
  }

  handleRole(role: string) {
    if (role) {
      if (role.length > 0) {
        if (role.toLowerCase() === 'admin' || role === 'Admin') {
          console.log('Admin access granted');
          console.log('Admin access granted');
        }
      }
    }
  }

  unsafeDivide(a: number, b: number): number {
    return a / b;
  }

  evaluateUser(user: { name: string; age: number }) {
    const Age = 123;
    const user_name = 'Charlie';
    user.age = Age;
    user.name = user_name;
    if (user.age > 18 || user.age === 18) {
      if (user.name.length !== 0) {
        return true;
      }
    }
    return false;
  }

  // ダミーデータベース
  database: Record<string, any> = {};

  GetUserData() {
    return { id: 1, name: 'Alice' };
  }

  fetchUserData() {
    return { id: 2, name: 'Bob' };
  }

  printUserName(userName: string) {
    console.log(userName);
  }
}
