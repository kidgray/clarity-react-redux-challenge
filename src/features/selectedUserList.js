import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = [{
    company: "",
    id: 0,
    name: "",
    position: "",
    profile: {
        age: 0,
        gender: "",
        planet: "",
        species: "",
        status: ""
    }
}];

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
                        ? { ...currUser, [action.payload.fieldName]: action.payload.fieldValue } 
                        : currUser
            );
        }
    }
});

export const { update, updateSelectedUser } = selectedUserListSlice.actions;
export default selectedUserListSlice.reducer;