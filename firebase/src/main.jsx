import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import UseEffectVariants from "./UseEffectVariants.jsx";
import { MockComponent } from "./MockiBackend.jsx";
import { JsonGet } from "./JsonGet.jsx";
import { PutPatchDelete } from "./PutPatchDelete.jsx";
import { Firebase } from "./Firebase.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App />
    <p>______________________</p>
    <UseEffectVariants />
    <p>______________________</p>
    <MockComponent />
    <p>______________________</p>
    <JsonGet /> */}
    {/* <PutPatchDelete /> */}
    <Firebase />
  </StrictMode>
);
