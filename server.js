import express from "express";
import bodyParser from "body-parser";
import { logger } from "./src/middleware/logger.js";
import mongoose from "mongoose";

 import mainRouter from "./src/routes/index.js";

const app = express();


app.use(bodyParser.json());
app.use(logger);
// app.use("/newsLetter",newsLetterRouter);
 app.use("/api/v1",mainRouter);

 const port = 8800;

const DB_CONNECTION_PROD="mongodb+srv://mlilianeassouma:L6csdMfu6lRg5oUc@cluster0.lufxzn3.mongodb.net/";


const DB_CONNECTION_DEV = 'mongodb://localhost:21017/express_server';

// mongoose.connect(DB_CONNECTION_DEV).then((res) => { 
//   console.log("connected");
// });

mongoose.connect(DB_CONNECTION_PROD).then((res) => { 
  console.log("connected");
});

app.listen(port,  ()=>{
    console.log(`server is running on http://localhost:${port}`)
})