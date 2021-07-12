import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { setBookSavedFlag, clearBookSavedFlag } from './SearchSlice';
import API from '../utils/API';

const savedAdapter = createEntityAdapter({
  selectId: (book) => book._id
});

const initialState = savedAdapter.getInitialState({
  status: 'idle',
  error: null,
});

export const getBooks = createAsyncThunk(
  'saved/getBooks',
  async () => {
    const response = await API.getBooks();
    return response;
  }
);

export const addBook = createAsyncThunk(
  'saved/addBook',
  async (book, thunkAPI) => {
    const response = await API.saveBook(book);
    // If book is also in searchList, mark book as saved
    thunkAPI.dispatch(setBookSavedFlag(response._id));
    return response;
  }
);

export const deleteBook = createAsyncThunk(
  'saved/deleteBook',
  async (bookId, thunkAPI) => {
    const response = await API.deleteBook(bookId);
    // If book is also in searchList, clear saved flag
    thunkAPI.dispatch(clearBookSavedFlag(response._id)); 
    return response._id;
  }
);

const savedSlice = createSlice({
  name: 'saved',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.status = 'idle';
        state.error = null;
        savedAdapter.setAll(state, action.payload);
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = 'Fetching list of saved books unsuccessful!';
      })
      .addCase(addBook.fulfilled, savedAdapter.addOne)
      .addCase(deleteBook.fulfilled, savedAdapter.removeOne)
  }
});

export default savedSlice.reducer;

// Export the customized selectors for this adapter using `getSelectors`
export const {
  selectById: selectSavedBookById,
  selectIds: selectSavedBookIds
  // Pass in a selector that returns the saved slice of state
} = savedAdapter.getSelectors(state => state.saved);

export const selectError = state => state.saved.error;

export const selectStatus = state => state.saved.status;