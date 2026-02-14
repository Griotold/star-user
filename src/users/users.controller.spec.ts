import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('createUser', () => {
    it('should log the dto', async () => {
      const dto = { name: '홍길동', email: 'hong@example.com', password: '1234' };
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

      await controller.createUser(dto);

      expect(consoleSpy).toHaveBeenCalledWith(dto);
      consoleSpy.mockRestore();
    });
  });
});
