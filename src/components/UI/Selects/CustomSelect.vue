<script setup lang="ts">
export type FiltersType = "all" | "completed" | "uncompleted";

type Props = { options: string[]; modelValue: FiltersType | string };
const props = withDefaults(defineProps<Props>(), {
  options: () => ["all", "completed", "uncompleted"] as FiltersType[],
});

type Emits = {
  (event: "update:modelValue", value: string): void;
};
const emit = defineEmits<Emits>();

const onChangeHandle = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const newValue = target.value;
  emit("update:modelValue", newValue);
};
</script>

<template>
  <select @change="onChangeHandle" :value="props.modelValue" name="filters" class="custom-select">
    <option
      v-for="item of props.options"
      :value="item"
      :key="item"
    >
      {{ item.charAt(0).toUpperCase() + item.slice(1) }}
    </option>
  </select>
</template>

<style lang="css" scoped>
.custom-select {
  @apply py-1 px-2 text-lg border rounded-sm shadow-md w-full;
}
</style>
