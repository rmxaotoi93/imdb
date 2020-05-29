import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
// import {Form,FormControl,Button} from 'react-bootstrap'
import MovieList from "./MovieList";


const apiKey = process.env.REACT_APP_APIKEY;
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      movieList:[],
      title: "",
      overView:"",
      keyword:'',
      genreList:[]
    }
    
  }

// Get movie list
  getNowPlayingMovie = async () => {
    let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;
   
    let data = await fetch(url);
    let result = await data.json();
    this.setState({
      movieList: result.results,
      title: result.original_title,
      overView: result.overview,
      
      
    })
      
    console.log("movies", result);
    
  };


//GenreList

 getGenreList = async() =>{
    let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;
    let data = await fetch(url);
    let result = await data.json();
    this.setState({
      genreList: result.genre_ids
    })
    this.getNowPlayingMovie()
    console.log("how my genre look like", result)
    
  }



  componentDidMount(){
    this.getGenreList()
  }

  // search movie by keyword

//    searchByKeyWord = () =>{
//      let keyword = ''
//     //1. read the value from input
//     //2. assign that value into keyword variable
//     keyword = document.getElementById("keyWordArea").value
//     //3. call api again
//     this.getNowPlayingMovie('searchByKeyWord')
// }
  render() {
    if (this.state.movieList === null) {
    return <div>loading</div>;
    }
  
  return (
    <div>
       <div>
       {/* <Form inline>
      <FormControl  onClick={e => {keyword = e.target.value;}} type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
</Form> */}
      <MovieList movieList={this.state.movieList} genreFromApp={this.state.genreList}/>
      
      <button>See More</button>
  </div>
    </div>
  )
}
  
}



// genre_ids: (2) [28,878]

// 1. grab the value from genre ids
// 2. grab the each value from genreList
// 3. if value 1 === value 2.id 
// 3a. else if its no same, just ignore
// 4. return value2.name 

// genre_ids.map(id => {return (
//   genreList.find(genre => return(id === genre.id)).name
// )})