import { createSlice } from '@reduxjs/toolkit';

export const userListSlice = createSlice({
    name: 'userList',
    initialState: { value: [{
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
    }] },
    reducers: {
        populate: (state, action) => {
            state.value = action.payload
        }
    }
});

export const { populate } = userListSlice.actions;
export default userListSlice.reducer;