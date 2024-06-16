import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateBookDto {
  @ApiProperty({example: 'Book Name'})
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty({example: 'A great book', required: false})
  @IsString()
  @IsOptional()
  readonly description?: string;

  @ApiProperty({example: '60c72b2f9b1d4b1f8c9f1b8b'})
  @IsString()
  @IsNotEmpty()
  readonly authorId: string;

  @ApiProperty({example: '1990-01-01'})
  @IsNotEmpty()
  @IsDate()
  readonly publishedDate: Date;
}

export class UpdateBookDto {
  @ApiProperty({example: 'Book Name', required: false})
  @IsOptional()
  @IsString()
  readonly name?: string;

  @ApiProperty({example: 'A great book', required: false})
  @IsOptional()
  @IsString()
  readonly description?: string;

  @ApiProperty({example: '60c72b2f9b1d4b1f8c9f1b8b', required: false})
  @IsOptional()
  @IsString()
  readonly authorId?: string;

  @ApiProperty({example: '1990-01-01', required: false})
  @IsOptional()
  @IsDate()
  readonly publishedDate?: Date;
}

export class FindBookDto {
  @ApiProperty({example: 1, required: false})
  @IsOptional()
  @IsNumber()
  readonly page?: number;

  @ApiProperty({example: 10, required: false})
  @IsOptional()
  @IsNumber()
  readonly limit?: number;

  @ApiProperty({example: 'publishedDate', required: false})
  @IsOptional()
  @IsString()
  readonly sortBy?: string;

  @ApiProperty({example: 'desc', required: false})
  @IsOptional()
  @IsEnum(['asc', 'desc'])
  readonly sortOrder?: 'asc' | 'desc';
}