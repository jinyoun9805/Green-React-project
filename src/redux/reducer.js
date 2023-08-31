const loginCheckd = false;

const Reducer = (state = loginCheckd, action) => {
  switch (action.type) {
    case "LoginEvent":
      return { ...state, loginCheckd: true };
    case "LogOutEvent":
      return { ...state, loginCheckd: false };

    default:
      return state;
  }
};

export default Reducer;
