import { configureStore } from '@reduxjs/toolkit';
// import AppSlice from './AppSlice';
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/sagas";
import rootReducer from "./reducers/index"

const sagaMiddleware = createSagaMiddleware();

// export const store = configureStore({
//   reducer: {
//     app: AppSlice
//   },
//   middleware: [sagaMiddleware],
// });

// sagaMiddleware.run(rootSaga);


export const store = configureStore({
  reducer: {
    app: rootReducer
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch