const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
// ************************
const cocktailRoute = require("./routes/cocktailsRoutes");
// ***************************

app.use("/cocktails", cocktailRoute);




// ******************************
const PORT = process.env.PORT || 3070;
app.listen(PORT , ()=> console.log(`server is up in port ${PORT}`));