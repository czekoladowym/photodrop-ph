import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "../pages/signIn/SignInForm";
import ProtectedRouter from "./ProtectedRouter";
import protectedRoutes from "./protectedRoutes";

export default function RoutesComp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<SignIn />} />
        {protectedRoutes.map((route) => (
          <Route
            path={route.path}
            element={<ProtectedRouter>{route.element}</ProtectedRouter>}
            key={route.path}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
