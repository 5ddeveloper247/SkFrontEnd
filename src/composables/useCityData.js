// src/composables/useCityData.js
import { ref, onMounted, onBeforeMount } from 'vue';
import axios from 'axios';

export function useCityData() {
    const cityData = ref([]);
    const cityList = ref([]);
    const error = ref({ message: null, hasError: false });
    const loading = ref(true);

    const fetchCityData = async () => {
        try {
            const base_url = import.meta.env.VITE_BASE_URL;
            const response = await axios.get(`${base_url}/api/frontend/composable/city`);
            cityData.value = response.data.cityData;
            cityList.value = cityData.value.map(city => city.NAME);
        } catch (err) {
            error.value = { message: err.message, hasError: true };
        } finally {
            loading.value = false;
        }
    };

    onMounted(() => {
        fetchCityData();
    });

    return {
        cityData,
        cityList,
        error,
        loading,
        fetchCityData
    };
}
