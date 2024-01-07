import React from "react";
import FormLogin from "./components/Fragments/FormLogin";
import LoginPage from "./Pages/login";
import RegisterPage from "./Pages/register";

//penulisan button dengan class
// class Button extends React.Component {
//   render() {
//     return (
//       <button
//         className={`h-10 px-6 font-semibold rounded-md bg-black text-white`}
//         type="submit"
//       >
//         Button
//       </button>
//     );
//   }
// }

// // penulisan button dengan functional component
// function ButtonGreen() {
//   return (
//     <button
//       class="h-10 px-6 font-semibold rounded-md bg-green-500 text-white"
//       type="submit"
//     >
//       Button
//     </button>
//   );
// }

// // penulisan button dengan Arrow functional component
// const ButtonRed = () => {
//   return (
//     <button
//       class="h-10 px-6 font-semibold rounded-md bg-red-500 text-white"
//       type="submit"
//     >
//       Button
//     </button>
//   );
// };

// penggunaan props

function App() {
  return (
    <div className="flex justify-center min-h-screen items-center">
      {/* <LoginPage></LoginPage> */}
      <RegisterPage></RegisterPage>
    </div>
  );
}

export default App;
