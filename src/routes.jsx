import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GlobalStyles } from "./styles/globalStyles";
import Workshop from "./pages/workshop";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Workshop />} />
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  );
};