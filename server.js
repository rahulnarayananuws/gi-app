// const jsonServer = require('json-server')
// const server = jsonServer.create()
// const router = jsonServer.router('db.json')

// const middlewares = jsonServer.defaults({
//     static:'./dist/gi-app'
// })

// server.use(middlewares)
// server.use(router)

// const port = process.env.PORT || 3000

// server.listen(port, () => {
//     console.log(`JSON Server is running on port ${port}`)
// })
///
const jsonServer = require("json-server");
const path = require("path");
const express = require("express");
const app = express();
const router = jsonServer.router("db.json");
const PORT = process.env.PORT || 3000;

app.use("/", express.static("build"), router);

if (process.env.NODE_ENV === "production") {
  app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname + "./dist/gi-app/index.html"));
  });
}

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));