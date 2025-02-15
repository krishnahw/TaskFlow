import { employeePropTypes } from "../../utilit/propTypeHelper";


const Complete = ({data}) => {
  return (
    <div className="h-full w-[300px] bg-violet-400 rounded-xl flex flex-col items-center p-3 flex-shrink-0">
    <div className="flex justify-between  m-3 w-full ">
      <h3 className="  text-xl px-2 py-1 rounded  bg-red-500">{data.category}</h3>
      <h4 className="pt-2 font-semibold-sm">{data.date}</h4>
    </div>
    <h2 className="mt-5 text-3xl font-semibold">{data.title}</h2>
    <p className=" text-xl mt-5">
    {data.description}
    </p>

    <div className="mt-10">
      <p className="bg-emerald-700 rounded py-2 px-3 font-medium">
        Completed!
      </p>
    </div>
  </div>
  )
}

export default Complete
Complete.propTypes = {
  data: employeePropTypes,
};
