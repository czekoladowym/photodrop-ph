import MainPage from "../pages/main/MainPage";
import Upload from "../pages/upload/Upload";

const protectedRoutes = [
  {
    path: "/home",
    element: <MainPage />,
  },
  { path: "/:id/addPhoto", element: <Upload /> },
];
export default protectedRoutes;
