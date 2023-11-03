import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { NotFound } from "./pages/NotFound.jsx";
import { Register } from "./pages/Register.tsx";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        toastOptions={{
          duration: 3000,
          position: "top-center",
          style: {
            backgroundColor: "#151B26",
            color: "#FEFBFB",
          },
        }}
      />
    </>
  );
}
