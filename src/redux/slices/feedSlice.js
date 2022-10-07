import { createSlice } from "@reduxjs/toolkit";

//Slice creation of the feed, with the initial state and the reducers
  
const feedSlice = createSlice({
    name: "feeds",
    initialState: {
        isLoading: true,
        refreshItem: null,
        items: [],
        filteredItems: [],
        url: 'https://www.9to5mac.com/feed/',
        error: null,
    },
    reducers: {
        fetchFeeds: (state) => {
            state.isLoading = true;
        },
        fetchFeedsSuccess: (state, action) => {

            state.isLoading = false;
            state.items = action.payload;
        },
        fetchFeedFailed: (state,payload) => {
            state.error = "Error";
            state.isLoading = false;
        },
        searchByName: (state, { payload }) => {
   
            state.items.filteredItems = state.items.items.filter(item => item.title.toLowerCase().includes(payload.toLowerCase()))
        },
        changeUrl: (state,  payload ) => {
            state.url = payload.payload;
        }
        
        
    }
});

export const { fetchFeeds,fetchFeedsSuccess,fetchFeedFailed,searchByName,changeUrl} = feedSlice.actions;

export default feedSlice.reducer;