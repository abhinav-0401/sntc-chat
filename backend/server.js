const http = require("http").createServer();

const io = require("socket.io")(http, {
  cors: {origin: "*"}
});

io.on("connection", socket => {
  console.log("a user connected");

  socket.on("message", message => {
    console.log(message);
    io.emit("message", "hi this is your chatbot speaking");
  });
});

http.listen(8080, () => console.log("the server is now running at port 8080"));