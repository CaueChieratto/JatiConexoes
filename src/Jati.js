import React from "react";
import Pagina_inicial from "./paginas/Pagina_inicial";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Produtos from "./paginas/Produtos";
import Error from "./paginas/Error.js";

const router = createBrowserRouter([
  { path: "/", element: <Pagina_inicial></Pagina_inicial> },
  { path: "/produtos", element: <Produtos></Produtos> },
  { path: "*", element: <Error></Error> },
]);

export default function Jati() {
  return <RouterProvider router={router}></RouterProvider>;
}
