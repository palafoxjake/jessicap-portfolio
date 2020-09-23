import React from 'react';
import Hero from '../components/Hero';
import { Container } from 'react-bootstrap';

function AboutPage(props) {

    return(
        <>
            <Hero title={props.title}/>
            <Container fluid={true}>
                <p>Hello, my name is Jessica Palafox. Everyone calls me Jake. </p>
                <p>I graduated with a bachelor's degree in Computer Engineering in UP Diliman in 2017. I am a member of UP Circuit, a home organization in UP Electrical and Electronics Engineering Institute. I am also an affiliate of UP Microelectronics and Microprocessors Laboratory, which guided me in writing my thesis along with other uLab affiliates.</p>
                <p>I have three years of experience in Agile Software Development focusing on specification analysis, code design, LTE feature development using C++, software testing, and fault investigation. In Nokia, I worked as a persistent and responsible scrum master who leads a research and development team of ten members to organize, plan, and implement items in the feature backlog. I am a servant-leader who strives to manage the team dynamics and reduce the fault count by efficient monitoring and supervision.</p>
                <p>Having explored different fields in Computer Engineering, or new worlds as I have put in my homepage, I am still striving to learn new things and share my knowledge with others.</p>
            </Container>
        </>
    );
}

export default AboutPage;