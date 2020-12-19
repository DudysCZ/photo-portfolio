import React, {FC, useEffect, useState} from 'react';

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {
    Button,
    Card, CardActions,
    CardContent, Fab,
    List,
    TextField
} from "@material-ui/core";
import {Post, postsCollection, timestampNow} from "../utils/firebase";
import firebase from "firebase";
import PostComponent from "../components/Post";
import {Add} from "@material-ui/icons";
import ScrollToHandler from "../components/ScrollToHandler";

const Kniha: FC = () => {
    const [error, setError] = useState<string>();

    const [posts, setPosts] = useState<Post[]>([]);

    const [name, setName] = useState('');
    const [newPost, setNewPost] = useState('');

    useEffect(() => {
        const unsubscribe = postsCollection.onSnapshot(
            snapshot => {
                setPosts(snapshot.docs.map(doc => doc.data()));
            },
            err => setError(err.message),
        );
        return () => unsubscribe();
    }, []);

    const handleSubmit = async () => {
        try {
            // await postsCollection.add({ - NEFUNGUJE!
            await firebase.firestore().collection('posts').add({
                author: name,
                content: newPost,
                date: timestampNow()
            });
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <Grid container wrap="wrap" spacing={3}>
            <Grid item xs={12}>
                <Typography variant="h2" gutterBottom>
                    Návštěvní kniha
                </Typography>
            </Grid>
            <Grid item xs={12}>
                {error && (
                    <Typography variant="subtitle2" align="center" color="error" paragraph>
                        <b>{error}</b>
                    </Typography>
                )}
                <Card>
                    <CardContent>
                        <List>
                            {posts.map((post, i) => (
                                <PostComponent {...post} key={i} />
                            ))}
                        </List>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Card id="addNewPostContainer">
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Pridat příspěvek
                        </Typography>
                        <TextField
                            label="Jméno"
                            name="jméno"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <TextField
                            label="Příspěvek"
                            name="příspěvek"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            value={newPost}
                            onChange={e => setNewPost(e.target.value)}
                        />
                    </CardContent>
                    <CardActions>
                        <Button size="large" color="primary" onClick={handleSubmit}>Odoslat</Button>
                    </CardActions>
                </Card>
                <ScrollToHandler selector={"#addNewPostContainer"} position={"right"}>
                    <Fab size="large" color={"primary"}>
                        <Add/>
                    </Fab>
                </ScrollToHandler>
            </Grid>
        </Grid>
    )
};

export default Kniha;
