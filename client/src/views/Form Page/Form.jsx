import { useState } from "react";
import axios from "axios";
const Form = () => {
  const [form, setForm] = useState({
    name: "",
    image: "",
    height: "",
    minWeight: "",
    maxWeight:"",
    weight:"",
    life_span: "",
    temperament: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    image: "",
    height: "",
    weight: "",
    life_span: "",
    temperament: [],
  });

const changeHandler = (event) => {
    // as i type
    const property = event.target.name; // place in form
    let value = event.target.value; // whats written in form

  if (property === "temperament") {
    value = value.split(",").map((temp) => temp.trim());
  }
  
    validate({ ...form, [property]: value });
    setForm({ ...form, [property]: value });
};


  const validate = (form) => {};

  const submitHandler = (event) => {
    event.preventDefault();
  
    const { minWeight, maxWeight, ...rest } = form;
    const weight = `${minWeight}-${maxWeight}`;
    const formData = {...rest,weight,};
    console.log(formData)
    axios.post("http://localhost:5002/dogs", formData).then((res) => alert(res)).catch(error=>alert(error))
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Breed: </label>
        <input
          type="text"
          value={form.name}
          name="name"
          onChange={changeHandler}
        />
      </div>
      <div>
        <label>Image URL: </label>
        <input
          type="text"
          value={form.image}
          name="image"
          onChange={changeHandler}
        />
      </div>
      <div>
        <label>Height: </label>
        <input
          type="text"
          value={form.height}
          name="height"
          onChange={changeHandler}
        />
      </div>
      <div>
        <label>Minimum weight: </label>
        <input
          type="text"
          value={form.minWeight}
          name="minWeight"
          onChange={changeHandler}
        />
      </div>
            <div>
        <label>Maximum weight: </label>
        <input
          type="text"
          value={form.maxWeight}
          name="maxWeight"
          onChange={changeHandler}
        />
      </div>
      <div>
        <label>LifeSpan: </label>
        <input
          type="text"
          value={form.life_span}
          name="life_span"
          onChange={changeHandler}
        />
      </div>
      <div>
        <label>Temperaments: </label>
        <input
          type="text"
          value={form.temperament}
          name="temperament"
          onChange={changeHandler}
        />
      </div>
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default Form;
