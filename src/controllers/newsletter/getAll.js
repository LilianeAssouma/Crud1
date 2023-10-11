import { NewsLetter } from "../../models/newsLetterModel.js";

export const getAll= async(req,res)=> {
    let data = await NewsLetter.find();
    res.status(200).json(data);
};
