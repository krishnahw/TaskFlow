import ActiveTask from "../../page/ActiveTask";
import CompleteTask from "../../page/CompleteTask";
import NewTask from "../../page/NewTask";
import TotalTask from "../../page/TotalTask";
import { employeePropTypes } from "../../utilit/propTypeHelper";


const TaskListNum = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen '>
    
       <NewTask data={data} />

       <ActiveTask data={data}/>

       <CompleteTask data={data} />

       <TotalTask data={data} />

      
    </div>
  )
}

TaskListNum.propTypes  = {
  data: employeePropTypes,
};

export default TaskListNum

