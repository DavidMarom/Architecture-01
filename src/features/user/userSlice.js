import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
    },
    reducers: {
        setUser: (state, data) => {
            state.user = data.payload
        },
        logoutUser: (state, data) => {
            state.user = null;
        },
    },
})

export const { setUser, logoutUser } = userSlice.actions

export default userSlice.reducer