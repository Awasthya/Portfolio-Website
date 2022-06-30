import React from 'react'
import './cards.css';
const Card = (props) => {
    return (
        <div>
            <div className="box btn_shadow">
                    <img src={props.image} alt='no reachable' />
                
                <div className='category'>
                    <span>{props.category}</span>
                    <label>
                        <i className='far fa-heart'>{props.totalLike}</i>
                    </label>
                </div>
                <div className="title">
                    <h2>{props.title}</h2>
                    <a href="#proup" className="arrow">
                        <i className="fas fa-arrow-right"></i>
                    </a>
                </div>

            </div>
        </div>
    );
}

export default Card