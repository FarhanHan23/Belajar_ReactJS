import { Children } from "react";
import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children, title } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        {/* <Button variant="bg-blue-500">Login</Button>
    <Button variant="bg-red-500">Register</Button>
    <Button></Button> */}
        <h1 className="text-green-600 font-bold text-xl">{title}</h1>
        <p className="font-medium text-slate-500 mb-4">
          Welcome, Please enter your details!
        </p>

        {children}
      </div>
    </div>
  );
};

export default AuthLayouts;
