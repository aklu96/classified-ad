import React from 'react';
import moment from 'moment';

interface AdState {
  title: string;
  date: Date | string;
  body: string;
  image: string | ArrayBuffer;
}

interface Props {
  adState: AdState;
}

const Ad = (props: Props) => {
  const {
    title,
    body,
    image
  } = props.adState;
  let { date } = props.adState;
  if (date) {
    date = moment(date).format('l');
  }

  return (
    <div>
      <h1 className="welcomePageTitleContainer">See your Ad below:</h1>
      <h1 className="welcomePageTitleContainer">{title}</h1>
      <h6 className="date">{date}</h6>
      <div className="adBody">{body}</div>
      <img className="image" src={image.toString()}></img>
    </div>
  );
}

export default Ad;
