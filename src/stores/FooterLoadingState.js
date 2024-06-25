import { defineStore } from 'pinia';

export const useFooterStore = defineStore('footerState', {
    state: () => ({
        footerState: false, // Initial state set to true (assuming initially loading)
    }),
    actions: {
        setFooterState(newState) {
            this.footerState = newState;


        },
    },
});
