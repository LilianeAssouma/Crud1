
const newsDatabase = require('../../utils/mockDatabase');//database array is in a separate file

function deletedNews(req, res) {
    const requestedId = parseInt(req.params.id);
    const newsIndex = newsDatabase.findIndex((item) => item.id === requestedId);
    if (newsIndex !== -1) {
        // Remove the news object from the database array
        newsDatabase.splice(newsIndex, 1);
        res.json({ 
            message: 'News deleted successfully'
         });
    } else {
        res.status(404).json({ error: 'News not found' });
    }
}

module.exports=deletedNews;