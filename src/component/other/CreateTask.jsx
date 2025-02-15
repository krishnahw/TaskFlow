import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDte] = useState('');
  const [asginTO, setAsginTO] = useState("");
  const [catogery, setCatogery] = useState("");

  const [userData, setUserData] = useContext(AuthContext);



  const SumbitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      title,
      description,
      date,
      catogery,
      active: false,
      newTask: true,
      completed: false
    }

    const updatedUserData = userData.map((elem) => {
      if (asginTO === elem.firstName) {
        return {
          ...elem, 
          tasks: [...elem.tasks, newTask], 
          taskTypes: {
            ...elem.taskTypes, 
            newTask: elem.taskTypes.newTask + 1
          },
        };
      }
      return elem; 
    });
    
     setUserData(updatedUserData)
     localStorage.setItem("employees", JSON.stringify(updatedUserData));
   

  };
  return (
    <div>
      <div className="flex mt-5  ">
        <form
          onSubmit={(e) => {
            SumbitHandler(e);
          }}
          className="flex w-full bg-red-200  justify-between"
        >
          <div className=" m-5 ">
            <div>
              <h3 className="text-xl font-semibold">Task Title</h3>
              <input
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                className="bg-white w-100 border p-2 border-black"
                type="text"
              />
            </div>
            <div className="mt-3">
              <h3 className="text-xl font-semibold">Date</h3>
              <input
                value={date}
                onChange={(e) => {
                  setDte(e.target.value);
                }}
                className="bg-white w-100 border p-2 border-black"
                type="date"
              />
            </div>
            <div className="mt-3">
              <h3 className="text-xl font-semibold">Assign to</h3>
              <input
                value={asginTO}
                onChange={(e) => {
                  setAsginTO(e.target.value);
                }}
                type="text "
                className="bg-white w-100 border p-2 border-black"
                placeholder="Employee name"
              />
            </div>
            <div className="mt-3">
              <h3 className="text-xl font-semibold">Categorey</h3>
              <input
                value={catogery}
                onChange={(e) => {
                  setCatogery(e.target.value);
                }}
                type="text"
                className="bg-white w-100 border p-2 border-black"
                placeholder="desgin, dev,etc"
              />
            </div>
          </div>

          <div className="flex flex-col p-5">
            <h3 className="text-xl font-semibold">Description</h3>
            <textarea 
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              className="bg-white w-100 h-53 border p-2 border-black"
              name=""
              id=""
            ></textarea>
            <button className="mt-5 text-xl bg-emerald-500 rounded p-2 hover:bg-emerald-600 active:scale-95 active:bg-gray-300 transition">
              Create task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
