import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Recipes from "./pages/Recipes.jsx";
import AboutUs from "./pages/About-us.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Favourites from "./pages/Favourites.jsx";
import Navigation from "./components/Navigation.jsx";
import Footer from "./components/Footer.jsx";

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
      },

      { path: "/recipes", element: <Recipes></Recipes> },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
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
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
