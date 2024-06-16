import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Author } from './schemas/author.schema';
import mongoose, { Model } from 'mongoose';
import { CreateAuthorDto, UpdateAuthorDto } from './dto/author.dto';

@Injectable()
export class AuthorsService {
  constructor(@InjectModel(Author.name) private authorModel: Model<Author>) {}

  async create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    const createdAuthor = new this.authorModel(createAuthorDto);
    return createdAuthor.save();
  }

  async findAll(): Promise<Author[]> {
    return this.authorModel.find().exec();
  }

  async findOne(id: string): Promise<Author> {
    const isValidObjectId = mongoose.isValidObjectId(id);
    if (!isValidObjectId) {
      throw new BadRequestException('Invalid author id');
    }

    const author = await this.authorModel.findById(id).exec();

    if (!author) {
      throw new NotFoundException('Author not found');
    }

    return author;
  }

  async update(id: string, updateAuthorDto: UpdateAuthorDto): Promise<Author> {
    return this.authorModel.findByIdAndUpdate(id, updateAuthorDto, {
      new: true,
    }).exec();
  }

  async delete(id: string): Promise<Author> {
    return this.authorModel.findByIdAndDelete(id).exec();
  }
}
