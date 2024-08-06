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
  @IsString()
  readonly publishedDate: String;
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
  @IsString()
  readonly publishedDate?: String;
}

export class FindBookDto {
  @ApiProperty({ example: 1, required: false })
  @IsNotEmpty()
  @IsOptional()
  readonly page?: number;

  @ApiProperty({ example: 10, required: false })
  @IsNotEmpty()
  @IsOptional()
  readonly limit?: number;

  @ApiProperty({ example: 'publishedDate', required: false })
  @IsNotEmpty()
  @IsOptional()
  @IsString()
  readonly sortBy?: string;

  @ApiProperty({ example: 'desc', required: false })
  @IsNotEmpty()
  @IsOptional()
  @IsEnum(['asc', 'desc'], { message: 'sortOrder must be one of the following values: asc, desc' })
  readonly sortOrder?: 'asc' | 'desc';
}