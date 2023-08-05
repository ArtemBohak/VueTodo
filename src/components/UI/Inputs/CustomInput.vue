<script setup lang="ts">
type Props = {
  modelValue: string;
  placeholder: string;
};
const props = defineProps<Props>();

type Emits = {
  (event: "update:modelValue", value: string): void;
};
const emit = defineEmits<Emits>();

const onInputHandle = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const newValue = target.value;
  emit("update:modelValue", newValue);
};
</script>

<template>
  <input
    :value="props.modelValue"
    @input="onInputHandle"
    :placeholder="props.placeholder"
    class="custom-input"
  />
</template>

<style lang="css" scoped>
.custom-input {
  @apply text-xl rounded-sm w-full py-1 px-2 shadow-md;
}
</style>
