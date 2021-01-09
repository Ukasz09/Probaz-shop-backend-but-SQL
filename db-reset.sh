#!/bin/bash

node ./controller/drop-db.js
node ./controller/create-db.js
./db-migrate.sh
