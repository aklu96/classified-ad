interface AppState {
  view?: number;
  firstModalShow?: boolean;
  secondModalShow?: boolean;
  thirdModalShow?: boolean;
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

const returnAdState = (appState: AppState): AppState => {
  const adState = Object.assign({}, appState);
  delete adState.view;
  delete adState.firstModalShow;
  delete adState.secondModalShow;
  delete adState.thirdModalShow;
  return adState;
};

export default returnAdState;
