import { employeePropTypes } from "../../utilit/propTypeHelper";


const New = ({data}) => {
console.log(data);





  return (
    <div className="h-full w-[300px] bg-green-500 rounded-xl flex flex-col items-center p-3 flex-shrink-0">
         <div className="flex justify-between  m-3 w-full ">
            <h3 className="  text-xl px-2 py-1 rounded  bg-red-400">{data.category}</h3>
            <h4 className="pt-2 font-semibold-sm">{data.date}</h4>
          </div>
          <h2 className="mt-5 text-3xl font-semibold">{data.title}</h2>
          <p className=" text-xl mt-5">
            {data.description}
          </p>

          <div className="mt-10 w-full flex justify-between ">
          <button className="bg-emerald-400 rounded py-2 px-3 font-medium">Accept</button>
          <button className="bg-red-600 rounded py-2 px-5 font-medium">Reject</button>
        </div>
        </div>
  )
}

export default New

New.propTypes = {
  data: employeePropTypes,
};