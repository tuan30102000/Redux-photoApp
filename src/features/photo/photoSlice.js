import { createSlice } from '@reduxjs/toolkit'




const photoSlice = createSlice({
    name: 'listPhoto',
    initialState: [],
    reducers: {
        addPhoto(state, action) { state.push(action.payload) },
        removePhoto(state, action) {

            let index = action.payload
            // console.log(index, [...state.slice(0, index), ...state.slice(index + 1)])

            state = [...state.slice(0, index), ...state.slice(index + 1)]
            return state
        }
    }
})


const { reducer, actions } = photoSlice
export const { addPhoto, removePhoto } = actions
export default reducer