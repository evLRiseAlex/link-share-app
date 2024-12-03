import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Heading } from "./common";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Heading size="md">Hello World</Heading>
  </StrictMode>
);
