import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import homeClickSlice from "./homeClickSlice";
import wafflesSlice from "./wafflesSlice";

const store = configureStore({
  reducer: {
    homeClick: homeClickSlice.reducer,
    waffles: wafflesSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;
