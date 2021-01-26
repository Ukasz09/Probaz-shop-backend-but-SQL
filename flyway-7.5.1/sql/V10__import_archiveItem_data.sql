INSERT INTO "ArchiveItem" ("name", "description", "imageUrl", "size", "color", "price", "categoryId", "itemId")
SELECT
    "name",
    "description",
    "imageUrl",
    "size",
    "color",
    "price",
    "categoryId",
    "id"
FROM
    "Item";

