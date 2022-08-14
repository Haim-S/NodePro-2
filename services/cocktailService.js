const uuid = require("uuid");
const moment = require("moment");
const DB = require("../data/DB");
const SaveToDataBase = require("../utils/SaveToDataBase");
const { cocktails } = DB;

const now = moment().format("MM/DD/YYYY, hh:mm:ss A");



const allCocktails = () => {
    return cocktails;
};



const oneCocktail = (id) => {
    const oneCocktail = cocktails.find((cocktail) => cocktail.id === id);
    return oneCocktail;
};



const createCocktail = (body) => {
    const now = moment().format("MM/DD/YYYY, hh:mm:ss A");
    const newCocktail = {
        id: uuid.v4(),
        ...body,
        createdAt: now,
        updateAt: now,
    };
    cocktails.push(newCocktail);
    SaveToDataBase("cocktails", cocktails);
    return newCocktail;
};




const deleteOneCocktails = (id) => {
    const deleteIndex = cocktails.findIndex((cocktail) => cocktail.id === id);
    if(deleteIndex < 0) return false;
    cocktails.splice(deleteIndex, 1);
     SaveToDataBase("cocktails", cocktails);
    return true +" "+ now;
}


const updataOneCocktails = (id, body) => {
const updataIndex = cocktails.findIndex((cocktail)=> cocktail.id === id);
if (updataIndex < 0) return false;
const updataOneCocktails = {
    ...cocktails[updataIndex],
    ...body,
    updata: now,
};
cocktails[updataIndex] = updataOneCocktails;
SaveToDataBase("cocktails", cocktails)
return updataOneCocktails;

};

const buyOneCocktails = (id, money, amount) => {
    const index = cocktails.findIndex((buy) => buy.id === id);
    if (index < 0) return false;
    let Stock = cocktails[index].Stock;
    console.log(Stock);
    if(Stock === 0){
        return true;
    } else if (Stock - amount < 0) return undefined;
    
    let price = cocktails[index].price;
    const totalPrice = amount * price;
    if (totalPrice > money) return undefined;
    const changeNow = Stock -= amount;
    const msg = money - totalPrice;
    console.log(msg);
   const changeStock = {
   ...cocktails[index],
   Stock : changeNow,
   };
   cocktails[index] = changeStock;
   SaveToDataBase("cocktails", cocktails);
   return msg;

};

module.exports = {
    allCocktails,
    oneCocktail,
    createCocktail,
    deleteOneCocktails,
    updataOneCocktails,
    buyOneCocktails
};