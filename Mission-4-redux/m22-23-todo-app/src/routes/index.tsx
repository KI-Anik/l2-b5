import App from "@/App";
import Tasks from "@/components/pages/Tasks";
import Users from "@/components/pages/Users";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path : '/',
        // element : <App></App>
        Component: App,
        children: [
            {
                path: 'user',
                Component: Users
            },
            {
                path: 'tasks',
                Component: Tasks
            }
        ]
    }
])

export default router