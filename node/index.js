const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 4422;
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(require("./routes"));

const server = require("http").createServer(app);

server.listen(port, () => {
  console.log(`Server is up and  running on port ${port}`);
});
