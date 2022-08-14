const cocktailService = require("../services/cocktailService.js");

function validateCocktailBody(body) {
    if (
        !body.name ||
        !body.recipe ||
        !body.prep ||
        !body.price ||
        !body.Stock
    ) {
        return false;
    }
    return true;
};



const getAllcocktails = (req, res) => {
    const cocktails = cocktailService.allCocktails();

    res.status(200).json({
        status: "success",
        data: cocktails
    })
};



const getOneCocktails = (req, res) => {
    const oneCocktail = cocktailService.oneCocktail(req.params.id);
    if (oneCocktail === undefined) {
        return res.status(404).json({
            status: "Failed",
            message: "cocktail not found"
        });
    }

    res.status(200).json({
        status: "Success",
        data: oneCocktail
    });
};

const createOneCocktails = (req, res) => {
    if (!validateCocktailBody(req.body)) {
        return res
            .status(418)
            .json({
                status: "FAILED",
                massage: "Missig workout information"
            });
    }
    const newCocktail = cocktailService.createCocktail(req.body);

    res.status(200).send("create One cocktail").json({
        status: "SUCCESS",
        data: newCocktail
    });
};

const deleteOneCocktails = (req, res) => {
    const deleteOneCocktail = cocktailService.deleteOneCocktails(req.params.id);
    if (deleteOneCocktail === false) {
        return res.status(404).json({
            status: "Failed",
            message: "cocktail not found"
        });
    }
    res.status(200).json({
        status: "delet",
        data: deleteOneCocktail
    });
};





const updataOneCocktails = (req, res) => {
    if (!validateCocktailBody(req.body)) {
        return res
            .status(418)
            .json({
                status: "FAILED",
                message: "Missing cocktail information"
            });
    }
    const UpData = cocktailService.updataOneCocktails(req.params.id, req.body);

    if (!UpData)
        return res
            .status(400)
            .json({
                status: "FAILED",
                message: "Didn't update the cocktail"
            });
    res.status(200).json({
        status: "SUCCESS",
        data: UpData
    })
};

// buy an item
// 1. Grab the item via params
// 2. To know through the body how much in quantity he wants of the item and how much money he has
// 3. check if he has enough money to buy, and if not return an error message
// 4. If he has enough money check how much of the item he wants and update the quantity
// 5. Return a message that the purchase was successful, and how much surplus he has.

const buyOneCocktails = (req, res) => {
    const buy = cocktailService.buyOneCocktails(req.params.id, req.body.money, req.body.amount);
const msg = cocktailService.buyOneCocktails;
    if (buy === false) return res.status(400).json({
        status: "FAILED",
        message: "Dear customer, you didn't say which item or how many you want, check again"
    });

    if (buy === true) {
        
    return res.status(400).send("Come on, this product is finished, why wait for you, stupid!")
        
    } else if (buy === undefined) return res.status(400).send(`Tell us where you think you are, we 
    only have !!!!! in stock`);
    
    res.status(200).json({
        message: "You did a piece of shopping, thank you and come every day!",
        change: buy
    });
};


module.exports = {
    getAllcocktails,
    getOneCocktails,
    createOneCocktails,
    deleteOneCocktails,
    updataOneCocktails,
    buyOneCocktails
};