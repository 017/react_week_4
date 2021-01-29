import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSteam } from '@fortawesome/free-brands-svg-icons';

function LinkedIn(url) {
  return(
    <React.Fragment>
      <a target="_blank" href={url}><FontAwesomeIcon icon={faSteam} /> Steam</a>
    </React.Fragment>
  );
}

export default LinkedIn;