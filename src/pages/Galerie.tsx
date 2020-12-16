import React, { FC, useContext, useEffect, useState }  from 'react';
import { Photo, photosCollection } from '../utils/firebase';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ImageGallery from 'react-image-gallery';


import photo1 from '../photos/portret/po61.jpg';
import photo1m from '../photos/portret/po61m.jpg';
import photo2 from '../photos/portret/po62.jpg';
import photo2m from '../photos/portret/po62m.jpg';
import photo3 from '../photos/portret/po63.jpg';
import photo3m from '../photos/portret/po63m.jpg';

import "react-image-gallery/styles/css/image-gallery.css";

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
            original: photo1,
            description: "Viñales, Pinar del Río, Cuba",
            thumbnail: photo1m,
        }, {
            original: photo2,
            description: "La Habana, Cuba",
            subcaption: "Photo by Gerardo Sanchez on Unsplash",
            thumbnail: photo2m,
        }, {
            original: photo3,
            description: "Woman smoking a tobacco",
            subcaption: "Photo by Hannah Cauhepe on Unsplash",
            thumbnail: photo3m,
    }];
    
    console.log(process.env.PHOTOS_FOLDER);

    return <ImageGallery items={photos} />;
      
};

export default Galerie;
