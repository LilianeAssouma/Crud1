const newsDatabase= require('../../utils/mockDatabase');

function createNewsLetter(req,res)
{
        const newNewsItem = req.body;
        newsDatabase.push(req.body);
        res.status(201).json({            
            newUpdate: newNewsItem
        });
    };
     

 module.exports=createNewsLetter;