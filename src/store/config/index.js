import { applyMiddleware, createStore } from "redux";
import foo from "../reducer/homeReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../Saga/saga";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const SagaMiddleWare = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ["count"],
};
const persistRedux = persistReducer(persistConfig, foo);
const Store = createStore(persistRedux, applyMiddleware(SagaMiddleWare));

SagaMiddleWare.run(rootSaga);

export default Store;
export const persistor = persistStore(Store);
