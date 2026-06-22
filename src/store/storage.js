import { createSlice, configureStore } from "@reduxjs/toolkit";
import { items as Initial_value } from "../data/items";

const itemSlice = createSlice({
  name: "items",
  initialState: Initial_value,
  reducers: {},
});

const bagSummarySlice = createSlice({
  name: "bagSummary",
  initialState: {
    bagSummary: {
      totalItem: 10,
      totalMRP: 2000,
      totalDiscount: 999,
      finalPayment: 1000,
    },
  },

  reducers: {},
});

const bagItemArray = [
  // {
  //   id: "001",
  //   image: "images/1.jpg",
  //   company: "Carlton London",
  //   item_name: "Rhodium-Plated CZ Floral Studs",
  //   original_price: 1045,
  //   current_price: 606,
  //   discount_percentage: 42,
  //   return_period: 14,
  //   delivery_date: "10 Oct 2023",
  //   rating: {
  //     stars: 4.5,
  //     count: 1400,
  //   },
  // },
];

const bagItemSlice = createSlice({
  name: "bagItems",
  initialState: bagItemArray,
  reducers: {
    addToCart: (state, action) => {
      
      console.log(action.payload);
      return [...state,action.payload]
      
    },
    removeFromCart : (state , action) => {
      console.log(action.payload);
      return state.filter((store) => {
      return store.id!==action.payload
      }
    )
    }
  },
});

const dataStore = configureStore({
  reducer: {
    items: itemSlice.reducer,
    bagSummary: bagSummarySlice.reducer,
    bagItems: bagItemSlice.reducer,
  },
});

export const bagItemActions = bagItemSlice.actions;
export default dataStore;
