import React from 'react';
import NewsFeed from '../Components/Macro/NewsFeed';

function Home(props) {
  const { articles } = props;
  return(
    <React.Fragment>
      <div class="m-4">
        <NewsFeed />
      </div>
    </React.Fragment>
  );
}

export default Home;