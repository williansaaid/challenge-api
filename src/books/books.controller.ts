import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateBookDTO } from 'src/validate/create-book.dto';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
    constructor(public booksService: BooksService){}

    @Get()
    findA(){
        return this.booksService.findAll()
    }

    @Get('/:isbn')
    findOne(@Param() {isbn}){
        return this.booksService.findOne({isbn});
    }

    @Post()
    create(@Body() body: CreateBookDTO){
        return this.booksService.create(body);
    }
}
