import React, { useState, useEffect } from "react";
import axios from "axios";
import keys from "../../configs/keys";
import '../RandomCake/stylesheets/random-cake.css'

const CakeOfTheDay = () => {
  const [cake, setCake] = useState(null);

  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = () => {
    const randomPage = Math.floor(Math.random() * (25 - 1 + 1) + 1); // select from the first 25 pages of results
    const randomCake = Math.floor(Math.random() * 10);

    axios
      .get(
        `https://api.unsplash.com/search/photos/?query=cake&page=${randomPage}&client_id=${keys.UNSPLASH_KEY}`
      )
      .then((theCakes) => setCake(theCakes.data.results[randomCake]));
  };

  return (
    <div>
      {cake && (
        <img
          src={cake.urls.full}
          alt={cake.alt_description}
          className="random-cake"
        />
      )}
    </div>
  );
};

export default CakeOfTheDay;
