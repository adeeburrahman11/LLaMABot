import React, { useState, useEffect } from "react";
import socket from "../socket";
import axios from "axios";

const Chat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("chat message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => socket.off("chat message");
  }, []);

  const sendMessage = async () => {
    if (input.trim()) {
      const { data } = await axios.post(
        "http://localhost:5000/api/chat/message",
        {
          user: "User1",
          message: input,
        }
      );

      socket.emit("chat message", { message: input, response: data.response });
      setInput("");
    }
  };

  return (
    <div>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index}>
            <p>
              <strong>User:</strong> {msg.message}
            </p>
            <p>
              <strong>Bot:</strong> {msg.response}
            </p>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
