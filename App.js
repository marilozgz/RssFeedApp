import React from "react";
import Navigator from "./Navigator";
import { Provider } from "react-redux";
import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";

import feedReducer from "./src/slices/feedSlice";
import feedSaga from "./src/saga/feedSaga";
export default function App() {
  const  saga = createSagaMiddleware();
  const store = configureStore({
    reducer: {feedReducer},
    middleware: [saga]
  });
  saga.run(feedSaga);

  return (
    <Provider store={store}>
    <Navigator/>
    </Provider>
  );
}


