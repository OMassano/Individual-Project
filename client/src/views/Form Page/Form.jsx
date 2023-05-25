import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getTemps } from "../../redux/action";
import validate from "./validation/validation";

const Form = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getTemps())
  })

  const temperaments = useSelector((state) => state.temperaments);

  const [form, setForm] = useState({
    name: "",
    image: "",
    minHeight: "",
    maxHeight: "",
    height: "",
    minWeight: "",
    maxWeight: "",
    weight: "",
    life_span: "",
    temp1: "",
    temp2: "",
    temperament: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    image: "",
    minHeight: "",
    maxHeight: "",
    height: "",
    minWeight: "",
    maxWeight: "",
    weight: "",
    life_span: "",
    temp1: "",
    temp2: "",
    temperament: [],
  });

  const changeHandler = (event) => {
    // as i type
    const property = event.target.name; // place in form
    let value = event.target.value; // whats written in form

    if (property === "name") {
      value = value.replace(/\b\w/g, (c) => c.toUpperCase());// sets letter of each word to caps
    }

    setErrors(validate({ ...form, [property]: value }));

    setForm({ ...form, [property]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const {minWeight,maxWeight,minHeight,maxHeight,temp1,temp2, ...rest} = form;
    const weight = `${minWeight}-${maxWeight}`;
    const height = `${minHeight} - ${maxHeight}`;
    const temperament = [temp1, temp2];
    const formData = { ...rest, weight, height, temperament };
    console.log(formData);

    axios.post("http://localhost:5002/dogs", formData)
      .then(() =>alert(`${form.name} was created successfully and is now in our dog database!`))
      .catch((error) => alert(error));
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
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <label>Image URL: </label>
        <input type="text" value={form.image} name="image" onChange={changeHandler} />
      </div>
      <div>
        <label>Height (inches): </label>
        <input type="text" value={form.minHeight} name="minHeight" onChange={changeHandler} placeholder="Minimum"/>
        {errors.minHeight && <p>{errors.minHeight}</p>}
      </div>
      <div>
        <input type="text" value={form.maxHeight} name="maxHeight"onChange={changeHandler} placeholder="Maximum"/>
        {errors.maxHeight && <p>{errors.maxHeight}</p>}
      </div>
      <div>
        <label>Weight (lbs): </label>
        <input type="text" value={form.minWeight} name="minWeight" onChange={changeHandler} placeholder="Minimum"/>
        {errors.minWeight && <p>{errors.minWeight}</p>}
      </div>
      <div>
        <input type="text" value={form.maxWeight} name="maxWeight" onChange={changeHandler} placeholder="Maximum"/>
        {errors.maxWeight && <p>{errors.maxWeight}</p>}
      </div>
      <div>
        <label>LifeSpan: </label>
        <input type="text" value={form.life_span} name="life_span" onChange={changeHandler} placeholder="Years"/>
        {errors.life_span && <p>{errors.life_span}</p>}
      </div>
      <div>
        <label>First Temperament: </label>
        <select value={form.temp1} name="temp1" onChange={changeHandler}>
          {temperaments &&
            temperaments.map((temp) =>
              temp.name ? <option key={temp.id}>{temp.name}</option> : null
            )}
        </select>
      </div>

      <div>
        <label>Second Temperament: </label>
        <select value={form.temp2} name="temp2" onChange={changeHandler}>
          {temperaments &&
            temperaments.map((temp) =>
              temp.name ? <option key={temp.id}>{temp.name}</option> : null
            )}
        </select>
        {errors.temp1 && <p>{errors.temp1}</p>}
      </div>

      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default Form;