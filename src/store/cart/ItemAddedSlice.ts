import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface itemAddedState {
  isOpen: boolean;
  lastAddedItem: {
    _id: string;
    name: string;
    price: number;
    imageUrl: string;
    material: string;
    stone: string;
  } | null;
}

const initialState: itemAddedState = {
  isOpen: false,
  lastAddedItem: null,
};

const itemAdded = createSlice({
  name: "itemAdded",
  initialState,
  reducers: {
    openNotification: (state) => {
      state.isOpen = true;
    },
    closeNotification: (state) => {
      state.isOpen = false;
    },
    setLastAddedItem: (
      state,
      action: PayloadAction<itemAddedState["lastAddedItem"]>
    ) => {
      state.lastAddedItem = action.payload;
    },
  },
});

export const { openNotification, closeNotification, setLastAddedItem } =
  itemAdded.actions;
export default itemAdded.reducer;
