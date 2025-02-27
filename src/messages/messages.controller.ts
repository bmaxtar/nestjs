import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesDto } from 'src/models/messages.models';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Get()
  async getMessages() {
    const data = await this.messagesService.getMessages();
    return data;
  }

  @Get(':id')
  async getMessage(@Param('id') id: string) {
    const data = await this.messagesService.getMessage(id);
    return data;
  }

  @Post()
  async postMessage(@Body('body') body: MessagesDto) {
    const data = await this.messagesService.postMessage(body);
    return data;
  }
}
