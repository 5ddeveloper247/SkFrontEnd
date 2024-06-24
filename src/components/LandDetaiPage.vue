<template>

    <div class="container pt-5">
        <div class="row justify-content-start px-md-4 pb-md-4 p-2 pt-2 pt-md-5">
            <div class="mb-2 d-flex justify-content-between pt-5">
                <div>
                    <h5>{{ propertyData?.property_listing_pape?.extra_info_title }}</h5>
                    <p><small>DHA Defence Phase 2, DHA Defence, Islamabad, Islamabad Capital</small></p>
                </div>
                <!-- <div>
                    <i class="fa-solid fa-print px-2"></i>
                    <i class="fa-solid fa-share-from-square px-2"></i>
                </div> -->
            </div>

            <Loader :isLoading="loading" />
            <div class="col-md-8">
                <swiper :speed="1000" :spaceBetween="5" :slidesPerView="1" :navigation="true" :modules="modules"
                    class="mySwiper">
                    <swiper-slide v-for="media in propertyData.property_record_files" :key="media.id"
                        :slidesPerView="3">
                        <div>
                            <img :src="getImageUrl(media)" class="d-block" height="450" width="100%" alt="Image 3">
                            <div class="verified-society rounded-2">
                                <p class="text-white p-2 d-flex align-items-center"><i
                                        class="fa-solid fa-check pe-2"></i>Verified</p>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>

                <div class="d-flex justify-content-start my-4 mx-md-5">
                    <div class="d-flex flex-column justify-content-center align-items-center mx-3">
                        <i class="fa-solid fa-bed px-4"></i>
                        <p class="mt-3 text-center">{{ propertyData.property_listing_pape?.propertyDetail_bathrooms }}
                        </p>
                    </div>
                    <div class="d-flex flex-column justify-content-center align-items-center mx-3">
                        <i class="fa-solid fa-bath px-4"></i>
                        <p class="mt-3 text-center">{{ propertyData.property_listing_pape?.propertyDetail_bedrooms }}
                        </p>
                    </div>
                    <div class="d-flex flex-column justify-content-center align-items-center mx-3">
                        <i class="fa-solid fa-arrows-up-down px-4"></i>
                        <p class="mt-3 text-center">{{ propertyData.property_listing_pape?.propertyDetail_area }} / {{
                            propertyData.property_listing_pape?.propertyDetail_area_unit }}</p>
                    </div>
                </div>
                <hr>
                <ul class="nav nav-pills mb-3 detail-ul" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="overview-tab" data-bs-toggle="pill"
                            data-bs-target="#overview" type="button" role="tab" aria-controls="overview"
                            aria-selected="true">Overview</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="location-tab" data-bs-toggle="pill" data-bs-target="#location"
                            type="button" role="tab" aria-controls="location" aria-selected="false">Location &
                            Nearby</button>
                    </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab"
                        tabindex="0">
                        <hr>
                        <h2>Overview</h2>
                        <div class="my-5 details shadow p-2 rounded-4">
                            <h5>Details</h5>
                            <ul class="d-none">
                                <li>
                                    <div class="row">
                                        <div class="col-6 d-flex justify-content-start p-0">
                                            <p class="text-start text-nowrap">Type</p>
                                        </div>
                                        <div class="col-6 d-flex justify-content-start px-5">
                                            <p class="text-start text-nowrap">{{ propertyDetail?.pupose_home }}</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="row">
                                        <div class="col-6 d-flex justify-content-start p-0">
                                            <p class="text-start text-nowrap">Area</p>
                                        </div>
                                        <div class="col-6 d-flex justify-content-start px-5">
                                            <p class="text-start text-nowrap">1 Kanal</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="row">
                                        <div class="col-6 d-flex justify-content-start p-0">
                                            <p class="text-start text-nowrap">Price</p>
                                        </div>
                                        <div class="col-6 d-flex justify-content-start px-5">
                                            <p class="text-start text-nowrap">PKR 4.35 Crore</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="row">
                                        <div class="col-6 d-flex justify-content-start p-0">
                                            <p class="text-start text-nowrap">Purpose</p>
                                        </div>
                                        <div class="col-6 d-flex justify-content-start px-5">
                                            <p class="text-start text-nowrap">For Sale</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="row">
                                        <div class="col-6 d-flex justify-content-start p-0">
                                            <p class="text-start text-nowrap">Location</p>
                                        </div>
                                        <div class="col-6 d-flex justify-content-start px-5">
                                            <p class="text-start text-nowrap">Bahria Town</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="row">
                                        <div class="col-6 d-flex justify-content-start p-0">
                                            <p class="text-start text-nowrap">Bedroom(s)</p>
                                        </div>
                                        <div class="col-6 d-flex justify-content-start px-5">
                                            <p class="text-start text-nowrap">4 Bedrooms</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="row">
                                        <div class="col-6 d-flex justify-content-start p-0">
                                            <p class="text-start text-nowrap">Bath(s)</p>
                                        </div>
                                        <div class="col-6 d-flex justify-content-start px-5">
                                            <p class="text-start text-nowrap">8 Baths</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="row">
                                        <div class="col-6 d-flex justify-content-start p-0">
                                            <p class="text-start text-nowrap">Added</p>
                                        </div>
                                        <div class="col-6 d-flex justify-content-start px-5">
                                            <p class="text-start text-nowrap">20 hours ago</p>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                            <div class="row mt-3 justify-content-between pe-5">
                                <div class="col-md-5 col-12">
                                    <div class="d-flex align-items-center justify-content-between m-2">
                                        <p>Type</p>
                                        <p>{{ propertyData?.property_listing_pape?.purpose_plot }}</p>
                                    </div>
                                </div>
                                <div class="col-md-5 col-12">
                                    <div class="d-flex align-items-center justify-content-between m-2">
                                        <p>Area</p>
                                        <p>{{ propertyData.property_listing_pape?.propertyDetail_area }} / {{
                                            propertyData?.property_listing_pape?.propertyDetail_area_unit }}</p>
                                    </div>
                                </div>
                                <div class="col-md-5 col-12">
                                    <div class="d-flex align-items-center justify-content-between m-2">
                                        <p>Price</p>
                                        <p>{{ propertyData?.price }}</p>
                                    </div>
                                </div>
                                <div class="col-md-5 col-12">
                                    <div class="d-flex align-items-center justify-content-between m-2">
                                        <p>Purpose</p>
                                        <p>{{ propertyData?.property_listing_pape?.purpose_purpose }}</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div class="description shadow p-2 rounded-4">
                            <h5>Description</h5>
                            <p>
                                <small>
                                    {{ propertyData?.property_listing_pape?.extra_info_description }}
                                </small>
                            </p>
                        </div>
                        <div class="my-5 pe-5 amenities shadow p-2 rounded-4">
                            <h5>Amenities</h5>
                            <div class="row">
                                <div class="col-md-3 m-0 p-0 d-flex align-items-center justify-content-center">
                                    <h6><small>Plot Features</small></h6>
                                </div>
                                <div class="col-md-9 amenties-border-left">
                                    <div class="d-flex flex-column justify-content-between">
                                        <div class="d-flex flex-wrap flex-md-nowrap amenties-content">
                                            <p v-if="propertyData?.amenities[0]?.value == 1"
                                                class="d-flex align-items-center">
                                                <i class="fa-solid fa-bolt pe-1"></i>
                                                <small>{{ propertyData?.amenities[0]?.amenities }}</small>
                                            </p>
                                            <p v-if="propertyData?.amenities[1]?.value == 1"
                                                class="d-flex align-items-center">
                                                <i class="fa-solid fa-check-to-slot pe-1"></i>
                                                <small>{{ propertyData?.amenities[1]?.amenities }}</small>
                                            </p>
                                            <p v-if="propertyData?.amenities[2]?.value == 1"
                                                class="d-flex align-items-center">
                                                <i class="fa-solid fa-plate-wheat pe-1"></i>
                                                <small>{{ propertyData?.amenities[2]?.amenities }}</small>
                                            </p>
                                        </div>
                                        <div class="d-flex flex-wrap flex-md-nowrap amenties-content mt-3">
                                            <p v-if="propertyData?.amenities[3]?.value == 1"
                                                class="d-flex align-items-center">
                                                <i class="fa-solid fa-bolt pe-1"></i>
                                                <small>{{ propertyData?.amenities[3]?.amenities }}</small>
                                            </p>
                                            <p v-if="propertyData?.amenities[4]?.value == 1"
                                                class="d-flex align-items-center">
                                                <i class="fa-solid fa-water pe-1"></i>
                                                <small>{{ propertyData?.amenities[4]?.amenities }}</small>
                                            </p>
                                            <p v-if="propertyData?.amenities[5]?.value == 1"
                                                class="d-flex align-items-center">
                                                <i class="fa-solid fa-fire-flame-simple pe-1"></i>
                                                <small>{{ propertyData?.amenities[5]?.amenities }}</small>
                                            </p>
                                        </div>
                                        <div class="d-flex flex-wrap flex-md-nowrap amenties-content mt-3">
                                            <p v-if="propertyData?.amenities[6]?.value == 1"
                                                class="d-flex align-items-center">
                                                <i class="fa-solid fa-border-all pe-1"></i>
                                                <small>{{ propertyData?.amenities[6]?.amenities }}</small>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="row mt-md-4 mt-2">
                                <div class="col-md-3 m-0 p-0 d-flex align-items-center justify-content-center">
                                    <h6><small>Nearby Locations <br> and Other Facilities</small></h6>
                                </div>
                                <div class="col-md-9 amenties-border-left">
                                    <div class="d-flex flex-column justify-content-between">
                                        <div class="d-flex flex-wrap flex-md-nowrap amenties-content">
                                            <p v-if="propertyData?.amenities[7]?.value == 1"
                                                class="d-flex align-items-center">
                                                <i class="fa-solid fa-bolt pe-1"></i>
                                                <small>{{ propertyData?.amenities[7]?.amenities }}</small>
                                            </p>
                                            <p v-if="propertyData?.amenities[8]?.value == 1"
                                                class="d-flex align-items-center">
                                                <i class="fa-solid fa-check-to-slot pe-1"></i>
                                                <small>{{ propertyData?.amenities[8]?.amenities }}</small>
                                            </p>
                                            <p v-if="propertyData?.amenities[9]?.value == 1"
                                                class="d-flex align-items-center">
                                                <i class="fa-solid fa-plate-wheat pe-1"></i>
                                                <small>{{ propertyData?.amenities[9]?.amenities }}</small>
                                            </p>
                                        </div>
                                        <div class="d-flex flex-wrap flex-md-nowrap amenties-content mt-3">
                                            <p v-if="propertyData?.amenities[10]?.value == 1"
                                                class="d-flex align-items-center">
                                                <i class="fa-solid fa-bolt pe-1"></i>
                                                <small>{{ propertyData?.amenities[10]?.amenities }}</small>
                                            </p>
                                            <p v-if="propertyData?.amenities[11]?.value == 1"
                                                class="d-flex align-items-center">
                                                <i class="fa-solid fa-water pe-1"></i>
                                                <small>{{ propertyData?.amenities[11]?.amenities }}<br></small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div class="row mt-md-4 mt-2">
                                <div class="col-md-3 m-0 p-0 d-flex align-items-center justify-content-center">
                                    <h6><small>Other Facilities</small></h6>
                                </div>
                                <div class="col-md-9 amenties-border-left">
                                    <div class="d-flex flex-column justify-content-between">
                                        <div class="d-flex flex-wrap flex-md-nowrap amenties-content">
                                            <p v-if="propertyData?.amenities[12]?.value == 1"
                                                class="d-flex align-items-center">
                                                <i class="fa-solid fa-person-rifle pe-1"></i>
                                                <small>{{ propertyData?.amenities[12]?.amenities }}</small>
                                            </p>
                                            <p v-if="propertyData?.amenities[13]?.value == 1"
                                                class="d-flex align-items-center">
                                                <i class="fa-solid fa-person-rifle pe-1"></i>
                                                <small>{{ propertyData?.amenities[13]?.amenities }}</small>
                                            </p>
                                        </div>
                                        <div class="d-flex flex-wrap flex-md-nowrap amenties-content">
                                            <p v-if="propertyData?.amenities[14]?.value == 1"
                                                class="d-flex align-items-center">
                                                <i class="fa-solid fa-person-rifle pe-1"></i>
                                                <small>{{ propertyData?.amenities[14]?.amenities }}</small>
                                            </p>
                                            <p v-if="propertyData?.amenities[15]?.value == 1"
                                                class="d-flex align-items-center">
                                                <i class="fa-solid fa-person-rifle pe-1"></i>
                                                <small>{{ propertyData?.amenities[15]?.amenities }}</small>
                                            </p>
                                        </div>
                                        <div class="d-flex flex-wrap flex-md-nowrap amenties-content">
                                            <p v-if="propertyData?.amenities[16]?.value == 1"
                                                class="d-flex align-items-center">
                                                <i class="fa-solid fa-person-rifle pe-1"></i>
                                                <small>{{ propertyData?.amenities[16]?.amenities }}</small>
                                            </p>
                                            <p v-if="propertyData?.amenities[17]?.value == 1"
                                                class="d-flex align-items-center">
                                                <i class="fa-solid fa-person-rifle pe-1"></i>
                                                <small>{{ propertyData?.amenities[17]?.amenities }}</small>
                                            </p>
                                        </div>
                                        <div class="d-flex flex-wrap flex-md-nowrap amenties-content">
                                            <p v-if="propertyData?.amenities[18]?.value == 1"
                                                class="d-flex align-items-center">
                                                <i class="fa-solid fa-person-rifle pe-1"></i>
                                                <small>{{ propertyData?.amenities[18]?.amenities }}</small>
                                            </p>
                                            <p v-if="propertyData?.amenities[19]?.value == 1"
                                                class="d-flex align-items-center">
                                                <i class="fa-solid fa-person-rifle pe-1"></i>
                                                <small>{{ propertyData?.amenities[19]?.amenities }}</small>
                                            </p>
                                        </div>
                                        <div class="d-flex flex-wrap flex-md-nowrap amenties-content">
                                            <p v-if="propertyData?.amenities[20]?.value == 1"
                                                class="d-flex align-items-center">
                                                <i class="fa-solid fa-person-rifle pe-1"></i>
                                                <small>{{ propertyData?.amenities[20]?.amenities }}</small>
                                            </p>
                                            <p v-if="propertyData?.amenities[21]?.value == 1"
                                                class="d-flex align-items-center">
                                                <i class="fa-solid fa-person-rifle pe-1"></i>
                                                <small>{{ propertyData?.amenities[21]?.amenities }}</small>
                                            </p>
                                        </div>
                                        <div class="d-flex flex-wrap flex-md-nowrap amenties-content">
                                            <p v-if="propertyData?.amenities[22]?.value == 1"
                                                class="d-flex align-items-center">
                                                <i class="fa-solid fa-person-rifle pe-1"></i>
                                                <small>{{ propertyData?.amenities[22]?.amenities }}</small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="tab-pane fade" id="location" role="tabpanel" aria-labelledby="location-tab"
                        tabindex="0">
                        <hr>
                        <h2>Map</h2>
                        <div class="map mt-5">
                            <div class="map-inner-content">
                                <div class="d-flex justify-content-center">
                                    <i class="fa-solid fa-location-dot"></i>
                                </div>
                                <h5 class="text-center mt-3">Tap to View Society Maps</h5>
                                <p class="text-center">Find out the location of the property on <br> an interactive
                                    society map</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>














            <div class="col-md-4">
                <div class="property-detail d-flex flex-column py-4 px-2 shadow rounded-4 my-2">
                    <div class="d-flex flex-wrap align-items-center justify-content-between">
                        <h5>PKR {{ propertyData.price }}</h5>
                        <div class="d-flex align-items-center justify-content-center">

                            <i class="fa-brands fa-whatsapp px-2" @click="redirectToWhatsApp"></i>
                            <i class="fa-solid fa-phone px-2" @click="redirectToPhoneDialer"></i>
                        </div>
                    </div>


                    <!-- inqueryform -->
                    <form class="detail-page-form">
                        <div class="form-floating my-4">
                            <input type="text" v-model="inquiryData.location" class="form-control" id="locationInput"
                                placeholder="New York, San Francisco, etc">
                            <label for="locationInput">Location</label>
                        </div>
                        <div class="form-floating mb-4">
                            <input type="email" v-model="inquiryData.email" class="form-control" id="emailInput"
                                placeholder="Email">
                            <label for="emailInput">Email</label>
                        </div>
                        <div class="form-floating mb-4">
                            <input type="number" v-model="inquiryData.phone" class="form-control" id="phoneInput"
                                placeholder="Phone">
                            <label for="phoneInput">Phone</label>
                        </div>
                        <div class="form-floating mb-4">
                            <textarea v-model="inquiryData.description" class="form-control textarea-size"
                                placeholder="Leave a comment here" id="commentInput"></textarea>
                            <label for="commentInput">Comments</label>
                        </div>
                        <div class="d-flex align-items-center mb-4">
                            <p><small>I am a:</small></p>
                            <div class="d-flex align-items-center">
                                <input class="form-check-input mx-2" type="checkbox" v-model="inquiryData.agent"
                                    value="Buyer" id="buyerCheckbox">
                                <label for="buyerCheckbox"><small>Buyer/Tenant</small></label>
                            </div>
                            <div class="d-flex align-items-center">
                                <input class="form-check-input mx-2" type="checkbox" v-model="inquiryData.agent"
                                    value="Agent" id="agentCheckbox">
                                <label for="agentCheckbox"><small>Agent</small></label>
                            </div>
                            <div class="d-flex align-items-center">
                                <input class="form-check-input mx-2" type="checkbox" v-model="inquiryData.agent"
                                    value="Others" id="othersCheckbox">
                                <label for="othersCheckbox"><small>Others</small></label>
                            </div>
                        </div>
                        <div class="form-check mb-4">
                            <input v-model="inquiryData.informedMe" class="form-check-input" type="checkbox"
                                value="true" id="informedMeCheckbox">
                            <label class="form-check-label" for="informedMeCheckbox">
                                Keep me informed about similar properties.
                            </label>
                        </div>

                        <button type="button"
                            class="btn main-button w-100 d-flex align-items-center justify-content-center"
                            @click="handleInquiryFormSubmission">
                            <i class="fa-regular fa-envelope px-2"></i>Send Email
                        </button>
                    </form>

                </div>
                <!-- <div class="property-detail d-flex flex-column py-4 px-md-2 shadow rounded-4 mt-4">
                    <div class="d-flex flex-wrap align-items-center justify-content-center">
                        <h5 class="text-center">Useful Links</h5>
                    </div>
                    <div class="d-flex flex-column property-links px-md-4 px-2">
                        <a href="">Property for Sale in Islamabad</a>
                        <a href="">Property for Sale in Lahore</a>
                        <a href="">Property for Sale in Peshawar</a>
                    </div>
                </div> -->
                <div class="property-detail d-flex flex-column py-4 px-md-2 d-none shadow rounded-4 mt-4">
                    <div class="d-flex flex-wrap align-items-center justify-content-center">
                        <h5 class="text-center">Signature Properties</h5>
                    </div>
                    <div class="d-flex justify-content-between align-items-center signature-properties px-md-4 px-2">
                        <div><img class="img-fluid" src="../assets/Images/SK-logo.png"></div>
                        <div class="d-flex flex-column">
                            <div class="d-flex align-items-center">
                                <i class="fa-regular fa-user pe-2"></i>
                                <p><small>Asif Khursheed</small></p>
                            </div>
                            <button type="button" class="btn btn-outline-secondary btn-sm mt-2 py-0 rounded-pill">Agency
                                Profile</button>
                        </div>
                    </div>
                </div>
                <a href="requestform.html"
                    class="mx-1 d-none nav-sub-links-main text-nowrap shadow px-2 px-md-3 py-2 d-flex flex-nowrap align-items-center justify-content-center mt-4"
                    role="button"><i class="fa-regular fa-flag pe-2"></i>Report this property</a>
            </div>

            <div class="row px-md-5">
                <h2 class="pb-3">Relevent Properties</h2>
                <swiper :speed="1000" :autoplay="autoplay" :slidesPerView="3" :navigation="true" :modules="modules"
                    :breakpoints="{
                        320: { slidesPerView: 1, spaceBetween: 5 },
                        480: { slidesPerView: 1, spaceBetween: 5 },
                        640: { slidesPerView: 2, spaceBetween: 10 },
                        768: { slidesPerView: 2, spaceBetween: 15 },
                        1024: { slidesPerView: 3, spaceBetween: 25 }
                    }" class="mySwiper">
                    <swiper-slide v-for="media in propertyData.property_record_files" :key="media.id"
                        :slidesPerView="3">
                        <RouterLink :to="{ name: 'land-detail', params: { id: media?.id } }">
                            <div>
                                <img :src="getImageUrl(media)" class="d-block" height="270" width="100%" alt="Image 3">
                                <div class="verified-society rounded-2">
                                    <p class="text-white p-2 d-flex align-items-center"><i
                                            class="fa-solid fa-check pe-2"></i>Verified</p>
                                </div>
                            </div>
                        </RouterLink>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>





<script setup>
// YourVueComponent.vue
// Import helper functions
import { redirectToPhoneDialer, redirectToWhatsApp, redirectToEmail } from '../helpers/redirectHelpers';
import { ref, onBeforeMount, onBeforeUnmount } from 'vue';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import { useRoute } from 'vue-router';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';
import Loader from './Loader.vue';
import { useFooterStore } from '../stores/FooterLoadingState';

// Modules for Swiper
const modules = ref([Navigation, Autoplay]);


const autoplay = {
    delay: 3000, // 3 seconds delay between slides
    disableOnInteraction: false // Keep autoplay running even after user interaction
};
// Create the toast instance
const $toast = useToast();
const footerState = useFooterStore();


// Define reactive references for form data and property data
const inquiryData = ref({
    location: '',
    email: '',
    phone: '',
    description: '',
    agent: [],
    informedMe: false
});

const propertyData = ref([]);
const loading = ref(false);
// Retrieve the property ID from the route parameters
const route = useRoute();
const propertyId = ref(route.params.id);

// Helper function to get the image URL
const getImageUrl = (media) => {
    return `${import.meta.env.VITE_BASE_URL}/${media?.image_uri}`;
};

// Function to handle form submission
// Function to handle form submission
const handleInquiryFormSubmission = () => {
    // Make POST request to backend with form data
    console.log(inquiryData.value);
    const base_url = import.meta.env.VITE_BASE_URL;
    loading.value = true;
    footerState.setFooterState(false);
    fetch(`${base_url}/api/frontend/inquiry/store`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(inquiryData.value)
    })
        .then(response => {
            if (!response.ok) {
                return response.json().then(errorData => {
                    throw new Error(JSON.stringify(errorData));
                });
            }
            return response.json();
        })
        .then(data => {
            loading.value = false;
            footerState.setFooterState(true);
            // Handle successful form submission response
            console.log('Form submission successful:', data);
            $toast.open({
                message: 'Query submitted successfully!',
                type: 'success',
                position: 'top-right',
            });
            // Optionally, reset the form data after successful submission
            inquiryData.value = {
                location: '',
                email: '',
                phone: '',
                description: '',
                agent: [],
                informedMe: false
            };
        })
        .catch(error => {
            loading.value = false;
            footerState.setFooterState(true);
            // Handle form submission error
            console.error('Error submitting form data:', error);
            const errorMessage = JSON.parse(error.message);
            if (errorMessage.errors) {
                Object.values(errorMessage.errors).forEach(err => {
                    $toast.open({
                        message: err[0],
                        type: 'error',
                        position: 'top-right',
                    });
                });
            } else {
                $toast.open({
                    message: 'Oops, network error occurred!',
                    type: 'error',
                    position: 'top-right',
                });
            }
        });
};





// Fetch the media data when the component is mounted
onBeforeMount(() => {
    // Fetch the media data
    loading.value = true;
    footerState.setFooterState(false);
    const base_url = import.meta.env.VITE_BASE_URL;
    fetch(`${base_url}/api/frontend/home/property/getbyid/${propertyId.value}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data.propertyInfo);
            propertyData.value = data.propertyInfo;
            // $toast.open({
            //   message: 'Property data fetched successfully!',
            //   type: 'success',
            //   position: 'top-right',
            // });
            loading.value = false;
            setTimeout(() => {
                footerState.setFooterState(true);
            }, 2000)


        })
        .catch(error => {
            console.error('Error:', error);
            loading.value = false;
            footerState.setFooterState(true);
            $toast.open({
                message: 'Failed to fetch property data.',
                type: 'error',
                position: 'top-right',
            });
        });
});

onBeforeUnmount(() => {
    footerState.setFooterState(false);
})

</script>



<style scoped>
img {
    object-fit: cover;
}
</style>
