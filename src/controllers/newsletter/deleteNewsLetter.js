
// const database = require('../../utils/mockDatabase');//database array is in a separate file

// function deletedNews(req, res) {
//     const requestedId = parseInt(req.params.id);
//     const newsIndex = database.findIndex((item) => item.id === requestedId);
//     if (newsIndex !== -1) {
//         // Remove the news object from the database array
//         database.splice(newsIndex, 1);
//         res.json({ 
//             message: 'News deleted successfully'
//          });
//     } else {
//         res.status(404).json({ error: 'News not found' });
//     }
// }

// module.exports=deletedNews;
import { NewsLetter } from '../../models/newsLetterModel.js';

export const deletedNews = async (req, res) =>{
    try{
    const { id } = req.params;
    const deletedIndex = await NewsLetter.findByIdAndDelete(id);
    if (!deletedIndex) {
        // NewsLetter.splice(newsIndex, 1);
                res.json({ 
                    message: 'News not found '
                 } );
                }
                res.status(200).json({message:'News successfull deleted'});
    }
    catch (error){
        console.log(error.message);
        res.status(500).json(error.message);
      }
}