import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  const [todos, settodos] = useState([]);

  return (
    <div className="min-h-screen w-screen bg-zinc-900 text-white flex flex-wrap">
      <Create todos={todos} settodos={settodos} />
      <Read todos={todos} settodos={settodos} />
    </div>
  );
};

export default App;
