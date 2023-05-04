import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import ChefRecipes from "../pages/Recipes/ChefsRecipes/ChefRecipes";
import PrivateRoot from "./PrivateRoot";
import Blogs from "../pages/Blogs";
import Home from "../pages/Home/Home/Home";
import AllRecipes from "../pages/Recipes/AllRecipes/AllRecipes";
import AllChefs from "../pages/Home/Chefs/AllChefs";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: 'all-recipes',
                element: <AllRecipes></AllRecipes>
            },
            {
                path: 'all-chefs',
                element: <AllChefs></AllChefs>
            },
            {
                path: 'blogs',
                element: <Blogs></Blogs>,
                loader: () => fetch('https://best-chefs-server-mthtitumir.vercel.app/blogs')
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'recipes/:id',
                element: <PrivateRoot><ChefRecipes></ChefRecipes></PrivateRoot>,
                loader: ({ params }) => fetch(`https://best-chefs-server-mthtitumir.vercel.app/recipes/${params.id}`)
            }
        ]
    },
]);
export default router;