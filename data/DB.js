const fs = require("fs");
const path = require("path");

const JSON_DB = fs.readFileSync(path.join(__dirname, "dataJSON.json"));
const DB = JSON.parse(JSON_DB);

module.exports = DB;