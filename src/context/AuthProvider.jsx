import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "./AuthContext";
import { getLocalStorage, setLocalStorage } from "../utilit/LocalStorage"; // ✅ Import both functions

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    //  Ensure localStorage is initialized
    setLocalStorage();

    //  Now fetch the stored data
    const { employees } = getLocalStorage();
    setUserData( employees );
  }, []);

  return (
    <AuthContext.Provider value={[userData , setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Add PropTypes validation
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
