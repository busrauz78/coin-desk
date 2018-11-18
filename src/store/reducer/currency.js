const INITIAL_STATE = {
  currency: [],
  loading: false
};

const coinreducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_CURRENCY":
      return { ...state, currency: action.payload, loading: true };
    default:
      return state;
  }
};

export default coinreducer;
