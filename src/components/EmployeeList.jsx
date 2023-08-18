import { useState } from "react";
import Employee from "./Employee";
import employeeData from "../data";

const EmployeeList = () => {
    const [employees] = useState([employeeData]);
  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Carl Employee <b>Register</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <a href="#addEmployeeModal" className="btn" data-toggle="modal">
              <i className="material-icons">&#xE147;</i>{" "}
              <span>Add New Employee</span>
            </a>
          </div>
        </div>
      </div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <Employee employee={employee} />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default EmployeeList;
