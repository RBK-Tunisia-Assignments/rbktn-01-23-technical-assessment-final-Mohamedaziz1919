import React, { useState } from "react";
import "../App.css";
import { postOne } from "../../../server/database-mysql";

const Add = () => {
  const[recepie_Image,setRecepie_name]=useState("")
  const[cook_Time,setCook_Time]=useState("")
  const[prep_Time,setPrep_Time]=useState("")
  const[serves,setServes]=useState("")
  const[recepie_Ingredients,setRecepie_Ingredients]=useState("")
  const[categorie,setCategorie]=useState("")
  const[recepie_Description,setRecepie_Description]=useState("")
  
 
  const handleAdd = () => {
    const recipe = {
      recepie_Id,
      Cook_Time,
      Prep_Time,
      categorie,
      Serves,
      recepie_Name,
      recepie_Description,
      recepie_Imag,
      recepie_Ingredients
    };
    console.log("from post",post);
    postOne(recipe);
  }
  return (
    <div className="add-recipe-form ">
      <div className="form-group">
        <label>Name:</label>
        <input type="text" placeholder="Name" />
      </div>
      <div className="form-group">
        <label>Cook Time:</label>
        <input type="number" placeholder="Cooking Time" />
      </div>
      <div className="form-group">
        <label>Prep Time:</label>
        <input type="number" placeholder="Preparation Time" />
      </div>
      <div className="form-group">
        <label>Serves:</label>
        <input type="number" placeholder="serves" />
      </div>
      <div className="form-group">
        <label>Category:</label>
        <input type="text" placeholder="Category" />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <input type="text" placeholder="Description" />
      </div>
      <div className="form-group">
        <label>Ingredients:</label>
        <input placeholder="Ingredients" />
      </div>

      <div className="form-group">
        <label>Image:</label>
        <input type="text" placeholder="Image URL" />
      </div>
      <button className="create-recipe-btn" onClick={handleAdd}>Create Recipe</button>
    </div>
  );
};
export default Add;
