import MainPage from "../pages/main/MainPage";
import SignIn from "../pages/signUp/SignInForm";

export const publicRoutes = [
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/home",
    element: <MainPage />,
  },
];
export default publicRoutes;
