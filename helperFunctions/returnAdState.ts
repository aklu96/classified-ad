interface AppState {
  view?: number;
  firstModalShow?: boolean;
  secondModalShow?: boolean;
  thirdModalShow?: boolean;
  title: string;
  date: Date | string;
  body: string;
  image: string | ArrayBuffer;
  gender?: string;
  age?: string;
  consumer?: boolean;
  smb?: boolean;
  enterprise?: boolean;
  rating?: number;
}

const returnAdState = (appState: AppState): AppState => {
  return {
    title: appState.title,
    date: appState.date,
    body: appState.body,
    image: appState.image,
  };
};

export default returnAdState;
