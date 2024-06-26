import {db} from '../drizzle/db';
import {eq} from 'drizzle-orm';
import {Book,TIBook, TSBook} from '../drizzle/schema';

// Get all books
export const getAllBooksService = async (limit?: number): Promise<TSBook[]> => {
    return limit ? await db.query.Book.findMany({ limit }) : await db.query.Book.findMany();
}

// Get a single book
export const getBookService = async (id: number): Promise<TSBook | undefined> => {
    return await db.query.Book.findFirst({
        where: eq(Book.id, id)
    });
}

// Create a new book
export const createBookService = async (data: TIBook): Promise<string> => {
    await db.insert(Book).values(data);
    return "Book created successfully";
}

// Update a book
export const updateBookService = async (id: number, data: TIBook): Promise<string> => {
    await db.update(Book).set(data).where(eq(Book.id, id));
    return "Book updated successfully";
}

// Delete a book
export const deleteBookService = async (id: number): Promise<string> => {
    await db.delete(Book).where(eq(Book.id, id));
    return "Book deleted successfully";
}