import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name: "feeds",
    initialState: {
        isRefreshing: false,
        refreshItem: null,
        items: [],
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
        }
    }
});

export const { fetchFeeds,fetchFeedsSuccess,fetchFeedFailed } = feedSlice.actions;

export default feedSlice.reducer;