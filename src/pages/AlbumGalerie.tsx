import React, { FC, useEffect, useState }  from 'react';
import { Photo, Album, photosCollection, albumsCollection } from '../utils/firebase';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ImageGallery from 'react-image-gallery';
import AlbumMenu from '../components/AlbumMenu'


import "react-image-gallery/styles/css/image-gallery.css";
import { useParams } from 'react-router-dom';

export type Img = {
    original: string;
    description: string;
    thumbnail: string;
};

interface AlbumRouteParams {
  id: string;
}

function getImagesToShow(album : Album | undefined, photos : Photo[]) : Img[] {
    let images : Img[] = [];
    photos.forEach(photo => {
        let img : Img = {
            original : process.env.PUBLIC_URL + album?.pathFolder + photo.filename + "." + photo.extension,
            description : photo.caption,
            thumbnail : process.env.PUBLIC_URL + album?.pathFolder + photo.thumbnail + "." + photo.extension,
        }
        images.push(img)
    });
    return images;
}

const AlbumGalerie: FC = () => {

  const params = useParams<AlbumRouteParams>();  

  const [error, setError] = useState<string>();
  const [album, setAlbum] = useState<Album>();
  const [photos, setPhotos] = useState<Photo[]>([]);


  useEffect(() => {
    albumsCollection.where("ref", "==", params.id).limit(1)
      .get()
      .then(response => setAlbum(response.docs[0].data()))
      .catch(err => setError(err.message));       

  }, [params]);

  useEffect(() => {
    photosCollection.where("album", "==", album?.id ?? '').orderBy("position")
      .get()
      .then(response => setPhotos(response.docs.map(d => d.data())))
      .catch(err => setError(err.message));       

    }, [album]);

  return (
    <Grid container spacing={3}>
      <AlbumMenu />
      <Grid item xs={12}>
        {error && (
          <Typography variant="subtitle2" align="center" color="error" paragraph>
              <b>{error}</b>
          </Typography>
          )}
        <ImageGallery items={getImagesToShow(album, photos)} />
      </Grid>
    </Grid>
  )
};

export default AlbumGalerie;