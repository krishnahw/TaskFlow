import { useContext, useEffect, useState } from "react";
import "./App.css";
import AdminDashboard from "./component/Dashboard/AdminDashboard";
import Login from "./component/Login";
import EmployeeDashboard from "./component/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthContext";

function App() {
  const [user, setUser] = useState(null);
  const [logInUser, setLogInUser] = useState(null);
  const [authData, setUserDta] = useContext(AuthContext);

  console.log(authData);

  useEffect(() => {
    const storeUser = JSON.parse(localStorage.getItem("login"));

    console.log(storeUser);

    if (storeUser) {
      setUser(storeUser.role);
      setLogInUser(storeUser.data);
    }
  }, []);

  const handlelogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      setLogInUser(authData.admin);
      localStorage.setItem(
        "login",
        JSON.stringify({ role: "admin", data: authData.admin })
      );
    } else if (authData) {
      const employee = authData.find(
        (e) => email === e.email && password === e.password
      );
      if (employee) {
        setUser("employee");
        setLogInUser(employee);
        localStorage.setItem(
          "login",
          JSON.stringify({ role: "employee", data: employee })
        );
      }
    } else {
      alert("Invalid email/password");
    }
  };

  return (
    <>
      {!user && <Login handlelogin={handlelogin} />}

      {user === "admin" && (
        <AdminDashboard setUser={setUser} data={logInUser} />
      )}
      {user === "employee" && (
        <EmployeeDashboard setUser={setUser} data={logInUser} />
      )}
    </>
  );
}

export default App;
