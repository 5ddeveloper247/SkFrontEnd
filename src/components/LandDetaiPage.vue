<template>

    <div class="container pt-5">
        <div class="row justify-content-start px-md-4 pb-md-4 p-2 pt-2 pt-md-5">
            <div class="mb-2 d-flex justify-content-between pt-4">
                <div>
                    <h5>{{ propertyData?.property_listing_pape?.extra_info_title }}</h5>
                    <p><small>{{ propertyData?.property_listing_pape?.address_address }}</small></p>
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
                        <div class="my-5 details p-2">
                            <h5>Details</h5>
                            <ul class="d-none">
                                <li>
                                    <div class="row">
                                        <div class="col-6 d-flex justify-content-start p-0">
                                            <p class="text-start text-nowrap">Type</p>
                                        </div>
                                        <div class="col-6 d-flex justify-content-start px-5">
                                            <p class="text-start text-nowrap">{{
                                                propertyData?.property_listing_pape?.pupose_home }}</p>
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
                                    <div
                                        class="d-flex align-items-center justify-content-between m-1 lighter-bg p-md-2">
                                        <p>Type</p>
                                        <p>{{ propertyData?.property_listing_pape?.pupose_home }}</p>
                                    </div>
                                </div>
                                <div class="col-md-5 col-12">
                                    <div
                                        class="d-flex align-items-center justify-content-between m-1 lighter-bg p-md-2">
                                        <p>Area</p>
                                        <p>{{ propertyData.property_listing_pape?.propertyDetail_area }} / {{
                                            propertyData?.property_listing_pape?.propertyDetail_area_unit }}</p>
                                    </div>
                                </div>
                                <div class="col-md-5 col-12">
                                    <div
                                        class="d-flex align-items-center justify-content-between m-1 lighter-bg p-md-2">
                                        <p>Price</p>
                                        <p>{{ numFormatter(propertyData?.price) }}</p>
                                    </div>
                                </div>
                                <div class="col-md-5 col-12">
                                    <div
                                        class="d-flex align-items-center justify-content-between m-1 lighter-bg p-md-2">
                                        <p>Purpose</p>
                                        <p>{{ propertyData?.property_listing_pape?.purpose_purpose }}</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div class="description p-2">
                            <h5>Description</h5>
                            <p>
                                <small>
                                    {{ propertyData?.property_listing_pape?.extra_info_description }}
                                </small>
                            </p>
                        </div>
                        <div class="my-5 pe-5 amenities p-2">
                            <h5>Amenities</h5>
                            <div class="lighter-bg">
                                <div class="row">
                                    <div class="col-md-3 m-0 p-0 d-flex align-items-center justify-content-center">
                                        <h6><small>Plot Features</small></h6>
                                    </div>
                                    <div class="col-md-9 amenties-border-left">
                                        <div class="d-flex flex-column justify-content-between">
                                            <div class="d-flex flex-wrap flex-md-nowrap amenties-content">
                                                <p v-if="propertyData?.amenities[0]?.value == 1"
                                                    class="d-flex align-items-center">
                                                    <svg class="pe-1" xmlns="http://www.w3.org/2000/svg" width="1em"
                                                        height="1em" viewBox="0 0 2048 2048">
                                                        <path fill="currentColor"
                                                            d="m1190 1026l-58 115q-80-57-172-87t-192-30q-88 0-170 23t-153 64t-129 100t-100 130t-65 153t-23 170H0q0-120 35-231t101-205t156-167t204-115q-113-74-176-186t-64-248q0-106 40-199t109-163T568 40T768 0t199 40t163 109t110 163t40 200q0 66-16 129t-48 119t-76 104t-101 83q40 16 78 35t73 44M384 512q0 80 30 149t82 122t122 83t150 30q79 0 149-30t122-82t83-122t30-150q0-79-30-149t-82-122t-123-83t-149-30q-80 0-149 30t-122 82t-83 123t-30 149m1395 640h269l-672 896h-264l256-512h-256l387-768h518zm-444 738l457-610h-243l238-384h-209l-258 512h256z" />
                                                    </svg>
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
                                                    <svg class="pe-1" xmlns="http://www.w3.org/2000/svg" width="1em"
                                                        height="1em" viewBox="0 0 32 32">
                                                        <g fill="currentColor">
                                                            <path
                                                                d="M15.98 6.83h.06c.26 0 .47-.21.47-.47V4.33h1.01v.4c0 .33.27.6.6.6h2.08c.16 0 .29-.13.29-.29V3.62a.29.29 0 0 0-.29-.29h-.7v-.6c0-.22-.18-.4-.4-.4h-2.611A.47.47 0 0 0 16.04 2h-.06a.47.47 0 0 0-.47.47v3.89c0 .26.21.47.47.47m-.477 8.134a.527.527 0 0 1-.003-.054V13.5c0-.28.22-.5.5-.5s.5.22.5.5v1.3l1.34 1.34c.2.2.2.51 0 .71c-.11.1-.23.15-.36.15a.47.47 0 0 1-.35-.15l-1.48-1.48a.498.498 0 0 1-.147-.406" />
                                                            <path
                                                                d="m23.99 15.96l.01-1.82c0-.3-.12-.58-.33-.79l-2.36-2.36h5.93c.46 0 .87.28 1.04.71l1.716 4.3H30v14h-6.99v.01H19V30h.01v-5.3c0-.39-.31-.7-.7-.7h-4.65c-.39 0-.7.31-.7.7V30H13v.01H9.01v-.091L9 30H2V16h.004l1.716-4.3c.17-.43.58-.71 1.04-.71h5.93l-2.36 2.36c-.21.21-.33.5-.33.79v1.82h.01c0 .01-.002.017-.005.025A.074.074 0 0 0 8 16.01v.49a.5.5 0 0 0 1 0v-.49a.074.074 0 0 0-.005-.025c-.002-.008-.005-.015-.005-.025H9v-1.21c0-.05.004-.099.01-.147a.985.985 0 0 1 .29-.643l6.15-6.06a.79.79 0 0 1 1.12 0l6.15 6.06c.18.18.28.42.29.67v1.97a.5.5 0 0 0 .99-.1v-.498c0-.017-.001-.033-.01-.042M16 18a3.001 3.001 0 1 0 0-6.002A3.001 3.001 0 0 0 16 18m-6.99-1.92v-.07h-.009zM3.28 21h1.44c.16 0 .28-.12.28-.28v-2.44c0-.15-.13-.28-.28-.28H3.28c-.15 0-.28.13-.28.28v2.44c0 .15.13.28.28.28m4.44 0c.16 0 .28-.12.28-.28v-2.44c0-.15-.13-.28-.28-.28H6.28c-.15 0-.28.13-.28.28v2.44c0 .15.13.28.28.28zm-3 4c.16 0 .28-.12.28-.28v-2.44c0-.15-.13-.28-.28-.28H3.28c-.15 0-.28.13-.28.28v2.44c0 .15.13.28.28.28zm3 0c.16 0 .28-.12.28-.28v-2.44c0-.15-.13-.28-.28-.28H6.28c-.15 0-.28.13-.28.28v2.44c0 .15.13.28.28.28zM24 20.72c0 .15.13.28.28.28h1.44c.16 0 .28-.12.28-.28v-2.44c0-.15-.13-.28-.28-.28h-1.44c-.15 0-.28.13-.28.28zm5 0v-2.44c0-.15-.13-.28-.28-.28h-1.44c-.15 0-.28.13-.28.28v2.44c0 .15.13.28.28.28h1.44c.16 0 .28-.12.28-.28m-3 4v-2.44c0-.15-.13-.28-.28-.28h-1.44c-.15 0-.28.13-.28.28v2.44c0 .15.13.28.28.28h1.44c.16 0 .28-.12.28-.28m3 0v-2.44c0-.15-.13-.28-.28-.28h-1.44c-.15 0-.28.13-.28.28v2.44c0 .15.13.28.28.28h1.44c.16 0 .28-.12.28-.28" />
                                                        </g>
                                                    </svg>
                                                    <small>{{ propertyData?.amenities[7]?.amenities }}</small>
                                                </p>
                                                <p v-if="propertyData?.amenities[8]?.value == 1"
                                                    class="d-flex align-items-center">
                                                    <svg class="pe-1" xmlns="http://www.w3.org/2000/svg" width="1em"
                                                        height="1em" viewBox="0 0 24 24">
                                                        <g fill="none" stroke="currentColor" stroke-width="1.5">
                                                            <path stroke-linecap="round" d="M22 22H2" />
                                                            <path
                                                                d="M17 22V6c0-1.886 0-2.828-.586-3.414C15.828 2 14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586C7 3.172 7 4.114 7 6v16" />
                                                            <path
                                                                d="M21 22V8.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C19.607 5 18.904 5 17.5 5M3 22V8.5c0-1.404 0-2.107.337-2.611a2 2 0 0 1 .552-.552C4.393 5 5.096 5 6.5 5"
                                                                opacity="0.5" />
                                                            <path stroke-linecap="round" d="M12 22v-3" />
                                                            <path stroke-linecap="round"
                                                                d="M10 12h4m-8.5-1H7m-1.5 3H7m10-3h1.5M17 14h1.5m-13-6H7m10 0h1.5M10 15h4"
                                                                opacity="0.5" />
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M12 9V5m2 2h-4" />
                                                        </g>
                                                    </svg>
                                                    <small>{{ propertyData?.amenities[8]?.amenities }}</small>
                                                </p>
                                                <p v-if="propertyData?.amenities[9]?.value == 1"
                                                    class="d-flex align-items-center">
                                                    <svg class="pe-1" xmlns="http://www.w3.org/2000/svg" width="1em"
                                                        height="1em" viewBox="0 0 36 36">
                                                        <path fill="currentColor"
                                                            d="M31 8h-8v2h8v21h-8v2h10V10a2 2 0 0 0-2-2"
                                                            class="clr-i-outline clr-i-outline-path-1" />
                                                        <path fill="currentColor"
                                                            d="M19.88 3H6.12A2.12 2.12 0 0 0 4 5.12V33h18V5.12A2.12 2.12 0 0 0 19.88 3M20 31h-3v-3H9v3H6V5.12A.12.12 0 0 1 6.12 5h13.76a.12.12 0 0 1 .12.12Z"
                                                            class="clr-i-outline clr-i-outline-path-2" />
                                                        <path fill="currentColor" d="M8 8h2v2H8z"
                                                            class="clr-i-outline clr-i-outline-path-3" />
                                                        <path fill="currentColor" d="M12 8h2v2h-2z"
                                                            class="clr-i-outline clr-i-outline-path-4" />
                                                        <path fill="currentColor" d="M16 8h2v2h-2z"
                                                            class="clr-i-outline clr-i-outline-path-5" />
                                                        <path fill="currentColor" d="M8 13h2v2H8z"
                                                            class="clr-i-outline clr-i-outline-path-6" />
                                                        <path fill="currentColor" d="M12 13h2v2h-2z"
                                                            class="clr-i-outline clr-i-outline-path-7" />
                                                        <path fill="currentColor" d="M16 13h2v2h-2z"
                                                            class="clr-i-outline clr-i-outline-path-8" />
                                                        <path fill="currentColor" d="M8 18h2v2H8z"
                                                            class="clr-i-outline clr-i-outline-path-9" />
                                                        <path fill="currentColor" d="M12 18h2v2h-2z"
                                                            class="clr-i-outline clr-i-outline-path-10" />
                                                        <path fill="currentColor" d="M16 18h2v2h-2z"
                                                            class="clr-i-outline clr-i-outline-path-11" />
                                                        <path fill="currentColor" d="M8 23h2v2H8z"
                                                            class="clr-i-outline clr-i-outline-path-12" />
                                                        <path fill="currentColor" d="M12 23h2v2h-2z"
                                                            class="clr-i-outline clr-i-outline-path-13" />
                                                        <path fill="currentColor" d="M16 23h2v2h-2z"
                                                            class="clr-i-outline clr-i-outline-path-14" />
                                                        <path fill="currentColor" d="M23 13h2v2h-2z"
                                                            class="clr-i-outline clr-i-outline-path-15" />
                                                        <path fill="currentColor" d="M27 13h2v2h-2z"
                                                            class="clr-i-outline clr-i-outline-path-16" />
                                                        <path fill="currentColor" d="M23 18h2v2h-2z"
                                                            class="clr-i-outline clr-i-outline-path-17" />
                                                        <path fill="currentColor" d="M27 18h2v2h-2z"
                                                            class="clr-i-outline clr-i-outline-path-18" />
                                                        <path fill="currentColor" d="M23 23h2v2h-2z"
                                                            class="clr-i-outline clr-i-outline-path-19" />
                                                        <path fill="currentColor" d="M27 23h2v2h-2z"
                                                            class="clr-i-outline clr-i-outline-path-20" />
                                                        <path fill="none" d="M0 0h36v36H0z" />
                                                    </svg>
                                                    <small>{{ propertyData?.amenities[9]?.amenities }}</small>
                                                </p>
                                            </div>
                                            <div class="d-flex flex-wrap flex-md-nowrap amenties-content mt-3">
                                                <p v-if="propertyData?.amenities[10]?.value == 1"
                                                    class="d-flex align-items-center">
                                                    <svg class="pe-1" xmlns="http://www.w3.org/2000/svg" width="1em"
                                                        height="1em" viewBox="0 0 20 20">
                                                        <path fill="currentColor"
                                                            d="M4.67 2c-.624 0-1.175.438-1.29 1.068C3.232 3.886 3 5.342 3 6.5c0 1.231.636 2.313 1.595 2.936c.271.177.405.405.405.6v.41q0 .027-.003.054c-.027.26-.151 1.429-.268 2.631C4.614 14.316 4.5 15.581 4.5 16a2 2 0 1 0 4 0c0-.42-.114-1.684-.229-2.869a302 302 0 0 0-.268-2.63L8 10.446v-.41c0-.196.134-.424.405-.6A3.5 3.5 0 0 0 10 6.5c0-1.158-.232-2.614-.38-3.432A1.305 1.305 0 0 0 8.33 2c-.34 0-.65.127-.884.336A1.5 1.5 0 0 0 6.5 2c-.359 0-.688.126-.946.336A1.32 1.32 0 0 0 4.671 2M6 3.5a.5.5 0 0 1 1 0v3a.5.5 0 0 0 1 0V3.33A.33.33 0 0 1 8.33 3c.157 0 .28.108.306.247C8.783 4.06 9 5.439 9 6.5a2.5 2.5 0 0 1-1.14 2.098c-.439.285-.86.786-.86 1.438v.41q0 .08.008.16c.028.258.151 1.424.268 2.622c.118 1.215.224 2.415.224 2.772a1 1 0 1 1-2 0c0-.357.106-1.557.224-2.772c.117-1.198.24-2.364.268-2.622q.008-.08.008-.16v-.41c0-.652-.421-1.153-.86-1.438A2.5 2.5 0 0 1 4 6.5c0-1.06.217-2.44.364-3.253A.305.305 0 0 1 4.671 3A.33.33 0 0 1 5 3.33V6.5a.5.5 0 0 0 1 0zm5 3A4.5 4.5 0 0 1 15.5 2a.5.5 0 0 1 .5.5v6.978l.02.224a626 626 0 0 1 .228 2.696c.124 1.507.252 3.161.252 3.602a2 2 0 1 1-4 0c0-.44.128-2.095.252-3.602c.062-.761.125-1.497.172-2.042l.03-.356H12.5A1.5 1.5 0 0 1 11 8.5zm2.998 3.044l-.021.245l-.057.653c-.047.544-.11 1.278-.172 2.038c-.126 1.537-.248 3.132-.248 3.52a1 1 0 1 0 2 0c0-.388-.122-1.983-.248-3.52a565 565 0 0 0-.229-2.691l-.021-.244v-.001L15 9.5V3.035A3.5 3.5 0 0 0 12 6.5v2a.5.5 0 0 0 .5.5h1a.5.5 0 0 1 .498.544" />
                                                    </svg>
                                                    <small>{{ propertyData?.amenities[10]?.amenities }}</small>
                                                </p>
                                                <p v-if="propertyData?.amenities[11]?.value == 1"
                                                    class="d-flex align-items-center">
                                                    <svg class="pe-1" xmlns="http://www.w3.org/2000/svg" width="1em"
                                                        height="1em" viewBox="0 0 512 512">
                                                        <rect width="352" height="192" x="80" y="112" fill="none"
                                                            stroke="currentColor" stroke-linecap="round"
                                                            stroke-linejoin="round" stroke-width="32" rx="32" ry="32" />
                                                        <rect width="352" height="128" x="80" y="304" fill="none"
                                                            stroke="currentColor" stroke-linecap="round"
                                                            stroke-linejoin="round" stroke-width="32" rx="32" ry="32" />
                                                        <path fill="none" stroke="currentColor" stroke-linecap="round"
                                                            stroke-linejoin="round" stroke-width="32"
                                                            d="M400 112H112a32.09 32.09 0 0 1-32-32h0a32.09 32.09 0 0 1 32-32h288a32.09 32.09 0 0 1 32 32h0a32.09 32.09 0 0 1-32 32M144 432v22a10 10 0 0 1-10 10h-28a10 10 0 0 1-10-10v-22Zm272 0v22a10 10 0 0 1-10 10h-28a10 10 0 0 1-10-10v-22Z" />
                                                        <circle cx="368" cy="368" r="16" fill="none"
                                                            stroke="currentColor" stroke-linejoin="round"
                                                            stroke-width="32" />
                                                        <circle cx="144" cy="368" r="16" fill="none"
                                                            stroke="currentColor" stroke-linejoin="round"
                                                            stroke-width="32" />
                                                        <path fill="none" stroke="currentColor" stroke-linecap="round"
                                                            stroke-linejoin="round" stroke-width="32"
                                                            d="M256 112v192M80 80v288M432 80v288" />
                                                    </svg>
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
                                                    <svg class="pe-1" lns="http://www.w3.org/2000/svg" width="1em"
                                                        height="1em" viewBox="0 0 24 24">
                                                        <g fill="none" fill-rule="evenodd">
                                                            <path
                                                                d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                                                            <path fill="currentColor"
                                                                d="M18 4a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm0 2H6a1 1 0 0 0-.993.883L5 7v5a1 1 0 0 0 .883.993L6 13v-2a1 1 0 0 1 .883-.993L7 10h10a1 1 0 0 1 .993.883L18 11v2a1 1 0 0 0 .993-.883L19 12V7a1 1 0 0 0-.883-.993zm-2 6H8v1h8zm0-5a1 1 0 1 1 0 2a1 1 0 0 1 0-2m-6 9a1 1 0 0 1 1 1v1.172a3 3 0 0 1-.879 2.12l-.414.415a1 1 0 0 1-1.414-1.414l.414-.414A1 1 0 0 0 9 18.172V17a1 1 0 0 1 1-1m3 1a1 1 0 1 1 2 0v1.172a1 1 0 0 0 .293.707l.414.414a1 1 0 1 1-1.414 1.414l-.414-.414A3 3 0 0 1 13 18.172zm-7-1a1 1 0 0 1 1 1v.613a2 2 0 0 1-1.368 1.897l-1.316.439a1 1 0 0 1-.632-1.898L5 17.613V17a1 1 0 0 1 1-1m11 1a1 1 0 1 1 2 0v.613l1.316.438a1 1 0 0 1-.632 1.898l-1.316-.44A2 2 0 0 1 17 17.614z" />
                                                        </g>
                                                    </svg>
                                                    <small>{{ propertyData?.amenities[13]?.amenities }}</small>
                                                </p>
                                            </div>
                                            <div class="d-flex flex-wrap flex-md-nowrap amenties-content">
                                                <p v-if="propertyData?.amenities[14]?.value == 1"
                                                    class="d-flex align-items-center">
                                                    <svg class="pe-1" mlns="http://www.w3.org/2000/svg" width="1em"
                                                        height="1em" viewBox="0 0 64 64">
                                                        <path fill="currentColor"
                                                            d="M41.82 34.893c-3.617.866-7.356 1.213-11.078 1.195c-3.748.01-7.477-.299-11.107-1.126c-1.809-.429-3.595-.981-5.294-1.757c-1.694-.773-3.349-1.724-4.694-3.096c1.047 1.645 2.646 2.863 4.291 3.887c1.673 1 3.479 1.768 5.337 2.334c3.719 1.152 7.618 1.553 11.456 1.576c3.865-.019 7.753-.459 11.462-1.65a25.39 25.39 0 0 0 5.319-2.365c1.647-1.018 3.241-2.209 4.383-3.781c-1.423 1.287-3.082 2.221-4.784 2.992c-1.704.773-3.486 1.343-5.291 1.791" />
                                                        <path fill="currentColor"
                                                            d="M56.576 11.458c-2.033-3.139-11.885-6.51-20.121-8.088C31.91 2.5 26.963 2 22.883 2c-8.718 0-9.181 2.104-9.323 2.752l-.754 2.786c-.033.089-.06.178-.079.263c-.004.017-.004.04-.007.058l-.03.109a.919.919 0 0 0 .019.488c.041.258.142.552.345.868c1.21 1.867 5.675 3.774 11.054 5.35C15.006 15.973 7 20.02 7 27.236c0 .038.002.076.007.115L9.67 48.623c.013 1.978.707 3.854 1.931 5.545l.222 1.188c.553 2.909 7.667 6.393 10.855 5.615C25.172 61.633 27.904 62 30.77 62c11.604 0 21.05-5.996 21.101-13.377l2.661-21.272a.874.874 0 0 0 .008-.114c0-3.684-2.089-6.54-5.342-8.628c4.935-.046 6.503-.938 7.024-1.809a.907.907 0 0 0 .185-.394l.013-.078a.959.959 0 0 0 .024-.088c.014-.066.022-.145.029-.225l.481-2.842c.124-.561-.004-1.138-.378-1.715M52.75 27.18l-2.662 21.27a.862.862 0 0 0-.006.114c0 6.406-8.664 11.618-19.313 11.618c-2.271 0-4.443-.249-6.471-.686c.889-1.75 1.256-4.48 1.256-4.48l-.267-1.438c-6.335-.852-10.03-4.307-10.03-4.307s-1.807 1.399-2.901 2.789c-.582-1.104-.898-2.279-.898-3.497a.862.862 0 0 0-.007-.114L8.789 27.18c.053-7.326 10.441-10.838 20.582-11.132c.354.082.705.163 1.059.241c-10.533.084-19.018 4.052-19.018 8.934c0 4.936 8.667 8.938 19.357 8.938c10.691 0 19.359-4.002 19.359-8.938c0-2.786-2.763-5.274-7.092-6.913c.617.058 1.221.107 1.811.149c4.483 1.761 7.872 4.569 7.903 8.721m-13.795-1.324c.567-.389 1.152-.785 1.738-1.172c.477-1.48.398-4.025 2.262-4.36c1.144-.206 1.985.563 2.634 1.458c.712-.326 1.222-.465 1.401-.314c.915.769.775 1.918.443 2.875c.504.397 1.156.744 1.783 1.027c-.188 4.287-8.552 7.883-18.447 7.883c-7.3 0-13.756-1.961-16.726-4.708a.246.246 0 0 0 .027-.017c-.829-1.287-1.526-2.629-1.182-3.083c.67-.878 2.063.02 3.323.929c1.205-2.009.899-3.976 2.966-4.508c.851-.22 1.269.353 1.617 1.182c1.354-.501 3.131-.862 4.672-2.546c.697-.761.779 1.092.703 2.993c.268.015.553.164.847.413c.149-.667.37-1.109.669-1.194c1.46-.417 2.115.977 2.723 2.093c1.873-4.076 2.94-3.378 3.046.165c1.047-.956 2.216-2.095 3.509-1.455c.888.44.703 1.299.204 2.18c.636.09 1.258.164 1.788.159m10.749-9.071c1.119-.183 1.808-.493 1.908-.943c.363-1.639-7.013-4.444-16.474-6.265c-9.463-1.822-17.432-1.969-17.795-.33c-.111.499.503 1.106 1.667 1.76c-2.926-1.201-4.468-2.244-4.545-2.79c.005-.01.665-.972 5.9-.972c4.077 0 9.382.586 14.937 1.651c12.629 2.418 19.24 5.775 19.4 6.927c-.003.01-.589.859-4.998.962m5.359-3.155c-3.246-2.548-11.691-5.039-19.43-6.521c-5.658-1.084-11.081-1.682-15.267-1.682c-2.479 0-4.143.206-5.275.516l.203-.751c.064-.291 1.54-1.374 7.588-1.374c3.974 0 8.801.488 13.242 1.339c9.716 1.861 17.646 5.277 18.957 7.3c.116.179.133.287.117.363z" />
                                                    </svg>
                                                    <small>{{ propertyData?.amenities[14]?.amenities }}</small>
                                                </p>
                                                <p v-if="propertyData?.amenities[15]?.value == 1"
                                                    class="d-flex align-items-center">
                                                    <svg class="pe-1" xmlns="http://www.w3.org/2000/svg" width="1em"
                                                        height="1em" viewBox="0 0 512 512">
                                                        <path fill="currentColor"
                                                            d="M25 66.75V425.8l78-26V92.74zm462 0l-78 25.99V399.8l78 26V267.5c-1 3.2-2.4 6.2-4.2 8.8c-4.1 6.1-10.7 11-18.8 11s-14.7-4.9-18.8-11s-6.2-13.8-6.2-22s2.1-15.9 6.2-22s10.7-11 18.8-11s14.7 4.9 18.8 11c1.8 2.6 3.2 5.6 4.2 8.8zm-366 28.5V397.3h126V95.25zm144 0V397.3h126V95.25zM135 109.3h98v274h-98v-265zm144 0h98v274h-98v-265zm-126 18v110h62v-110zm144 0v110h62v-110zm167 112c-.8 0-2.1.4-3.8 3s-3.2 7-3.2 12s1.5 9.4 3.2 12s3 3 3.8 3s2.1-.4 3.8-3s3.2-7 3.2-12s-1.5-9.4-3.2-12s-3-3-3.8-3m-311 16v110h62v-110zm144 0v110h62v-110zm-184 160v30h286v-30z" />
                                                    </svg>
                                                    <small>{{ propertyData?.amenities[15]?.amenities }}</small>
                                                </p>
                                            </div>
                                            <div class="d-flex flex-wrap flex-md-nowrap amenties-content">
                                                <p v-if="propertyData?.amenities[16]?.value == 1"
                                                    class="d-flex align-items-center">
                                                    <svg class="pe-1" xmlns="http://www.w3.org/2000/svg" width="1em"
                                                        height="1em" viewBox="0 0 24 24">
                                                        <g fill="none" stroke="currentColor" stroke-linecap="round"
                                                            stroke-linejoin="round" stroke-width="1.5">
                                                            <path
                                                                d="M21 3.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6" />
                                                            <path
                                                                d="M8 6s-2.5 3 0 6s0 6 0 6m4-12s-2.5 3 0 6s0 6 0 6m4-12s-2.5 3 0 6s0 6 0 6" />
                                                        </g>
                                                    </svg>
                                                    <small>{{ propertyData?.amenities[16]?.amenities }}</small>
                                                </p>
                                                <p v-if="propertyData?.amenities[17]?.value == 1"
                                                    class="d-flex align-items-center">
                                                    <svg class="pe-1" xmlns="http://www.w3.org/2000/svg" width="1em"
                                                        height="1em" viewBox="0 0 24 24">
                                                        <path fill="none" stroke="currentColor"
                                                            d="m12.165 7.835l1.3-1.3a3.536 3.536 0 0 0-5-5l-1.3 1.3c-.437.437-.97.767-1.558.963L3.5 4.5v.25l6.75 6.75h.25l.703-2.107c.195-.587.525-1.12.962-1.558Zm0 0L12.27 8a9.724 9.724 0 0 0 5.365 4.38M6.5 10.5a1.414 1.414 0 1 1-2-2m8.965-6.964L14.6.4M12 20.5c0-.66.113-1.322.415-1.91a10.533 10.533 0 0 1 5.264-4.88M12 20.5c5.5 0 8.5 2 8.5 2v1h-17v-1s3-2 8.5-2Zm5.679-6.79a1.5 1.5 0 1 0-.045-1.33m.044 1.33a1.493 1.493 0 0 1-.044-1.33" />
                                                    </svg>
                                                    <small>{{ propertyData?.amenities[17]?.amenities }}</small>
                                                </p>
                                            </div>
                                            <div class="d-flex flex-wrap flex-md-nowrap amenties-content">
                                                <p v-if="propertyData?.amenities[18]?.value == 1"
                                                    class="d-flex align-items-center">
                                                    <svg class="pe-1" xmlns="http://www.w3.org/2000/svg" width="1em"
                                                        height="1em" viewBox="0 0 50 50">
                                                        <path fill="currentColor"
                                                            d="M6 11v33.74C6 46.21 7.237 48 8.76 48h33.218C43.497 48 45 46.21 45 44.74V11zm19.46 26.776c-5.86 0-10.611-4.594-10.611-10.263S19.6 17.25 25.46 17.25s10.611 4.594 10.611 10.263c0 5.67-4.751 10.263-10.611 10.263M41.978 1H8.76C7.237 1 6 2.033 6 3.505V9h39V3.505C45 2.033 43.497 1 41.978 1M19 7H8V3h11zm19.146-.28c-1.249 0-2.258-.979-2.258-2.188c0-1.207 1.009-2.186 2.258-2.186s2.261.979 2.261 2.186c-.001 1.208-1.012 2.188-2.261 2.188" />
                                                    </svg>
                                                    <small>{{ propertyData?.amenities[18]?.amenities }}</small>
                                                </p>
                                                <p v-if="propertyData?.amenities[19]?.value == 1"
                                                    class="d-flex align-items-center">
                                                    <svg class="pe-1" xmlns="http://www.w3.org/2000/svg" width="1em"
                                                        height="1em" viewBox="0 0 24 24">
                                                        <path fill="currentColor"
                                                            d="M16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2s.06-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.92 7.92 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8 8 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.7 15.7 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2" />
                                                    </svg>
                                                    <small>{{ propertyData?.amenities[19]?.amenities }}</small>
                                                </p>
                                            </div>
                                            <div class="d-flex flex-wrap flex-md-nowrap amenties-content">
                                                <p v-if="propertyData?.amenities[20]?.value == 1"
                                                    class="d-flex align-items-center">
                                                    <svg class="pe-1" xmlns="http://www.w3.org/2000/svg" width="1em"
                                                        height="1em" viewBox="0 0 24 24">
                                                        <path fill="none" stroke="currentColor" stroke-linecap="round"
                                                            stroke-linejoin="round" stroke-width="2"
                                                            d="M12 3c-3.866 0-7 3.272-7 7v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10c0-3.728-3.134-7-7-7M5 13h14M12 3v18" />
                                                    </svg> <small>{{ propertyData?.amenities[20]?.amenities }}</small>
                                                </p>
                                                <p v-if="propertyData?.amenities[21]?.value == 1"
                                                    class="d-flex align-items-center">
                                                    <svg class="pe-1" xmlns="http://www.w3.org/2000/svg" width="1em"
                                                        height="1em" viewBox="0 0 512 512">
                                                        <path fill="currentColor"
                                                            d="M447.86 384H64.14A48.2 48.2 0 0 1 16 335.86V128.14A48.2 48.2 0 0 1 64.14 80h383.72A48.2 48.2 0 0 1 496 128.14v207.72A48.2 48.2 0 0 1 447.86 384" />
                                                        <path fill="currentColor" stroke="currentColor"
                                                            stroke-linecap="round" stroke-miterlimit="10"
                                                            stroke-width="32" d="M128 416h256" />
                                                    </svg>
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
                    </div>

                    <div class="tab-pane fade" id="location" role="tabpanel" aria-labelledby="location-tab"
                        tabindex="0">
                        <hr>
                        <h2>Map</h2>
                        <div class="map-inner-content"
                                v-if="propertyData?.property_listing_pape?.address_map_location">
                                <span v-html="propertyData?.property_listing_pape?.address_map_location"></span>
                            </div>

                        <div class="map mt-5" v-if="!propertyData?.property_listing_pape?.address_map_location">
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
                <div class="property-detail d-flex flex-column py-4 px-2 shadow rounded-4 mb-4">
                    <h4><small>PKR</small> {{ numFormatter(propertyData.price) }}</h4>
                    <div class="d-flex flex-wrap align-items-center justify-content-between">
                        <div class="d-flex align-items-center justify-content-center">
                            <a data-v-c970699f="" href="/requestform"
                                class="mx-1 whatsapp-btn text-nowrap px-2 px-md-3 py-2 d-flex flex-nowrap align-items-center justify-content-center"
                                role="button"><i data-v-c970699f="" class="fa-brands fa-whatsapp pe-2"></i>Request
                                Form</a>
                            <a data-v-c970699f="" href="/requestform"
                                class="mx-1 call-btn text-nowrap px-2 px-md-3 py-2 d-flex flex-nowrap align-items-center justify-content-center"
                                role="button"><i data-v-c970699f=""
                                    class="fa-solid fa-phone pe-2 text-white"></i>Request Form</a>
                            <!-- <i class="fa-brands fa-whatsapp px-2" @click="redirectToWhatsApp"></i>
                            <i class="fa-solid fa-phone px-2" @click="redirectToPhoneDialer"></i> -->
                        </div>
                    </div>


                    <!-- inqueryform -->
                    <form class="detail-page-form">
                        <div class="form-floating my-4">
                            <input type="text" v-model="inquiryData.name" class="form-control" id="nameInput"
                                placeholder="New York, San Francisco, etc">
                            <label for="locationInput">Name</label>
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
                <!-- <swiper :speed="1000" :autoplay="autoplay" :slidesPerView="3" :navigation="true" :modules="modules"
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
                </swiper> -->
                <swiper :autoplay="autoplay" :speed="1000" :spaceBetween="5" :pagination="{ clickable: true }"
                    :modules="modules" :breakpoints="{
                        320: { slidesPerView: 1, spaceBetween: 5 },
                        480: { slidesPerView: 1, spaceBetween: 5 },
                        640: { slidesPerView: 1, spaceBetween: 5 },
                        768: { slidesPerView: 2, spaceBetween: 3 },
                        1024: { slidesPerView: 3, spaceBetween: 5 }
                    }" class="mySwiper">
                    <swiper-slide v-for="media in mediaData " :key="media.id" :slidesPerView="3">
                        <RouterLink :to="{ name: 'land-detail', params: { id: media?.id } }"
                            style="text-decoration: none;">
                            <div class="item mx-3">
                                <!-- {{ console.log(media?.property_record_files[0]?.image_uri) }} -->
                                <div class="card border-0 bg-transparent">
                                    <img class="card-img-top rounded-5" :src="getImageUrlSwipper(media)" height="270"
                                        alt="Image">
                                    <div
                                        class="card-body d-flex flex-column justify-content-center justify-content-md-start align-items-md-start align-items-center">
                                        <h5 class="card-title">PKR {{ media?.price }}</h5>
                                        <p class="card-text elip">{{ media?.property_listing_pape?.extra_info_title }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </RouterLink>

                        <div class="d-flex align-items-center justify-content-between px-4 mx-2 mt-2 w-100">
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
import { numFormatter } from '../helpers/numberFormater';
import { ref, onBeforeMount, onBeforeUnmount, onMounted, watch } from 'vue';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import { useRoute } from 'vue-router';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import Loader from './Loader.vue';
import { useFooterStore } from '../stores/FooterLoadingState';


// Modules for Swiper
const modules = ref([Navigation, Autoplay, Pagination]);

const mediaData = ref([]);
const mediaSliderType = ref("All");
const propertyData = ref([]);
const loading = ref(false);
// Retrieve the property ID from the route parameters
const route = useRoute();
const propertyId = ref(route.params.id);

// Create the toast instance
const $toast = useToast();
const footerState = useFooterStore();


//bottom swiper
const getMediabyType = () => {
    loading.value = true;
    const base_url = import.meta.env.VITE_BASE_URL;
    fetch(base_url + '/api/frontend/home/property/swiper/land/detail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 'mediaSliderType': mediaSliderType.value, 'typeId': propertyId.value }) // Use 'body' instead of 'data'
    })
        .then(response => {
            setTimeout(() => {
                loading.value = false;
            }, 2000);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {

            console.log('Success:', data.propertyInfo);
            mediaData.value = data.propertyInfo;
            setTimeout(() => {
                loading.value = false;
            }, 2000);
            // $toast.open({
            //     message: 'Property data fetched successfully!',
            //     type: 'success',
            //     position: 'top-right'
            // });
        })
        .catch(error => {
            console.error('Error:', error);
            loading.value = false;
            $toast.open({
                message: 'Failed to fetch property data.',
                type: 'error',
                position: 'top-right'
            });
        });
};


//bottom swiper
onMounted(() => {
    getMediabyType();
})


const getImageUrlSwipper = (media) => {
    return `${import.meta.env.VITE_BASE_URL}/${media?.property_record_files[0]?.image_uri}`;
}

const autoplay = {
    delay: 3000, // 3 seconds delay between slides
    disableOnInteraction: false // Keep autoplay running even after user interaction
};




// Define reactive references for form data and property data
const inquiryData = ref({
    name: '',
    location: '',
    email: '',
    phone: '',
    description: '',
    agent: [],
    informedMe: false
});


// Helper function to get the image URL
const getImageUrl = (media) => {
    return `${import.meta.env.VITE_BASE_URL}/${media?.image_uri}`;
};

// Function to handle form submission
// Function to handle form submission
const handleInquiryFormSubmission = () => {
    // Make POST request to backend with form data
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
const propertyDetailbyId = () => {
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
}
onBeforeMount(() => {
    // Fetch the media data
    propertyDetailbyId();
});


watch(
    () => route.params.id,
    (newId) => {
        propertyId.value = newId;
        propertyDetailbyId(); // Fetch new data based on the new route parameter
    }
);
onBeforeUnmount(() => {
    footerState.setFooterState(false);
})





</script>


<style scoped>
img {
    object-fit: cover;
}
</style>
