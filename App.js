import React ,{useEffect} from "react";
import { useDispatch } from "react-redux";

import Navigator from "./Navigator";
import { Provider } from "react-redux";
import { store } from "./src/redux/store/store";
export default function App() {

 

  return (
    <Provider store={store}>
    <Navigator/>
    </Provider>
  );
}


