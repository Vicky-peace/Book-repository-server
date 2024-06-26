import { Hono } from "hono";
import { getAllBooks,getBook } from "./book.controller";


export const booksRouter = new Hono();

booksRouter.get('/books', getAllBooks);
booksRouter.get('/books/:id', getBook);