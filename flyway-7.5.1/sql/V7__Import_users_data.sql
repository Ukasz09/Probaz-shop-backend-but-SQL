COPY "Users" ("name", "surname", "email", "password", "type", "createdAt")
FROM
    '/home/ukasz09/dev/GitHub/ProBaz/Probaz-shop-backend-but-SQL/data/csv/users.csv' DELIMITER ',' CSV HEADER;

