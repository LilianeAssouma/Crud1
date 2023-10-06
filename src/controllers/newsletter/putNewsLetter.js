
const newsDatabase = require('../../utils/mockDatabase');//database array is in a separate file

function updateNewsLetter(req, res) {
  const requestedId = parseInt(req.params.id);
  const updatedNews = req.body;
  newsDatabase.push(req.body);
  const newsIndex = newsDatabase.findIndex((item) => item.id === requestedId);

  if (newsIndex !== -1) {
    newsDatabase[newsIndex] = {
      ...newsDatabase[newsIndex],
      ...updatedNews
    };
    res.status(200).json({ message: 'News updated successfully' });
  } else {
    res.status(404).json({ error: 'News not found' });
  }
}

module.exports = updateNewsLetter;
