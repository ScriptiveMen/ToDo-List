import { toast } from "react-toastify";

const Read = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;

  const deltetodo = (id) => {
    const updatedtodo = todos.filter((todo) => todo.id != id);
    toast.error("Task Deleted!");
    settodos(updatedtodo);
  };

  const complteHandler = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });

    settodos(updatedTodos);
  };

  const rendertodos = [...todos]
    .sort((a, b) => a.isCompleted - b.isCompleted)
    .map((todo) => {
      return (
        <li
          className=" flex items-center justify-between md:p-4 p-3 border border-gray-400 rounded-sm"
          key={todo.id}
        >
          <div className="flex h-full flex-col justify-between">
            <h3
              className={`md:text-3xl text-2xl${
                todo.isCompleted ? " text-gray-400 line-through" : ""
              }`}
            >
              {todo.title}
            </h3>
            <p className="text-gray-400 md:text-xl  text-lg">
              {todo.desc == "" ? "No Description" : todo.desc}
            </p>
          </div>

          <div className="flex flex-col items-center justify-between gap-3">
            <button
              onClick={() => complteHandler(todo.id)}
              className={`text-green-500 active:scale-95  cursor-pointer md:text-xl text-lg border rounded  px-2 py-1 ${
                todo.isCompleted ? "opacity-30" : ""
              }`}
            >
              Completed
            </button>

            <button
              onClick={() => deltetodo(todo.id)}
              className="text-red-500 active:scale-95  cursor-pointer md:text-xl text-lg  px-2 py-1 border rounded"
            >
              Delete Task
            </button>
          </div>
        </li>
      );
    });

  return (
    <div className="w-full md:w-[40%] p-5 flex flex-col items-center  gap-4">
      <h1 className="md:text-7xl text-5xl mb-10 ">
        {" "}
        <span className="text-amber-300 ">Remaining</span> Tasks
      </h1>
      <ol className="flex flex-col w-full gap-3">
        {rendertodos.length > 0 ? (
          rendertodos
        ) : (
          <li className="text-center mt-5 text-gray-400 italic md:text-xl text-lg">
            No Task pending...
          </li>
        )}
      </ol>
    </div>
  );
};

export default Read;
