var axios = require("axios");

exports.handler = function(event, context, callback) {
  axios
    .post(
      "https://zenforce.zennerslab.com/api/target/departments/targetAutoBuilder"
    )
    .then(res => context.succeed(res.data))
    .catch(err => callback(err));
};
