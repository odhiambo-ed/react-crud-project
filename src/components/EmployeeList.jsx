import { useContext, useState, useEffect } from "react";
import { EmployeeListContext } from "./contexts/EmployeeListContext";
import Employee from "./Employee";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AddForm from "./AddForm";

const EmployeeList = () => {
  const { employees } = useContext(EmployeeListContext);
  const[show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    handleClose()
  }, [employees])

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
            <Button
              onClick={handleShow}
              className="btn"
              data-toggle="modal"
            >
              <i className="material-icons">&#xE147;</i>{" "}
              <span>Add New Employee</span>
            </Button>
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeBotton>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddForm />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} variant="danger">Cancel</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EmployeeList;
