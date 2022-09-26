import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { FSfetchList, FScreateNew, FSupdateItem, FSdeleteItem } from '../../services/fireStore'

export const getList = createAsyncThunk(
    'list/getList', async () => {
        try {
            const aaa = await FSfetchList();
            console.log(333, aaa)
            return aaa;

        }
        catch (err) {
            return err.message
        }
    });

export const updateItem = createAsyncThunk(
    'list/updateItem', async (id) => {
        try {
            return await FSupdateItem(id);
        }
        catch (err) {
            return err.message
        }
    });

export const deleteItem = createAsyncThunk(
    'list/deleteItem', async (id) => {
        try {
            return await FSdeleteItem(id);
        }
        catch (err) {
            return err.message
        }
    });

export const addItemToList = createAsyncThunk(
    'list/addItemToList', async (newItem) => {
        try {
            return await FScreateNew(newItem);
        }
        catch (err) {
            return err.message
        }
    });

export const listSlice = createSlice({
    name: 'list',
    initialState: {
        list: [],
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

        // updateItem
        [updateItem.pending]: (state) => {
            state.isLoading = true;
        },
        [updateItem.fulfilled]: (state, action) => {
            state.list = state.list.map((item) => item.id === action.payload ? { item01: 'aaaaaaaaaa' } : item);
            state.isLoading = false;
        },
        [updateItem.rejected]: (state) => {
            state.isLoading = false;
        },

        // deleteItem
        [deleteItem.pending]: (state) => {
            state.isLoading = true;
        },
        [deleteItem.fulfilled]: (state, action) => {
            state.list = state.list.map((item) => item.id === action.payload ? null : item);
            state.isLoading = false;
        },
        [deleteItem.rejected]: (state) => {
            state.isLoading = false;
        },

        // addItemToList
        [addItemToList.pending]: (state) => {
            state.isLoading = true;
        },
        [addItemToList.fulfilled]: (state, action) => {
            state.list.push(action.meta.arg);
            state.isLoading = false;
        },
        [addItemToList.rejected]: (state) => {
            state.isLoading = false;
        },
    }
})

export default listSlice.reducer