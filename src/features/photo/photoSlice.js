import { createSlice } from '@reduxjs/toolkit'




const photoSlice = createSlice({
    name: 'listPhoto',
    initialState: [],
    reducers: {
        addPhoto(state, action) { state.push(action.payload) },
        removePhoto(state, action) {
            let index = action.payload
            state = [...state.slice(0, index), ...state.slice(index + 1)]
            return state
        },
        editPhoto(state, action) {
            let { index, data } = action.payload
            state = [...state.slice(0, index), data, ...state.slice(index + 1)]
            return state
        },
        setInit(state, action) {
            state=action.payload
            return state
        }
    }
})


const { reducer, actions } = photoSlice
export const { addPhoto, removePhoto, editPhoto,setInit } = actions
export default reducer