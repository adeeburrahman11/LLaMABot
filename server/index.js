const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

const chatRoutes = require("./routes/chat");
app.use("/api/chat", chatRoutes);

app.use(cors());
app.use(express.json());

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("chat message", (msg) => {
    // Emit the received message back to the client (for testing)
    io.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
