import React, { useState, useEffect } from "react";
import Message from "../components/Message";
import '../styles/link.css';
import '../styles/message.css'
import NewForm from "../components/NewForm";
import ChatList from "../components/ChatList";


function Chat() {
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
        <div className="App-container">
            <div className="App">
                <div className="App-chat">
                    <ChatList />
                </div>
                <div>
                    <div className="App-header">
                        {messages.map((message, id) => (
                            <Message key={id} message={message} />
                        ))}
                    </div>
                    <NewForm create={createMessage} />
                </div>
            </div>
        </div>
    );
}

export default Chat;