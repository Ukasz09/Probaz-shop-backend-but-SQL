CREATE TYPE sizes AS ENUM (
    'XS',
    'S',
    'M',
    'L',
    'XL'
);

CREATE TABLE IF NOT EXISTS "Item" (
    "id" serial NOT NULL,
    "name" varchar(255) NOT NULL,
    "description" text NOT NULL,
    "imageUrl" varchar(400) NOT NULL,
    "size" sizes NOT NULL,
    "color" varchar(255) NOT NULL,
    "price" float NOT NULL,
    "starRating" float NOT NULL,
    "availableQty" float NOT NULL,
    "categoryId" int NOT NULL,
    PRIMARY KEY ("id"),
    CONSTRAINT fk_category FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

