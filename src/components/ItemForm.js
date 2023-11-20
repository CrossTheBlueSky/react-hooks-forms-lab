import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  const [name, setName] = useState("")
  const [category, setCategory] = useState("Produce")
  const newItem = {
    id : uuid(),
    name: name,
    category: category
  }

  function handleSubmit(e){
    e.preventDefault()
    props.onItemFormSubmit(newItem)

  }

  function handleChange(e){
    setName(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={e=>handleChange(e)}/>
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={(e)=>{setCategory(e.target.value)}}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
