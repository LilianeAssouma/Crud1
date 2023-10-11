import { NewsLetter } from '../../models/newsLetterModel.js';

export const deletedAll = async (req, res) => {
    try {
        let deletedIndex = await NewsLetter.deleteMany({title:req.params.title}); 
        if (!deletedIndex) {
            return res.json({ message: 'News not found' });
        }
        return res.status(200).json(deletedIndex);
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ error: 'Internal server error' });
    }
};







   