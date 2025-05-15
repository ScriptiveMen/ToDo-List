import { useState } from "react";
import { nanoid } from "nanoid";

const Create = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();

    const newtodo = {
      id: nanoid(),
      title,
      desc,
      isCompleted: false,
    };

    settodos([...todos, newtodo]);
    settitle("");
    setdesc("");
  };
  return (
    <div className="w-full md:w-[60%] p-5 flex flex-col  gap-7">
      <h1 className="text-5xl tracking-wide">
        Set <span className="text-amber-300">Reminder</span> to do.
      </h1>
      <form className="flex flex-col gap-10 mt-20" onSubmit={SubmitHandler}>
        <input
          required
          className="border-b outline-0 mb-10"
          value={title}
          onChange={(e) => settitle(e.target.value)}
          type="text"
          placeholder="Tile"
        />

        <input
          className="border-b outline-0"
          value={desc}
          onChange={(e) => setdesc(e.target.value)}
          type="text"
          placeholder="Description"
        />

        <button className="bg-yellow-300 text-black font-semibold border-amber-500 border mx-auto px-5 py-2 rounded-lg active:scale-95">
          Create Task
        </button>
      </form>
    </div>
  );
};

export default Create;
