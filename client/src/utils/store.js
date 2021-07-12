import { configureStore } from '@reduxjs/toolkit';
import savedReducer from '../pages/SavedSlice';
import searchReducer from '../pages/SearchSlice';

export default configureStore({
  reducer: {
    saved: savedReducer,
    search: searchReducer
  }
});