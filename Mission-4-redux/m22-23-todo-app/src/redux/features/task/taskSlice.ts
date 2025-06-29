import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    tasks: ITask[];
    filter: 'all' | 'not all'
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
            description: 'i am learning toolkit',
            dueDate: '2020-06-27',
            isCompleted: false,
            priority: 'medium'
        },
        {
            id: 'three',
            title: 'manika',
            description: 'i am learning shadcn',
            dueDate: '2020-06-27',
            isCompleted: false,
            priority: 'low'
        },
    ],
    filter : 'all'
}
const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {}
})

export const selectTask = (state : RootState)=>{
 return state.todo.tasks
}

export const selectFilter = (state : RootState)=>{
    return state.todo.filter
}

export default taskSlice.reducer