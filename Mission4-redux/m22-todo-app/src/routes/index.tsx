import App from "@/App";
import Tasks from "@/components/pages/Tasks";
import User from "@/components/pages/User";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path : '/',
        // element : <App></App>
        Component: App,
        children: [
            {
                path: 'user',
                Component: User
            },
            {
                path: 'tasks',
                Component: Tasks
            }
        ]
    }
])

export default router