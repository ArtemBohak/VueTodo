<script setup lang="ts">
type Props = { modelValue: string };
type Emits = {
  (event: "update:modelValue", value: string): void;
};

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const newValue = target.value.split("-").reverse().join("-");
  console.log(newValue)
  emit("update:modelValue", newValue);
};
</script>

<template>
  <div>
    <input
      @input="onInput"
      :value="props.modelValue"
      class="date-input"
      type="date"
    />
  </div>
</template>

<style lang="css" scoped>
.date-input {
  @apply text-xl rounded-sm w-full py-1 px-2 shadow-md;
}
</style>
