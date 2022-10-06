import { createSlice } from "@reduxjs/toolkit";

//Slice creation of the feed, with the initial state and the reducers
  
const feedSlice = createSlice({
    name: "feeds",
    initialState: {
        isLoading: true,
        refreshItem: null,
        items: [],
        filteredItems: [],
        url: ''
    },
    reducers: {
        fetchFeeds: (state) => {
            state.isLoading = true;
        },
        fetchFeedsSuccess: (state, action) => {

            state.isLoading = false;
            state.items = action.payload;
        },
        fetchFeedFailed: (state) => {
            state.isLoading = false;
        },
        searchByName: (state, { payload }) => {
   
            state.items.filteredItems = state.items.items.filter(item => item.title.toLowerCase().includes(payload.toLowerCase()))
        },
     
        
        
    }
});

export const { fetchFeeds,fetchFeedsSuccess,fetchFeedFailed,searchByName} = feedSlice.actions;

export default feedSlice.reducer;