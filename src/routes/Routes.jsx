import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from '../layouts/Main';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
    },
]);

export default router;