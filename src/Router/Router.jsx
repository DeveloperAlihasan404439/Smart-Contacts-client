import { createBrowserRouter } from "react-router-dom";
import MainLeyout from "../Layout/MainLeyout";
import Home from "../page/Home";
import AddContacts from "../page/Contacts/AddContacts";
import Update from "@/components/AllContacts/Update";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLeyout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/add/contacts',
                element: <AddContacts/>
            },
            {
                path: '/update/:id',
                element: <Update/>,
            },
        ]
    }
])