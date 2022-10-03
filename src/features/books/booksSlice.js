import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { GetBooks } from '../../services/httpMongo'

export const getBooks = createAsyncThunk(
    'books/getBooks', async () => {
        try {
            const response = await GetBooks()
            return response.data
        }
        catch (err) {
            return err.message
        }
    });

export const booksSlice = createSlice({
    name: 'books',
    initialState: {
        books: [],
        isLoading: false
    },
    extraReducers: {
        [getBooks.pending]: (state) => {
            state.isLoading = true;
        },
        [getBooks.fulfilled]: (state, action) => {
            state.books = action.payload;
            state.isLoading = false;
        },
        [getBooks.rejected]: (state) => {
            state.isLoading = false;
        }
    }

})


export default booksSlice.reducer