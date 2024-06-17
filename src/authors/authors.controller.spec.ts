import { Test, TestingModule } from '@nestjs/testing';
import { AuthorsController } from './authors.controller';
import { AuthorsService } from './authors.service';
import { CreateAuthorDto, UpdateAuthorDto } from './dto/author.dto';

const mockAuthor = {
  _id: '666ff5516922236bef08fe45',
  name: 'John Doe',
  biography: 'An author',
  birthdate: new Date('1990-01-01'),
};

describe('AuthorsController', () => {
  let controller: AuthorsController;
  let service: AuthorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthorsController],
      providers: [
        {
          provide: AuthorsService,
          useValue: {
            create: jest.fn().mockResolvedValue(mockAuthor),
            findAll: jest.fn().mockResolvedValue([mockAuthor]),
            findOne: jest.fn().mockResolvedValue(mockAuthor),
            update: jest.fn().mockResolvedValue(mockAuthor),
            delete: jest.fn().mockResolvedValue(mockAuthor),
          },
        },
      ],
    }).compile();

    controller = module.get<AuthorsController>(AuthorsController);
    service = module.get<AuthorsService>(AuthorsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create an author', async () => {
    const createAuthorDto: CreateAuthorDto = { name: 'John Doe', biography: 'An author', birthDate: new Date('1990-01-01') };
    expect(await controller.create(createAuthorDto)).toEqual(mockAuthor);
    expect(service.create).toHaveBeenCalledWith(createAuthorDto);
  });

  it('should return all authors', async () => {
    expect(await controller.findAll()).toEqual([mockAuthor]);
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should return a single author', async () => {
    expect(await controller.findOne('666ff5516922236bef08fe45')).toEqual(mockAuthor);
    expect(service.findOne).toHaveBeenCalledWith('666ff5516922236bef08fe45');
  });

  it('should update an author', async () => {
    const updateAuthorDto: UpdateAuthorDto = { name: 'Jane Doe' };
    expect(await controller.update('666ff5516922236bef08fe45', updateAuthorDto)).toEqual(mockAuthor);
    expect(service.update).toHaveBeenCalledWith('666ff5516922236bef08fe45', updateAuthorDto);
  });

  it('should delete an author', async () => {
    expect(await controller.delete('666ff5516922236bef08fe45')).toEqual(mockAuthor);
    expect(service.delete).toHaveBeenCalledWith('666ff5516922236bef08fe45');
  });
});
