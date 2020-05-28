import React from "react";
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";
import "./App.css";

export default function MovieCard(props) {
  let movie = props.movie;
  return (

    <div class="apTitle">
        <img class="apImg" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}/>
        <p class="movie-title">{movie.original_title}</p>
        <p class="movie-description">{movie.overview}</p>
        {/* <p className="title">{movie.overview}</p> */}
       
    </div>
    // <Card style={{ width: "18rem" }}>
    //   <Card.Img
    //     variant="top"
    //     src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
    //     className="img-fluid"
    //   />
    //   <Card.Body>
    //     <Card.Title>{movie.original_title}</Card.Title>
    //     <Card.Text>
    //     {movie.overview}
    //     </Card.Text>
    //   </Card.Body>
    //   <ListGroup className="list-group-flush">
    //     <ListGroupItem>Cras justo odio</ListGroupItem>
    //     <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    //     <ListGroupItem>Vestibulum at eros</ListGroupItem>
    //   </ListGroup>
    //   <Card.Body>
    //     <Card.Link href="#">Card Link</Card.Link>
    //     <Card.Link href="#">Another Link</Card.Link>
    //   </Card.Body>
    // </Card>
  );
}
