import Root from "../reducers/rootReducers";
import { createStore } from "redux";

const Store = createStore(
  Root,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default Store;
