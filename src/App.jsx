// Install React-Bootstrap
// Run this command in your project directory:
// npm install react-bootstrap bootstrap

// Import Bootstrap CSS in your project:
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Container, Table, Modal, Form, Button, Card } from 'react-bootstrap';

function App() {
  // State for table data
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
  ]);

  // State for form inputs
  const [form, setForm] = useState({ name: '', email: '' });

  // State to control modal visibility
  const [showModal, setShowModal] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email) {
      const newData = { id: data.length + 1, ...form };
      setData([...data, newData]);
      setForm({ name: '', email: '' });
      setShowModal(false); // Close the modal after adding data
    }
  };

  return (
    <div className="bg-light" style={{ minHeight: '100vh' }}>
      <Container fluid className="p-0">
        {/* Page Title */}
        <div className=" text-center py-4 mb-4">
          <h2>Simple Full-Page Table Design</h2>
        </div>

        {/* Main Content */}
        <Container>
          <Card>
            <Card.Header className="text-center bg-dark text-white">
              <h4>Data Management</h4>
            </Card.Header>

            <Card.Body>
              {/* Button to open modal */}
              <div className="text-end mb-3">
                <Button variant="success" onClick={() => setShowModal(true)}>
                  + Add Data
                </Button>
              </div>

              {/* Table to display data */}
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Container>

        {/* Modal for adding data */}
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Add Data
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
}

export default App;
