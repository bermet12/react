import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';
import '../styles/list.css'

function ChatList() {
    const [chats, setChats] = useState([{
        name: "author1",
        title: "Lorem ipsum, fugiat aliquid, nesciunt reprehenderit voluptatibus commodi iure debitis fuga nobis quas cumque asperior",
        id: "1"
    },
    {
        name: "author2",
        title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem dolorem .",
        id: "2"
    },
    {
        name: "author3",
        title: "Lorem ipsum, dolor sit amet consectetur ",
        id: "3"
    },])

    useEffect((chats) => {
        fetch({ chats })
    }, [])
    const deleteChat = (id) => {
        const removeItem = chats.filter((item) => item.id !== id)
        setChats(removeItem)
    }

    const addItem = (value) => {
        let copy = [...chats];
        copy = [...chats, { id: chats.length + 1, title: value }]
        setChats(copy)
    }
    const [value, setValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(value)
    }
    return (
        <div>
            <List className="myList">
                {chats.map((item) => (
                    <div key={item.id}>
                        <ListItem key={item.id} className={"myIcon"}>
                            <Icon sx={{ color: green[600], marginRight: '10px' }}>add_circle</Icon>
                            <Link to={`/ posts / ${item.id}`}>
                                <ListItemText primary={item.title} />
                            </Link>
                        </ListItem>
                        <button className={"chatButton"} onClick={() => deleteChat(item.id)}>
                            Удалить
                        </button>
                    </div>
                ))}
                <form action="" onSubmit={handleSubmit}>
                    <input placeholder="Новый пост" className={"chatInput"} type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                    <button className={"chatButton"} type="submit">Добавить</button>
                </form>
            </List>
        </div>
    )
}

export default ChatList
