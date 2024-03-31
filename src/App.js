import React from "react";
import { Route, Routes } from "react-router-dom";

import { fetchItems } from "./redux/slices/itemSlices";
import { fetchBasketItems } from "./redux/slices/basketSlices";

import Main from "./components/Pages/Main";
import Basket from "./components/Pages/Basket";
import { useDispatch } from "react-redux";

const ROUTES = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "basket",
    element: <Basket />,
  },
];

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchItems());
    dispatch(fetchBasketItems());
  }, []);

  return (
    <Routes>
      {ROUTES.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
}

export default App;
