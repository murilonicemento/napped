import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "./pages/Register.tsx";

export function App() {
  return (
    <div className="h-screen w-screen bg-dark-20">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
