import React from "react";
const Character = (props) => {
  const {id,name,status,species,gender,image} = props;
    return(
        <div>
            <h1>ID:{id}</h1>
            <h2>Name:{name}</h2>
            <h3>Statys:{status}</h3>
            <h4>Species:{species}</h4>
            <h5>Gender:{gender}</h5>
            <img src={image} alt={name}/>
        </div>
    )
}
export default Character