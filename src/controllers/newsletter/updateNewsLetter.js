// import { NewsLetter } from "../../models/newsLetterModel.js";
// export const patchedNews = async (req, res)=> {
//     const requestedId =  parseInt(req.params.id);
//     const editedNews=req.body;
//     // database.push(req.body);
//     // index of the news object in the database array
//     const newsIndex = NewsLetter.findIndex((item) => item.id === requestedId);
//     if (newsIndex !== -1) {
//         // Update the news object properties with the request body
//         NewsLetter[newsIndex] = {
//             ...NewsLetter[newsIndex],
//             ...req.body
//         };

//         res.status(200).json({ message: 'News updated successfully' });
//     } else {
//         res.status(404).json({ error: 'News not found' });
//     }
// };

import { NewsLetter } from "../../models/newsLetterModel.js";
export const patchedNews = async (req, res)=> {
 try { 
     const { id } = req.params;
    const updatedNews = await NewsLetter.findByIdAndUpdate(id, req.body,{new:true});
    if (!updatedNews) {
      
        res.status(500).json({ message: 'News not found' });
        };
        res.status(200).json({ message: 'News updated successfully' });
    } 
    catch (error){
        console.log(error.message);
        res.status(500).json(error.message);
      }
};

