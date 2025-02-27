import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  async getMessages(): Promise<string[]> {
    return 'All messages';
  }
  async getMessage(id: string): Promise<string> {
    return 'Hello messages services';
  }
}
