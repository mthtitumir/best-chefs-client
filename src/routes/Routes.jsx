import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import RecipesLayout from "../layouts/RecipesLayout";
import ChefRecipes from "../pages/Recipes/ChefsRecipes/ChefRecipes";
import PrivateRoot from "./PrivateRoot";
import BlogLayout from "../layouts/BlogLayout";
import Blog from "../pages/Blog/Blog";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
    },
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/login',
                element:<Login></Login>,
            },
            {
                path: '/register',
                element:<Register></Register>,
            }
        ]
    },
    {
        path: '/recipes',
        element:<RecipesLayout></RecipesLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoot><ChefRecipes></ChefRecipes></PrivateRoot>,
                loader: ({params}) => fetch(`http://localhost:7000/recipes/${params.id}`)
            }
        ]
    },
    {
        path: '/blog',
        element: <BlogLayout></BlogLayout>,
        loader: () => fetch('http://localhost:7000/blogs')
    }
]);
export default router;