const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const { CLIENT_ID, token } = require('../igdb.config.js');

const cors = require('cors');

const app = express();


// middleware
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: false,
}));

// serve up static files
app.use(express.static(`${__dirname}/../client/dist`));

// app.use('/bundle', express.static(`${__dirname}/../client/dist/bundle.js`));
// app.use('/products/:id', express.static(`${__dirname}/../client/dist`));

// redirect
// app.get('/', (req, res) => {
//   res.redirect('/products/1');
// });

const port = 3001;

// to get the initial game list
app.get('/api/games', (req, res) => {
  axios.post('https://api.igdb.com/v4/games', 'fields *; limit 100;', {
    method: 'post',
    headers: {
      'Client-ID': CLIENT_ID,
      Authorization: `Bearer ${token.access_token}`
    }
  })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        res.status(error.response.status);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    })
});

// To get a list of all platforms
app.get('/api/platforms', (req, res) => {
  // axios req to https://api.igdb.com/v4/platforms endpoint
  axios.post('https://api.igdb.com/v4/platforms', 'fields *; limit 100; where id = ()', {
    method: 'post',
    headers: {
      'Client-ID': CLIENT_ID,
      Authorization: `Bearer ${token.access_token}`
    }
  })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        res.status(error.response.status);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    })
})


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