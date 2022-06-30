import React from "react"
import './Cards.css';

const Card = (props) => {
  return (
    <div className="outer">
      <div className='box btn_shadow card'>
        <div className='title_content d_flex'>
          <div className='div1'>
            <h2>{props.college}</h2>
                      <p>{props.title}</p>
                      <p>CGPA {props.CGPA}</p>
          </div>
          <div className='div2'>
                    <span>{props.startData}-{props.endData}</span>
                <span> {props.Location}</span>
          </div>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default Card