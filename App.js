import React from "react";
import { PersistGate } from 'redux-persist/integration/react';

import Navigator from "./Navigator";
import { Provider } from "react-redux";
import { store,persistor} from "./src/redux/store/store";
export default function App() {


  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <Navigator/>
    </PersistGate>
    </Provider>
  );
}


