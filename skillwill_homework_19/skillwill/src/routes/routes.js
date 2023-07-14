import CreatePage from "../pages/CreatePage";
import EditPage from "../pages/EditPage";
import MainPage from "../pages/MainPage";

export const routes = [
    {
        element: <MainPage/>,
        path: "/",
    },
    {
        element: <CreatePage/>,
        path: '/Create'
    },
    {
        element: <EditPage/>,
        path: '/Edit/:userId'
    }
]