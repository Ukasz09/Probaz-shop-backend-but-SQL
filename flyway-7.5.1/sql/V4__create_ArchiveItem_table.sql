CREATE TABLE IF NOT EXISTS "ArchiveItem" (
    "id" serial NOT NULL,
    "name" varchar(255) NOT NULL,
    "description" text NOT NULL,
    "imageUrl" varchar(400) NOT NULL,
    "size" sizes NOT NULL,
    "color" varchar(255) NOT NULL,
    "price" float NOT NULL,
    "itemId" int,
    "categoryId" int,
    "createdAt" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY ("id"),
    CONSTRAINT fk_category FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT fk_item FOREIGN KEY ("itemId") REFERENCES "Item" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

