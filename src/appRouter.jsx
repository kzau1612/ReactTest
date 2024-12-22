import { createBrowserRouter } from "react-router-dom";
import Fibonacci1 from "./components/Fibonacci1";
import Fibonacci2 from "./components/Fibonacci2";
import ErrorPage from "./components/ErrorPage";
import App from "./App";
import About from "./components/About";
import { fetchPosts, fetchUsers } from "./components/service";

const loader = async () => {
  const [posts, users] = await Promise.all([fetchPosts(), fetchUsers()]);
  return { posts, users };
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/f1",
    element: <Fibonacci1 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/f2",
    element: <Fibonacci2 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    loader: loader,
    errorElement: <ErrorPage />,
  },
]);

export default appRouter;
