import { Hono } from "hono";
import { getAllBooks } from "./book.controller";


export const booksRouter = new Hono();

booksRouter.get('/books', getAllBooks);