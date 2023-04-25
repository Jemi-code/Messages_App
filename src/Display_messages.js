import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';
import { useState } from 'react';

// const [title, message] = ['Sip', 'I wanna sip it boo'];

const Display_messages = (props) => {
    const [show, setShow] = useState(false);

    const showModal = () => {setShow(true)}
    const hideModal = () => {setShow(false)}

    const mess = useSelector((state) => state.messageReducer);
    //console.log(mess);
    //const newMessages = props.messages;
    const newMessages = mess;

    return (
        <div>
            <h1>Messages</h1>
            <Container>
                {newMessages.map((message, index) => 
                <Card key = {index}>
                <Card.Body>
                <Card.Title>Title: {message.title}</Card.Title>
                <Card.Text>Message: {message.messageTxt}</Card.Text>
                <Button onClick = {showModal} variant = "danger">Delete</Button> 
                </Card.Body>

                <Modal show = {show} onHide={hideModal}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>Are you sure you want to delete this message</Modal.Body>
                <Modal.Footer>
                    <Button variant = "secondary" onClick = {hideModal}>
                        Close
                    </Button>
                    <Button variant = "primary" onClick = {() => props.delMessage(index)}>
                        Delete Message
                    </Button>
                </Modal.Footer>
                </Modal>
                </Card>)}
            </Container>

    
        </div>
    );
}

export default Display_messages;