import React from "react";
import "./App.less";
import HomePage from "./pages/Home";

function App() {
  return (
    <div className='bg-gray-200 h-full'>
      <div className=' content-center flex items-center  h-screen justify-center'>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
