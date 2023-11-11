import { useState } from "react";
import {Container,Row,Col} from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {

    const formInitialDetails = {

        firstName:'',
        lastname:'',
        email: '',
        phone:'',
        message: '',

    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText,setButtonText] = useState('Send');
    const [status,setStatus] = useState({});
    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails, 
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
          e.preventDefault();
          setButtonText('Sending...');
          let response = await fetch("http://localhost:5000/contact",{
            method: "POST",
            headers:{
                "Content-Type": "Aplication/json;character=utf-8",
            },
            body: JSON.stringify(formDetails),
          });

          setButtonText("Send");
          let result = response.json();
          setFormDetails(formInitialDetails);
          if(result.code === 200){
            setStatus({success:true, message:'Mensaje enviado con exito!!'});
          }else{
            setStatus({success: false, message:"Algo salio mal , intentalo de nuevo"})
          }
    }

    return (
           
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us"/>
                    </Col>

                    <Col md={6}>
                        <h2>Contactanos</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="Ingresa tu nombre completo..." onChange={(e) => onFormUpdate('firsName', e.target.value)}/>
                                </Col>


                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastname} placeholder="Ingresa tus apellidos completos..." onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                                </Col>


                                <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Ingresa tu correo electronico..." onChange={(e) => onFormUpdate('email', e.target.value)}/>
                                </Col>


                                <Col sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} placeholder="Ingresa tu telefono..." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                                </Col>


                                <Col>
                                  <textarea row="6" value={formDetails.message} placeholder="Ingresa tu mensaje...." onChange={(e) => onFormUpdate('message', e.target.value)} />
                                  <button type="submit"> <span>{buttonText}</span></button>
                                </Col>

                                {

                                    status.message &&
                                    <Col>
                                       <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}