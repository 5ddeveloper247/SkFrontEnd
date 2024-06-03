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
        <div class="row justify-content-center align-items-center shadow-lg rounded-4 listing-searchbar px-5">
            <div class="col-md-2 col-3 p-0">
                <select class="form-select" aria-label="Default select example">
                    <option selected>Locations</option>
                    <option value="1">Islamabad</option>
                    <option value="2">Lahore</option>
                    <option value="3">Karachi</option>
                </select>
            </div>
            <div class="col-md-10 col-9 my-4 p-0">
                <form class="d-flex order-search-bar" role="search">
                    <input class="form-control search-form" type="search" placeholder="Search" aria-label="Search">
                    <button class="order-search-btn p-0" type="submit">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13 13L10.1047 10.1047M10.1047 10.1047C10.6 9.60945 10.9928 9.0215 11.2608 8.37442C11.5289 7.72734 11.6668 7.0338 11.6668 6.33341C11.6668 5.63302 11.5289 4.93948 11.2608 4.2924C10.9928 3.64532 10.6 3.05737 10.1047 2.56212C9.60945 2.06687 9.0215 1.67401 8.37442 1.40598C7.72734 1.13795 7.0338 1 6.33341 1C5.63302 1 4.93948 1.13795 4.2924 1.40598C3.64532 1.67401 3.05737 2.06687 2.56212 2.56212C1.56191 3.56233 1 4.9189 1 6.33341C1 7.74792 1.56191 9.10449 2.56212 10.1047C3.56233 11.1049 4.9189 11.6668 6.33341 11.6668C7.74792 11.6668 9.10449 11.1049 10.1047 10.1047Z"
                                stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </button>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col-md-3 col-4 shadow my-4 h-100 rounded-4">
                <div class="filters d-flex flex-column py-4 px-md-2">
                    <div class="d-flex flex-wrap align-items-center justify-content-between">
                        <h5>Final Results</h5>
                        <p><small>3,876 Land/Properties</small></p>
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
                    <div class="d-flex flex-column">
                        <div class="m-2 mb-4 w-100">
                            <select v-model="Landfilters.purpose" class="form-select">
                                <option :value="Landfilters.purpose" selected disabled>{{ Landfilters.purpose }}
                                </option>
                                <option value="Sale">Sale</option>
                                <option value="Rent">Rent</option>
                            </select>
                        </div>

                        <div class="mt-2">
                            <h6>Home Type</h6>
                        </div>
                        <div class="m-2 mb-4 w-100">
                            <select v-model="Landfilters.homeType" class="form-select"
                                aria-label="Default select example">
                                <option :value="Landfilters.homeType" disabled>{{ Landfilters.homeType }}</option>
                                <option value="House">House</option>
                                <option value="Flat">Flat</option>
                            </select>
                        </div>

                        <div class="mt-2">
                            <h6>Plot</h6>
                        </div>
                        <div class="m-2 mb-4 w-100">
                            <select v-model="Landfilters.plot" class="form-select" aria-label="Default select example">
                                <option :value="Landfilters.plot" disabled>{{ Landfilters.plot }}</option>
                                <option value="Residential Plot">Residential Plot</option>
                                <option value="Commercial Plot">Commercial Plot</option>
                            </select>
                        </div>

                        <div class="mt-2">
                            <h6>Commercial</h6>
                        </div>
                        <div class="m-2 mb-4 w-100">
                            <select v-model="Landfilters.commercial" class="form-select"
                                aria-label="Default select example">
                                <option :value="Landfilters.commercial" disabled>{{ Landfilters.commercial }}</option>
                                <option value="Office">Office</option>
                                <option value="Shop">Shop</option>
                                <option value="Building">Building</option>
                            </select>
                        </div>

                        <div class="mt-2">
                            <h6>City</h6>
                        </div>
                        <div class="m-2 mb-4 w-100">
                            <select v-model="Landfilters.city" class="form-select" aria-label="Default select example">
                                <option :value="Landfilters.city" disabled>{{ Landfilters.city }}</option>
                                <option value="Islamabad">Islamabad</option>
                                <option value="Lahore">Lahore</option>
                                <option value="Karachi">Karachi</option>
                            </select>
                        </div>

                        <div class="mt-2">
                            <h6>Area</h6>
                        </div>
                        <div class="m-2 mb-4 w-100">
                            <select v-model="Landfilters.area" class="form-select" aria-label="Default select example">
                                <option :value="Landfilters.area" disabled>{{ Landfilters.area }}</option>
                                <option value="Bahria Phase 1">Bahria Phase 1</option>
                                <option value="Bahria Phase 2">Bahria Phase 2</option>
                                <option value="Bahria Phase 3">Bahria Phase 3</option>
                            </select>
                        </div>

                        <div class="mt-2">
                            <h6>Sector</h6>
                        </div>
                        <div class="m-2 mb-4 w-100">
                            <select v-model="Landfilters.sector" class="form-select"
                                aria-label="Default select example">
                                <option :value="Landfilters.sector" selected disabled>{{ Landfilters.sector }}</option>
                                <option value="Sector f1">Sector f1</option>
                                <option value="Sector f2">Sector f2</option>
                                <option value="Sector f3">Sector f3</option>
                            </select>
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

                    <div class="d-flex flex-row">
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
                    </div>
                </div>
            </div>










            <div class="col-md-9 col-8 my-2 properties-listed">
                <div class="row listing">
                    <div class="row justify-content-between align-items-center properties-for-sale">
                        <div class="col-9">
                            <h2 class="text-start my-4">Properties for Sale/Rent</h2>
                        </div>
                        <div class="col-3">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Sort By</option>
                                <option value="1">Lowest Price</option>
                                <option value="2">Heighest Price</option>
                                <option value="3">Newest (By property year)</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-4 my-1" v-for="media in mediaData " :key="media?.id">
                        <RouterLink :to="{ name: 'land-detail', params: { id: media?.id } }">
                            <!-- <RouterLink to="/land-detail"> -->
                            <div class="card border-0 bg-transparent">
                                <img class="img-fluid" :src="getImageUrl(media)" alt="Image">
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
                                    <div class="d-flex align-items-center mt-2">
                                        <a class="btn btn-sm mx-1 nav-sub-links-main text-nowrap px-2 px-md-3 py-0 d-flex flex-nowrap align-items-center justify-content-center"
                                            role="button"><i class="fa-regular fa-envelope pe-2"></i>{{
                                                media?.pInfo_email }}</a>
                                        <a class="btn btn-sm mx-1 nav-sub-links-main text-nowrap px-2 px-md-3 py-0 d-flex flex-nowrap align-items-center justify-content-center"
                                            role="button"><i class="fa-solid fa-phone pe-2"></i>{{
                                                media?.pInfo_phoneNumber }}</a>
                                    </div>
                                </div>
                            </div>
                        </RouterLink>
                    </div>


                </div>
                <div class="row justify-content-center">
                    <a style="width: fit-content;" href="requestform.html"
                        class="mx-1 my-4 nav-sub-links-2 nav-link text-nowrap px-2 px-md-3 py-1 d-flex flex-column align-items-center justify-content-center"
                        role="button">Load More</a>
                </div>
            </div>
        </div>
    </div>
</template>





<script setup>
import { ref, onMounted, watch } from 'vue';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import { useFormDataStore } from '../stores/HomeDataFilterStore';
import { useRoute } from 'vue-router';

const route = useRoute();
const $toast = useToast();

const mediaData = ref([]);
const Landfilters = ref({
    HomePageFilters: '',
    minPrice: 0,
    maxPrice: 0,
    purpose: 'Select Purpose',
    homeType: 'Select Home Type',
    plot: 'Select Plot',
    commercial: 'Select Commercail',
    city: 'Select City',
    area: 'Select Area',
    sector: 'Select Sector'
});

const getImageUrl = (media) => {
    return `${import.meta.env.VITE_BASE_URL}/${media?.property_record_files[0]?.image_uri}`;
};

const handleSearchBtn = () => {
    console.log('Applying all filters filters:', Landfilters.value);
    fetchPropertyData(Landfilters.value);
};


const handleClearFilter = () => {
    console.log("clearing all filter")
    Landfilters.value = {
        HomePageFilters: '',
        minPrice: '',
        maxPrice: '',
    };
    fetchPropertyData();
};

const fetchPropertyData = (HomePagefilterCriteria = null) => {
    const base_url = import.meta.env.VITE_BASE_URL;
    let url = `${base_url}/api/frontend/home/property/get`;
    let options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    if (HomePagefilterCriteria) {
        // alert("fkajslf");
        url = `${base_url}/api/frontend/home/property/getByFilters`; // Assuming you have an endpoint for filtered results
        options = {
            ...options,
            method: 'POST',
            body: JSON.stringify(HomePagefilterCriteria),
        };
    }

    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data.propertyInfo);

            mediaData.value = data.propertyInfo;
            $toast.open({
                message: 'Property data fetched successfully!',
                type: 'success',
                position: 'top-right'
            });
        })
        .catch(error => {
            console.error('Error:', error);
            $toast.open({
                message: 'Failed to fetch property data.',
                type: 'error',
                position: 'top-right'
            });
        });
};

onMounted(() => {
    const formDataStore = useFormDataStore();
    const HomePagefilterCriteria = formDataStore.filterData;

    // Assigning HomePagefilterCriteria to Landfilters.HomePageFilters
    Landfilters.value.HomePageFilters = HomePagefilterCriteria;
    console.log("Home filter criteria", HomePagefilterCriteria);
    console.log("Land home page filter criteria", Landfilters.value.HomePageFilters);

    if (Object.keys(Landfilters.value.HomePageFilters).length) {
        console.log('Applying Home filters:', Landfilters.value.HomePageFilters);
        fetchPropertyData(Landfilters.value.HomePageFilters);
    } else {
        console.log('Fetching default property data');
        fetchPropertyData();
    }
});

// Watch for changes to minPrice and maxPrice
watch(
    () => [Landfilters.value.minPrice, Landfilters.value.maxPrice],
    ([newMinPrice, newMaxPrice]) => {
        console.log('minPrice or maxPrice changed:', newMinPrice, newMaxPrice);
        console.log(Landfilters.value)
        // fetchPropertyData(Landfilters.value);
    }
);
</script>
