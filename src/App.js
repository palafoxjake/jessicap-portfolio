import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Jessica Palafox',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'}
      ],
      home: {
        title: 'Exploring New Worlds',
        subTitle: 'Different Fields in Computer Engineering',
        text: 'Click on the Photos'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Contact Me'
      }
    }
  }
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Jessica Palafox</Navbar.Brand>
              <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="/about">About</Link>
                  <Link className="nav-link" to="/contact">Contact</Link>
                </Nav>
              </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/> } />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title}/> } />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} /> } />
        </Container>
      </Router>
    );
  }
}

export default App;
