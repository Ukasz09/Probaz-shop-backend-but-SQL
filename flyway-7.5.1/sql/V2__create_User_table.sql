CREATE TABLE IF NOT EXISTS "User" (
    "id" serial NOT NULL,
    "name" varchar(255) NOT NULL,
    "surname" varchar(255) NOT NULL,
    "email" varchar(255) NOT NULL,
    "password" varchar(255) NOT NULL,
    "type" int NOT NULL,
    "createdAt" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY ("id")
);

