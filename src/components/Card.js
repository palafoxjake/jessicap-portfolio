import React from 'react';
import CardInfo from './CardInfo';

function Card(props) {
    return(
        <div className="d-inline-block" onClick={(e) => props.click(props.item)}>
            <img className="samp-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
            { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} text={props.item.text} link={props.item.link} source={props.item.source} />}
        </div>
    );
}

export default Card;