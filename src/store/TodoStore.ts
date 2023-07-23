import { ref, Ref, watchEffect } from "vue";

import { FiltersType } from "@/components/UI/Selects/SelectFilter.vue";
import { defineStore } from "pinia";

type TodoStoreType = {
  filter: Ref<FiltersType>;
  changeFilter: (newFilter: FiltersType) => void;
  searchInputRef: Ref<string>;
};

export const useTodoStore = defineStore("todoStore", (): TodoStoreType => {
  const filter = ref<FiltersType>("all");
  const searchInputRef = ref<string>("");

  watchEffect(() => console.log(searchInputRef.value));

  const changeFilter = (newFilter: FiltersType) => {
    filter.value = newFilter;
  };

  return {
    filter,
    changeFilter,
    searchInputRef,
  };
});
