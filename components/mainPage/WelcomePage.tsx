import Button from 'react-bootstrap/button';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
  makeAd: () => any;
}

const WelcomePage = (props: Props) => {
  const { makeAd } = props;
  return (
    <div>
      <div className='welcomePageTitleContainer'>
        <h1>Welcome! You can use this site to make a classified ad.</h1>
      </div>
      <div className='welcomePageButtonContainer'>
        <Button onClick={makeAd}>Make a Classified Ad</Button>
      </div>
    </div>
  );
};

export default WelcomePage;
