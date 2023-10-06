
const newsDatabase = require('../../utils/mockDatabase');

function getOneNewsLetter(req, res) {
    const requestedId = parseInt(req.params.id);
    const foundNews = newsDatabase.find((item) => item.id === requestedId);
  
    if (foundNews) {
      res.status(200).json(foundNews);
    } else {
      res.status(404).json({ error: 'News not found' });
    }
  }
  
  module.exports = getOneNewsLetter;
  

module.exports = getOneNewsLetter;
