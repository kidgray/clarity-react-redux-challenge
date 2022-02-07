import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = [];

export const selectedUserListSlice = createSlice({
    name: 'selectedUserList',
    initialState: { value: initialStateValue },
    reducers: {
        update: (state, action) => {
            state.value = action.payload
        },
        updateSelectedUser: (state, action) => {
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

export const { update, updateSelectedUser } = selectedUserListSlice.actions;
export default selectedUserListSlice.reducer;