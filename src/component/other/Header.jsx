import { employeePropTypes } from "../../utilit/propTypeHelper";

const Header = (data) => {


  
  const handleLogout = () => {
    localStorage.removeItem("login");
    data.setUser('')
    {/* window.location.reload()  */}
   
   
  };
  
  
  return (
    <div className=" flex items-end justify-between ">
      <h1 className="text-2xl font-medium ">Hello <br />{'Admin'} 👋</h1>
      <button onClick={handleLogout} className="bg-red-500 text-white px-5 py-2 rounded-sm">Log Out</button>
      
    </div>
  )
}


Header.propTypes  = {
  data: employeePropTypes,
  setUser:'string'
};

export default Header;
