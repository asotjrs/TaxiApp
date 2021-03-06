const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

const port = 3000;

io.on("connection", (socket) => {
  console.log("a user is connected ");

  socket.on("chat message ", (msg) => {
    console.log(msg);
  });
});

server.listen(port, () => console.log("server is running on port ", port));
