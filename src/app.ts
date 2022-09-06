/**
 * Node-TS Boilerplate
 * @author Najam Ul Saqib
 */
require("dotenv").config();

import express, { Application } from "express";

const app: Application = express();
const port = process.env.PORT || 5000;

require("./database");

//* Middleware
require("./middleware/common")(app);

//* API Routes
app.use("/api", require("./routes"));

//* Server
app.listen(port, () => {
  console.log(`Server is running at port ${port} :)`);
});
