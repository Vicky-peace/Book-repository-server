import { Hono } from "hono";
import { getAllBooks,getBook , createBook, updateBook,deleteBook} from "./book.controller";


export const booksRouter = new Hono();

booksRouter.get('/books', getAllBooks);
booksRouter.get('/books/:id', getBook);
booksRouter.post('/books', createBook);
booksRouter.put('/books/:id',  updateBook);
booksRouter.delete('/books/:id', deleteBook);