import React from "react";
import { useRoutes } from "react-router-dom";

import Detail from "../Detail";
import List from "../List";

const App = () =>
  useRoutes([
    { path: "/", element: <List /> },
    { path: "/list", element: <List /> },
    { path: "/detail", element: <Detail /> },
  ]);

export default App;
