CREATE OR REPLACE VIEW "OrdersView" AS
SELECT
    U.id,
    U.name,
    U.surname,
    U.email,
    "orderDate" AS "date",
    "orderedQty" AS "ordered quantity",
    AI.id AS "productId",
    AI.name AS "productName",
    AI.price,
    AI.color,
    AI.size
FROM
    "OrderHistory"
    INNER JOIN "Users" AS U ON U.id = "userId"
    INNER JOIN "ArchiveItem" AS AI ON AI.id = "archiveId"
