import axios from "axios";
import { useState } from "react";

const EMAIL = "email@gmail.com";
const PASSWORD = "password";

function App() {
  const [logged, setLogged] = useState(false);
  //
  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        email: EMAIL,
        password: PASSWORD,
      });
      console.log(response);
      setLogged(true);
    } catch (err) {
      setLogged(false);
    }
  };
  //
  return (
    <div className="">
      <p className="fixed top-10 right-[50%] text-3xl font-bold">
        {" "}
        {logged ? (
          <p className="text-green-500">Logged in</p>
        ) : (
          <p className="text-red-500">Not logged </p>
        )}
      </p>
      <div className="text-center  flex justify-center h-screen">
        <div className=" flex gap-8 my-auto h-auto ">
          <button className="bg-gray-200 px-3 py-2 rounded-3xl">
            public route
          </button>
          <button
            onClick={handleLogin}
            className="bg-gray-200 px-3 py-2 rounded-3xl"
          >
            Login
          </button>
          <button className="bg-gray-200 px-3 py-2 rounded-3xl">
            private route
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
