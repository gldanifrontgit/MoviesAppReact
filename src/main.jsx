import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./layouts/mainLayout.jsx";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Contact } from "./pages/Contact.jsx";
import { Favorites } from "./pages/Favorites.jsx";
import { MoviesDetails } from "./pages/MoviesDetails.jsx";
import { NotFound } from "./pages/NotFound.jsx";

import "./index.css";
// import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "movie/:id",
        element: <MoviesDetails />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
