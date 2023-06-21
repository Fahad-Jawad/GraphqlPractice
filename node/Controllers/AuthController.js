const jwt = require("jsonwebtoken");
require("dotenv").config();
exports.login = (req, res) => {
  console.log("req", req.body);
  data = req.body;
  let accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_KEY);
  res.status(200).json({ accessToken: accessToken });

  res.status(200).send("got");
};
exports.verify = (req, res) => {};
