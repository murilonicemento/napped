import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login.tsx";
import { NotFound } from "./pages/NotFound.jsx";
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
      <BrowserRouter>
        <Routes>
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

// // All photos by Matt Perry https://citizenofnowhe.re
// import "./styles.css";
// import * as React from "react";
// import { AnimatePresence } from "framer-motion";
// import { useLocation, useRoutes } from "react-router-dom";
// import { Home } from "./pages/home";
// import { Gallery } from "./template/Gallery";
// import { amsterdamPhotosMetadata, londonPhotosMetadata } from "./data";

// export default function App() {
//   const element = useRoutes([
//     {
//       path: "/",
//       element: <Home />
//     },
//     {
//       path: "/amsterdam",
//       element: (
//         <Gallery
//           photos={amsterdamPhotosMetadata}
//           title="Amsterdam Zuid nightwalk"
//           titleWidth={8.2}
//           category="zuid"
//           alt="A building in Amsterdam Zuid at night"
//         />
//       )
//     },
//     {
//       path: "/london",
//       element: (
//         <Gallery
//           photos={londonPhotosMetadata}
//           title="White lines of Canary Wharf"
//           titleWidth={8}
//           category="canary"
//           alt="A building in Canary Wharf"
//         />
//       )
//     }
//   ]);

//   const location = useLocation();

//   if (!element) return null;

//   return (
//     <AnimatePresence mode="wait" initial={false}>
//       {React.cloneElement(element, { key: location.pathname })}
//     </AnimatePresence>
//   );
// }
