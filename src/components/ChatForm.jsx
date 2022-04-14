import React, { useState } from "react";
import "../styles/form.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Message from "../components/Message";

//Стили для формы
const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'teal',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#2e7d32',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#2e7d32',
        },
        '&:hover fieldset': {
            borderColor: '#2e7d32',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#2e7d32',
        },
    },
});

//Цвет для кнопки
const theme = createTheme({
    palette: {
        secondary: {
            main: '#2e7d32',
        },
    },
});



const ChatForm = ({ create }) => {
    const [note, setNote] = useState({
        author: "",
        textMessage: "",
    });
    const addNewMessage = (e) => {
        e.preventDefault();
        const newNote = {
            ...note,
            id: Date.now(),
        };

        setTimeout(() => {
            create(newNote);
            window.scrollTo(500, document.body.scrollHeight, { behavior: "smooth" });
        }, 1);
        setNote({ author: note.author, textMessage: "", });
    };





    return (
        //форма + кнопка с помощью библиотеки UI + автофокус
        <ThemeProvider theme={theme}>
            <div className="App-header">
                {messages.map((message, id) => (
                    <Message key={id} message={message} />
                ))}
            </div>
            <Box
                component="form"
                noValidate
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: 522,
                    margin: '0 auto',
                }}
            >
                <CssTextField
                    autoFocus
                    onChange={(e) => setNote({ ...note, author: e.target.value })}
                    value={note.author}
                    label="Имя"
                    id="custom-css-outlined-input"
                    maxRows={4} />

                <CssTextField
                    onChange={(e) => setNote({ ...note, textMessage: e.target.value })}
                    value={note.textMessage}
                    label="Сообщение"
                    id="custom-css-outlined-input"
                    multiline
                    rows={4} />
                <Button
                    variant="contained"
                    color="success"
                    onClick={addNewMessage}>Отправить</Button>
            </Box >
        </ThemeProvider>
    );
}
export default ChatForm
