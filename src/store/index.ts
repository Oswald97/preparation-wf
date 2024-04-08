// import { createStore } from "redux";

import { configureStore } from "@reduxjs/toolkit";
import adherentSlice from "./slices/adherent.slice";

// const initialAdherentState = {
//   adherentList: [],
// };
// const adherentReducer = (
//   state: any = initialAdherentState,
//   action: { type: string; payload: any }
// ) => {
//   switch (action.type) {
//     case "addAdherent":
//       return {
//         adherentList: [...state.adherentList, action.payload],
//       };
//     case "setAdherents":
//       return {
//         adherentList: [...action.payload],
//       };
//     default:
//       return state;
//   }
// };

// const store = createStore(adherentReducer);
// export default store;

// // Provide now this store in main.tsx



const reducers = {
  [adherentSlice.name]: adherentSlice.reducer,
};


export const store = configureStore({
  reducer: reducers
});


/**
 * middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
          serializableCheck: false
      }).concat([
          postApi.middleware
      ]);
  },
 */