import { createContext, useState } from "react";
import employeeData from "../data";

export const EmployeeListContext = createContext();

const EmployeeListContextProvider = (props) => {
    const [employees, setEmployees] = useState([employeeData])

    return (
        <EmployeeListContext.Provider value={{employees}}>
            {props.children}
        </EmployeeListContext.Provider>
    )
}

export default EmployeeListContextProvider;