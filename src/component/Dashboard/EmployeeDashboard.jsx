import { employeePropTypes } from "../../utilit/propTypeHelper";
import Header from "../other/Header";
import TaskListNum from "../other/TaskListNumber";
import TaskList from "../Tasklist/TaskList";

const EmployeeDashboard = (data) => {
 console.log(data);
 
  
  return (
    <div className="p-5 ">
      <Header setUser={data.setUser} data={data.data} />
      <TaskListNum data={data.data} />
      <TaskList data={data.data} />
    </div>
  );
};

export default EmployeeDashboard;

EmployeeDashboard.propTypes  = {
  data: employeePropTypes,
};
