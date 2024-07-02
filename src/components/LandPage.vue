<template>
    <Loader :isLoading="loading" />
    <div class="container pt-5">
        <nav class=""
            style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);"
            aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Land/Properties</li>
            </ol>
        </nav>

        <div class="row land-con align-items-start">
            <nav class="navbar  col-12 col-lg-3 side-bar-checkboxes navbar-expand-lg">
                <div class="w-100">
                    <div class="d-flex gap-3">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <!-- <h3>
                            Choose Land Details
                        </h3> -->
                    </div>
                    <div class="collapse navbar-collapse w-100" id="navbarSupportedContent">
                        <div class="shadow p-3 p-lg-0 h-100 w-100 rounded-4">
                            <div class="filters d-flex flex-column py-4 px-md-2">
                                <div class="d-flex flex-wrap align-items-center justify-content-between">
                                    <h5>Final Results</h5>
                                    <p><small>{{ propertiesCounter }} Land/Properties</small></p>
                                </div>
                                <!-- <div class="mt-2">
                                    <h6 class="fw-normal">Minimum Price - Maximum Price</h6>
                                </div> -->

                                <div class="range-slider-container">
                                    <div class="row align-items-center justify-content-center">
                                        <div class="col-md-6 my-2 ">
                                            <h6 class="fw-normal">Min Price</h6>
                                            <input v-model.number="filterMinPrice" type="number" min="0"
                                                :max="priceMaxRangeFilterValue" step="1"
                                                class="range-input w-100  border-1">
                                        </div>
                                        <div class="col-md-6 my-2 ">
                                            <h6 class="fw-normal"> Max Price</h6>
                                            <input v-model.number="filterMaxPrice" type="number" min="0"
                                                :max="priceMaxRangeFilterValue" step="1"
                                                class="range-input w-100  border-1" >
                                        </div>
                                        <div class="col-md-12 my-2 d-flex justify-content-start">
                                            <button class="search-button py-0 px-3 border-0" type="button"
                                                @click="handleFilterPrices">Search (<span class="text-white"
                                                    id="minPrice">{{ filterMinPrice }}</span> :
                                                <span class="text-white" id="maxPrice">{{ filterMaxPrice
                                                    }}</span>)</button>
                                        </div>
                                    </div>
                                    <!-- <p>Max: {{ priceMaxRangeFilterValue }}</p> -->
                                    <!-- <div class="price-range d-flex flex-nowrap">
                                        Price: <span id="minPrice">{{ filterMinPrice }}</span> :
                                        <span id="maxPrice">{{ filterMaxPrice }}</span>
                                    </div> -->
                                </div>


                                <div class="mt-2">
                                    <h6>Purpose</h6>
                                </div>


                                <!-- checkx -->

                                <div class="d-flex flex-column">
                                    <div class="m-2 mb-4 w-100">
                                        <div>
                                            <h6>Purpose</h6>
                                            <label class="d-block">
                                                <input type="radio" v-model="Landfilters.purpose" value="Sale"> Sale
                                            </label>
                                            <label class="d-block">
                                                <input type="radio" v-model="Landfilters.purpose" value="Rent"> Rent
                                            </label>
                                        </div>
                                    </div>

                                    <div class="mt-2">
                                        <h6>Home Type</h6>
                                    </div>
                                    <div class="m-2 mb-4 w-100">
                                        <label class="d-block">
                                            <input type="checkbox" v-model="Landfilters.homeType" value="House">
                                            House
                                        </label>
                                        <label class="d-block">
                                            <input type="checkbox" v-model="Landfilters.homeType" value="Flat"> Flat
                                        </label>
                                    </div>

                                    <div class="mt-2">
                                        <h6>Plot</h6>
                                    </div>
                                    <div class="m-2 mb-4 w-100">
                                        <label class="d-block">
                                            <input type="checkbox" v-model="Landfilters.plot" value="Residential Plot">
                                            Residential
                                            Plot
                                        </label>
                                        <label class="d-block">
                                            <input type="checkbox" v-model="Landfilters.plot" value="Commercial Plot">
                                            Commercial
                                            Plot
                                        </label>
                                    </div>

                                    <div class="mt-2">
                                        <h6>Commercial</h6>
                                    </div>
                                    <div class="m-2 mb-4 w-100">
                                        <label class="d-block">
                                            <input type="checkbox" v-model="Landfilters.commercial" value="Office">
                                            Office
                                        </label>
                                        <label class="d-block">
                                            <input type="checkbox" v-model="Landfilters.commercial" value="Shop">
                                            Shop
                                        </label>
                                        <label class="d-block">
                                            <input type="checkbox" v-model="Landfilters.commercial" value="Building">
                                            Building
                                        </label>
                                    </div>

                                    <div class="mt-2">
                                        <h6>City</h6>
                                    </div>
                                    <div class="m-2 mb-4 w-100">
                                        <label class="d-block" v-for="city in cityList" :key="city">
                                            <input type="checkbox" @change="onCityChange" v-model="Landfilters.city"
                                                :value="city">
                                            {{ city }}
                                        </label>
                                    </div>




                                    <!-- Area -->
                                    <div class="mt-2" v-if="selectedAreas.length > 0">
                                        <h6>Area</h6>
                                    </div>
                                    <div class="m-2 mb-4 w-100">

                                        <label class="d-block" v-for="area in selectedAreas">
                                            <input type="checkbox" @change="onAreaChange" v-model="Landfilters.area"
                                                :value="area.NAME">
                                            {{ area.NAME }}
                                        </label>

                                    </div>


                                    <div class="mt-2" v-if="selectedLocation.length > 0">
                                        <h6>Location</h6>
                                    </div>
                                    <div class="m-2 mb-4 w-100">

                                        <label class="d-block" v-for="location in selectedLocation">
                                            <input type="checkbox" @change="onLocationChange"
                                                v-model="Landfilters.location" :value="location.NAME">
                                            {{ location.NAME }}
                                        </label>

                                    </div>

                                    <!-- Location -->


                                    <!-- Sectors -->
                                    <div class="mt-2" v-if="selectedSectors.length > 0">
                                        <h6>Sector</h6>
                                    </div>
                                    <div class="m-2 mb-4 w-100">
                                        <label class="d-block" v-for="sector in selectedSectors">
                                            <input type="checkbox" v-model="Landfilters.sector" :value="sector.NAME">
                                            {{ sector.NAME }}
                                        </label>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div class="col-12 col-lg-9 col-8 my-1 properties-listed">
                <div class="row listing">
                    <div class="row justify-content-between align-items-center properties-for-sale">
                        <div class="col-9">
                            <!-- <h2 class="text-start my-4">Properties for Sale/Rent</h2> -->
                        </div>
                    </div>
                    <div class="col-md-4 my-1" v-for="media in mediaData" :key="media?.id">
                        <RouterLink :to="{ name: 'land-detail', params: { id: media?.id } }">
                            <div class="card border-0 bg-transparent">
                                <img :src="getImageUrl(media)" class="rounded-5" height="300" alt="Image">
                                <div class="card-body">
                                    <h5 class="card-title">PKR {{numFormatter( media?.price )}}</h5>
                                    <p class="card-text elip">{{ media?.property_listing_pape?.extra_info_title }}</p>
                                    <!-- <p><small>{{ media?.property_listing_pape?.extra_info_description }}</small></p> -->
                                </div>
                            </div>
                        </RouterLink>
                        <div class="d-flex align-items-center justify-content-between px-2 ps-3 w-100">
                            <div class="d-flex align-items-center">
                                <div><i class="fa-solid fa-bed pe-2"></i>{{
                                    media?.property_listing_pape?.propertyDetail_bedrooms
                                }}</div>
                                <div class="mx-3"><i class="fa-solid fa-toilet pe-2"></i>{{
                                    media?.property_listing_pape?.propertyDetail_bathrooms }}</div>
                            </div>
                            <div class="d-flex align-items-center">
                                <a class="btn btn-sm nav-sub-links-main text-nowrap px-2 px-md-3 py-1 d-flex flex-nowrap align-items-center justify-content-center"
                                    :href="'mailto:' + media?.pInfo_email" role="button">
                                    <i class="fa-regular fa-envelope pe-2"></i>
                                    <!-- {{ media?.pInfo_email }} -->
                                </a>
                                <a class="btn btn-sm mx-2 nav-sub-links-main text-nowrap px-2 px-md-3 py-1 d-flex flex-nowrap align-items-center justify-content-center"
                                    :href="'tel:' + media?.pInfo_phoneNumber" role="button">
                                    <i class="fa-solid fa-phone pe-2"></i>
                                    <!-- {{ media?.pInfo_phoneNumber }} -->
                                </a>
                            </div>
                        </div>
                    </div>


                </div>
                <!-- <div class="row justify-content-center">
                    <a style="width: fit-content;" href="requestform.html"
                        class="mx-1 my-4 nav-sub-links-2 nav-link text-nowrap px-2 px-md-3 py-1 d-flex flex-column align-items-center justify-content-center"
                        role="button">Load More</a>
                </div> -->
            </div>
        </div>
    </div>
</template>




<script setup>
import { ref, onMounted, watch, computed, onBeforeMount, onBeforeUnmount, onUnmounted } from 'vue';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import { useFormDataStore } from '../stores/HomeDataFilterStore';
import { useRoute, onBeforeRouteLeave } from 'vue-router';
import Loader from './Loader.vue';
import axios from 'axios';
import { useCityData } from '@/composables/useCityData';
import { useFooterStore } from '../stores/FooterLoadingState';
import { numFormatter } from '../helpers/numberFormater';


// Define objects
const route = useRoute();
const $toast = useToast();
const footerState = useFooterStore();
const { cityData, error, cityList, fetchCityData } = useCityData();

// Define reactive variables
const propertiesCounter = ref(0);
const isMobile = ref(false);
const mediaData = ref([]);
const cityListingData = ref([]);
const cityListing = ref([]);
const filterMinPrice = ref(0);
const filterMaxPrice = ref(0);
const initialFetchCompleted = ref(false); // Flag to indicate if the initial fetch is completed

const Landfilters = ref({
    HomePageFilters: '',
    minPrice: '',
    maxPrice: '',
    purpose: '',
    homeType: [],
    plot: [],
    commercial: [],
    city: [],
    area: [],
    sector: [],
    location: [],
    rooms: ''
});

const areaList = ref([]);
const sectorList = ref([]);
const loading = ref(false);
const selectedAreas = ref([]);
const selectedLocation = ref([]);
const selectedSectors = ref([]);
const priceMaxRangeFilterValue = ref(0);



// Function to generate filter data
const generateFilterData = (HomefilterData) => {
    const {
        purpose,
        city,
        homeType,
        rooms,
        plot,
        commercial,
        area,
        sector,
        minPrice,
        maxPrice,
        min_area,
        max_area,
        min_bathrooms,
        max_bathrooms,
        min_bedrooms,
        max_bedrooms,
        min_garages,
        max_garages,
        min_year
    } = HomefilterData;


    // Update Landfilters value
    Landfilters.value.HomePageFilters = HomefilterData;
    Landfilters.value.purpose = purpose || '';
    Landfilters.value.city = city ? [city] : [];
    Landfilters.value.homeType = homeType ? [homeType] : [];
    Landfilters.value.rooms = rooms || '';
    Landfilters.value.plot = plot ? [plot] : [];
    Landfilters.value.commercial = commercial ? [commercial] : [];
    Landfilters.value.area = area ? [area] : [];
    Landfilters.value.sector = sector ? [sector] : [];
    Landfilters.value.minPrice = minPrice || '';
    Landfilters.value.maxPrice = maxPrice || '';
    Landfilters.value.min_area = min_area || '';
    Landfilters.value.max_area = max_area || '';
    Landfilters.value.min_bathrooms = min_bathrooms || '';
    Landfilters.value.max_bathrooms = max_bathrooms || '';
    Landfilters.value.min_bedrooms = min_bedrooms || '';
    Landfilters.value.max_bedrooms = max_bedrooms || '';
    Landfilters.value.min_garages = min_garages || '';
    Landfilters.value.max_garages = max_garages || '';
    Landfilters.value.min_year = min_year || '';
    return true;
};

const handleFilterPrices = () => {
    if (filterMinPrice.value < filterMaxPrice.value) {
        Landfilters.value.minPrice = filterMinPrice.value;
        Landfilters.value.maxPrice = filterMaxPrice.value;
    }
    else {
        $toast.open({
            message: 'Min Price must be less than Max Price',
            type: 'info',
            position: 'top-right'
        });
    }
}

// Function to fetch property data based on filters
const fetchPropertyData = (HomePagefilterCriteria = null) => {
    const base_url = import.meta.env.VITE_BASE_URL;

    let url = `${base_url}/api/frontend/home/property/get`;
    let options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    // If there are filter criteria, fetch filtered results
    if (HomePagefilterCriteria) {
        url = `${base_url}/api/frontend/home/property/getByFilters`;
        options = {
            ...options,
            method: 'POST',
            body: JSON.stringify(Landfilters.value),
        };
    }

    // Fetch data from the API
    loading.value = true;
    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            loading.value = false;


            // Update mediaData with property information
            mediaData.value = data.propertyInfo;

            // Show success toast message
            // $toast.open({
            //     message: 'Property data fetched successfully!',
            //     type: 'success',
            //     position: 'top-right'
            // });
        })
        .catch(error => {
            loading.value = false;
            console.error('Error:', error);

            // Show error toast message
            $toast.open({
                message: 'Failed to fetch property data.',
                type: 'error',
                position: 'top-right'
            });
        });
};





//Watch for changes in Landfilters, but skip the initial mount
watch(
    () => Landfilters.value,
    (newValue, oldValue) => {
        if (initialFetchCompleted.value) {
            fetchPropertyData(newValue);
            console.log(newValue)
            console.log("watchersssssssssssssssssssss")
        }
    },
    { deep: true } // Deep watch to detect nested changes
);








//Initialize on component mount and set the filter data comming from home page
onMounted(() => {
    const formDataStore = useFormDataStore();
    const HomePagefilterCriteria = formDataStore.filterData;
    generateFilterData(HomePagefilterCriteria);

    if (Object.keys(Landfilters.value.HomePageFilters).length) {

        CityListings(); //retrieving the city and its relevant area locations city is comming from home page filter
        fetchPropertyData(Landfilters.value);
    }
    else {

        fetchPropertyData();
    }

    // Set the initial fetch completed flag to true after a delay to ensure the watcher does not trigger on initial setup
    setTimeout(() => {
        initialFetchCompleted.value = true;
    }, 5000); // Delay to ensure the watcher does not trigger prematurely
});




// Counting land properties 
const LandPropertiesCount = computed(() => {
    return mediaData.value.length;
});

// Watcher to log the count whenever it changes
watch(LandPropertiesCount, (newCount) => {
    propertiesCounter.value = newCount;
});


// Function to check if the device is mobile
const checkIsMobile = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    isMobile.value = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
};




// Fetch image URL
const getImageUrl = (media) => {
    return `${import.meta.env.VITE_BASE_URL}/${media?.property_record_files[0]?.image_uri}`;
};

const CityListings = async () => {
    try {
        const base_url = import.meta.env.VITE_BASE_URL;
        const response = await axios.get(`${base_url}/api/frontend/composable/city`);
        cityListingData.value = response.data.cityData;

        // Assuming cityData is directly accessible and has NAME property
        cityListing.value = cityListingData.value.map(city => city);

        // Find the selected city and update selectedAreas
        const selectedCityObject = cityListing.value.find((city) => city.NAME === Landfilters.value.city[0]);
        if (selectedCityObject) {
            selectedAreas.value = selectedCityObject.areas;
        } else {
            selectedAreas.value = [];
        }
    } catch (err) {
        error.value = { message: err.message, hasError: true };
    }
};

const onCityChange = () => {
    const selectedCityObject = cityData.value.find((city) => city.NAME === Landfilters.value.city[0]);
    if (selectedCityObject) {
        selectedAreas.value = selectedCityObject.areas;
    } else {
        selectedAreas.value = [];
    }
    // Reset dependent values
    selectedSectors.value = [];
    selectedLocation.value = [];
};

const onAreaChange = () => {
    const selectedAreaObject = selectedAreas.value.find((area) => area.NAME === Landfilters.value.area[0]);
    if (selectedAreaObject) {
        selectedLocation.value = selectedAreaObject.locations;
    } else {
        selectedLocation.value = [];
    }
    // Reset dependent values
    selectedSectors.value = [];
};

const onLocationChange = () => {
    const selectedLocationObject = selectedLocation.value.find((location) => location.NAME === Landfilters.value.location[0]);
    if (selectedLocationObject) {
        selectedSectors.value = selectedLocationObject.sectors;
    } else {
        selectedSectors.value = [];
    }
    // No dependent values to reset in this function
};


// get the max price of property for range price 
onMounted(() => {
    const base_url = import.meta.env.VITE_BASE_URL;
    const url = `${base_url}/api/frontend/home/property/max/range/price`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            priceMaxRangeFilterValue.value = data.maxPrice;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error state or display error message as needed
        });
});


onMounted(() => {
    window.scrollTo(0, 0);
});
//handling footer here 
onBeforeMount(() => {
    footerState.setFooterState(true);
})

onUnmounted(() => {
    footerState.setFooterState(false);
})

onBeforeRouteLeave((to, from, next) => {
    footerState.setFooterState(false);
    next();
});
</script>



<style scoped>
.d-block {
    display: block;
    margin-bottom: 8px;
}

.nav-sub-links-main {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
}

@media (max-width:992px) {
    .side-bar-checkboxes {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        background-color: #fff;
    }

    .land-con {
        position: relative
    }
}

.range-slider-container input {
    border-radius: 7px;
    padding: 0 .5rem;
    border: 1px solid #0000002a;
}
</style>
