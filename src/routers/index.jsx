import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Index";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />
    }
])