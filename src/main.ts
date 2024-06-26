import {Hono} from 'hono';
import "dotenv/config";
import {serve} from '@hono/node-server';

//Routes
import { booksRouter } from './book/book.router';

const app = new Hono();

app.get('/', async (c) => {
    c.text('Welcome to Book API');
})

//instantiate
app.route('/', booksRouter);
serve({
    fetch: app.fetch,
    port: Number(process.env.PORT)
})
console.log(`Server running on port ${process.env.PORT}`)




