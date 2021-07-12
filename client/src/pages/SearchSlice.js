import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import API from '../utils/API';

const searchAdapter = createEntityAdapter({
  selectId: (book) => book._id
});

const initialState = searchAdapter.getInitialState({
  status: 'idle',
  error: null,
  query: ''
});

export const searchBooks = createAsyncThunk(
  'search/searchBooks',
  async (query, thunkAPI) => {
    const response = await API.searchBooks(query);
    // Save the query
    thunkAPI.dispatch(saveSearchTerm(query));
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    saveSearchTerm(state, action) {
      state.query = action.payload;
    },
    setBookSavedFlag(state, action) {
      const bookId = action.payload;
      if (state.entities.hasOwnProperty(bookId)) {
        state.entities[bookId].saved = true;
      }
    },
    clearBookSavedFlag(state, action) {
      const bookId = action.payload;
      if (state.entities.hasOwnProperty(bookId)) {
        state.entities[bookId].saved = false;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchBooks.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(searchBooks.fulfilled, (state, action) => {
        state.status = 'idle';
        state.error = null;
        searchAdapter.setAll(state, action.payload);
      })
      .addCase(searchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = 'Book Search Unsuccessful';
        searchAdapter.removeAll(state);
      })
  }
});

export const { saveSearchTerm, setBookSavedFlag, clearBookSavedFlag } = searchSlice.actions

export default searchSlice.reducer;

// Export the customized selectors for this adapter using `getSelectors`
export const {
  selectById: selectSearchResultById,
  selectIds: selectSearchResultIds
  // Pass in a selector that returns the search slice of state
} = searchAdapter.getSelectors(state => state.search);

export const selectSearchTerm = state => state.search.query;

export const selectError = state => state.search.error;

export const selectStatus = state => state.search.status;