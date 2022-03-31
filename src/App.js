import React, { useState, useEffect } from "react";
import Message from "./Message";
import "./message.css";
import NewForm from "./NewForm";
import Chat from "./Chat";

function App() {
  const [messages, setMessage] = useState([]);

  const createMessage = (newMessage) => {
    setMessage([...messages, newMessage]);
  };

  useEffect(() => {
    if (messages.length > 0) {
      let lastMsg = messages[messages.length - 1];
      let robotMsg = {
        author: "robot",
        textMessage:
          "Спасибо за сообщение",
      };
      if (lastMsg.author !== "robot") {
        setTimeout(() => {
          setMessage([...messages, robotMsg]);
        }, 1500);
      }
    }
  }, [messages]);

  return (
    <div className="App">
      <header>
        <Chat />
        <div className="App-header">
          {messages.map((message, id) => (
            <Message key={id} message={message} />
          ))}
        </div>
      </header>
      <NewForm create={createMessage} />
    </div>
  );
}

export default App;