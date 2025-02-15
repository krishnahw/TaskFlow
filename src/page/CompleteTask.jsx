
import { employeePropTypes } from '../utilit/propTypeHelper';

const CompleteTask = ({data}) => {
  return (
    <div className='bg-yellow-200 h-40 w-[45%] rounded-xl py-6 px-9    '>
             <h2 className="text-3xl font-semibold ">{ data.taskTypes.completed }</h2>
             <h3 className="text-2xl mt-10  font-medium">Completed</h3>
        </div>
  )
}
CompleteTask.propTypes  = {
  data: employeePropTypes,
};

export default CompleteTask
