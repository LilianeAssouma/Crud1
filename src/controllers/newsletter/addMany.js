import { NewsLetter } from "../../models/newsLetterModel.js";
export const addManyNews= async (req,res) =>{
  const data =  await NewsLetter.insertMany(req.body);
    
    res.status(201).json(data);
};
    