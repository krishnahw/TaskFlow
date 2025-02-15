import { employeePropTypes } from "../../utilit/propTypeHelper";
import AllTask from "../other/AllTask";
import CreateTask from "../other/CreateTask";
import Header from "../other/Header";

const AdminDashboard = (props) => {
  return (
    <div className="h-screen w-full p-5">
      <Header setUser={props.setUser } data={props.data}/>
      <CreateTask/>
      <AllTask/>
    </div>
  );
};

AdminDashboard.propTypes  = {
  data: employeePropTypes,
  setUser:'string',
};

export default AdminDashboard;
