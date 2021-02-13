const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');

const app = express();

// serve up static files
// app.use(express.static(`${__dirname}/../client/dist`));

// middleware
// app.use(cors());
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(express.static(`${__dirname}/../client/dist`));
// app.use('/bundle', express.static(`${__dirname}/../client/dist/bundle.js`));
// app.use('/products/:id', express.static(`${__dirname}/../client/dist`));

// app.get('/', (req, res) => {
//   res.redirect('/products/1');
// });

const port = 3000;

app.get('/api', (req, res) => {
  //use the AGDB api
});


app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port} !`);
});