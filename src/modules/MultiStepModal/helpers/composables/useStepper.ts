import { ref } from "vue";

const useMultiStepForm = (steps: any[]) => {
  const currentStepIndex = ref<number>(1);
  const changeCurrentStepIndex = (step: number) => {
    currentStepIndex.value = step;
  };

  const goNext = () => {
    if (currentStepIndex.value !== steps.length) {
      currentStepIndex.value++;
    }
  };

  const goBack = () => {
    if (currentStepIndex.value !== 1) {
      currentStepIndex.value--;
    }
  };

  return {
    currentStepIndex,
    changeCurrentStepIndex,
    step: steps[currentStepIndex.value - 1],
    goBack,
    goNext,
    steps,
  };
};

export default useMultiStepForm;
