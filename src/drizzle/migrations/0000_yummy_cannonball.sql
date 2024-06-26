CREATE TABLE IF NOT EXISTS "book" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar NOT NULL,
	"author" varchar NOT NULL,
	"year" varchar NOT NULL
);
