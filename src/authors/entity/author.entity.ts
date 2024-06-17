import { ApiProperty } from '@nestjs/swagger';

export class _Author {
  @ApiProperty({ example: '60c72b2f9b1d4b1f8c9f1b8b', description: 'The unique identifier of the author' })
  _id: string;

  @ApiProperty({ example: 'John Doe', description: 'The name of the author' })
  name: string;

  @ApiProperty({ example: 'A famous author', description: 'The biography of the author', required: false })
  biography?: string;

  @ApiProperty({ example: '1990-01-01', description: 'The birthdate of the author' })
  birthDate: Date;
}