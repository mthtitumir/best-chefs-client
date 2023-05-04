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
                element: <BlogLayout></BlogLayout>,
                loader: () => fetch('http://localhost:7000/blogs')
            }
        ]
    },
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            }
        ]
    },
    {
        path: '/recipes',
        element: <RecipesLayout></RecipesLayout>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: ':id',
                element: <PrivateRoot><ChefRecipes></ChefRecipes></PrivateRoot>,
                loader: ({ params }) => fetch(`http://localhost:7000/recipes/${params.id}`)
            }
        ]
    }
]);
export default router;