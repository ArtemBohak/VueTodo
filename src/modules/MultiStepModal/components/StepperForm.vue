<script setup lang="ts">
import useStepper from "../helpers/composables/useStepper";

import DumbButton from "@/components/UI/Buttons/DumbButton.vue";

type Props = {
  isValid: boolean;
  stepsLength: number;
};
const props = defineProps<Props>();

type Emits = {
  (event: "onSubmit"): void;
  (event: "changeCurrentStepIndex", step: number): void;
};
const emit = defineEmits<Emits>();

const { goBack, goNext, currentStepIndex } = useStepper(props.stepsLength);
</script>

<template>
  <form @submit.prevent="emit('onSubmit')">
    <h1>{{ currentStepIndex }} / {{ props.stepsLength }}</h1>
    <div class="modal-step">
      <slot :currentStepIndex="currentStepIndex"></slot>
    </div>
    <div class="dumb-buttons">
      <DumbButton
        type="button"
        v-if="currentStepIndex !== 1"
        title="Back"
        @click="goBack"
      />
      <!-- <DumbButton
        :type="currentStepIndex === 3 ? 'submit' : 'button'"
        :title="currentStepIndex >= 3 ? 'Add' : 'Next'"
        @click="currentStepIndex !== 3 && goNextHandle()"
      /> -->
      <DumbButton
        type="button"
        v-if="currentStepIndex !== 3"
        @click="goNext"
        title="Next"
      />
      <DumbButton type="submit" v-if="currentStepIndex === 3" title="Add" />
    </div>
  </form>
</template>

<style lang="css" scoped>
.dumb-buttons {
  @apply flex flex-row w-full gap-5;
}

form {
  @apply flex flex-col justify-between h-full;
}
</style>
