import React, { useState } from "react";
import "./styles/form.css";


const Form = ({ create }) => {
    const [message, setMessage] = useState({
        author: "",
        textMessage: "",
    });

    const addNewMessage = (e) => {
        e.preventDefault();
        const newMessage = {
            ...message,
            id: Date.now()
        };

        setTimeout(() => {
            create(newMessage);
            window.scrollTo(500, document.body.scrollHeight, { behavior: "smooth" });
        }, 1);
        setMessage({ author: message.author, textMessage: "" });
    };
    return (
        <div className="wrap">
            <form className="form">
                <input
                    className="myInput"
                    onChange={(e) => setMessage({ ...message, author: e.target.value })}
                    type="text"
                    placeholder="Ваше Имя"
                    value={message.author}
                />
                <textarea
                    className="myInput"
                    onChange={(e) =>
                        setMessage({ ...message, textMessage: e.target.value })
                    }
                    placeholder="Текст сообщения"
                    value={message.textMessage}
                />
                <div >
                    <button className="myBtn" onClick={addNewMessage}>Отправить</button>
                </div>
            </form>
        </div>
    );
};

export default Form;