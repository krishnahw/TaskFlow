import { useState } from "react";
import PropTypes from "prop-types";
import { TaskContext } from "./TaskContext"; // ✅ Import TaskContext

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]); // Example state

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

// ✅ Add PropTypes validation
TaskProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TaskProvider;
