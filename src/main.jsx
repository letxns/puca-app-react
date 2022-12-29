import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route, } from 'react-router-dom';
import Home from "./routes/Home"
import NewForm from "./routes/NewForm"
import ConfigForm from "./routes/ConfigForm"
import App from './App'
import './Index.css'

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
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
