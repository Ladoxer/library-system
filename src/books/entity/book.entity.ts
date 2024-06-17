import { ApiProperty } from '@nestjs/swagger';

export class _Book {
  @ApiProperty({ example: '60c72b2f9b1d4b1f8c9f1b8c', description: 'The unique identifier of the book' })
  _id: string;

  @ApiProperty({ example: 'The Great Gatsby', description: 'The title of the book' })
  title: string;

  @ApiProperty({ example: 'A novel by F. Scott Fitzgerald', description: 'The description of the book', required: false })
  description?: string;

  @ApiProperty({ example: '60c72b2f9b1d4b1f8c9f1b8b', description: 'The unique identifier of the author' })
  authorId: string;

  @ApiProperty({ example: '1925-04-10', description: 'The published date of the book' })
  publishedDate: Date;
}