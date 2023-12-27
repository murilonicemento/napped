import { AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { Login } from "./pages/Login.tsx";
import { NotFound } from "./pages/NotFound.tsx";
import { Register } from "./pages/Register.tsx";
import { Animes } from "./pages/privates/Animes.tsx";
import { Games } from "./pages/privates/Games.tsx";
import { Movies } from "./pages/privates/Movies.tsx";
import { MyAccount } from "./pages/privates/MyAccount.jsx";
import { Notice } from "./pages/privates/Notice.tsx";
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
          <Route path="/notice/:type/:id" element={<Notice />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
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
