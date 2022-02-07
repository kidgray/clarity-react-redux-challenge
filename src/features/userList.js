import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = [];

export const userListSlice = createSlice({
    name: "userList",
    initialState: { value: initialStateValue },
    reducers: {
        populate: (state, action) => {
            state.value = action.payload
        },
        updateUser: (state, action) => {
            const id = parseInt(action.payload.targetUserID);

            state.value = state.value.map((currUser) => 
                    currUser.id === id 
                        ? { ...currUser, 
                            profile: { ...currUser.profile, [action.payload.fieldName]: action.payload.fieldValue }
                        } 
                        : currUser
            );
        }
    }
});

export const { populate, updateUser } = userListSlice.actions;
export default userListSlice.reducer;