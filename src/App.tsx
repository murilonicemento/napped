import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login.tsx";
import { NotFound } from "./pages/NotFound.tsx";
import { Register } from "./pages/Register.tsx";
import { Animes } from "./pages/privates/Animes.tsx";
import { Games } from "./pages/privates/Games.tsx";
import { Home } from "./pages/privates/Home.tsx";
import { Movies } from "./pages/privates/Movies.tsx";
import { MyAccount } from "./pages/privates/MyAccount.jsx";
import { Series } from "./pages/privates/Series.tsx";

export function App() {
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/animes" element={<Animes />} />
          <Route path="/games" element={<Games />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
