const axios = require('axios');

// Make a request for a user with a given ID
axios.get('http://127.0.0.1:1313/post/20190701182805/')
  .then(function (response) {
    // handle success
    console.log(response.data);
    // console.log(re);
  })
  .catch(function (error) {
    // handle error
    // console.log(error);
    console.log("错误");
  })
  .finally(function () {
    // always executed
  });