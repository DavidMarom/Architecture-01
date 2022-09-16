import { createSlice } from '@reduxjs/toolkit'

export const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        dark: false
    },
    reducers: {
        darkToggle: state => {
            state.dark = !state.dark
        }
    }
})

export const { darkToggle } = settingsSlice.actions

export default settingsSlice.reducer