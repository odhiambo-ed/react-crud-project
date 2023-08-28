import { createContext, useEffect, useState } from "react";
import employeeData from "../../data";
import { v4 as uuidv4 } from 'uuid';



export const EmployeeListContext = createContext();

const EmployeeListContextProvider = (props) => {
  const [employees, setEmployees] = useState([employeeData]);
  

  const addEmployee = (id, name, address, phone) => {
    setEmployees([...employees, {id:uuidv4(), name, address, phone}]);
  }

  useEffect(() => {
    // Save to localStorage
    localStorage.setItem("employees", JSON.stringify(employeeData));

    // Retrieve from localStorage and update state
    setEmployees(JSON.parse(localStorage.getItem("employees")));
  }, []);

  return (
    <EmployeeListContext.Provider value={{ employees, addEmployee }}>
      {props.children}
    </EmployeeListContext.Provider>
  );
};

export default EmployeeListContextProvider;
