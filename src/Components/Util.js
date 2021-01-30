import React from 'react';

import Col from 'react-bootstrap/Col';

// Optimization Function to hide unused fields for social media links
// checks if there is url data, if there isn't, returns nothing for the cell
export default function RenderSocial(url, Callback) {
  if (!url) {
    return null;
  }

  console.log(url);
  
  return(
    <Col className="float-left list-group-item bg-dark">
      <span className="align-middle">
        <Callback url={url} />
      </span>
    </Col>
  )
}