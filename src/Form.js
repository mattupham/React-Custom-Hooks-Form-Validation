import React from "react";
import useForm from "./useForm";
import validate from "./validateLogin";
import "./index.css";

const Form = () => {
// Set default form values you can changed it base on your values form
let formValues = { email: "", password: "" };
//call useForm
  const { handleChange, handleSubmit, values, errors,  } = useForm(
    submit,
    validate,
    formValues
  );

  function submit() {
    console.log("Submitted Succesfully");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>Email</label>
          <div>
            <input
              className={`${errors.email && "inputError"}`}
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
        </div>
        <div>
          <label>Password</label>
          <div>
            <input
              className={`${errors.email && "inputError"}`}
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

// form
// label / input for email
// label / input for password
// signup button

// handle changes
// handle submit

// custom react hook

// handle errors
// show errors if there are errors

export default Form;
