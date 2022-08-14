const cocktailController = require("../controllers/cocktailsController");
const express = require("express");
const router = express.Router();

router
    .route("/")
    .get(cocktailController.getAllcocktails)
    .post(cocktailController.createOneCocktails);

router
    .route("/:id")
    .get(cocktailController.getOneCocktails)
    .put(cocktailController.updataOneCocktails)
    .delete(cocktailController.deleteOneCocktails)
    .post(cocktailController.buyOneCocktails);




module.exports = router;