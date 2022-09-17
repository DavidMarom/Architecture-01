import { createSlice } from '@reduxjs/toolkit'
import { fakestoreGet } from '../../services/http'

export const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        items: null
    },
    reducers: {
        getItems: state => { state.items = fakestoreGet() },
    }
})

export const { getItems } = itemsSlice.actions

export default itemsSlice.reducer