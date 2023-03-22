import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface IProps {
  children: ReactNode;
}

const ProtectedRouter = ({ children }: IProps) => {
  const token = window.localStorage.getItem("token");

  if (!token) {
    <Navigate to={"/"} />;
  }
  return <>{children}</>;
};

export default ProtectedRouter;
