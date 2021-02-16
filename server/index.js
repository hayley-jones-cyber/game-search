const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const querystring = require('querystring');

const { CLIENT_ID, CLIENT_SECRET, token } = require('../igdb.config.js');

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


app.get('/api/games', (req, res) => {
  axios.post('https://api.igdb.com/v4/games', {
    method: 'post',
    data: 'fields *; limit 10;',
    headers: {
      'Client-ID': CLIENT_ID,
      Authorization: `Bearer ${token.access_token}`
    }
  })
    .then((response) => {
      console.log('data from API: ', response);
      res.send(response);
    })
    .catch((err) => {
      res.status(err.response.status);
      console.log(err);
    })


});


app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port} !`);
});
//=================================PSEUDO CODE================================
// for handling client auth and refresh tokens
// initial req from client
  // req to api
    // on success
      // send data to the client
    // on fail
      // check for err status 401
        // if yes
          // req new token using token refresh
            // on success
              // redo client req ???????
            // on fail
              // req brand new token
                // on success
                  // redo client req???????
                // on fail
                  // console.log err
                  // send err status to the client
        // if no
          //console.log err
          // send err status to the client

    // // handles app token req/refresh
    // .catch((err) => {
    //   console.log(err);
    //   // when the auth fails to the api
    //   if (err.response.status === 401) {
    //     let params = querystring.stringify({
    //         client_id: CLIENT_ID,
    //         client_secret: CLIENT_SECRET,
    //         grant_type: 'refresh_token',
    //         refresh_token: appToken.refresh_token,
    //       })
    //     // get a new token
    //     axios.post('https://id.twitch.tv/oauth2/token', params)
    //       .then((response) => {
    //         // send the new toke to the config
    //         handleToken(response);
    //         // redo the client req somehow
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //         params = querystring.stringify({
    //           client_id: CLIENT_ID,
    //           client_secret: CLIENT_SECRET,
    //           grant_type: 'client_credentials',
    //         })
    //       axios.post('https://id.twitch.tv/oauth2/token', params)
    //         .then((response) => {
    //           handleToken(response);
    //           console.log('it may have worked: ', response)
    //           // redo the client req somehow
    //         })
    //         .catch((err) => {
    //           console.log(err)
    //           res.status(err.response.status);
    //         })
    //     })
    //   } else {
    //     res.status(err.response.status);
    //   }
    // })

    // LOOK INTO COOKIES