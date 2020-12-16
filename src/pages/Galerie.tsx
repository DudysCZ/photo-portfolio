import React, { FC, useContext, useEffect, useState }  from 'react';
import { Photo, photosCollection } from '../utils/firebase';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ReactBnbGallery from 'react-bnb-gallery';
import 'react-bnb-gallery/dist/style.css';

import photo1 from '../photos/portret/po61.jpg';
import photo1m from '../photos/portret/po61m.jpg';
import photo2 from '../photos/portret/po62.jpg';
import photo2m from '../photos/portret/po62m.jpg';
import photo3 from '../photos/portret/po63.jpg';
import photo3m from '../photos/portret/po63m.jpg';


const Galerie: FC = () => {
    // const [error, setError] = useState<string>();
    // const [photos, setPhotos] = useState<Photo[]>([]);

    // useEffect(() => {
    //     photosCollection
    //       .get()
    //       .then(response => setPhotos(response.docs.map(d => d.data())))
    //       .catch(err => setError(err.message));
    //   }, []);
    
    const [isOpen, setIsOpen] = useState(false);
    const photos = [{
            photo: photo1,
            caption: "Viñales, Pinar del Río, Cuba",
            thumbnail: photo1m,
        }, {
            photo: photo2,
            caption: "La Habana, Cuba",
            subcaption: "Photo by Gerardo Sanchez on Unsplash",
            thumbnail: photo2m,
        }, {
            photo: photo3,
            caption: "Woman smoking a tobacco",
            subcaption: "Photo by Hannah Cauhepe on Unsplash",
            thumbnail: photo3m,
    }];
    
    console.log(photos[0].photo);
    console.log(process.env.PHOTOS_FOLDER);

    return (
        <>
          <button onClick={() => setIsOpen(true)}>
            Open gallery
          </button>
          <ReactBnbGallery
            show={isOpen}
            photos={photos}
            onClose={() => setIsOpen(false)}
          />
        </>
      );
};

export default Galerie;
