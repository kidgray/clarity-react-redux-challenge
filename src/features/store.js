import { configureStore } from "@reduxjs/toolkit";
import userListReducer from "./userList.js";
import selectedUserListReducer from "./selectedUserList.js";


export const store = configureStore({
    reducer: {
        userList: userListReducer,
        selectedUserList: selectedUserListReducer
    }
});