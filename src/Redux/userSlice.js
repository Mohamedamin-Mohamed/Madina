import {createSlice } from '@reduxjs/toolkit'
const initialState = {
    creditCardDisplay: false,
    amount: 0,
    orderTotal: 0
}
const userSlice = createSlice({
    name: 'userInfo',
    initialState: initialState,
    reducers: {
        toggleCreditCardDisplay: (state,action)=>({
            ...state, creditCardDisplay: action.payload
        }),
        setAmount: (state, action)=>({
            ...state, amount:action.payload
        }),
        setOrderTotal: (state, action)=>({
            ...state, orderTotal:action.payload
        })
    }
})
export const {toggleCreditCardDisplay, setAmount, setOrderTotal} = userSlice.actions
export default userSlice.reducer