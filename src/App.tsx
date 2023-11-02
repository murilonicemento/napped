import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "./pages/Register.tsx";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
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
