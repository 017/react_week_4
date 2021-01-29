import React from 'react';

import Col from 'react-bootstrap/Col';

// Optimization Function to hide unused fields for social
export default function RenderSocial(url, Callback) {
  if (!url) {
    return null;
  }
  
  return(
    <Col className="float-left list-group-item bg-dark">
      <span className="align-middle">
        <Callback url={url} />
      </span>
    </Col>
  )
}