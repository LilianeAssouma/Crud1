
const newsDatabase = require('../../utils/mockDatabase');//database array is in a separate file

function patchedNews(req, res) {
    const requestedId = parseInt(req.params.id);
    const editedNews=req.body;
    // newsDatabase.push(req.body);
    // index of the news object in the database array
    const newsIndex = newsDatabase.findIndex((item) => item.id === requestedId);
    if (newsIndex !== -1) {
        // Update the news object properties with the request body
        newsDatabase[newsIndex] = {
            ...newsDatabase[newsIndex],
            ...req.body
        };

        res.status(200).json({ message: 'News updated successfully' });
    } else {
        res.status(404).json({ error: 'News not found' });
    }
};
module.exports=patchedNews;