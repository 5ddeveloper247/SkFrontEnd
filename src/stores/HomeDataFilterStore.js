import { defineStore } from 'pinia';

export const useFormDataStore = defineStore('formData', {
  state: () => ({
    filterData: {},
  }),
  actions: {
    setFilterData(data) {
      this.filterData = data;
    },
  },
});
