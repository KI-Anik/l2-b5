import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    task : [{
        id : 'one',
        title : 'anik',
        description: 'i am learning redux',
        dueDate : '2020-06-27',
        isCompleted : false,
        priority: 'high'
    }]
}
const taskSlice = createSlice({
    name : 'task',
    initialState,
    reducers: {}
})

export default taskSlice.reducer