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

export const userListSlice = createSlice({
    name: 'userList',
    initialState: { value: initialStateValue },
    reducers: {
        populate: (state, action) => {
            state.value = action.payload
        }
    }
});

export const { populate } = userListSlice.actions;
export default userListSlice.reducer;