import { Container,Row,Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';

export const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailchimpForm />
                    
                    <Col sm={6}>
                        <img  src={logo} alt="logo"/>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/harold-ramos-422733233/"><img src={navIcon1}/></a>
                            <a href="https://www.facebook.com/profile.php?id=100093945433338"><img src={navIcon2}/></a>
                            <a href="https://www.instagram.com/harold_ramos18/"><img src={navIcon3}/></a>
                            <a href="https://web.whatsapp.com/"><img src={navIcon4}/></a>
                        </div>
                        <p>CopyRight 2023. Derechos Reservados a Master_Program_HR</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}