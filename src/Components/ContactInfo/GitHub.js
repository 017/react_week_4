import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function LinkedIn(url) {  
  return(
    <React.Fragment>
      <a target="_blank" rel="noreferrer" href={url}><FontAwesomeIcon icon={faGithub} /> Github</a>
    </React.Fragment>
  );
}

export default LinkedIn;
