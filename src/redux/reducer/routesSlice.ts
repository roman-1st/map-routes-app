import { createSlice } from '@reduxjs/toolkit';
import {RoutesState} from "../../types/routes";

const initialState: RoutesState = {
    routes: [
        [
            { lat: 59.84660399, lng: 30.29496392 },
            { lat: 59.82934196, lng: 30.42423701 },
            { lat: 59.83567701, lng: 30.38064206 }
        ],
        [
            { lat: 59.82934196, lng: 30.42423701 },
            { lat: 59.82761295, lng: 30.41705607 },
            { lat: 59.84660399, lng: 30.29496392 }
        ],
        [
            { lat: 59.83567701, lng: 30.38064206 },
            { lat: 59.84660399, lng: 30.29496392 },
            { lat: 59.82761295, lng: 30.41705607 }
        ]
    ],
    checkRoute: null,
};

const counterSlice = createSlice({
    name: 'routes',
    initialState,
    reducers: {
        setCheckRoute (state, action) {
            state.checkRoute = [...action.payload]
        }
    },
});

export const { setCheckRoute } = counterSlice.actions;
export default counterSlice.reducer;