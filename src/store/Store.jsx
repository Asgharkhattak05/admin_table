 import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./slices/UserSlice";

const Store=configureStore({
    reducer : {
        users: UserSlice.reducer,
    }
})

export default Store ;