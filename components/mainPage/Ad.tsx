import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface AdState {
  title: string;
  date: Date;
  body: string;
  image: string | ArrayBuffer;
  gender: string;
  age: string;
  target: {
    consumer: boolean;
    smb: boolean;
    enterprise: boolean;
  }
}

interface Props {
  adState: AdState;
}

const Ad = (props: Props) => {
  const {
    title,
    date,
    body,
    image
  } = props.adState;

  return (
    <div>
      <h1 className="welcomePageTitleContainer">See your Ad below:</h1>
      <h1 className="welcomePageTitleContainer">{title}</h1>
      {/*<h3>{date}</h3>
      <img src={image}></img>*/}
    </div>
  );
}

export default Ad;
