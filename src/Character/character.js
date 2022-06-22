import React from "react";
const Character = (props) => {
  const {id,name,status,species,gender,image} = props;
    return(
        <div>
            <h1>{id}</h1>
            <h2>{name}</h2>
            <h3>{status}</h3>
            <h4>{species}</h4>
            <h5>{gender}</h5>
            <img src={image} alt={name}/>
        </div>
    )
}
export default Character