import { NewsLetter } from '../../models/newsLetterModel.js';

export const updateNewsLetter = async (req, res) =>{
  try{

   const { id } = req.params;

  // const updatedNews = req.body;
  // database.push(req.body);
  const newsIndex = await NewsLetter.findByIdAndUpdate(id, req.body,{new:true,upsert:true});//if id does not exit automatically create one

  if (!newsIndex) {
    res.status(404).json({ error: 'News not found' });
  };
  // else {
  //       res.status(200).json(newsIndex);
  // }
  const updated = await NewsLetter.findById(id);
  res.status(200).json(updated);
}
catch (error){
  console.log(error.message);
  res.status(500).json(error.message);
}
};