/* eslint-disable prettier/prettier */

import { IsString } from "class-validator";

export class CreateBookDTO{

    @IsString()
    name: string;
    @IsString()
    isbn: string;
    @IsString()
    author: string;

}