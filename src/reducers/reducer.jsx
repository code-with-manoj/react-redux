const initialValue = 100;
const Reducer = (state = initialValue, action) => {
  switch (action.type) {
    case "Inc":
      return state + 1;
      break;
    case "Dec":
      return state - 1;
      break;
    default:
      return state;
      break;
  }
};
export default Reducer;
