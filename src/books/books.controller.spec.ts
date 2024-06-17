import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { CreateBookDto, UpdateBookDto, FindBookDto } from './dto/book.dto';


const mockBook = {
  _id: '666ff5516922236bef08fe45',
  title: 'The Great Gatsby',
  description: 'A novel by F. Scott Fitzgerald',
  authorId: 'someAuthorId',
  publishedDate: new Date('1925-04-10'),
};

describe('BooksController', () => {
  let controller: BooksController;
  let service: BooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [
        {
          provide: BooksService,
          useValue: {
            create: jest.fn().mockResolvedValue(mockBook),
            findAll: jest.fn().mockResolvedValue([mockBook]),
            findOne: jest.fn().mockResolvedValue(mockBook),
            update: jest.fn().mockResolvedValue(mockBook),
            delete: jest.fn().mockResolvedValue(mockBook),
            findByAuthor: jest.fn().mockResolvedValue([mockBook]),
            findByDateRange: jest.fn().mockResolvedValue([mockBook]),
          },
        },
      ],
    }).compile();

    controller = module.get<BooksController>(BooksController);
    service = module.get<BooksService>(BooksService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a book', async () => {
    const createBookDto: CreateBookDto = {
      name: 'The Great Gatsby',
      description: 'A novel by F. Scott Fitzgerald',
      authorId: '666ff5516922236bef08fe45',
      publishedDate: new Date('1925-04-10'),
    };
    expect(await controller.create(createBookDto)).toEqual(mockBook);
    expect(service.create).toHaveBeenCalledWith(createBookDto);
  });

  it('should return all books', async () => {
    const findBooksDto: FindBookDto = { page: 1, limit: 10 };
    expect(await controller.findAll(findBooksDto)).toEqual([mockBook]);
    expect(service.findAll).toHaveBeenCalledWith(findBooksDto);
  });

  it('should return a single book', async () => {
    expect(await controller.findOne('666ff5516922236bef08fe44')).toEqual(mockBook);
    expect(service.findOne).toHaveBeenCalledWith('666ff5516922236bef08fe44');
  });

  it('should update a book', async () => {
    const updateBookDto: UpdateBookDto = { name: 'The Great Gatsby Updated' };
    expect(await controller.update('666ff5516922236bef08fe44', updateBookDto)).toEqual(mockBook);
    expect(service.update).toHaveBeenCalledWith('666ff5516922236bef08fe44', updateBookDto);
  });

  it('should delete a book', async () => {
    expect(await controller.delete('666ff5516922236bef08fe44')).toEqual(mockBook);
    expect(service.delete).toHaveBeenCalledWith('666ff5516922236bef08fe44');
  });

  it('should return books by author', async () => {
    expect(await controller.findByAuthor('666ff5516922236bef08fe44')).toEqual([mockBook]);
    expect(service.findByAuthor).toHaveBeenCalledWith('666ff5516922236bef08fe44');
  });

  it('should return books by date range', async () => {
    expect(await controller.findByDateRange('1925-01-01', '1925-12-31')).toEqual([mockBook]);
    expect(service.findByDateRange).toHaveBeenCalledWith(new Date('1925-01-01'), new Date('1925-12-31'));
  });
});