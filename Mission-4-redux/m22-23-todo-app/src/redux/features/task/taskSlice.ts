import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from 'uuid';

interface InitialState {
    tasks: ITask[];
    filter: 'all' | 'not all' | 'low' | 'medium' | 'high'
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

type DraftTask = Pick<ITask, "description" | "dueDate" | "priority" | "title">;

const createTask = (taskData: DraftTask): ITask => {
    return {
        id: nanoid(),
        isCompleted: false,
        ...taskData
    }
}


const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<DraftTask>) => {
            // 1st comment
            // state.tasks.push(action.payload)

            // 2nd comment
            // const id = uuidv4()
            // const taskData = {
            //     ...action.payload,
            //     id,
            // isCompleted : false
            // };

            // 3rd version
            const taskData = createTask(action.payload)
            state.tasks.push(taskData);
        },
        toogleCompleteState: (state, action: PayloadAction<string>) => {
            state.tasks.forEach(task =>
                task.id === action.payload ?
                    task.isCompleted = !task.isCompleted
                    : task
            );
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter(task =>
                task.id !== action.payload
            );
        },
        updateFilter: (state, action ) => {
            state.filter = action.payload
        }
    }
});

export const selectTask = (state: RootState) => {
    const filter = state.todo.filter
    if (filter === 'low') {
        return state.todo.tasks.filter((task) => task.priority === 'low')
    } else if (filter === 'medium') {
        return state.todo.tasks.filter((task) => task.priority === 'medium')
    } else if (filter === 'high') {
        return state.todo.tasks.filter((task) => task.priority === 'high')
    } else {
        return state.todo.tasks
    }
}

export const selectFilter = (state: RootState ) => {
    return state.todo.filter
}

export const { addTask, toogleCompleteState, deleteTask, updateFilter } = taskSlice.actions

export default taskSlice.reducer