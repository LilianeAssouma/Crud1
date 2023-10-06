const express = require("express");
const newsLetterRouter=express.Router();
const getAll = require('../controllers/newsletter/getAll.js')
const createNewsLetter= require('../controllers/newsletter/postNewsLetter.js');
const patchedNews= require('../controllers/newsletter/patchNewsLetter.js');
const updateNewsLetter= require('../controllers/newsletter/putNewsLetter.js');
const deletedNews= require('../controllers/newsletter/deleteNewsLetter.js');
const getOneNewsLetter =require ('../controllers/newsletter/getOneLetter.js')


newsLetterRouter.get('/all',getAll);
newsLetterRouter.post('/Create',createNewsLetter);
newsLetterRouter.get('/getoneNews/:id',getOneNewsLetter);

newsLetterRouter.put('/updated/:id',updateNewsLetter);
newsLetterRouter.patch('/modified/:id',patchedNews)
newsLetterRouter.delete('/deleted/:id', deletedNews);

module.exports=newsLetterRouter;