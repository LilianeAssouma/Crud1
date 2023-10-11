import { NewsLetter } from '../../models/newsLetterModel.js';

export const deletedOne = async (req, res) =>{
    try{
    const { id } = req.params;
    const deletedIndex = await deletedIndex.findById(id);
    if (!deletedIndex) {
        return res.status(404).json({ message: 'Newsletter not found' });
    }
     await NewsLetter.remove();
   
     res.status(200).json({message:'News successfull deleted'});
    }
    catch (error){
        console.log(error.message);
        res.status(500).json(error.message);
      }
}
