
import { employeePropTypes } from '../utilit/propTypeHelper';

const TotalTask = ({data}) => {
  return (
    <div className='bg-red-400 h-40 w-[45%] rounded-xl py-6 px-9    '>
    <h2 className="text-3xl font-semibold ">0</h2>
    <h3 className="text-2xl mt-10  font-medium">Fail Task</h3>
</div>
  )
}

TotalTask.propTypes  = {
  data: employeePropTypes,
};

export default TotalTask
