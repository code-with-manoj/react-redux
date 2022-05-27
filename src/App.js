import React from "react";

const App = () => {
  return (
    <>
      <section className="h-screen w-full flex justify-center items-center flex-col bg-gray-100">
        <h3 className="tracking-wider text-xl">Welcome To Learn React-redux</h3>
        {/* Box Container */}
        <div className=" bg-white p-3 shadow-xl my-2 rounded-md">
          <button className=" px-4  bg-purple-600 text-white cursor-pointer py-1.5 rounded-tl-md rounded-bl-md  text-xl tracking-wider ">
            Dec
          </button>
          <span className="px-7 text-xl font-bold py-1.5">0</span>
          <button className=" px-4  bg-purple-600 text-white cursor-pointer py-1.5 rounded-tr-md rounded-br-md text-xl tracking-wider ">
            Inc
          </button>
        </div>
      </section>
    </>
  );
};

export default App;
