import { useState, useEffect } from "react";

function useForm(initialstate, authenticate) {
  const [values, setValues] = useState(initialstate);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      authenticate();
      setIsSubmitting(false);
    }
  }, [isSubmitting, authenticate]);

  const handleChange = (event) => {
    event.persist();
    setValues((previousValues) => ({
      ...previousValues,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
  };

  return {
    handleSubmit,
    handleChange,
    values,
    isSubmitting,
  };
}

export default useForm;
