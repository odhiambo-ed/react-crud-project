import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const AddForm = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Name"
          className="mb-3"
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="email"
          placeholder="Email"
          className="mb-3"
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Address"
          className="mb-3"
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Phone"
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