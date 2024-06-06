<template>
    <div class="container pt-5">
        <nav class="pt-5"
            style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);"
            aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Library</li>
            </ol>
        </nav>

        <div class="row">
            <div class="col-md-3 col-4 shadow my-4 h-100 rounded-4">
                <div class="filters d-flex flex-column py-4 px-md-2">
                    <div class="d-flex flex-wrap align-items-center justify-content-between">
                        <h5>Final Results</h5>
                        <p><small>{{ propertiesCounter }} Land/Properties</small></p>
                    </div>
                    <div class="mt-2">
                        <h6>Minimum Price - Maximum Price</h6>
                    </div>
                    <div class="range-slider-container">
                        <input v-model="Landfilters.minPrice" type="range" min="0" max="100" value="25"
                            class="range-slider" id="minRange">
                        <input v-model="Landfilters.maxPrice" type="range" min="0" max="100" value="75"
                            class="range-slider" id="maxRange">
                        <div class="price-range d-flex flex-nowrap">Price : <span id="minPrice">{{ Landfilters.minPrice
                                }}</span> - <span id="maxPrice">{{ Landfilters.maxPrice }}</span></div>
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
                                <input type="checkbox" v-model="Landfilters.homeType" value="House"> House
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
                                <input type="checkbox" v-model="Landfilters.plot" value="Residential Plot"> Residential
                                Plot
                            </label>
                            <label class="d-block">
                                <input type="checkbox" v-model="Landfilters.plot" value="Commercial Plot"> Commercial
                                Plot
                            </label>
                        </div>

                         <div class="mt-2">
                            <h6>Commercial</h6>
                        </div>
                        <div class="m-2 mb-4 w-100">
                            <label class="d-block">
                                <input type="checkbox" v-model="Landfilters.commercial" value="Office"> Office
                            </label>
                            <label class="d-block">
                                <input type="checkbox" v-model="Landfilters.commercial" value="Shop"> Shop
                            </label>
                            <label class="d-block">
                                <input type="checkbox" v-model="Landfilters.commercial" value="Building"> Building
                            </label>
                        </div>

                        <div class="mt-2">
                            <h6>City</h6>
                        </div>
                        <div class="m-2 mb-4 w-100">
                            <label class="d-block">
                                <input type="checkbox" v-model="Landfilters.city" value="Islamabad"> Islamabad
                            </label>
                            <label class="d-block">
                                <input type="checkbox" v-model="Landfilters.city" value="Lahore"> Lahore
                            </label>
                            <label class="d-block">
                                <input type="checkbox" v-model="Landfilters.city" value="Karachi"> Karachi
                            </label>
                        </div>

                        <div class="mt-2">
                            <h6>Area</h6>
                        </div>
                        <div class="m-2 mb-4 w-100">
                            <label class="d-block">
                                <input type="checkbox" v-model="Landfilters.area" value="Bahria Phase 1"> Bahria Phase 1
                            </label>
                            <label class="d-block">
                                <input type="checkbox" v-model="Landfilters.area" value="Bahria Phase 2"> Bahria Phase 2
                            </label>
                            <label class="d-block">
                                <input type="checkbox" v-model="Landfilters.area" value="Bahria Phase 3"> Bahria Phase 3
                            </label>
                        </div>

                        <div class="mt-2">
                            <h6>Sector</h6>
                        </div>
                        <div class="m-2 mb-4 w-100">
                            <label class="d-block">
                                <input type="checkbox" v-model="Landfilters.sector" value="Sector f1"> Sector f1
                            </label>
                            <label class="d-block">
                                <input type="checkbox" v-model="Landfilters.sector" value="Sector f2"> Sector f2
                            </label>
                            <label class="d-block">
                                <input type="checkbox" v-model="Landfilters.sector" value="Sector f3"> Sector f3
                            </label>
                        </div>
                    </div>











                    <!-- <div class="d-flex flex-column">
                        <div class="form-check">
                            <input class="form-check-input filters" type="checkbox" value="" id="flexCheckChecked">
                            <label class="form-check-label" for="flexCheckChecked">
                                Checked checkbox
                            </label>
                        </div>
                    </div> -->


                    <!-- search filter button -->

                    <!-- <div class="d-flex flex-row">
                        <div class="row justify-content-center p-2 m-1">
                            <a @click.prevent="handleSearchBtn" style="width: fit-content;" href=""
                                class="mx-1 my-4 nav-sub-links-2 nav-link text-nowrap px-2 px-md-3 py-1 d-flex flex-column align-items-center justify-content-center"
                                role="button">Search</a>
                        </div>
                        <div class="row justify-content-center p-2 m-1">
                            <a @click.prevent="handleClearFilter" style="width: fit-content;" href=""
                                class="mx-1 my-4 nav-sub-links-2 nav-link text-nowrap px-2 px-md-3 py-1 d-flex flex-column align-items-center justify-content-center"
                                role="button">Clear Filter</a>
                        </div>
                    </div> -->
                </div>
            </div>










            <div class="col-md-9 col-8 my-2 properties-listed">
                <div class="row listing">
                    <div class="row justify-content-between align-items-center properties-for-sale">
                        <div class="col-9">
                            <h2 class="text-start my-4">Properties for Sale/Rent</h2>
                        </div>
                        <!-- <div class="col-3">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Sort By</option>
                                <option value="1">Lowest Price</option>
                                <option value="2">Heighest Price</option>
                                <option value="3">Newest (By property year)</option>
                            </select>
                        </div> -->
                    </div>
                    <div class="col-md-4 my-1" v-for="media in mediaData" :key="media?.id">
                        <RouterLink :to="{ name: 'land-detail', params: { id: media?.id } }">
                            <div class="card border-0 bg-transparent">
                                <img :src="getImageUrl(media)" height="300" alt="Image">
                                <div class="card-body">
                                    <h5 class="card-title">${{ media?.price }}</h5>
                                    <p class="card-text">{{ media?.property_listing_pape?.extra_info_title }}</p>
                                    <p><small>{{ media?.property_listing_pape?.extra_info_description }}</small></p>
                                    <div class="d-flex align-items-center">
                                        <div class="d-flex align-items-center"><i class="fa-solid fa-bed pe-2"></i>
                                            <p>{{ media?.property_listing_pape?.propertyDetail_bedrooms }}</p>
                                        </div>
                                        <div class="mx-3 d-flex align-items-center"><i
                                                class="fa-solid fa-toilet pe-2"></i>
                                            <p>{{ media?.property_listing_pape?.propertyDetail_bathrooms }}</p>
                                        </div>
                                    </div>
                                    <div class="d-flex flex-column align-items-center mt-2">
                                        <a class="btn btn-sm mx-1 mt-2 nav-sub-links-main text-nowrap px-2 px-md-3 py-0 d-flex flex-nowrap align-items-center justify-content-center"
                                            role="button" @click="redirectToEmail"><i
                                                class="fa-regular fa-envelope pe-2"></i></a>
                                        <!-- {{media?.pInfo_email }} -->
                                        <!-- Call useContact directly on button click -->
                                        <button @click="redirectToPhoneDialer"
                                            class="btn btn-sm mx-1 mt-2 nav-sub-links-main text-nowrap px-2 px-md-3 py-0 d-flex flex-nowrap align-items-center justify-content-center"
                                            role="button"><i class="fa-solid fa-phone pe-2"></i></button>
                                        <!-- {{media?.pInfo_phoneNumber }} -->
                                    </div>
                                </div>
                            </div>
                        </RouterLink>
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
import { redirectToPhoneDialer, redirectToWhatsApp, redirectToEmail } from '../helpers/redirectHelpers';
import { ref, onMounted, watch, computed } from 'vue';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import { useFormDataStore } from '../stores/HomeDataFilterStore';
import { useRoute } from 'vue-router';

//define objects
const route = useRoute();
const $toast = useToast();

// Define reactive variables
const propertiesCounter = ref(0);
const isMobile = ref(false);
const mediaData = ref([]);
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
    rooms: ''
});

// Fetch image URL
const getImageUrl = (media) => {
    return `${import.meta.env.VITE_BASE_URL}/${media?.property_record_files[0]?.image_uri}`;
};

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

    console.log("Filter data has been updated:");
    console.log(Landfilters.value);

    return true;
};



// Function to handle search button click

// const handleSearchBtn = () => {
//     console.log('Applying all filters filters:', Landfilters.value);
//     fetchPropertyData(Landfilters.value);
// };

// // Function to handle clear filter button click

// const handleClearFilter = () => {
//     console.log("Clearing all filters");
//     Landfilters.value = {
//         HomePageFilters: '',
//         minPrice: '',
//         maxPrice: '',
//     };

//     fetchPropertyData();
// };





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
    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data.propertyInfo);

            // Update mediaData with property information
            mediaData.value = data.propertyInfo;

            // Show success toast message
            $toast.open({
                message: 'Property data fetched successfully!',
                type: 'success',
                position: 'top-right'
            });
        })
        .catch(error => {
            console.error('Error:', error);

            // Show error toast message
            $toast.open({
                message: 'Failed to fetch property data.',
                type: 'error',
                position: 'top-right'
            });
        });
};

// Watch for changes in Landfilters, but skip the initial mount
watch(
    () => Landfilters.value,
    (newValue, oldValue) => {
        if (initialFetchCompleted.value) {
            fetchPropertyData(newValue);
        }
    },
    { deep: true } // Deep watch to detect nested changes
);

// Initialize on component mount
onMounted(() => {
    const formDataStore = useFormDataStore();
    const HomePagefilterCriteria = formDataStore.filterData;
    generateFilterData(HomePagefilterCriteria);

    if (Object.keys(Landfilters.value.HomePageFilters).length) {
        console.log('Applying Home filters:', Landfilters.value);
        fetchPropertyData(Landfilters.value);
    } else {
        console.log('Fetching default property data');
        fetchPropertyData();
    }

    // Set the initial fetch completed flag to true after a delay to ensure the watcher does not trigger on initial setup
    setTimeout(() => {
        initialFetchCompleted.value = true;
    }, 5000); // Delay to ensure the watcher does not trigger prematurely
});




//counting landproperties 
const LandPropertiesCount = computed(() => {
    return mediaData.value.length;
});

// Watcher to log the count whenever it changes
watch(LandPropertiesCount, (newCount) => {
    propertiesCounter.value = newCount;
});

//counting landproperties ended

/* // handle the onclick on mobile and email  */

const useContact = (media) => {
    if (checkIsMobile()) {
        window.location.href = 'tel:' + media.pInfo_phoneNumber;
    } else {
        // Handle non-mobile devices (e.g., show a contact form)
        alert('Please contact us through the provided phone number: ' + media.pInfo_phoneNumber);
    }
}

// Function to check if the device is mobile
const checkIsMobile = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    isMobile.value = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
};

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
</style>
