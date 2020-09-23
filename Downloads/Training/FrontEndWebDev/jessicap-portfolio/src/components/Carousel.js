import React from 'react';
import { Container, Row } from 'react-bootstrap';
import microelectronics from '../images/microelectronics.jpg';
import networks from '../images/networks.jpg';
import cybersecurity from '../images/cybersecurity.jpg';
import Card from './Card';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Microelectronics',
                    subTitle: 'My Thesis',
                    imgSrc: microelectronics,
                    text: 'I co-authored a research paper discussing the design process of wireless transceiver blocks for Long Range Radio (LoRa) applications. It is available on the IEEE website, included in the Proceedings of the TENCON 2017 IEEE Region 10 Conference held in Penang, Malaysia.',
                    link: 'https://ieeexplore.ieee.org/document/8228210',
                    source: 'https://c0.wallpaperflare.com/preview/123/966/505/abstract-red-background-blue.jpg',
                    selected: false
                },
                {
                    id: 1,
                    title: 'LTE Networks',
                    subTitle: 'My First Job',
                    imgSrc: networks,
                    text: 'In my three years with Nokia, I have developed different proprietary features in C++ for the LTE tools project as a Research and Development Engineer. In January 2019, I was given the role of being a Scrum Master for our team of 11 members.',
                    link: 'https://careers.nokia.com/page/mn-mobile-networks-346',
                    source: 'https://images.idgesg.net/images/article/2018/08/circular_jigsaw_puzzle_pieces_component_parts_of_a_whole_microservices_by_thomasvogel_gettyimages-495061257_plus_abstract_network_connections_nodes_background_by_matjaz_slanic_gettyimages-629677830_1200x800-100768066-large.jpg',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Cybersecurity',
                    subTitle: 'My New Journey',
                    imgSrc: cybersecurity,
                    text: 'I have been working with Trend Micro for two months. Currently, we are working on a Team Project for our training using AWS, Java, and Python.',
                    link: 'https://careers.trendmicro.com.ph/',
                    source: 'https://madsourcer.com/wp-content/uploads/maxresdefault.jpg',
                    selected: false
                }
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;