import { applyMiddleware, createStore } from "redux";
import foo from "../reducer/homeReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../Saga/saga";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const SagaMiddleWare = createSagaMiddleware(); //saga middleware creation

const persistConfig = {
  key: "root",
  storage: storage, //local_storage
  stateReconciler: autoMergeLevel2, //copy initialstate and update
  whitelist: ["count"], //only persist particular key
};
const persistRedux = persistReducer(persistConfig, foo); //persist reducer configuration
const Store = createStore(persistRedux, applyMiddleware(SagaMiddleWare));

SagaMiddleWare.run(rootSaga); //watcher starts to watch

export default Store; //general redux store
export const persistor = persistStore(Store); //persist store to apply persistGate
