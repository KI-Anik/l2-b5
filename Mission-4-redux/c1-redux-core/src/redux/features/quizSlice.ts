import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'


// Define the initial state using that type
const initialState = {
  value: 0,
}

export const quizSlice = createSlice({
name : 'quiz',
initialState,
reducers : {}
})

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default quizSlice.reducer