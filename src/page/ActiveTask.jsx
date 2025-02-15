import { employeePropTypes } from "../utilit/propTypeHelper";


const ActiveTask = ({data}) => {
  console.log(data);
  
  return (
    <div className='bg-blue-400 h-40 w-[45%] rounded-xl py-6 px-9    '>
             <h2 className="text-3xl font-semibold ">{ data.taskTypes.active }</h2>
             <h3 className="text-2xl mt-10 font-medium">Active</h3>
        </div>
  )
}

ActiveTask.propTypes  = {
  data: employeePropTypes,
};
export default ActiveTask
