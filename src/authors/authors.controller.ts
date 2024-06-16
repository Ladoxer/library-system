import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { CreateAuthorDto, UpdateAuthorDto } from './dto/author.dto';
import { Author } from './schemas/author.schema';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Authors')
@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @ApiOperation({ summary: 'Create a new author' })
  @ApiBody({ type: CreateAuthorDto })
  @ApiResponse({ status: 201, description: 'The author has been successfully created.' ,type: Author })
  @Post()
  async create(@Body() createAuthorDto: CreateAuthorDto): Promise<Author> {
    return this.authorsService.create(createAuthorDto);
  }

  @ApiOperation({ summary: 'Get all authors' })
  @ApiResponse({ status: 200, description: 'The authors have been successfully retrieved.', type: [Author] })
  @Get()
  async findAll(): Promise<Author[]> {
    return this.authorsService.findAll();
  }

  @ApiOperation({ summary: 'Get an author by id' })
  @ApiParam({ name: 'id', required: true, description: 'Author id' })
  @ApiResponse({ status: 200, description: 'The author has been successfully retrieved.', type: Author })
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Author> {
    return this.authorsService.findOne(id);
  }

  @ApiOperation({ summary: 'Update an author' })
  @ApiParam({ name: 'id', required: true, description: 'Author id' })
  @ApiBody({ type: UpdateAuthorDto })
  @ApiResponse({ status: 200, description: 'The author has been successfully updated.', type: Author })
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateAuthorDto: UpdateAuthorDto): Promise<Author> {
    return this.authorsService.update(id, updateAuthorDto);
  }

  @ApiOperation({ summary: 'Delete an author' })
  @ApiParam({ name: 'id', required: true, description: 'Author id' })
  @ApiResponse({ status: 200, description: 'The author has been successfully deleted.', type: Author })
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Author> {
    return this.authorsService.delete(id);
  }
}
