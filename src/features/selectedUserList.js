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
        }
    }
});

export const { update } = selectedUserListSlice.actions;
export default selectedUserListSlice.reducer;