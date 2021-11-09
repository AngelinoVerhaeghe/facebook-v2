import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signIn } from "next-auth/client";

function Login() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid place-items-center">
        <FontAwesomeIcon
          className="text-blue-500 mb-8"
          icon={["fab", "facebook"]}
          size="9x"
        />
        <button
          className="px-5 py-3 bg-blue-500 rounded-full text-white text-center cursor-pointer hover:bg-blue-700 transition duration-200 ease focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-400"
          onClick={signIn}
        >
          Login with Facebook
        </button>
      </div>
    </div>
  );
}

export default Login;
