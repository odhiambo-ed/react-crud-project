import { createContext, useEffect, useState } from "react";
import employeeData from "../../data";
export const EmployeeListContext = createContext();

const EmployeeListContextProvider = (props) => {
  const [employees, setEmployees] = useState([employeeData]);

  useEffect(() => {
    setEmployees(JSON.parse(localStorage.getItem("employees")));
  }, []);

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  });

  return (
    <EmployeeListContext.Provider value={{ employees }}>
      {props.children}
    </EmployeeListContext.Provider>
  );
};

export default EmployeeListContextProvider;
