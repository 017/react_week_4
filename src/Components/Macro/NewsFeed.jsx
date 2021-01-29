import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NewsFeed = () => {
  // return(
  //   <React.Fragment>
  //     <ListGroup className="m-2 p-2 rounded bg-dark text-white">
  //         {news.map(newsArticle => (
  //           <ListGroup.Item className="m-2 p-2 rounded bg-secondary text-white">
  //             <Container>
  //               <Row className="p-1 m-1">
  //                   <Col className="float-left list-group-item bg-dark rounded m-1">
  //                     <h4>{newsArticle.title}</h4>
  //                     <sub>{newsArticle.author}</sub>
  //                   </Col>
  //                   <Col xs lg="2" className="float-left list-group-item bg-dark rounded m-1">
  //                     {newsArticle.category}
  //                   </Col>
  //               </Row>
  //               <Row className="p-1 m-1">
  //                 <Col className="float-left list-group-item bg-dark rounded m-1">
  //                   {newsArticle.article}
  //                 </Col>
  //               </Row>

  //             </Container>
  //           </ListGroup.Item>
  //         ))}
  //     </ListGroup>
  //   </React.Fragment>
  // );
}

export default NewsFeed;