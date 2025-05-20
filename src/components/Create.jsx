import { useContext } from "react";
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { todocontext } from "../Wrapper";

const Create = () => {
  const [todos, settodos] = useContext(todocontext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const SubmitHandler = (data) => {
    data.id = nanoid();
    data.isCompleted = false;
    toast.success("Task Created! ");
    settodos([...todos, data]);

    reset({ desc: "" }); // default value of desc
  };

  return (
    <div className="w-full md:w-[60%] p-5 flex flex-col  gap-7">
      <h1 className="md:text-7xl text-5xl">
        Set <span className="text-amber-300">Reminder</span> to do.
      </h1>
      <form
        className="flex flex-col gap-1 mt-20"
        onSubmit={handleSubmit(SubmitHandler)}
      >
        <input
          {...register("title", { required: "Title must not be empty!" })}
          className="border-b outline-0 md:text-2xl text-xl"
          type="text"
          placeholder="Title"
        />
        <small className="mb-20 text-red-500 text-lg">
          {errors?.title?.message}
        </small>

        <input
          {...register("desc")}
          className="border-b outline-0 mb-5 md:text-2xl text-xl"
          type="text"
          placeholder="Description"
        />

        <button className="bg-yellow-300  text-black font-semibold border-amber-500 border mx-auto md:px-6 px-4 md:py-3 py-2 mt-3 md:text-2xl text-xl rounded-lg active:scale-95">
          Create Task
        </button>
      </form>
    </div>
  );
};

export default Create;
