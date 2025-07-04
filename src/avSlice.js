import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
        img: "https://cdn.pixabay.com/photo/2022/02/20/02/29/projector-7023604_1280.jpg",
        name: "Projectors",
        cost: 200,
        quantity: 0,
    },
    {
        img: "https://cdn.pixabay.com/photo/2015/08/01/20/50/multimedia-870750_1280.jpg",
        name: "Speaker",
        cost: 35,
        quantity: 0,
    },
    {
        img: "https://cdn.pixabay.com/photo/2016/07/08/20/07/microphone-1505182_1280.jpg",
        name: "Microphones",
        cost: 45,
        quantity: 0,
    },
    {
        img: "https://cdn.pixabay.com/photo/2015/01/08/18/23/white-board-593309_1280.jpg",
        name: "Whiteboards",
        cost: 80,
        quantity: 0,
    },

    {
        img: "https://cdn.pixabay.com/photo/2015/10/07/21/13/signalling-976846_1280.jpg",
        name: "Signage",
        cost: 80,
        quantity: 0,
    },

  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if (item) {
        item.quantity++;
      }
    },
    decrementAvQuantity: (state, action) => {
     const item = state[action.payload];
     if (item && item.quantity > 0){
        item.quantity--;
     }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
