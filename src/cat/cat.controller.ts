import { Body, Controller, Get, Post } from '@nestjs/common';
import { Cat } from 'src/interfaces/cat.interface';
import { CatService } from './cat.service';

@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}
  @Get()
  getCats(): string {
    return 'meow';
  }

  @Post()
  async create(@Body() cat: Cat) {
    this.catService.create(cat);
  }

  @Get('all')
  helloCats(): Promise<Cat[]> {
    return this.catService.findAll();
  }
}
