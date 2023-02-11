import { collectCats } from '@/src/utils';
import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    searchText: "",
    categories: collectCats()
  },
  reducers: {
    setSearchText: (state, { payload }) => {
      state.searchText = payload
    },
    setCategories: (state, { payload }) => {
      state.categories = payload
    },
  }
})
export default filterSlice.reducer;
export const { setCategories, setSearchText } = filterSlice.actions
