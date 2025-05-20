import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  return (
    <div className="min-h-screen w-screen bg-zinc-900 text-white flex flex-wrap">
      <Create />
      <Read />
    </div>
  );
};

export default App;
