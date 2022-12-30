import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route, } from 'react-router-dom';
import Home from "./pages/Home";
import NewForm from "./pages/NewForm";
import ConfigForm from "./pages/ConfigForm";
import ManageForm from "./pages/ManageForm";
import App from './App';
import './Index.css';

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/form",
                element: <NewForm />
            },
            {
                path: "/config-form",
                element: <ConfigForm />
            },
            {
                path: "/form/:id",
                element: <ManageForm />
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
