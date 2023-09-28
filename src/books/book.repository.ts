import { Injectable } from "@nestjs/common";
import { readFile, writeFile } from "fs/promises";

@Injectable()
export class BooksRepository {
    async findOne({ isbn }){
        const contents = await readFile('books.json', 'utf-8');
        const books = JSON.parse(contents);
        const book = books.find((book: any) => book.isbn === isbn);

        return book;
    }

    async findAll(){
        const contents = await readFile('books.json', 'utf-8');
        const books = JSON.parse(contents);

        return books;
    }

    async create(book: any){
        const contents = await readFile('books.json', 'utf-8');
        const books = JSON.parse(contents);
        books.push(book);
        await writeFile('books.json', JSON.stringify(books));

        return book;
    }
}