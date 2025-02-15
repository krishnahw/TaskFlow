
import { employeePropTypes } from "../../utilit/propTypeHelper";
import Accept from "./Accept";
import Complete from "./Complete";
import  New from "./Newadd";

const TaskList = ({ data }) => {
  
  return (
    <div
      id="task"
      className="h-[49vh] w-full flex  gap-5 mt-10 overflow-x-scroll"
    >
      {data?.tasks?.map((detail, idx) =>{

        if(detail.active){
          return <Accept key={idx} data={detail} />
        }

        if(detail.completed){
          return <Complete key={idx} data={detail} />
        }

        if(detail.newTask){
          return <New key={idx} data={detail} />
        }
        
      })}



    </div>
  );
};

export default TaskList;
TaskList.propTypes = {
  data: employeePropTypes,
};
