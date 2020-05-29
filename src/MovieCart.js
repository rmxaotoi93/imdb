import React from "react";

import "./App.css";

export default function MovieCard(props) {
  
  let movie = props.movie;
  let genre = props.genreList;
  // console.log(genre)
  const category = () =>{
    const gennnn = movie.genre_ids 
    // console.log('aszxczxc',gennnn);
    if(gennnn === genre){
      return genre.name;
      // console.log('123',genre.name)
    }
    // const found = movie.genre_ids.find(ele => {if(gennnn. === genre_ids){
    //   return genre_ids.name
    // }})
    // gennnn.map(id => { 
    //   return (genre.find(idd => {
     
    //     return(id === idd).name}))
      
    // })
    
    // console.log('asdasdas',genre.genre_ids);
    
  }
  // genre_ids.map(id => {return (
//   genreList.find(genre => return(id === genre.id)).name
// )})
  return (

    <div className="apTitle">
        <img className="apImg" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`} alt=""/>
        <p>{category()}</p>
        <p className="movie-title">{movie.original_title}</p>
        <p className="movie-description">{movie.overview}</p>
       
    </div>
    
  );
}
