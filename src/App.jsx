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

import Saved from "./pages/Saved.jsx";
import Navigation from "./components/Navigation.jsx";
import Footer from "./components/Footer.jsx";
import { picksData } from "./api/recipe-picks-api.jsx";
import { homeData } from "./api/Home-API.jsx";
import Cuisine from "./pages/Cuisine.jsx";
import SearchResult from "./pages/SearchResult.jsx";
import Recipe from "./pages/Recipe.jsx";

const Layout = () => {
  return (
    <div>
      <Navigation></Navigation>
      <ScrollRestoration></ScrollRestoration>
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

      { path: "/saved", element: <Saved></Saved> },
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
