import React, {FC} from 'react';

import {Post} from '../utils/firebase';
import {Avatar, Divider, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";

// function randomColor() {
//   return "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);
// }

const PostComponent: FC<Post> = ({ author, content, date}) => {
    return (
        <>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>{author.charAt(0)}</Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={content}
                    secondary={author + ',' + date.toDate().toLocaleString('de-DE')}>
                </ListItemText>
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    );
};

export default PostComponent;
