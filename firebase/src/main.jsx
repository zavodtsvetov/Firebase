import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import { Firebase } from "./Firebase.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Firebase />
  </StrictMode>
);
