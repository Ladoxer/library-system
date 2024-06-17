import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto, FindBookDto, UpdateBookDto } from './dto/book.dto';
import { Book } from './schemas/book.schema';
import { ApiBody, ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { _Book } from './entity/book.entity';

@ApiTags('Books')
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @ApiOperation({ summary: 'Create a new book' })
  @ApiBody({ type: CreateBookDto })
  @ApiResponse({ status: 201, description: 'The book has been successfully created.' ,type: _Book })
  @Post()
  async create(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return this.booksService.create(createBookDto);
  }

  @ApiOperation({ summary: 'Get all books' })
  @ApiQuery({ name: 'page', required: false, example: 1 })
  @ApiQuery({ name: 'limit', required: false, example: 10 })
  @ApiQuery({ name: 'sortBy', required: false, example: 'publishedDate' })
  @ApiQuery({ name: 'sortOrder', required: false, example: 'desc' })
  @ApiResponse({ status: 200, description: 'The books have been successfully retrieved.', type: [_Book] })
  @Get()
  async findAll(@Query() query: FindBookDto): Promise<Book[]> {
    return this.booksService.findAll(query);
  }

  @ApiOperation({ summary: 'Get a book by id' })
  @ApiParam({ name: 'id', required: true, description: 'Book id' })
  @ApiResponse({ status: 200, description: 'The book has been successfully retrieved.', type: _Book })
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Book> {
    return this.booksService.findOne(id);
  }

  @ApiOperation({ summary: 'Get books by author' })
  @ApiParam({ name: 'authorId', required: true, description: 'Author id' })
  @ApiResponse({ status: 200, description: 'Return books by the author.', type: [_Book] })
  @Get('author/:authorId')
  async findByAuthor(@Param('authorId') authorId: string): Promise<Book[]> {
    return this.booksService.findByAuthor(authorId);
  }

  @ApiOperation({ summary: 'Get books by date range' })
  @ApiParam({ name: 'start', required: true, description: 'Start date', example: '2020-01-01' })
  @ApiParam({ name: 'end', required: true, description: 'End date', example: '2020-12-31' })
  @ApiResponse({ status: 200, description: 'Return books by date range.', type: [_Book] })
  @Get('/date-range')
  async findByDateRange(
    @Query('start') start: string,
    @Query('end') end: string,
  ): Promise<Book[]> {
    return this.booksService.findByDateRange(new Date(start), new Date(end));
  }

  @ApiOperation({ summary: 'Update a book' })
  @ApiParam({ name: 'id', required: true, description: 'Book id' })
  @ApiBody({ type: UpdateBookDto })
  @ApiResponse({ status: 200, description: 'The book has been successfully updated.', type: _Book })
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto): Promise<Book> {
    return this.booksService.update(id, updateBookDto);
  }

  @ApiOperation({ summary: 'Delete a book' })
  @ApiParam({ name: 'id', required: true, description: 'Book id' })
  @ApiResponse({ status: 200, description: 'The book has been successfully deleted.', type: _Book })
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Book> {
    return this.booksService.delete(id);
  }
}
