interface ModalState {
  firstModalShow: boolean;
  secondModalShow: boolean;
  thirdModalShow: boolean;
}

const updateModalStates = (view: number): ModalState => {
  return {
    firstModalShow: view === 1 ? true : false,
    secondModalShow: view === 2 ? true : false,
    thirdModalShow: view === 3 ? true : false
  };
};

export default updateModalStates;
