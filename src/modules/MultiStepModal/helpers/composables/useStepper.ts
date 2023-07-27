import { ref } from "vue";

const useMultiStepForm = (stepsLength: number) => {
  const currentStepIndex = ref<number>(1);
  const changeCurrentStepIndex = (step: number) => {
    currentStepIndex.value = step;
  };

  const goNext = () => {
    if (currentStepIndex.value !== stepsLength) {
      currentStepIndex.value++;
      return true;
    }
  };

  const goBack = () => {
    if (currentStepIndex.value !== 1) {
      currentStepIndex.value--;
      return true;
    }
  };

  return {
    currentStepIndex,
    changeCurrentStepIndex,
    goBack,
    goNext,
  };
};

export default useMultiStepForm;
