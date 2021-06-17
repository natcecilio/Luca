import {useState, useEffect} from 'react';
import * as emailjs from 'emailjs-com';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState (false);

  const handleChange = e => {
    const { name, value} = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    let templateParams = {
      from_name: values.email,
      name: values.name,
      message: values.message,
     }
     
     emailjs.send(
      'service_9dj7wqm',
      'template_sf77stc',
       templateParams,
      'user_YIX9zV7EXFcnaoQCCcWpK'
     )
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting (true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [callback, errors, isSubmitting]
  );

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;