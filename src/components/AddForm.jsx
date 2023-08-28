import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useContext, useState } from 'react';
import { EmployeeListContext } from './contexts/EmployeeListContext';

const AddForm = () => {
  const { addEmployee } = useContext(EmployeeListContext);

  const [newEmployee, setNewEmployee] = useState({name:"", email:"", address:"", phone:""});

  const handleChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
   }

  const { name, email, address, phone } = newEmployee;

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(name, email, address, phone)
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={(e) => handleChange(e)}
          className="mb-3"
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => handleChange(e)}
          className="mb-3"
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Address"
          name="address"
          value={address}
          onChange={(e) => handleChange(e)}
          className="mb-3"
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={(e) => handleChange(e)}
          className="mb-3"
          required
        />
      </Form.Group>
      <Button variant="success w-100" type="submit">
        Add Employee
      </Button>
    </Form>
  );
}

export default AddForm