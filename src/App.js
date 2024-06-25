import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.js";
import Demo from "./components/Demo/Demo.js";
import Team from "./components/Team/Team.js";
import Services from "./components/Services/Services.js";
function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/demo",
            element: <Demo />,
        },
        {
            path: "/team",
            element: <Team />,
        },
        {
            path: "/services",
            element: <Services />,
        },
    ]);

   
    return (
        <>
            <Navbar />
            <div style={{ marginTop: `64px` }}></div>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
