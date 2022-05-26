const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const server = require("http").createServer();
const io = require("socket.io")(server, {
  cors: {
    origin: '*',
  }
});

// socket logic here
// note an instance is created for every device connected
io.on("connection", (socket) => {
  console.log(socket.id + "is connected");
  socket.emit("connected", "you are connected, your id is " + socket.id);
  socket.on("confirmed", (record) => {
    io.emit("confirmation", record);
  });
  socket.on("rejected", (record) => {
    io.emit("rejection", record);
  });
  socket.on("identify", (record) => {
    io.emit("confirm", record);
  });
  socket.on("disconnect", (reason) => {
    console.log("disconnected", reason);
  });
  socket.on("hie", (name) => io.emit("hello", name));
});

// io.on("connection", (socket) => {
//   socket.on("hello", (from) => console.log(`hello from ${from}`));
//   socket.on("alert", (msg) => io.emit("alerted", msg));
//   socket.on("greet", (from) => io.emit("greeting", from));
// });

// we run the server
const port = require("./config").PORT;
server.listen(port, () => {
  console.log(`data server api, socket and oewa running on port: ${port}`);
});
