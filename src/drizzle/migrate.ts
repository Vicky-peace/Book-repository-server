import {migrate} from 'drizzle-orm/neon-http/migrator';
import {db} from './db';

async function migration(){
    try{
        console.log('=========Migration started=========');
        await migrate(db,{
            migrationsFolder: __dirname + '/migrations',
        });
        console.log("=========Migration completed=========");
        process.exit(0);
    } catch(error){
        console.log("Migration failed", error);
        process.exit(1);
    }
}

migration().catch((e) => {
    console.error("Unexpected error", e);
    process.exit(1);
})