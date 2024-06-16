import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateAuthorDto {
  @ApiProperty({example: 'John Doe'})
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty({example: 'A famous author', required: false})
  @IsOptional()
  @IsString()
  readonly biography?: string;

  @ApiProperty({example: '1990-01-01'})
  @IsNotEmpty()
  @IsDate()
  readonly birthDate: Date;
}

export class UpdateAuthorDto {
  @ApiProperty({example: 'John Doe', required: false})
  @IsOptional()
  @IsString()
  readonly name?: string;

  @ApiProperty({example: 'A famous author', required: false})
  @IsOptional()
  @IsString() 
  readonly biography?: string;

  @ApiProperty({example: '1990-01-01', required: false})
  @IsOptional()
  @IsDate()
  readonly birthDate?: Date;
}