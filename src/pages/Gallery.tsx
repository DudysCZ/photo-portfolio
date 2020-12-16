import React, { FC, useContext, useEffect, useState } from 'react';
import { Photo, photosCollection } from '../utils/firebase';
import ReactBnbGallery from 'react-bnb-gallery'

import 'react-bnb-gallery/dist/style.css'


const Gallery: FC = () => {
    const [error, setError] = useState<string>();
    const [photos, setPhotos] = useState<Photo[]>([]);

    useEffect(() => {
        photosCollection
          .get()
          .then(response => setPhotos(response.docs.map(d => d.data())))
          .catch(err => setError(err.message));
      }, []);

    //   const photos = [{
    //     photo: "https://source.unsplash.com/aZjw7xI3QAA/1144x763",
    //     caption: "Viñales, Pinar del Río, Cuba",
    //     subcaption: "Photo by Simon Matzinger on Unsplash",
    //     thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
    //   }, {
    //     photo: "https://source.unsplash.com/c77MgFOt7e0/1144x763",
    //     caption: "La Habana, Cuba",
    //     subcaption: "Photo by Gerardo Sanchez on Unsplash",
    //     thumbnail: "https://source.unsplash.com/c77MgFOt7e0/100x67",
    //   }, {
    //     photo: "https://source.unsplash.com/QdBHnkBdu4g/1144x763",
    //     caption: "Woman smoking a tobacco",
    //     subcaption: "Photo by Hannah Cauhepe on Unsplash",
    //     thumbnail: "https://source.unsplash.com/QdBHnkBdu4g/100x67",
    //   }]; 
      
      const [isOpen, setIsOpen] = useState(false);
    
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
