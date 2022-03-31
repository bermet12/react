import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';


const menuItems = [
    {
        name: 'name 1',
        id: '1',
    },
    {
        name: 'name 2',
        id: '2',
    },
    {
        name: 'name 2',
        id: '3',
    },
]
function Chat() {
    return (
        <List>
            {menuItems.map(item => (
                <ListItem key={item.id}>
                    <Icon sx={{ color: green[600], marginRight: '10px' }}>add_circle</Icon>
                    <ListItemText primary={item.name} />
                </ListItem>
            ))}
        </List>
    )
}

export default Chat