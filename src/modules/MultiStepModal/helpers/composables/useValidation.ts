import { ref } from "vue";

type validators = {
  minLength?: number;
  maxLength?: number;
  required?: boolean;
};

const useValidation = (value: string, validators: validators) => {
  const isValid = ref<boolean>(false);
  if (validators.required && !value) {
    return { errorMessage: "The field can't be empty" };
  }

  if (validators.maxLength && value.length > validators.maxLength) {
    return {
      errorMessage: `The field can't be shorter than ${validators.maxLength} characters`,
    };
  }

  if (validators.minLength && value.length < validators.minLength) {
    return {
      errorMessage: `The field can't be longer than ${validators.minLength} characters`,
    };
  }

  return { errorMessage: "" };
};

export default useValidation;
