import { useState, useEffect } from "react";

const useForm = (callback, validate, formValues) => {
  // console.log(formValues);
  const [values, setValues] = useState(formValues);
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
      // clear form after send
      clear(formValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors, isSubmitting]);

  // Clear form input by return initial value
  const clear = formValues => {
    setValues(formValues);
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors
  };
};

export default useForm;
