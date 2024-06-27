import { Hono } from 'hono'
import { cors } from 'hono/cors'
import "dotenv/config";
import {serve} from '@hono/node-server';

//Routes
import { booksRouter } from './book/book.router';

const app = new Hono();

// CORS for all routes
app.use('*', cors())

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




