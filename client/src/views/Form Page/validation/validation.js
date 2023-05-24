const validate = (form) => {
  const errors = {};

  if (!form.name) {
    errors.name = "Please enter a dog breed/name";
  } else if (!/^[A-Za-z\s]+$/.test(form.name)) {
    errors.name =
      "The breed/name must only contain letters and spaces; Please enter a valid name";
  } else if (form.name.length > 30) {
    errors.name = "The breed/name must contain no more than 30 characters";
  }
//---------------------------------------------------------------------------------------------------------------------------------
  if (!form.minHeight) {
    errors.minHeight = "Please enter a minimum height";
  } else if (isNaN(form.minHeight)) {
    errors.minHeight = "Minimum height must be a valid number";
  } else if (Number(form.minHeight) < 5 || Number(form.minHeight) > 40) {
    errors.minHeight = "Height must be within 5 and 40 inches";
  }

  if (!form.maxHeight) {
    errors.maxHeight = "Please enter a maximum height";
  } else if (isNaN(form.maxHeight)) {
    errors.maxHeight = "Maximum height must be a valid number";
  } else if (Number(form.maxHeight) < 5 || Number(form.maxHeight) > 40) {
    errors.maxHeight = "Height must be within 5 and 40 inches";
  } else if (Number(form.minHeight) > Number(form.maxHeight)) {
    errors.maxHeight =
      "Minimum height cannot be greater than maximum height. Please ensure your minimum is a lesser number than your maximum";
  }
//---------------------------------------------------------------------------------------------------------------------------------
if (!form.minWeight) {
    errors.minWeight = "Please enter a minimum weight";
  } else if (isNaN(form.minWeight)) {
    errors.minWeight = "Minimum weight must be a valid number";
  } else if (Number(form.minWeight) < 3 || Number(form.minWeight) > 250) {
    errors.minWeight = "Weight must be between 3 and 250 lbs";
  }

  if (!form.maxWeight) {
    errors.maxWeight = "Please enter a maximum weight";
  } else if (isNaN(form.maxWeight)) {
    errors.maxWeight = "Maximum weight must be a valid number";
  } else if (Number(form.maxWeight) < 3 || Number(form.maxWeight) > 250) {
    errors.maxWeight = "Weight must be between 3 and 250 lbs";
  } else if (Number(form.minWeight) > Number(form.maxWeight)) {
    errors.maxWeight =
      "Minimum weight cannot be greater than maximum weight. Please ensure your minimum is a lesser number than your maximum";
  }
//---------------------------------------------------------------------------------------------------------------------------------
 if(!form.life_span){
    errors.life_span="Please enter your dogs lifespan in numbers"
 }
//  else if (isNaN(form.life_span)) {
//     errors.life_span = "Invalid format. Enter the lifespan as a valid number";
//   }
  return errors;
};

export default validate;
