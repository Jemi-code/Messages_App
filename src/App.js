import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from './Form.js';
import DisplayMessages from './Display_messages';
import { addMessage, deleteMessage } from './redux/productActions.js';
import {useState} from 'react';
import { useDispatch } from 'react-redux';


function App() {
  const [inputs, setInputs] = useState({});
  //const [messages, setMessages] = useState([{title: "Hi", messageTxt: "I am Jemimah"}]);

 //const message = useSelector((state) => state.messageReducer);
 const dispatch = useDispatch();


  const handleSubmit = () => {
    //setMessages([...messages, inputs]);
    dispatch(addMessage(inputs));
    setInputs({});
  }

  const delMessage = (id) => {
    // const filteredMessages = messages.filter((item, i) => {
    //     return i !== id;
    // });

    // setMessages(filteredMessages);

    dispatch(deleteMessage(id));
}

  return (
      <Container>
      <Row className = "align-items-center" style = {{height: "100vh"}}>
        <Col md={4}> 
        <Form 
          setInputs = {setInputs} 
          inputs = {inputs} 
          handleSubmit = {handleSubmit}
        />
        </Col>
        <Col md={8}>
        <DisplayMessages 
          inputs = {inputs} 
          //messages = {messages}
          delMessage = {delMessage}
        />
        </Col>
      </Row>
      </Container>
  );
}

export default App;

//setInputs = {setInputs} inputs = {inputs} 
//inputs = {inputs} 
