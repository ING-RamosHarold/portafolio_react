import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { BiChevronRightCircle } from "react-icons/bi";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Frontend Designer", "Backend Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const Period = 2000;
    
    useEffect(() => {

        let ticker = setInterval(() =>{

            tick();
        },delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {

        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length -1 ) : fullText.substring(0,text.length + 1);
        
        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta/2);
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(Period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }


    return(
       <section className="banner" id="Home">
         <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                   <TrackVisibility>
                   {({isVisible}) =>
                   <div className={isVisible ? "animate_animated__fadeIn" : ""}>
                    <span className="tagline"> Bienvenido a mi Portafolio</span>
                    <h1>{`Hola! soy Harold Ramos`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Frontend Designer", "Backend Designer" ]'><span className="wrap">{text}</span></span></h1>
                    <p>Hola mi nombre es Harold Albert Ramos Salazar, es un gusto presentarme soy estudiante de SENATI en mi 4to semestre de la carrera de 
                        Ingenieria de software con Inteligencia Artificial y me reconozco como un Frontend Developer no diria en su totalidad pero dispuesto a aprender
                        lo que haga falta para crecer como programador.
                    </p>
                    <button onClick={() => console.log('connect')}> Informacion  <BiChevronRightCircle size={25}/> </button>
                   </div>}
                   </TrackVisibility>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Headder Img"/>
                </Col>
            </Row>
         </Container>
       </section>
    )
}