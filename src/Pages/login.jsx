import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <AuthLayouts title="login">
      <FormLogin></FormLogin>
      <p className="text-sm mt-5 text-center">
        Don't have an account?{" "}
        <Link to="/register" className="font-bold text-green-600">
          Register
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default LoginPage;
