<script setup lang="ts">
import { ref, watch } from "vue";

import CustomInput from "@/components/UI/Inputs/CustomInput.vue";
import CustomSelect, { FiltersType } from "../../UI/Selects/CustomSelect.vue";

type Emits = {
  (event: "changeFilter", newValue: FiltersType): void;
  (event: "changeSearchInputRef", newValue: string): void;
};
const emit = defineEmits<Emits>();

type Props = {
  searchInputRef: string;
};
const props = defineProps<Props>();

const selected = ref<FiltersType>("all");
watch(selected, (newValue, _oldValue) => {
  emit("changeFilter", newValue);
});

const emitUpdateModalValue = (newValue: string) => {
  emit("changeSearchInputRef", newValue);
};
</script>

<template>
  <div class="todo-interact">
    <div class="w-8/12">
      <CustomInput
        placeholder="search"
        @update:modelValue="emitUpdateModalValue"
        :model-value="props.searchInputRef"
      />
    </div>
    <div class="w-4/12">
      <CustomSelect v-model="selected" />
    </div>
  </div>
</template>

<style lang="css" scoped>
.todo-interact {
  @apply flex flex-row justify-center items-center gap-5 w-2/3 mx-auto;
}
</style>
