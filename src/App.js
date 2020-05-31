import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
// import {Form,FormControl,Button} from 'react-bootstrap'
import MovieList from "./MovieList";
import Search from './components/Search';



let apiKey = process.env.REACT_APP_APIKEY;

export default class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      movieList:[],
      title: "",
      overView:"",
      searchContents:'',
      genreList:[],
      originalList:[],
      page:1,
    }
    
  }
  
// Get movie list
  getNowPlayingMovie = async () => {
    
    let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=${this.state.page}`;

    
   
    let data = await fetch(url);
    let result = await data.json();
    this.setState({
      movieList: result.results,
      originalList: result.results,
      title: result.original_title,
      overView: result.overview,
      
      
    })
    
    // console.log("movies", result);
    
  };


//GenreList

 getGenreList = async() =>{
    let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;
    let data = await fetch(url);
    let result = await data.json();
    this.setState({
      genreList: result.genres
    })
    this.getNowPlayingMovie()
    console.log("how my genre look like", result)
    
  }



  componentDidMount(){
    this.getGenreList()
  }
searchByKeyword = (searchContents)=>{
  console.log('this function from app', searchContents);
  if(searchContents === '') { 
    this.setState({movieList:this.state.originalList})
    return;
  }
  let filterMovie = this.state.movieList.filter(movie => movie.title.toLowerCase().includes(searchContents))
  this.setState({
    searchContents:searchContents,
    movieList: filterMovie
  })
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
seeMore = () =>{
  this.setState({
    page:this.state.page + 1
  })
  console.log('page film',this.state.page++);
  this.getNowPlayingMovie()
}

  render() {
    if (this.state.movieList === null) {
    return <div>loading</div>;
    }
  

  return (
    <div>
       <div>
       <Search searchKeywordProps={this.searchByKeyword}/>
      <MovieList movieList={this.state.movieList} genreFromApp={this.state.genreList}/>
      <button onClick={this.seeMore} className="seeMore">See More</button>

     
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