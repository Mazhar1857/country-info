import { createSlice } from "@reduxjs/toolkit";
import data from '../data.json'

const searchSlice = createSlice({
    name: 'search',
    initialState: [],
    reducers: {
        searchAction: (state, action) => {
            if (!action.payload == '') {
                return data.filter(item => {
                    return item["name"].toLowerCase().includes(action.payload)
                })
            }
        }
    }
})

export default searchSlice;
export const searchActions = searchSlice.actions