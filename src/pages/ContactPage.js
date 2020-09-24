import React from 'react';
import Hero from '../components/Hero';
import { makeStyles, Button } from '@material-ui/core';
import { Facebook, Twitter, Instagram, LinkedIn, EmailSharp } from '@material-ui/icons';
import { Container } from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
}));

function ContactPage(props) {
    const classes = useStyles();

    return(
        <>
            <Hero title={props.title}/>
            <Container>
                <Button
                    variant="contained"
                    color="default"
                    href="mailto:palafoxjake@gmail.com"
                    className={classes.button}
                    startIcon={<EmailSharp />}
                >
                    palafoxjake&#64;gmail.com
                </Button>
                <Button
                    variant="contained"
                    color="default"
                    href="https://www.facebook.com/palafoxjake" target="_blank" rel="noopener noreferrer"
                    className={classes.button}
                    startIcon={<Facebook />}
                >
                    Jake Palafox
                </Button>
                <Button
                    variant="contained"
                    color="default"
                    href="https://twitter.com/palafoxjake" target="_blank" rel="noopener noreferrer"
                    className={classes.button}
                    startIcon={<Twitter />}
                >
                    &#64;palafoxjake
                </Button>
                <Button
                    variant="contained"
                    color="default"
                    href="https://www.instagram.com/hahaloljake/" target="_blank" rel="noopener noreferrer"
                    className={classes.button}
                    startIcon={<Instagram />}
                >
                    &#64;hahaloljake
                </Button>
                <Button
                    variant="contained"
                    color="default"
                    href="https://ph.linkedin.com/in/jessica-palafox" target="_blank" rel="noopener noreferrer"
                    className={classes.button}
                    startIcon={<LinkedIn />}
                >
                    Jessica Palafox
                </Button>
        </Container>
    </>
    );
}

export default ContactPage;