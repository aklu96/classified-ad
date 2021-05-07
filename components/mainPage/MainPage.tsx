import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import WelcomePage from './WelcomePage';
import Ad from './Ad';

interface Props {
  makeAd: () => any;
}

const MainPage = (props: Props) => {
  const { makeAd } = props;
  return (
    <div>
      <WelcomePage makeAd={makeAd} />
    </div>
  );
};

export default MainPage;
