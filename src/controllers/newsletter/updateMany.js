import { NewsLetter } from "../../models/newsLetterModel.js";
export const updateManyNews = async (req, res)=> {
 try { 
     const { id } = req.params;
    const updatedNews = await NewsLetter.updateMany(id, req.body,{new:true});
    if (updatedNews.nModified === 0) {
        return res.status(404).json({ message: 'News not found or no updates were made' });
    }

        res.status(200).json({ message: 'News updated successfully' });
    } 
    catch (error){
        console.log(error.message);
        res.status(500).json(error.message);
      }
};
