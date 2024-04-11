// import { createStore } from "redux";

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

import { configureStore } from "@reduxjs/toolkit";
import { adherentApi } from "../features/adherents/services";
import { authApi } from "../features/authentication/services";
import adherentSlice from "./slices/adherent.slice";

const reducers = {
  [adherentSlice.name]: adherentSlice.reducer,
  [adherentApi.reducerPath]: adherentApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
};

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adherentApi.middleware, authApi.middleware),
});
