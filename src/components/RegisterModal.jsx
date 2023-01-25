import React, {useState} from "react";
import { Button, Form, Modal } from "react-bootstrap";
function RegisterModal() {

    const [name, setName] = useState("");
    const [show, setShow] = useState(false);
    const [showSucces, setShowSucces] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:8080/register", {
            method: 'POST',
            body: JSON.stringify({
                name: name
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((res) => {
            if (!res.ok) {
                alert("Username already taken");
            }
            else {
                setShow(false);
                setShowSucces(true);
                setName("");
            }
        });
    }

    return (
        <>
        <Button onClick={() => setShow(true)}>Register</Button>
        <Modal
            centered
            keyboard={false}
            show={show}
            onHide={() => setShow(false)}
        >
            <Modal.Header closeButton>
                <Modal.Title>Register</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form
                onSubmit={handleSubmit}
                >
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" required onChange={(e) => setName(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit </Button>
                </Form>
            </Modal.Body>
            </Modal>
            <Modal
            centered
            keyboard={false}
            show={showSucces}
            onHide={() => setShowSucces(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Success</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Registration successful</p>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default RegisterModal;