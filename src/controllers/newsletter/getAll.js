const newsDatabase= require ('../../utils/mockDatabase')

function getAll(req,res) {
    res.status(200).json(newsDatabase);
};
module.exports =getAll;