import { createSlice } from '@reduxjs/toolkit'


// Define the initial state using that type
const initialState = {
  value: 110,
}

export const quizSlice = createSlice({
name : 'quiz',
initialState,
reducers : {}
})


export default quizSlice.reducer