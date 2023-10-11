import Express from "express";
import authRouter from "./authentication.js";
import newsLetterRouter from "./newsLetter.js";


const mainRouter = Express.Router();

// models
mainRouter.use("/auth",authRouter);
mainRouter.use("/newsLetter",newsLetterRouter);

export default mainRouter;