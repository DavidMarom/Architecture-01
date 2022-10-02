import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { GetBooks } from '../../services/httpMongo'

export const getBooks = createAsyncThunk(
    'books/getBooks', async () => {
        try {
            const response = await GetBooks()
            console.log(222, response.data)
            return response.data
        }
        catch (err) {
            return err.message
        }
    });

export const booksSlice = createSlice({
    name: 'books',
    initialState: {
        books: [{name: 'test'}],
        isLoading: false
    },
    extraReducers: {
        [GetBooks.pending]: (state) => {
            state.isLoading = true;
        },
        [GetBooks.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.isLoading = false;
        },
        [GetBooks.rejected]: (state) => {
            state.isLoading = false;
        }
    }

})


export default booksSlice.reducer