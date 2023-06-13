import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Recipes from "./pages/Recipes.jsx";

import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Favourites from "./pages/Favourites.jsx";
import Navigation from "./components/Navigation.jsx";
import Footer from "./components/Footer.jsx";
import { picksData } from "./api/recipe-picks-api.jsx";
import { homeData } from "./api/Home-API.jsx";
import Cuisine from "./pages/Cuisine.jsx";
import SearchResult from "./pages/SearchResult.jsx";
import Recipe from "./pages/Recipe.jsx";
import { AnimatePresence } from "framer-motion";

const Layout = () => {
  return (
    <div>
      <Navigation></Navigation>

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: homeData,
      },

      {
        path: "/recipe/:name",
        element: <Recipe></Recipe>,
      },

      {
        path: "/recipes/",
        element: <Recipes></Recipes>,
        loader: picksData,
      },

      {
        path: "/search/:search",
        element: <SearchResult></SearchResult>,
      },

      {
        path: "/recipes/:type",
        element: <Cuisine></Cuisine>,
      },

      {
        path: "/contact",
        element: <Contact></Contact>,
      },

      { path: "/login", element: <Login></Login> },

      { path: "/favourites", element: <Favourites></Favourites> },
    ],
  },
]);

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider location={location} router={router}></RouterProvider>
    </div>
  );
}

export default App;
