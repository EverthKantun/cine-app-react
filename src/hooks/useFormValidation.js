import { useState, useCallback } from 'react';

export function useFormValidation(initialState) {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    setErrors(prev => {
      if (prev[name]) {
        return { ...prev, [name]: '' };
      }
      return prev;
    });
  }, []);

  const validate = useCallback((rules) => {
    const newErrors = {};
    let isValid = true;

    for (const [field, validators] of Object.entries(rules)) {
      for (const validator of validators) {
        if (!validator.test(formData[field], formData)) {
          newErrors[field] = validator.message;
          isValid = false;
          break; // Stop at first error for the field
        }
      }
    }

    setErrors(newErrors);
    return isValid;
  }, [formData]);

  const resetForm = useCallback(() => {
    setFormData(initialState);
    setErrors({});
  }, [initialState]);

  return { formData, setFormData, errors, setErrors, handleChange, validate, resetForm };
}
