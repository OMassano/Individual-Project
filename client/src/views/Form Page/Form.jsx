import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getTemps } from "../../redux/action";

const Form = () => {
  const dispatch = useDispatch();
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

    const { minWeight, maxWeight, minHeight, maxHeight, ...rest } = form;
    const weight = `${minWeight}-${maxWeight}`;
    const height = `${minHeight} - ${maxHeight}`;
    const formData = { ...rest, weight, height };
    console.log(formData);
    axios
      .post("http://localhost:5002/dogs", formData)
      .then(() =>
        alert(
          `${form.name} was created successfully and is now in our dog database!`
        )
      )
      .catch((error) => alert(error));
  };
  useEffect(() =>{
    dispatch(getTemps())
  }, [])
  // const viewTemps = () => {
  //   dispatch(getTemps());
  // };
  const temperaments = useSelector((state) => state.temperaments);

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
        <label>Minimum Height: </label>
        <input
          type="text"
          value={form.minHeight}
          name="minHeight"
          onChange={changeHandler}
        />
      </div>
      <div>
        <label>Maximum Height: </label>
        <input
          type="text"
          value={form.maxHeight}
          name="maxHeight"
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
        <select
          multiple
          value={form.temperament}
          name="temperament"
          onChange={changeHandler}
          // onClick={viewTemps}
        >
          {temperaments &&
            temperaments.map((temp) =>
              temp.name ? <option key={temp.id}>{temp.name}</option> : null
            )}
        </select>
      </div>

      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default Form;
