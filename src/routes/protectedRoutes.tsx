import AddPhoto from "../pages/upload/Upload";
import MainPage from "../pages/main/MainPage";
import Upload from "../pages/upload/Upload";

const protectedRoutes = [
  {
    path: "/home",
    element: <MainPage />,
  },
  { path: "/addPhoto", element: <Upload /> },
];
export default protectedRoutes;
