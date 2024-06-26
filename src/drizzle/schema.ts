import {pgTable, serial, varchar} from 'drizzle-orm/pg-core';

export const Book = pgTable('book',{
    id: serial('id').primaryKey(),
    title: varchar('title').notNull(),
    author: varchar('author').notNull(),
    year: varchar('year').notNull()
})


//types
export type TIBook = typeof Book.$inferInsert;
export type TSBook = typeof Book.$inferSelect;