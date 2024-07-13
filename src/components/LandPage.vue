<template>
    <Loader :isLoading="loading" />
    <div class="container pt-5">
        <nav class="row gap-3 align-items-center"
            style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);"
            aria-label="breadcrumb">
            <ol class="breadcrumb col-12 col-md-2">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Land/Properties</li>
            </ol>
            <div v-if="propertiesCounter > 0"
                class="col-12 col-md d-flex align-items-center justify-content-between prop-top mt-0 mt-md-1 py-2 py-md-0 me-2">
                <h5 class="mb-0">
                    <small>
                        {{ propertiesCounter }}
                        Land/Properties
                    </small>
                </h5>
                <button class="rounded-2 d-none d-sm-block" @click="toggleLayout" v-if="!isGridView">
                    <h4 class="mb-0"><i class="fa-solid fa-grip"></i></h4>
                </button>
                <button class="rounded-2 d-none d-sm-block" @click="toggleLayout" v-if="isGridView">
                    <h4 class=mb-0><i class="fa-solid fa-list"></i></h4>
                </button>
            </div>
        </nav>

        <div class="row gx-5 land-con align-items-start">
            <nav class="navbar col-12 col-lg pt-0 side-bar-checkboxes navbar-expand-lg">
                <div class="w-100 h-100">
                    <div class="d-flex gap-3">
                        <button class="navbar-toggler mx-3 my-2" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.6em"
                                    viewBox="0 0 512 512">
                                    <path fill="white"
                                        d="M472 168H40a24 24 0 0 1 0-48h432a24 24 0 0 1 0 48m-80 112H120a24 24 0 0 1 0-48h272a24 24 0 0 1 0 48m-96 112h-80a24 24 0 0 1 0-48h80a24 24 0 0 1 0 48" />
                                </svg>
                            </span>
                        </button>
                        <!-- <h3>
                            Choose Land Details
                        </h3> -->
                    </div>
                    <div class="collapse navbar-collapse w-100" id="navbarSupportedContent">
                        <div class="h-100 w-100 rounded-4">
                            <div class="filters d-flex flex-column pb-4">
                                <div
                                    class="nav-top-c d-flex flex-wrap align-items-center justify-content-between px-3 py-2">
                                    <h5 class="mb-0">FINAL RESULTS</h5>
                                </div>
                                <!-- <div class="mt-2">
                                    <h6 class="fw-normal">Minimum Price - Maximum Price</h6>
                                </div> -->

                                <div class="range-slider-container p-3 ">
                                    <div class="row g-0">
                                        <div class="col-md-4 my-2 ">
                                            <!-- <span class="fw-normal">Min Price</span> -->
                                            <input placeholder="min" v-model.number="filterMinPrice" type="number"
                                                min="0" :max="priceMaxRangeFilterValue" step="1"
                                                class="range-input w-100 rounded-1">
                                        </div>
                                        <div class="col-md-4 my-2 ">
                                            <!-- <span class="fw-normal"> Max Price</span> -->
                                            <input placeholder="max" v-model.number="filterMaxPrice" type="number"
                                                min="0" :max="priceMaxRangeFilterValue" step="1"
                                                class="range-input w-100 rounded-1">
                                        </div>
                                        <div class="col-md-4 my-2 d-flex align-items-end">
                                            <button class="search-button rounded-1 px-3 border-0" type="button"
                                                @click="handleFilterPrices">
                                                <span class="text-white fw-bold">
                                                    <i class="fa-solid fa-magnifying-glass"></i>
                                                </span>
                                                <!-- ( <span class="text-white fw-bold" id="minPrice">
                                                    {{ filterMinPrice }}
                                                </span> :
                                                <span class="text-white fw-bold" id="maxPrice">
                                                    {{ filterMaxPrice }}
                                                </span> ) -->
                                            </button>
                                        </div>
                                    </div>
                                    <!-- <p>Max: {{ priceMaxRangeFilterValue }}</p> -->
                                    <!-- <div class="price-range d-flex flex-nowrap">
                                        Price: <span id="minPrice">{{ filterMinPrice }}</span> :
                                        <span id="maxPrice">{{ filterMaxPrice }}</span>
                                    </div> -->
                                </div>


                                <!-- checkx -->

                                <div class="d-flex flex-column">
                                    <div class="w-100">
                                        <div class="mt-2">
                                            <h6 class="input-heading px-3 py-2 d-flex align-items-center justify-content-between w-100"
                                                @click="toggleInputs">
                                                PURPOSE
                                                <i :class="{ 'fa-chevron-right': showInputs, 'fa-chevron-down': !showInputs }"
                                                    class="fa-solid"></i>
                                            </h6>
                                        </div>
                                        <transition name="fade">
                                            <div v-if="!showInputs" class="px-4">
                                                <label class="d-flex align-items-center gap-1">
                                                    <input type="radio" v-model="Landfilters.purpose" value="Sale"> Sale
                                                </label>
                                                <label class="d-flex align-items-center gap-1 mt-1">
                                                    <input type="radio" v-model="Landfilters.purpose" value="Rent"> Rent
                                                </label>
                                            </div>
                                        </transition>
                                    </div>

                                    <div class="w-100">
                                        <!-- HOME TYPE -->
                                        <div class="mt-2">
                                            <h6 class="input-heading px-3 py-2 d-flex align-items-center justify-content-between w-100"
                                                @click="toggleHomeType">
                                                HOME TYPE
                                                <i :class="{ 'fa-chevron-right': showHomeType, 'fa-chevron-down': !showHomeType }"
                                                    class="fa-solid"></i>
                                            </h6>
                                        </div>
                                        <transition name="fade">
                                            <div v-if="!showHomeType" class="px-4">
                                                <label class="d-flex align-items-center gap-1">
                                                    <input type="checkbox" v-model="Landfilters.homeType" value="House">
                                                    House
                                                </label>
                                                <label class="d-flex align-items-center gap-1 mt-1">
                                                    <input type="checkbox" v-model="Landfilters.homeType" value="Flat">
                                                    Flat
                                                </label>
                                            </div>
                                        </transition>

                                        <!-- PLOT -->
                                        <div class="mt-2">
                                            <h6 class="input-heading px-3 py-2 d-flex align-items-center justify-content-between w-100"
                                                @click="togglePlot">
                                                PLOT
                                                <i :class="{ 'fa-chevron-right': showPlot, 'fa-chevron-down': !showPlot }"
                                                    class="fa-solid"></i>
                                            </h6>
                                        </div>
                                        <transition name="fade">
                                            <div v-if="!showPlot" class="px-4">
                                                <label class="d-flex align-items-center gap-1">
                                                    <input type="checkbox" v-model="Landfilters.plot"
                                                        value="Residential Plot"> Residential Plot
                                                </label>
                                                <label class="d-flex align-items-center gap-1 mt-1">
                                                    <input type="checkbox" v-model="Landfilters.plot"
                                                        value="Commercial Plot"> Commercial Plot
                                                </label>
                                            </div>
                                        </transition>

                                        <!-- COMMERCIAL -->
                                        <div class="mt-2">
                                            <h6 class="input-heading px-3 py-2 d-flex align-items-center justify-content-between w-100"
                                                @click="toggleCommercial">
                                                COMMERCIAL
                                                <i :class="{ 'fa-chevron-right': showCommercial, 'fa-chevron-down': !showCommercial }"
                                                    class="fa-solid"></i>
                                            </h6>
                                        </div>
                                        <transition name="fade">
                                            <div v-if="!showCommercial" class="px-4">
                                                <label class="d-flex align-items-center gap-1">
                                                    <input type="checkbox" v-model="Landfilters.commercial"
                                                        value="Office"> Office
                                                </label>
                                                <label class="d-flex align-items-center gap-1 my-1">
                                                    <input type="checkbox" v-model="Landfilters.commercial"
                                                        value="Shop"> Shop
                                                </label>
                                                <label class="d-flex align-items-center gap-1">
                                                    <input type="checkbox" v-model="Landfilters.commercial"
                                                        value="Building"> Building
                                                </label>
                                            </div>
                                        </transition>

                                        <!-- CITY -->
                                        <div class="mt-2">
                                            <h6 class="input-heading px-3 py-2 d-flex align-items-center justify-content-between w-100"
                                                @click="toggleCity">
                                                CITY
                                                <i :class="{ 'fa-chevron-right': showCity, 'fa-chevron-down': !showCity }"
                                                    class="fa-solid"></i>
                                            </h6>
                                        </div>
                                        <transition name="fade">
                                            <div v-if="!showCity" class="px-4">
                                                <label class="d-flex align-items-center gap-1 my-1"
                                                    v-for="city in cityList" :key="city">
                                                    <input type="checkbox" @change="onCityChange"
                                                        v-model="Landfilters.city" :value="city"> {{ city }}
                                                </label>
                                            </div>
                                        </transition>

                                        <!-- AREA -->
                                        <div class="mt-2" v-if="selectedAreas.length > 0">
                                            <h6 class="input-heading px-3 py-2 d-flex align-items-center justify-content-between w-100"
                                                @click="toggleArea">
                                                AREA
                                                <i :class="{ 'fa-chevron-right': showArea, 'fa-chevron-down': !showArea }"
                                                    class="fa-solid"></i>
                                            </h6>
                                        </div>
                                        <transition name="fade">
                                            <div v-if="!showArea" class="px-4">
                                                <label class="d-block" v-for="area in selectedAreas" :key="area.NAME">
                                                    <input type="checkbox" @change="onAreaChange"
                                                        v-model="Landfilters.area" :value="area.NAME"> {{ area.NAME }}
                                                </label>
                                            </div>
                                        </transition>

                                        <!-- LOCATION -->
                                        <div class="mt-2" v-if="selectedLocation.length > 0">
                                            <h6 class="input-heading px-3 py-2 d-flex align-items-center justify-content-between w-100"
                                                @click="toggleLocation">
                                                LOCATION
                                                <i :class="{ 'fa-chevron-right': showLocation, 'fa-chevron-down': !showLocation }"
                                                    class="fa-solid"></i>
                                            </h6>
                                        </div>
                                        <transition name="fade">
                                            <div v-if="!showLocation" class="px-4">
                                                <label class="d-block" v-for="location in selectedLocation"
                                                    :key="location.NAME">
                                                    <input type="checkbox" @change="onLocationChange"
                                                        v-model="Landfilters.location" :value="location.NAME"> {{
                                                            location.NAME }}
                                                </label>
                                            </div>
                                        </transition>

                                        <!-- SECTOR -->
                                        <div class="mt-2" v-if="selectedSectors.length > 0">
                                            <h6 class="input-heading px-3 py-2 d-flex align-items-center justify-content-between w-100"
                                                @click="toggleSector">
                                                SECTOR
                                                <i :class="{ 'fa-chevron-right': showSector, 'fa-chevron-down': !showSector }"
                                                    class="fa-solid"></i>
                                            </h6>
                                        </div>
                                        <transition name="fade">
                                            <div v-if="!showSector" class="px-4">
                                                <label class="d-block" v-for="sector in selectedSectors"
                                                    :key="sector.NAME">
                                                    <input type="checkbox" v-model="Landfilters.sector"
                                                        :value="sector.NAME"> {{ sector.NAME }}
                                                </label>
                                            </div>
                                        </transition>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div v-if="notFound"
                class="col-12  d-flex justify-content-center align-items-center col-lg-10 my-1 properties-listed">
                <div class="row listing not-found d-flex justify-content-center align-items-center">
                    <h1 class="d-flex justify-content-center mb-0"
                        style="margin-top: 100px;color: #1e02021c;font-size: 1rem;font-weight: bold;">
                        try filtering
                    </h1>
                    <h1 class="d-flex justify-content-center"
                        style="color: #1e02021c;font-size: 5rem;font-weight: bold; margin-top: -30px;">
                        Opps!
                    </h1>

                </div>
            </div>

            <div v-if="mediaData" class="col-12 col-lg-10 my-1 properties-listed">
                <div class="listing">
                    <!-- <div class="row justify-content-between align-items-center properties-for-sale">
                        <div class="col-9">
                            <h2 class="text-start my-4">Properties for Sale/Rent</h2>
                        </div>
                    </div> -->
                    <div>

                        <div :class="{ 'grid-container': isGridView, 'list-container': !isGridView }">
                            <div class="property-card px-2 py-2" v-for="media in mediaData" :key="media?.id">
                                <RouterLink class="r-cards"
                                    :to="{ name: 'land-detail', params: { id: idEncryptor(media?.id) } }">
                                    <div class="card border-0 bg-transparent">
                                        <img v-if="media?.property_record_files[0]?.image_uri" :src="getImageUrl(media)"
                                            class="" height="200" width="100%" alt="Image">
                                        <img v-if="!media?.property_record_files[0]?.image_uri"
                                            src="/src/assets/Images/placeholder-image.jpg" class="rounded-5"
                                            height="200" alt="Image">
                                        <div class="over-text">
                                            <small>
                                                VERIFIED
                                                <i class="fa-solid fa-check pe-2"></i>
                                            </small>
                                        </div>
                                    </div>
                                </RouterLink>
                                <div class="card-content d-flex flex-column pb-2">
                                    <div class="card-body pt-2">
                                        <h5 class="card-title fw-bold"> PKR {{ numFormatter(media?.price) }}</h5>
                                        <p class="card-text elip">
                                            {{ media?.property_listing_pape?.extra_info_title }}
                                        </p>
                                        <!-- <p><small>{{ media?.property_listing_pape?.extra_info_description }}</small></p> -->
                                    </div>
                                    <div class="d-flex align-items-center pb-3"
                                        v-if="media?.property_listing_pape?.pupose_home == 'House' || media?.property_listing_pape?.pupose_home == 'Flat'">
                                        <div>
                                            <i class="fa-solid fa-bed pe-1"></i>
                                            <small class="fw-bold">
                                                {{ media?.property_listing_pape?.propertyDetail_bedrooms }}
                                            </small>
                                        </div>
                                        <div class="mx-3">
                                            <i class="fa-solid fa-toilet pe-1"></i>
                                            <small class="fw-bold">
                                                {{ media?.property_listing_pape?.propertyDetail_bathrooms }}
                                            </small>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center pb-3"
                                        v-if="media?.property_listing_pape?.pupose_home !== 'House' && media?.property_listing_pape?.pupose_home !== 'Flat'">
                                        <div>
                                            <i class="fa-solid fa-landmark pe-1"></i>
                                            <small class="fw-bold">
                                                {{ media?.property_listing_pape?.propertyDetail_area }}
                                            </small>
                                        </div>
                                        <div class="mx-3">
                                            <i class="fa-solid fa-expand pe-1"></i>
                                            <small class="fw-bold">
                                                {{ media?.property_listing_pape?.propertyDetail_area_unit }}
                                            </small>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <a class="btn w-100 d-flex gap-2 align-items-center btn-sm nav-sub-links-main text-nowrap  py-1 d-flex flex-nowrap align-items-center justify-content-center"
                                            :href="'mailto:' + media?.pInfo_email" role="button">
                                            <h6 class="mb-0 icon-text">Email</h6>
                                            <i class="fa-regular fa-envelope"></i>
                                            <!-- {{ media?.pInfo_email }} -->
                                        </a>
                                        <a class="btn w-100 d-flex gap-2 align-items-center btn-sm mx-2 nav-sub-links-main text-nowrap d-flex flex-nowrap align-items-center justify-content-center"
                                            :href="'tel:' + media?.property_listing_pape?.extra_info_mobile"
                                            role="button">
                                            <h6 class="mb-0 icon-text">Call</h6>
                                            <i class="fa-solid fa-phone"></i>
                                            <!-- {{ media?.pInfo_phoneNumber }} -->
                                        </a>
                                    </div>
                                </div>
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
import { numFormatter, idEncryptor, idDecryptor } from '../helpers/numberFormater';


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
const filterMinPrice = ref();
const filterMaxPrice = ref();
const initialFetchCompleted = ref(false); // Flag to indicate if the initial fetch is completed
const notFound = ref(false);

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


watch(
    () => mediaData.value,
    (newValue, oldValue) => {
        if (newValue.length == 0) {
            setTimeout(() => {
                // Your logic here after 2 seconds
            }, 2000);
            notFound.value = true;
        }
        else {
            notFound.value = false;
        }
    },
    { deep: true } // Deep watch to detect nested changes
);


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


        }
    },
    { deep: true } // Deep watch to detect nested changes
);





const isGridView = ref(true);

const toggleLayout = () => {
    isGridView.value = !isGridView.value;
};


const showInputs = ref(false);
const showHomeType = ref(false);
const showPlot = ref(false);
const showCommercial = ref(false);
const showLocation = ref(false);
const showSector = ref(false);
const showCity = ref(false);
const showArea = ref(false);


const toggleInputs = () => {
    showInputs.value = !showInputs.value;
};

const toggleHomeType = () => {
    showHomeType.value = !showHomeType.value;
};

const toggleCity = () => {
    showCity.value = !showCity.value;
};

const toggleArea = () => {
    showArea.value = !showArea.value;
};

const toggleLocation = () => {
    showLocation.value = !showLocation.value;
};

const toggleCommercial = () => {
    showCommercial.value = !showCommercial.value;
};

const toggleSector = () => {
    showSector.value = !showSector.value;
};

const togglePlot = () => {
    showPlot.value = !showPlot.value;
};








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

//handling footer here 
onMounted(() => {
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
.navbar {
    position: sticky !important;
    top: 20%;
    left: 0;
    overflow-y: auto;
    height: 80vh;
    margin-bottom: 1.5rem
}

.navbar::-webkit-scrollbar {
    width: 4px;
    /* background-color: rgba(220, 20, 60, 0.658); */
    background-color: #fff;
    border-radius: 50px;
}

.navbar::-webkit-scrollbar-thumb {
    background-color: #0f045571;
    border-radius: 50px;
}

.navbar-toggler-icon {
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
    background-image: none !important;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
}

.nav-top-c {
    background: linear-gradient(to right, #F45D08, #141415ba);
    color: #fff;
}

.prop-top {
    background-color: #dadada65;
    border: 1px solid #dadada;
    box-shadow: rgba(131, 131, 131, 0.221) 0px 3px 8px;
    /* border-radius: 4px; */
    padding: .4rem .5rem;
}

.input-heading {
    background-color: #dadada46;
    border: 1px solid #dadada;
    box-shadow: rgba(131, 131, 131, 0.221) 0px 3px 8px;
}

.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    max-height: 0;
    padding: 0;
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
    max-height: 600px;
    /* Adjust based on content */
}

.nav-sub-links-main {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
}

.navbar-toggler {
    border: none !important;
    background-color: #F45D08
}

.not-found {
    animation: wobble 1.5s infinite alternate-reverse;
}

@keyframes wobble {
    to {
        scale: .8
    }

    from {
        scale: 1
    }
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

    .navbar {
        position: sticky !important;
        top: 13.5%;
        left: 0;
        height: fit-content;
        overflow-y: auto;
    }

    .navbar-collapse {
        height: 80vh;
        overflow-y: auto;
    }
}

.range-slider-container input {
    border-radius: 7px;
    padding: 0 .5rem;
    border: 1px solid #0000002a;
}

.search-button {
    background-color: transparent !important;
    border: 1px solid #F45D08 !important;
    padding: 0rem .6rem !important;
    height: 24.5px;
    font-size: 13px;
    width: 100%;
}

/* .listing {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
} */

.navbar {
    margin-top: .5rem;
    box-shadow: rgba(54, 9, 255, 0.283) 0px 3px 8px;
}

button {
    background-color: transparent;
    border: 1px solid #00000000;
    padding: .3rem 1rem;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    margin: 20px 0;
    place-items: center;

    .property-card {
        max-width: 250px;
        width: 100%;
    }
}

.list-container {
    display: block;
    margin: 20px 0;

    .property-card {
        margin: 30px 0;
        display: flex;
    }

    .r-cards img {
        width: 260px;
    }
}

.property-card .cards .card {
    display: flex !important;
}

.property-card {
    background: white;
    /* border-radius: 5px; */
    box-shadow: rgba(0, 0, 0, 0.347) 0px 3px 8px;
    transition: transform 0.4s;
}

.list-container .property-card .card-content {
    padding: 0 1rem;
}

.property-card:hover {
    transform: scale(1.02);
}

.card img {
    object-fit: cover;
}

/* h6 {
    position: relative;
    width: fit-content;
}

h6::after {
    content: '';
    position: absolute;
    border-bottom: 2px solid #ff5f02;
    bottom: -25%;
    left: 0;
    width: 100%;
} */

.card {
    position: relative
}

.over-text {
    background-color: red;
    width: fit-content;
    padding: 0rem .8rem;
    position: absolute;
    top: 0;
    left: 0;

    small {
        color: #fff;
        font-weight: 700;
    }
}

.fa-check {
    color: #fff;
}
</style>
