import 'dotenv/config';
import {drizzle,NeonHttpDatabase} from 'drizzle-orm/neon-http';
import {neon} from '@neondatabase/serverless';
import * as schema from './schema';

const databaseUrl = process.env.DATABASE_URL as string;
if(!databaseUrl){
    throw new Error('DATABASE_URL not provided');
}

const sql = neon(databaseUrl);          
export const db: NeonHttpDatabase<typeof schema> = drizzle(sql,{schema, logger: true});
