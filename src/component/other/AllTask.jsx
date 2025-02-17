import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"


const AllTask = () => {
    const authdData = useContext(AuthContext)
    console.log("alltask",authdData);
    
    
  return (

    
    <div className="h-50   mt-5 p-5">

                <div  className="bg-emerald-700 py-2 px-4 flex justify-between  mb-2 rounded">
                    <h2  className="w-1/5 text-lg font-medium">Employee Name</h2>
                    <h3  className="w-1/5 text-lg font-medium">New Task</h3>
                    <h5  className="w-1/5 text-lg font-medium">Active Task</h5>
                    <h5  className="w-1/5 text-lg font-medium">Complete</h5>
                    <h5  className="w-1/5 text-lg font-medium">Failed</h5>
                </div>
        {authdData[0].map( (d ,idx) =>{
            return(
                <div key={idx} className=" border border-black py-2 px-4 flex justify-between  mb-2 rounded">
                    <h2 className="w-1/5  text-xl font-medium">{d.firstName}</h2>
                    <h3 className="w-1/5 text-xl font-medium">{d.taskTypes?.newTask}</h3>
                    <h5  className="w-1/5 text-xl font-medium">{d.taskTypes?.active}</h5>
                    <h5 className="w-1/5 text-xl font-medium">{d.taskTypes?.completed}</h5>
                    <h5  className="w-1/5  text-red-500 text-xl font-medium">{d.failCount}</h5>

                </div>
            )
        })}

       
    </div>

    
  )
}

export default AllTask
