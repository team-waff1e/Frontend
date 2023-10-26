import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import postsReducer from "./postsSlice";

// 여러 개의 리듀서를 합칩니다.
const rootReducer = combineReducers({
  user: userReducer,
  posts: postsReducer,
});

// Redux 스토어를 생성합니다.
export const store = configureStore({
  reducer: rootReducer,
});

export default store;
