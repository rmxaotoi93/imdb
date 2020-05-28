import React from "react";
import MovieCard from "./MovieCart.js"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

export default function MovieList(props) {
  if (props.MovieList === null) {
    return <div>loading</div>;
  }
  return (
    <div >
        
      <Container>
          <Row md={3} >
          {props.movieList.map((item) => {
        return <Col className="mt-3 mb-3"><MovieCard movie={item}  /></Col>;
      })}
      </Row>
      </Container>
    </div>
  );
}
