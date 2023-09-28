import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { BooksRepository } from './book.repository';

@Module({
    controllers: [BooksController],
    providers: [BooksService, BooksRepository]
})
export class BooksModule {}
