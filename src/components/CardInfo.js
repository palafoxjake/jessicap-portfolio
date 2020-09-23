import React from 'react';
import { useSpring, animated } from 'react-spring';

function CardInfo(props) {
    const style = useSpring({opacity: 1, from: {opacity: 0}});

    return(
       <animated.div className="samp-card-info" style={style}>
            <p className="samp-card-title">{props.title}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer"><p className="samp-card-subtitle">{props.subTitle}</p></a>
            <p className="samp-card-text">{props.text}</p> 
            <p className="samp-card-source"><a href={props.source} target="_blank" rel="noopener noreferrer">Image Source</a></p> 
        </animated.div>
    );
}

export default CardInfo;