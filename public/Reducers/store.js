import { createStore } from "redux"
import rootReducers from "./action"
const store = createStore(rootReducers);
console.log(store,"false");
export default store;