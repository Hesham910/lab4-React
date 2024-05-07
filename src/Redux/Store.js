import { createStore } from "redux";
import addToWishList from "./Reducer";
import { composeWithDevTools } from "redux-devtools-extension";


const store=createStore(addToWishList,composeWithDevTools())
export default store