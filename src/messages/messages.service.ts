import { Injectable } from '@nestjs/common';
import { MessagesDto } from 'src/models/messages.models';

@Injectable()
export class MessagesService {
  async getMessages(): Promise<string> {
    return 'All messages';
  }
  async getMessage(id: string): Promise<string> {
    return 'Hello messages services' + id;
  }
  async postMessage(body: MessagesDto): Promise<string> {
    const { userId, userName, title, content } = body;
    console.log(userId, userName, title, content);
    return `Message ${content} posted by ${userName}`;
  }
}
