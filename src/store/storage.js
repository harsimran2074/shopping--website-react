import { createSlice, configureStore } from "@reduxjs/toolkit";


const itemSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    initialItems: (state,action)=> {
      
     return action.payload;
    }
  },
});



  

// const bagItemArray = [];

const bagItemSlice = createSlice({
  name: "bagItems",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      return [...state, action.payload];
    },
    removeFromCart: (state, action) => {
      console.log(action.payload);
      return state.filter((store) => {
        return store.id !== action.payload;
      });
    },
  },
});

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
    },
    markFetchingStarted: (state) => {
      state.currentlyFetching = true;
    },

    markFetchingFinished: (state) => {
      state.currentlyFetching = false;
    },
  },
});

const dataStore = configureStore({
  reducer: {
    items: itemSlice.reducer,


    bagItems: bagItemSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
  },
});

export const initialItemAction = itemSlice.actions;
export const bagItemActions = bagItemSlice.actions;
export const fetchStatusAction = fetchStatusSlice.actions;
export default dataStore;
