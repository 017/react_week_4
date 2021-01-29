import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function LinkedIn(url) {
  return(
    <React.Fragment>
      <a target="_blank" href={url}><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
    </React.Fragment>
  );
}

export default LinkedIn;