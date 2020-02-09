import React from 'react';

import EntypoGithubWithCircle from 'react-entypo/lib/entypo/GithubWithCircle';

import './viewSource.css';

const ViewSource = () => {
  return (
    <div className='viewSource'>
      <a className='viewSourceLink' href='https://github.com/RyanMillerC/devopsmachine'>
        <EntypoGithubWithCircle />
      </a>
    </div>
  );
}

export default ViewSource;
