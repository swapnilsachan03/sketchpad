import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Theme } from "@radix-ui/themes";

import "@radix-ui/themes/styles.css";

import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Theme accentColor="plum" radius="large">
        <App />
      </Theme>
    </BrowserRouter>
  </StrictMode>
);
