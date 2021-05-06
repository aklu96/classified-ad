import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import WelcomePage from './WelcomePage';
import Ad from './Ad';

const MainPage = (props) => {
  const { makeAd } = props;
  return (
    <div>
      <WelcomePage makeAd={makeAd} />
    </div>
  );
};

export default MainPage;