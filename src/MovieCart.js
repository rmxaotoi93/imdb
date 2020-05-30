import React, {useState} from "react";

import "./App.css";

export default function MovieCard(props) {
  
  let movie = props.movie;
  let genre = props.genreList;
  // console.log('genre',genre)
  const gennnn = movie.genre_ids
  const finalGenre = gennnn.map(id => {
    return (genre.find(fGenre => (id === fGenre.id)).name)
    
  })
  console.log(finalGenre)
  
  
   
  return (

    <div className="apTitle">
        <img className="apImg" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`} alt=""/>
        
        <p className="movie-title">{movie.original_title}</p>
        <button className="movie-category">{finalGenre}</button>
        <p className="movie-description">{movie.overview}</p>
       
    </div>
    
  );
}
