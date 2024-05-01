import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../containers/Workout/Home";
import WeightForm from "../containers/WeightForm/WeightForm";
import Menu from "../components/Menu/Menu";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div />}>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prs" element={<WeightForm />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
