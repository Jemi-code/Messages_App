import React, { useState }  from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
//import { useState, useEffect } from 'react';

const InputForm = (props) => {
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);

    //document.onload

    const clearText = () => {
        props.handleSubmit();
        document.getElementById("textarea").value = '';
    }

    const showModal = (event) => { 
        const form = event.currentTarget;
        if(form.checkValidity() === false){
            // event.stopPropagation();
            setShow(false);
        }
            setValidated(true);
            event.preventDefault(); 
            setShow(true);
        
    }
    const hideModal = () => { setShow(false) };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        props.setInputs(values => ({...values, [name]: value}));

        const form = event.currentTarget;
        if(form.checkValidity() === false){
            event.stopPropagation();
        } else {
        setValidated(true);
        }
    }

    return (
        <div>
            <h3>Input Message here</h3>
            <Form validated = {validated} onSubmit={showModal}>
                <Form.Group controlId="validationCustom01">
                    <Form.Label>Input title here: 
                        <Form.Control
                        required
                        type = "text"
                        value = {props.inputs.title || ""} 
                        name = "title"
                        id = "title"
                        onChange={handleChange}
                        placeholder = "Title" />
                        <Form.Control.Feedback type = "invalid">Please Provide a Title for your message</Form.Control.Feedback>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Label>
                </Form.Group>
                <Form.Group controlId="validationCustom02">
                    <Form.Label>Input message here: </Form.Label>
                        <Form.Control 
                        as = "textarea"
                        required
                       value = {props.inputs.messTxt}
                        name = "messageTxt"
                        onChange={handleChange}
                        id = "textarea"
                         placeholder = "Message" />
                         <Form.Control.Feedback type = "invalid">Please input your message</Form.Control.Feedback>
                         <Form.Control.Feedback>Looks good!!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Button 
                    type = "submit"
                    variant = "primary"
                    //onClick = {showModal}
                    >Submit</Button>
                </Form.Group>
            </Form>

            <Modal show = {show} onHide={hideModal}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>Are you sure you want to send this message?
                    <p>Make sure all fields are filled</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant = "secondary" onClick = {hideModal}>
                        Close
                    </Button>
                    <Button variant = "primary" onClick = {clearText}>
                        Send Message
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default InputForm;