import express from "express";
const newsLetterRouter= express.Router();

import {addNew} from "../controllers/newsletter/addNew.js";
import { getOneLetter} from "../controllers/newsletter/getOneLetter.js";
import { getAll} from "../controllers/newsletter/getAll.js";
import { updateNewsLetter } from "../controllers/newsletter/putNewsLetter.js";
import { patchedNews } from "../controllers/newsletter/updateNewsLetter.js";
import { deletedNews } from "../controllers/newsletter/deleteNewsLetter.js";
import { deletedAll } from "../controllers/newsletter/deleteMany.js";
import { addManyNews } from "../controllers/newsletter/addMany.js";
import { deletedOne } from "../controllers/newsletter/deleteOne.js";
import { updateManyNews } from "../controllers/newsletter/updateMany.js";


newsLetterRouter.get('/', getAll);
newsLetterRouter.get('/getoneLetter/:id', getOneLetter);

newsLetterRouter.post('/addNews', addNew);
newsLetterRouter.post('/insertMany',addManyNews);

newsLetterRouter.put('/:id',updateNewsLetter);
newsLetterRouter.patch ('/:id',patchedNews);
newsLetterRouter.patch('./',updateManyNews);
newsLetterRouter.delete('/:id',deletedNews);
newsLetterRouter.delete('/deleteAll/:title',deletedAll)
newsLetterRouter.delete('/delete',deletedOne);

export default newsLetterRouter;