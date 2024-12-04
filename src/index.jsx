import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Button, Heading, TextField } from "./common";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Heading size="md">Hello World</Heading>
    <Button variant="fill" disabled={false}>
      Click me!
    </Button>
    <Button variant="outline" disabled={false}>
      Click me!
    </Button>
    <TextField></TextField>
  </StrictMode>
);
