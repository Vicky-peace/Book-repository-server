import { Book } from "../drizzle/schema";
import { getAllBooksService, getBookService,createBookService,updateBookService, deleteBookService } from "./book.service";
import { Context } from "hono";

export const getAllBooks = async(c: Context) => {
    try{
        const limit = Number(c.req.query('limit'));
        const books = await getAllBooksService(limit);
        return c.json(books);
    } catch (error: any) {
        return c.json({error: error.message}, 500);
    }
}

