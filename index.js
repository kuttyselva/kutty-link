const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const urls = require('./db/urls');
const app = express();
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(express.static('./public'));
app.get('/:name', async (req, res) => {
    console.log(req.params.name);
    const kutty = await urls.find(req.params.name);
    if (kutty) {
      res.redirect(kutty.url);
    } else { 
      res.redirect(`/404.html?name=${req.params.name}`);
    }
  });
app.post('/api/kutty', async (req, res) => {
    console.log(req.body);
    try {
      const url = await urls.create(req.body);
      res.json(url);
    } catch (error) {
      res.status(500);
      res.json(error);
    }
  });
const port = process.env.port || 5000;
app.listen(port, () => { console.log(`app runs on port ${port}`) });