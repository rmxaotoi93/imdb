import React, {useState} from "react";

import "./App.css";
import Category from "./components/Category";

export default function MovieCard(props) {
  
  let movie = props.movie;
  let genre = props.genreList;
  // console.log('genre',genre)
  const gennnn = movie.genre_ids
  const finalGenre = gennnn.map(id => {
    return (genre.find(fGenre => (id === fGenre.id)).name)
    
  })
  // console.log(finalGenre)

  const btbCate = finalGenre.map( item => {
    return (<button className="itemsCate">{item}</button>)
  })

  // finalGenre.forEach(element => {
  //   Array.p
  // });
   
  return (

    <div className="apTitle">
        <img className="apImg" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`} alt=""/>
        
        <p className="movie-title">{movie.original_title}</p>
        
        <div className="movie-category">
          {btbCate}
        </div>
        <p className="movie-description">{movie.overview}</p>
       
    </div>
    
  );
}
