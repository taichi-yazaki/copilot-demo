import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async sendBulkEmails(emails: string[]) {
    emails.forEach((email) => {
      this.sendEmail(email);
    });
    console.log('All emails sent');
  }

  async sendEmail(email: string) {
    await new Promise((r) => setTimeout(r, 100));
    console.log(`Email sent to ${email}`);
  }
}
