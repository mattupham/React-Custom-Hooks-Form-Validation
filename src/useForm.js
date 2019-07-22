import { useState, useEffect } from "react";

const useForm = (callback, validate, fields) => {
  console.log(fields)
  const valuesInitialState = fields.reduce((acc, field) => {
    console.log(field)
    acc[field] = '';
    return acc;
  }, {});
  const [values, setValues] = useState(valuesInitialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = event => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return {
    handleChange,
    handleSubmit,
    values,
    errors
  };
};

export default useForm;
