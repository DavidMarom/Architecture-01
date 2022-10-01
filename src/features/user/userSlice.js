import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
    },
    reducers: {
        setUser: (state, data) => {
            console.log(555, data)
            state.user = data.payload
        },
        logoutUser: (state, data) => {
            console.log(777, data)
            state.user = null;
        },
    },
})

export const { setUser, logoutUser } = userSlice.actions


export default userSlice.reducer