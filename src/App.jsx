import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Recipes from "./pages/Recipes/Recipes.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Saved from "./pages/Saved/Saved.jsx";
import Navigation from "./components/Navigation.jsx";
import Footer from "./components/Footer.jsx";
import { picksData } from "./api/recipe-picks.jsx";
import { homeData } from "./api/home.jsx";
import Cuisine from "./pages/Cuisine/Cuisine.jsx";
import SearchResult from "./pages/SearchResult/SearchResult.jsx";
import Recipe from "./pages/Recipe/Recipe.jsx";

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
