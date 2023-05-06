import React from "react";
import "../index.scss";
import OneRecipie from "./OneRecipie"

const AllRecepies = (props ,handleDelete) => {

  return (
    
    <div className="card">
        <button className="delete" onCanPlay={handleDelete}>delete</button>
        <button className="update">update </button>

        <div>
        { data.map((e,i)=>{
             return (
          <div className="card-container" key={i}>
        {/* <>
          <div className="header">
            <img
              className="img"
              src={data.e.recepie_Image}
              alt="food"
            />
          </div>
          <div className="text">
            <h1 className="food">{data.e.recepie_Name}</h1>
            <i> {data.e.Cook_Time}</i> <br />
            <i> {data.e.Serves} </i>
            
          </div> */}
          <div>        
          <OneRecipie e={e} i={i} props={props} handleDelete={handleDelete}/>
          </div>

        </div>     
             ) 
        })}
        </div> 
        </div>
  );
 
  
};

export default AllRecepies;
