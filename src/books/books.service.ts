import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schemas/book.schema';
import mongoose, { Model } from 'mongoose';
import { CreateBookDto, FindBookDto, UpdateBookDto } from './dto/book.dto';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const createdBook = new this.bookModel(createBookDto);
    return createdBook.save();
  }

  async findAll(query: FindBookDto): Promise<Book[]> {
    const { page = 1, limit = 10, sortBy = 'publishedDate', sortOrder = 'desc' } = query;
    return this.bookModel.find().sort({ [sortBy]: sortOrder }).skip((page - 1) * limit).limit(limit).exec();
  }

  async findOne(id: string): Promise<Book> {
    const isValidObjectId = mongoose.isValidObjectId(id);
    if (!isValidObjectId) {
      throw new BadRequestException('Invalid author id');
    }

    const book = await this.bookModel.findById(id).exec();
    if(!book) {
      throw new NotFoundException('Book not found');
    }

    return book;
  }

  async findByAuthor(authorId: string): Promise<Book[]> {
    return this.bookModel.find({ authorId }).exec();
  }

  async findByDateRange(startDate: Date, endDate: Date): Promise<Book[]> {
    return this.bookModel
      .find({ publishedDate: { $gte: startDate, $lte: endDate } })
      .exec();
  }

  async update(id: string, updateBookDto: UpdateBookDto): Promise<Book> {
    return this.bookModel.findByIdAndUpdate(id, updateBookDto, {
      new: true,
    }).exec();
  }

  async delete(id: string): Promise<Book> {
    return this.bookModel.findByIdAndDelete(id).exec();
  }
}
