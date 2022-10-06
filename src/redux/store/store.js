import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import feedReducer from "../slices/feedSlice";
import feedSaga from "../saga/feedSaga";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';


const saga = createSagaMiddleware();

const persistConfig = {
	key: 'feedReducer',
	version: 1,
	storage: AsyncStorage,
   manualPersist: true 
};
const persistedReducer = persistReducer(persistConfig, feedReducer);

 const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: false,
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(saga)
 
});
const persistor = persistStore(store);

export { persistor, store };

saga.run(feedSaga);
