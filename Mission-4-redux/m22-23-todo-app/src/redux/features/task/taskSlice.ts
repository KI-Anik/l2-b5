import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

interface InitialState {
    tasks: ITask[];
    filter: 'all' | 'not all'
}

const initialState: InitialState = {
    tasks: [
        // {
        //     id: 'one',
        //     title: 'anik',
        //     description: 'i am learning redux',
        //     dueDate: '2020-06-27',
        //     isCompleted: false,
        //     priority: 'high'
        // },

        // {
        //     id: 'two',
        //     title: 'manik',
        //     description: 'i am learning toolkit',
        //     dueDate: '2020-06-27',
        //     isCompleted: false,
        //     priority: 'medium'
        // },
        // {
        //     id: 'three',
        //     title: 'manika',
        //     description: 'i am learning shadcn',
        //     dueDate: '2020-06-27',
        //     isCompleted: false,
        //     priority: 'low'
        // },
    ],
    filter: 'all'
}
const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<ITask>) => {
            // state.tasks.push(action.payload)

            const id = uuidv4()
            const taskData = {
                ...action.payload,
                id
            };

            state.tasks.push(taskData);
        }
    }
});

export const selectTask = (state: RootState) => {
    return state.todo.tasks
}

export const selectFilter = (state: RootState) => {
    return state.todo.filter
}

export const { addTask } = taskSlice.actions

export default taskSlice.reducer