import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    tasks: ITask[]
}

const initialState: InitialState = {
    tasks: [
        {
            id: 'one',
            title: 'anik',
            description: 'i am learning redux',
            dueDate: '2020-06-27',
            isCompleted: false,
            priority: 'high'
        },
        {
            id: 'two',
            title: 'manik',
            description: 'i am learning redux',
            dueDate: '2020-06-27',
            isCompleted: false,
            priority: 'high'
        },
    ]
}
const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {}
})

export default taskSlice.reducer