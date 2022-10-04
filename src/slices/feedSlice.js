import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name: "feeds",
    initialState: {
        isRefreshing: false,
        refreshItem: null,
        items: [],
        filteredItems: [],
        url: ''
    },
    reducers: {
        fetchFeeds: (state) => {
            state.isRefreshing = true;
        },
        fetchFeedsSuccess: (state, action) => {

            state.isRefreshing = false;
            state.items = action.payload;
        },
        fetchFeedFailed: (state) => {
            state.isRefreshing = false;
        },
        searchByName: (state, { payload }) => {
   
            state.items.filteredItems = state.items.items.filter(item => item.title.toLowerCase().includes(payload.toLowerCase()))
        },
        
    }
});

export const { fetchFeeds,fetchFeedsSuccess,fetchFeedFailed,searchByName } = feedSlice.actions;

export default feedSlice.reducer;