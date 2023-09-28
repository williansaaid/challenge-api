import { Injectable } from '@nestjs/common';
import { BooksRepository } from './book.repository';

@Injectable()
export class BooksService {
    constructor(public booksRepo: BooksRepository){}

    async findOne({isbn}){
        return this.booksRepo.findOne({isbn})
    };
    async findAll(){
        return this.booksRepo.findAll()
    };

    async create(book: any){
        return this.booksRepo.create(book)
    };
}
