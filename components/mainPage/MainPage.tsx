import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import WelcomePage from './WelcomePage';
import Ad from './Ad';

interface AdState {
  title: string;
  date: Date | string;
  body: string;
  image: string | ArrayBuffer;
}

interface Props {
  makeAd: () => any;
  adState: AdState;
}

const MainPage = (props: Props) => {
  const {
    makeAd,
    adState
  } = props;
  return (
    <div>
      <WelcomePage makeAd={makeAd} />
      <Ad adState={adState} />
    </div>
  );
};

export default MainPage;
