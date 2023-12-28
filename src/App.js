import Dashboard from "./pages/Dashboard/Dashboard";
import Transactions from "./pages/Transactions/Transactions";
import Support from "./pages/Support/Support";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import RegisterEmailVerify from "./pages/RegisterEmailVerify/RegisterEmailVerify";
import RegisterEmailSuccess from "./pages/RegisterEmailSuccess/RegisterEmailSuccess";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ForgotPasswordSent from "./pages/ForgotPasswordSent/ForgotPasswordSent";
import ResetPasswordSuccess from "./pages/ResetPasswordSuccess/ResetPasswordSuccess";
import ResetPassword from "./pages/ResetPassword/ResetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/transactions",
    element: <Transactions />,
  },
  {
    path: "/support",
    element: <Support />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/register-email-verify",
    element: <RegisterEmailVerify />,
  },
  {
    path: "/register-email-success",
    element: <RegisterEmailSuccess />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/forgot-password-sent",
    element: <ForgotPasswordSent />,
  },
  {
    path: "/reset-password-success",
    element: <ResetPasswordSuccess />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
