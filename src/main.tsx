import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App.tsx";
import { AuthProvider } from "./context/auth/AuthProvider.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <React.StrictMode>
      {/* <ChakraProvider theme={theme}> */}
      <AuthProvider>
        <App />
      </AuthProvider>
      {/* </ChakraProvider> */}
    </React.StrictMode>
  </BrowserRouter>
);
