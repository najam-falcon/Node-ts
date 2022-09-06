/**
 * Database connection
 * @author Najam Ul Saqib
 */

import mongoose from "mongoose";
const db_url: string | any = process.env.MONGODB_URI;

// Setting
mongoose.set("debug", true);

// Connection
mongoose
  .connect(db_url, {
    // Some common settings (You don't need to understand these)

    // @ts-ignore
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ignoreUndefined: true,
  })
  .then(() => console.log("We are connected with database :)")) //Success
  .catch((err) => {
    console.log("DB Connection Error :( -------> ", err); //Failed
  });
