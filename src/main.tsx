import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/global.css";
import { router } from "@/routers/router";
import { RouterProvider } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
);
