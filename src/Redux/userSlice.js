import {createSlice } from '@reduxjs/toolkit'
const initialState = {
    creditCardDisplay: false
}
const userSlice = createSlice({
    name: 'userInfo',
    initialState: initialState,
    reducers: {
        toggleCreditCardDisplay: (state,action)=>({
            ...state, creditCardDisplay: action.payload
        })
    }
})
export const {toggleCreditCardDisplay} = userSlice.actions
export default userSlice.reducer