const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.isLoggedin = (req, res, next) => {
  console.log("in middle", process.env.ACCESS_TOKEN_KEY);
  console.log("token", req.headers);

  let header = req.headers["authorization"];
  const token = header && header.split(" ")[1];
  if (token == "null") return res.status(401).send("un authorized");
  const result = jwt.verify(token, process.env.ACCESS_TOKEN_KEY);
  console.log("result", result);

  next();
};
