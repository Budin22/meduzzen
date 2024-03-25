import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { AboutPage } from "../Pages/AboutPage";
import { CompaniesPage } from "../Pages/CompaniesPage";
import { CompanyProfilePage } from "../Pages/CompanyProfilePage";
import { UsersPage } from "../Pages/UsersPage";
import { UserProfilePage } from "../Pages/UserProfilePage";
import { RegistrationPage } from "../Pages/RegistrationPage";
import { LoginPage } from "../Pages/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/companies",
    element: <CompaniesPage />,
  },
  {
    path: "/company/:id/",
    element: <CompanyProfilePage />,
  },
  {
    path: "/users",
    element: <UsersPage />,
  },
  {
    path: "/user/:id/",
    element: <UserProfilePage />,
  },
  {
    path: "/auth",
    children: [
      {
        path: "registration",
        element: <RegistrationPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);
