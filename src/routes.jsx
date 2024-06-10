import App from "./App";
import Navigation from "./components/navigation";
import Home from "./components/home";
import Shop from "./components/shop";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/",
    element: <Navigation />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/cart",
    element: <Home />,
  },
];

export default routes;
