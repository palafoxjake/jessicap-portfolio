import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

function Hero(props) {
    return(
        <Jumbotron className="bg-transparent p-0">
            <Container fluid={true}>
                { props.title && <h1 className="display-3 font-weight-bolder">{props.title}</h1> }
                { props.subTitle && <h3 className="display-5 font-weight-light">{props.subTitle}</h3> }
                { props.text && <h3 className="lead font-weight-light">{props.text}</h3> }
            </Container>
        </Jumbotron>
    );
}

export default Hero;