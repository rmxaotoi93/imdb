import React, {useState} from "react";
import ReactModal from "react-modal";
import YouTube from '@u-wave/react-youtube';
import {Button} from 'react-bootstrap'
import "./App.css";


export default function MovieCard(props) {
  
  let movie = props.movie;
  let genre = props.genreList;
  // console.log('genre',genre)
  let [modalOpen, setModalOpen] = useState(false);
  let [movieId,setMovieId] = useState("");
  console.log(movie)
  const closeModal = () => {
    setModalOpen(false);
  };

  const openModal = async (id) => {
    let apiKey = process.env.REACT_APP_APIKEY;
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`;
    let data = await fetch(url);
    let result = await data.json();
    console.log('phim',result.results[0]);
    
    setMovieId(result.results[0].key)
    console.log('video modal: ',result.results[0].key)
    console.log('movieID',movie.id)
    setModalOpen(true)
  };

  const gennnn = movie.genre_ids
  const finalGenre = gennnn.map(id => {
    return (genre.find(fGenre => (id === fGenre.id)).name)
    
  })
  // console.log(finalGenre)

  const btbCate = finalGenre.map( (item,index) => {
    return (<button key={index} className="itemsCate">{item}</button>)
  })
  // const [list,setList] = useState([])
  // const btbCate = finalGenre.forEach(element => {
  //   setList([... list, <button className="itemsCate">{element}</button>])
  // });
  
  return (

    <div className="apTitle">
      <ReactModal isOpen={modalOpen} ariaHideApp={false}>
          <Button
            style={{float:'right'}}
            varient="outline-danger"
            onClick={() => {
              closeModal();
            }}
          >
            X
          </Button>
          <YouTube width={1100} height={500} video={movieId} autoplay/>
          
      </ReactModal>
        <img className="apImg" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`} alt=""/>
        
        <p className="movie-title">{movie.original_title}</p>
        
        <div className="movie-category">
          {btbCate}
        </div>
        <p className="movie-description">{movie.overview}</p>
       <div className="movie-modal">
       <Button className="trailer" onClick={()=>{openModal(movie.id)}}>Trailer</Button>
       </div>
    </div>
    
  );
}
