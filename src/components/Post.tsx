import React, {FC} from 'react';

import {Post, postsCollection} from '../utils/firebase';
import {Avatar, Divider, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";

import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

import { useLoggedInUser } from "../utils/firebase";

const PostComponent: FC<Post> = ({ author, content, date, id}) => {

    const user = useLoggedInUser();
    
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
                { user && <IconButton 
                    color="primary" 
                    size="small" 
                    aria-label="delete"
                    title="Smazat příspěvek"
                    onClick={() => postsCollection.doc(id).delete()}   
                ><DeleteIcon /></IconButton> }
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    );
};

export default PostComponent;
