import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import homeClickSlice from "./homeClickSlice";
import wafflesSlice from "./wafflesSlice";
import commentsSlice from "./commentsSlice";
import userFollowSlice from "./userFollowSlice";

const store = configureStore({
  reducer: {
    homeClick: homeClickSlice.reducer,
    comments: commentsSlice.reducer,
    waffles: wafflesSlice.reducer,
    user: userSlice.reducer,
    userFollow: userFollowSlice.reducer,
  },
});

export default store;
