import ApplicationSlice from "./slices/Application";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        application: ApplicationSlice,
    },
});

export type TRootState = ReturnType<typeof store.getState>;

export default store;
