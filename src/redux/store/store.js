import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import feedReducer from "../slices/feedSlice";
import feedSaga from "../saga/feedSaga";


const saga = createSagaMiddleware();


export const store = configureStore({
  reducer: {feedReducer},
  middleware: [saga],
});
saga.run(feedSaga);
