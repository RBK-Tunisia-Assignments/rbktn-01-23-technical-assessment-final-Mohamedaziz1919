import React from "react";
import "../App.css";

const RecepieCard = ({props}) => {
  return (
    <div >
       { props.data.map((i)=>{
        return(
      <div className="receipe-content-area" key={i}>
        <div className="container">
          <div className="header">
          <img
              className="img"
              src={props.recepie_Image }
              alt="food"
            />         
          </div>
          <div className="text">
          <h1 className="food">{props.recepie_Name}</h1>
            <i> {props.Cook_Time}</i> <br />
            <i> {props.Prep_Serves} </i>

            <p className="info">{props.recepie_Description}</p>
          </div>
        </div>
      </div>
        )
       })}
    </div>
  )
};

export default RecepieCard;
