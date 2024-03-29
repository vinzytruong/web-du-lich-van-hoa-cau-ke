import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { data } from '@/data/tourist-attraction.data';

export default function AlignItemsList() {
    return (
        <>
            <List sx={{ width: '100%', bgcolor: '#fff' }}>
                {data?.map(item => (
                    <>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src={item.photo} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={item.name}
                                secondary={
                                    <React.Fragment>
                                        {item.address}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider />
                    </>

                ))}
            </List>



        </>

    );
}