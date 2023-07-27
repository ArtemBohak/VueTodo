import { ref } from "vue";

type validators = {
  minLength?: number;
  maxLength?: number;
  required?: boolean;
};

const useValidation = (validators: validators) => {
  const isValid = ref<boolean>(false);
};

export default useValidation;
