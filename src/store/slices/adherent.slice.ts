import { createSlice } from "@reduxjs/toolkit"

type AdherentState = {
    sheetState: boolean,
    lastCreated?: Adherent,
    adherentList: Adherent[]
}

const initialState: AdherentState = {
    sheetState: false,
    lastCreated: undefined,
    adherentList: []
}

const adherentSlice = createSlice({
initialState,
name: "adherent",
reducers: {
    toogleSheet: (state) => {
        state.sheetState = !state.sheetState;
    },
    setAdherents: (state, actions) => {
        state.adherentList = actions.payload
    },
    addNewAdherent: (state, action) => {
        state.adherentList.push(action.payload);
        state.lastCreated = action.payload
    }
}
})

export const { toogleSheet, setAdherents, addNewAdherent  } = adherentSlice.actions
export default adherentSlice