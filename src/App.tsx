import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login.tsx";
import { NotFound } from "./pages/NotFound.jsx";
import { Register } from "./pages/Register.tsx";
import { Animes } from "./pages/privates/Animes.tsx";
import { Games } from "./pages/privates/Games.tsx";
import { Home } from "./pages/privates/Home.tsx";
import { Movies } from "./pages/privates/Movies.tsx";
import { Series } from "./pages/privates/Series.tsx";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/animes" element={<Animes />} />
          <Route path="/games" element={<Games />} />
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
