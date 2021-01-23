CREATE TABLE IF NOT EXISTS "OrderHistory" (
    "orderedQty" int NOT NULL,
    "orderDate" timestamp with time zone NOT NULL,
    "userId" int NOT NULL,
    "archiveId" int NOT NULL,
    PRIMARY KEY ("userId", "orderDate", "archiveId"),
    CONSTRAINT fk_user FOREIGN KEY ("userId") REFERENCES "Users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_archiveItem FOREIGN KEY ("archiveId") REFERENCES "ArchiveItem" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

