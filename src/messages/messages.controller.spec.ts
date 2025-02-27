import { Test, TestingModule } from '@nestjs/testing';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';

describe('MessagesController', () => {
  let controller: MessagesController;
  let service: MessagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessagesController],
      providers: [MessagesService],
    }).compile();

    controller = module.get<MessagesController>(MessagesController);
    service = module.get<MessagesService>(MessagesService);
  });

  it('Controller should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('Service should return "Hello messages services" when promise is resolved', async () => {
    const result = await service.getMessage('zaqwsxcde');
    expect(result).toBe('Hello messages services');
  });
});
