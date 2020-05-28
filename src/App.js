import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form,FormControl} from 'react-bootstrap'
import "./App.css";
import MovieList from "./MovieList";


const apiKey = process.env.REACT_APP_APIKEY;
function App() {
  let [movieList, setMovieList] = useState(null);
  let searchContents = ''
  const getNowPlayingMovie = async () => {
    let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;
    let data = await fetch(url);
    let result = await data.json();
    setMovieList(result.results);
    console.log("movies", result);
  };
  useEffect(() => {
    getNowPlayingMovie();
  }, []);

  if (movieList === null) {
    return <div>loading</div>;
  }
  return (
    <div>
      <Form inline>
      <FormControl  onChange={e => {searchContents = e.target.value;}}
      type="text" placeholder="Search" className="mr-sm-2" />
      
      <Button variant="outline-success">Search</Button>
</Form>
      <div>
        
          <MovieList movieList={movieList} />
        
          <button>See More</button>
      </div>
    </div>
  );
}

export default App;