import React from 'react'
import './Card.css'

const Card = (props) => {

    const follow= ()=>{
        alert("followed!");
    };

  return (
    <>
    <div className="card">
        <div className="pic">
            <img src={props.avatar} alt="" />
        </div>
        <div className="info">
            <h3>{props.name}</h3>
            <p>{props.role}</p>
        </div>
        <div className="meta">
            <p>{props.followers} <i className="fa-regular fa-user"></i></p>
            <button onClick={follow}>Follow +</button>
        </div>
    </div>
    </>
  )
}

export default Card