import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../containers/Workout/Workout";
import WeightForm from "../containers/WeightForm/WeightForm";
import Menu from "../components/Menu/Menu";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoIosFitness } from "react-icons/io";

export const routes = [
  {
    path: "/",
    element: <Home />,
    text: "Mis entrenos",
    icon: <FaChalkboardTeacher />
  },
  {
    path: "/prs",
    element: <WeightForm />,
    text: "Mis pesos",
    icon: <IoIosFitness />
  }
];

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div />}>
        <Menu />
        <Routes>
          {routes.map(({ path, element }) => (
            <Route path={path} element={element} key={path} />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
