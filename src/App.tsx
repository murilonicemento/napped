import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider.tsx";
import { RequireAuth } from "./context/RequireAuth.tsx";
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
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route
              path="/movies"
              element={
                <RequireAuth>
                  <Movies />
                </RequireAuth>
              }
            />
            <Route
              path="/series"
              element={
                <RequireAuth>
                  <Series />
                </RequireAuth>
              }
            />
            <Route
              path="/animes"
              element={
                <RequireAuth>
                  <Animes />
                </RequireAuth>
              }
            />
            <Route
              path="/games"
              element={
                <RequireAuth>
                  <Games />
                </RequireAuth>
              }
            />
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
      </AuthProvider>
    </>
  );
}
