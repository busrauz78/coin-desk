export const fetchCurrency = () => {
  const API_URL = "https://api.exchangeratesapi.io/latest";
  return dispatch => {
    fetch(API_URL)
      .then(response => response.json())
      .then(res => dispatch({ type: "FETCH_CURRENCY", payload: res }));
  };
};
