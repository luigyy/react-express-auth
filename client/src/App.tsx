import axios from "axios";

function App() {
  return (
    <div className="text-center  flex justify-center h-screen">
      <div className=" flex gap-8 my-auto h-auto ">
        <button className="bg-gray-200 px-3 py-2 rounded-3xl">
          public route
        </button>
        <button className="bg-gray-200 px-3 py-2 rounded-3xl">Login</button>
        <button className="bg-gray-200 px-3 py-2 rounded-3xl">
          private route
        </button>
      </div>
    </div>
  );
}

export default App;
