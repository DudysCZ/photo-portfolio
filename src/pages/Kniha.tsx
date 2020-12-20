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
import { useLoggedInUser } from "../utils/firebase";

const Kniha: FC = () => {
    const [error, setError] = useState<string>();

    const [posts, setPosts] = useState<Post[]>([]);

    const [name, setName] = useState('');
    const [newPost, setNewPost] = useState('');

    const user = useLoggedInUser();

    useEffect(() => {
        postsCollection.orderBy("date")
          .get()
          .then(response => setPosts(response.docs.map(d => d.data())))
          .catch(err => setError(err.message));       
  
        }, [posts]);

    const handleSubmit = async () => {
        try {
            if (name.length > 0 && newPost.length > 0){
                const id = postsCollection.doc().id;
                await postsCollection.doc(id).set({
                    author: name,
                    content: newPost,
                    date: timestampNow(),
                    id: id
                });
                setName('');
                setNewPost('');
            }
        } catch (err) {
            setError(err.message);
        }
    }

    const handleDelete = async () => {
        try {
            let dates: string[] = [];

            await firebase.firestore().collection('posts').get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    dates.push(doc.id)
                })
            });

            dates.forEach(id => {
                firebase.firestore().collection('posts').doc(id).delete()
            })
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
                    <CardActions>
                        {
                            user && <Button size="large" color="primary" onClick={handleDelete}>Odstranit záznamy</Button>
                        }
                    </CardActions>
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
                            Přidat příspěvek
                        </Typography>
                        <TextField
                            required
                            label="Jméno"
                            name="jméno"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <TextField
                            required
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
                        <Button size="large" color="primary" onClick={handleSubmit}>Odeslat</Button>
                        {/*{*/}
                        {/*    user !== null && <Button size="large" color="primary" onClick={handleDelete}>Odstranit záznamy</Button>*/}
                        {/*}*/}
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
