import { createStore } from "redux";

const initialAdherentState = {
  adherentList: [],
};
const adherentReducer = (
  state: any = initialAdherentState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "addAdherent":
      return {
        adherentList: [...state.adherentList, action.payload],
      };
    case "setAdherents":
      return {
        adherentList: [...action.payload],
      };
    default:
      return state;
  }
};

const store = createStore(adherentReducer);
export default store;

// Provide now this store in main.tsx
