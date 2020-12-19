import React, { FC, useContext, useEffect, useState }  from 'react';
import { Photo, photosCollection } from '../utils/firebase';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ImageGallery from 'react-image-gallery';
import AlbumMenu from '../components/AlbumMenu'

import "react-image-gallery/styles/css/image-gallery.css";

export type Img = {
    original: string;
    description: string;
    thumbnail: string;
};

function getImagesToShow(photos : Photo[]) : Img[] {
    let images : Img[] = [];
    photos.forEach(photo => {
        let img : Img = {
            // original : photo.album.pathFolder + photo.filename + photo.extension,
            original : process.env.PUBLIC_URL + '/photos/portret/' + photo.filename + photo.extension,
            description : photo.caption,
            thumbnail : process.env.PUBLIC_URL + '/photos/portret/' + photo.thumbnail + photo.extension,
            // thumbnail : photo.album.pathFolder + photo.thumbnail + photo.extension
        }
        images.push(img)
    });
    return images;
}

const Album: FC = () => {
  
    const [error, setError] = useState<string>();
    const [photos, setPhotos] = useState<Photo[]>([]);

    useEffect(() => {
        photosCollection
          .get()
          .then(response => setPhotos(response.docs.map(d => d.data())))
          .catch(err => setError(err.message));       

      }, []);

    return (
      <Grid container wrap="wrap" spacing={3}>
        <AlbumMenu />
        <ImageGallery items={getImagesToShow(photos)} />
      </Grid>
    )          
};

export default Album;