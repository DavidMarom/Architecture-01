import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchList, createNew } from '../../services/fireStore'

export const getList = createAsyncThunk(
    'list/getList', async () => {
        try {
            const response = await fetchList()
            return response
        }
        catch (err) {
            return err.message
        }
    });

export const addItemToList = createAsyncThunk(
    'list/addItemToList', async (newItem) => {
        try {
            createNew(newItem.payload);
            return newItem.payload;

        }
        catch (err) {
            return err.message
        }
    });

export const listSlice = createSlice({
    name: 'list',
    initialState: {
        list: null,
        isLoading: false
    },
    extraReducers: {
// getList
        [getList.pending]: (state) => {
            state.isLoading = true;
        },
        [getList.fulfilled]: (state, action) => {
            state.list = action.payload;
            state.isLoading = false;
        },
        [getList.rejected]: (state) => {
            state.isLoading = false;
        },
// addItemToList
        [addItemToList.pending]: (state) => {
            state.isLoading = true;
        },
        [addItemToList.fulfilled]: (state, action) => {
            createNew(action.meta.arg);
            state.list.push(action.meta.arg);
            state.isLoading = false;
        },
        [addItemToList.rejected]: (state) => {
            state.isLoading = false;
        },


    }

})

export default listSlice.reducer