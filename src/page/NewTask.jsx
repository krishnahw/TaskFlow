
import { employeePropTypes } from '../utilit/propTypeHelper';

const NewTask = ({data}) => {
  return (
    <div className='bg-green-400 h-40 w-[45%] rounded-xl py-6 px-9    '>
    <h2 className="text-3xl font-semibold ">{ data.taskTypes?.newTask || 0 }</h2>
    <h3 className="text-2xl mt-10  font-medium">New Task</h3>
</div>
  )
}
NewTask.propTypes  = {
  data: employeePropTypes,
};

export default NewTask
