<script setup lang="ts">
type Props = {
  modelValue: string;
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
    class="search-input"
    placeholder="type to search"
  />
</template>

<style lang="css" scoped>
.search-input {
  @apply text-xl rounded-sm w-1/2 py-1 px-2 shadow-md;
}
</style>
