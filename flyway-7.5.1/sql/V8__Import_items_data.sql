COPY "Item" ("name", "description", "imageUrl", "size", "color", "price", "starRating", "categoryId", "availableQty")
FROM
    '/home/ukasz09/dev/GitHub/ProBaz/Probaz-shop-backend-but-SQL/data/csv/items.csv' DELIMITER ',' CSV HEADER;

