import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../../service/user/user.service';
import { UserDAO } from '../../dao/user/user.dao';
import HttpCustomException from '../../exception/HttpCustomException';
import { StatusCodeEnums } from '../../enum/StatusCodeEnum';
import { User } from '../../entity/user/user.entity';
import { Hobby } from '../../entity/hobby/hobby.entity';

describe('UserService', () => {
  let userService: UserService;
  let userDAO: UserDAO;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: UserDAO,
          useValue: {
            findOneUserById: jest.fn(),
            findHobbiesByIds: jest.fn(),
            saveUser: jest.fn(),
          },
        },
      ],
    }).compile();

    userService = module.get<UserService>(UserService);
    userDAO = module.get<UserDAO>(UserDAO);
  });

  describe('updateUserHobbies', () => {
    it('should update the hobbies of a user', async () => {
      const userId = 1;
      const hobbyIds = [1, 2, 3];
      const userName = 'John Doe';

      const user: User = { id: userId, name: userName, hobbies: [] } as User;
      const hobbies: Hobby[] = hobbyIds.map(id => ({ id, name: `Hobby ${id}` } as Hobby));

      (userDAO.findOneUserById as jest.Mock).mockResolvedValue(user);
      (userDAO.findHobbiesByIds as jest.Mock).mockResolvedValue(hobbies);
      (userDAO.saveUser as jest.Mock).mockResolvedValue({ ...user, hobbies });

      const result = await userService.updateUserHobbies(userId, userName, hobbyIds);

      expect(userDAO.findOneUserById).toHaveBeenCalledWith(userId);
      expect(userDAO.findHobbiesByIds).toHaveBeenCalledWith(hobbyIds);
      expect(userDAO.saveUser).toHaveBeenCalledWith({ ...user, hobbies });
      expect(result.hobbies).toEqual(hobbies);
    });

    it('should throw an exception if user is not found', async () => {
      const userId = 1;
      const hobbyIds = [1, 2, 3];
      const userName = 'John Doe';

      (userDAO.findOneUserById as jest.Mock).mockResolvedValue(null);

      await expect(userService.updateUserHobbies(userId, userName, hobbyIds)).rejects.toThrow(
        new HttpCustomException(`User with ID ${userId} not found`, StatusCodeEnums.USER_NOT_FOUND),
      );
    });

    it('should throw an exception if some hobbies are not found', async () => {
      const userId = 1;
      const hobbyIds = [1, 2, 3];
      const userName = 'John Doe';

      const user: User = { id: userId, name: userName, hobbies: [] } as User;
      const hobbies: Hobby[] = [{ id: 1, name: 'Hobby 1' } as Hobby];

      (userDAO.findOneUserById as jest.Mock).mockResolvedValue(user);
      (userDAO.findHobbiesByIds as jest.Mock).mockResolvedValue(hobbies);

      await expect(userService.updateUserHobbies(userId, userName, hobbyIds)).rejects.toThrow(
        new HttpCustomException('Some hobbies were not found', StatusCodeEnums.HOBBY_NOT_FOUNT),
      );
    });
  });
});
