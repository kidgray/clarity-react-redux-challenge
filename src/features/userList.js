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
        },
        updateUser: (state, action) => {
            const id = parseInt(action.payload.targetUserID);

            state.value = state.value.map((currUser) => 
                    currUser.id === id 
                        ? { ...currUser, [action.payload.fieldName]: action.payload.fieldValue } 
                        : currUser
            );

            console.log(state.value);
        }
    }
});

export const { populate, updateUser } = userListSlice.actions;
export default userListSlice.reducer;