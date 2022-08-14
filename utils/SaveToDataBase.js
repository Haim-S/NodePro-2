const fs = require("fs");
const DB = require("../data/DB");

const DATABASE_PATH = "C:/Users/USER/Desktop/FullStack/lessonse int/Node/HW/‏‏cocktels - 2/data/dataJSON.json";

const DB_KEY = Object.keys(DB);

module.exports = (dataName, newCocktail) => {
    
if (!DB_KEY.includes(dataName)) {
    throw new Error(`Database don't have ${dataName}`);
}

DB[dataName] = newCocktail
const JSON_DB = JSON.stringify(DB);
fs.writeFileSync(DATABASE_PATH, JSON_DB);
};
