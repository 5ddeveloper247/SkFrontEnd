<template>


    <div id="carouselExampleFade" ref="carousel" class="carousel slide carousel-fade" v-show="!loading">
        <div class="carousel-inner">
            <div class="carousel-item top-carousal active">
                <img src="../assets/Images/main-slider-img-2.jpg" class="d-block w-100" alt="...">
                <div class="slider-text">
                    <div class="anim">
                        <h1 class="text-white p-0 p-md-5 text-center">
                            Find Your Dream Home with
                            <br>
                            <!-- <span>SK Marketing</span> -->
                        </h1>
                    </div>
                </div>
                <div class="overlay"></div>
            </div>
            <div class="carousel-item top-carousal">
                <img src="../assets/Images/main-slider-img-1.jpg" class="d-block w-100" alt="...">
                <div class="slider-text text-end">
                    <div class="anim-2">
                        <h1 class="text-white p-0 p-md-5 text-center text-capitalize">
                            <b>Explore DHA Islamabad Homes</b>
                        </h1>
                    </div>
                </div>
                <div class="overlay"></div>
            </div>
            <div class="carousel-item top-carousal">
                <img src="../assets/Images/main-slider-img-3.jpg" class="d-block w-100" alt="...">
                <div class="slider-text">
                    <div class="anim">
                        <h1 class="text-white p-0 p-md-5 text-center text-uppercase">
                            <b>Discover Bahria Town Properties</b>
                        </h1>
                    </div>
                </div>
                <div class="overlay"></div>
            </div>
            <button class="carousel-control-prev d-none" type="button" data-bs-target="#carouselExampleFade"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon prev-carousal-btn" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next d-none" type="button" data-bs-target="#carouselExampleFade"
                data-bs-slide="next">
                <span class="carousel-control-next-icon next-carousal-btn" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>



        <div class="row justify-content-center pb-4 mt-5 pt-3 properties-calculation-card">
            <div class="col-10 mt-md-5">
                <form action="" class="rounded-2" style="background-color: #111111b8">
                    <div class="d-flex flex-wrap justify-content-between align-items-center p-3 all-property-form">
                        <ul class="d-flex flex-wrap mb-0 p-0">

                            <li class="nav-item mx-3"><a class="nav-links-property p-2 text-white active" href="#"
                                    @click.prevent="setPurpose('Sale')">Sale</a>
                            </li>
                            <li class="nav-item mx-3"><a class="nav-links-property p-2 text-white" href="#"
                                    @click.prevent="setPurpose('Rent')">Rent</a>
                            </li>
                        </ul>
                    </div>

                    <div class="d-flex flex-direction-row align-items-center m-2 mb-4">
                        <form class="row align-items-end w-100">
                            <div class="col-6 col-md mb-4">
                                <select class="form-select" v-model="filterCriteria.city"
                                    aria-label="Default select example">
                                    <option :value="filterCriteria.city" disabled>{{ filterCriteria.city }}</option>
                                    <option v-for="city in cityList" :key="city" :value="city">{{ city }}</option>
                                    <!-- <option value="Islamabad">Islamabad</option>
                                    <option value="Lahore">Lahore</option>
                                    <option value="Karachi">Karachi</option> -->
                                </select>
                            </div>

                            <div class="col-6 col-md mb-4">
                                <select class="form-select" v-model="filterCriteria.homeType"
                                    aria-label="Default select example">
                                    <option :value="filterCriteria.homeType" disabled>{{ filterCriteria.homeType }}
                                    </option>
                                    <option value="House">House</option>
                                    <option value="Flat">Flat</option>
                                </select>
                            </div>

                            <div class="col-6 col-md mb-4">
                                <select class="form-select" v-model="filterCriteria.plot"
                                    aria-label="Default select example">
                                    <option :value="filterCriteria.plot" disabled>{{ filterCriteria.plot }}</option>
                                    <option value="Residential Plot">Residential Plot</option>
                                    <option value="Commercial Plot">Commercial Plot</option>
                                </select>
                            </div>

                            <div class="col-6 col-md mb-4" v-if="filterCriteria.plot === 'Commercial Plot'">
                                <select class="form-select" v-model="filterCriteria.commercial"
                                    aria-label="Default select example">
                                    <option :value="filterCriteria.commercial" disabled>{{ filterCriteria.commercial }}
                                    </option>
                                    <option value="Office">Office</option>
                                    <option value="Shop">Shop</option>
                                    <option value="Building">Building</option>
                                </select>
                            </div>

                            <div class="col-6 col-md mb-4">
                                <select class="form-select" v-model="filterCriteria.rooms"
                                    aria-label="Default select example">

                                    <option :value="filterCriteria.rooms" disabled>{{ filterCriteria.rooms }}</option>
                                    <option v-for="num in parseInt(maxRooms)" :value="num" :key="num">
                                        {{ num }} Room
                                    </option>
                                </select>
                            </div>

                            <button type="button" class="btn col-12 col-md main-button px-3 mb-4 m-2 btn-round"
                                @click="handleFilterCriteria">Search</button>
                        </form>
                    </div>
                </form>
            </div>
        </div>
    </div>




    <div class="container main-body-content mt-5 pt-5">
        <!-- ======================Hero Section================== -->
        <div class="hero-section mt-3 d-none">
            <div class="row px-md-5">
                <div class="col-md-7 px-5 hero-left-section">
                    <h1 class="hero-heading mb-2">Find a perfect <br> home you love..!</h1>
                    <p>Etiam eget elementum elit. Aenean dignissim dapibus vestibulum. <br> Integer a dolor eu sapien
                        sodales vulputate ac in purus.</p>
                    <img class="img-fluid" src="../assets/Images/hero-section-img.png">
                </div>
                <div class="col-md-5 hero-right-section">
                    <div class="shadow py-3 rounded-4 mt-3">
                        <ul class="nav nav-tabs d-flex justify-content-center" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link px-4 active" id="for-sale-tab" data-bs-toggle="tab"
                                    data-bs-target="#for-sale-tab-pane" type="button" role="tab"
                                    aria-controls="for-sale-tab-pane" aria-selected="true">For Sale</button>
                            </li>
                            <li class="nav-item px-5" role="presentation">
                                <button class="nav-link px-4" id="for-rent-tab" data-bs-toggle="tab"
                                    data-bs-target="#for-rent-tab-pane" type="button" role="tab"
                                    aria-controls="for-rent-tab-pane" aria-selected="false">For Rent</button>
                            </li>
                        </ul>
                        <div class="tab-content px-md-5 px-3 py-4" id="myTabContent">
                            <div class="tab-pane fade show active" id="for-sale-tab-pane" role="tabpanel"
                                aria-labelledby="for-sale-tab" tabindex="0">
                                <form>
                                    <div class="form-floating mb-4">
                                        <input type="text" class="form-control" id="floatingInput"
                                            placeholder="New York, San Francisco, etc">
                                        <label for="floatingInput">New York, San Francisco, etc</label>
                                    </div>
                                    <div class="mb-4">
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Select Property Type</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <div class="mb-4">
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Select Rooms</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <button type="submit" class="btn main-button w-100">Submit</button>
                                </form>
                            </div>
                            <div class="tab-pane fade" id="for-rent-tab-pane" role="tabpanel"
                                aria-labelledby="for-rent-tab" tabindex="0">
                                <form>
                                    <div class="form-floating mb-4">
                                        <input type="text" class="form-control" id="floatingInput"
                                            placeholder="New York, San Francisco, etc">
                                        <label for="floatingInput">New York, San Francisco, etc</label>
                                    </div>
                                    <div class="mb-4">
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Select Property Type</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <div class="mb-4">
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Select Rooms</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <button type="submit" class="btn main-button w-100">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="d-flex justify-content-center flex-md-nowrap flex-wrap">
                    <div class="customers d-flex align-items-center shadow px-3 py-2 rounded-5 mx-2 mt-2">
                        <img class="img-fluid" src="../assets/Images/customers.png" alt="">
                        <p class="px-2">72k+ Happy <br> Customers</p>
                    </div>
                    <div class="customers d-flex align-items-center shadow px-3 py-2 rounded-5 mx-2 mt-2">
                        <img class="img-fluid" src="../assets/Images/listing.png" alt="">
                        <p class="px-2">200+ New <br> Land/Properties Everyday!</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- ======================About Us================== -->
        <div class="row px-md-5 d-flex justify-content-center pb-5">
            <div class="col-lg-6 d-flex flex-column">
                <span>
                    WHO ARE WE
                </span>
                <h2 class="text-capitalize">
                    Assisting individuals in <br> locating the appropriate <br> real estate.
                </h2>
                <p>Your trusted partner for Bahria Town and DHA Islamabad properties. We offer personalized service to
                    make finding your dream home easy and enjoyable. Experience excellence with us.
                </p>
                <div class="who-we-are-card d-flex align-items-center px-4 py-2 shadow rounded-4 mt-3">
                    <i class="fa-solid fa-house"></i>
                    <div class="d-flex flex-column px-4">
                        <span>Rent and Buy Homes</span>
                        <p>
                            Discover top properties in Bahria Town <br> and DHA Islamabad with SK Marketing.
                        </p>
                    </div>
                </div>
                <div class="who-we-are-card d-flex align-items-center px-4 py-2 shadow rounded-4 mt-3">
                    <i class="fa-regular fa-user"></i>
                    <div class="d-flex flex-column px-4">
                        <span>Your Satisfaction Guaranteed</span>
                        <p>
                            we ensure your satisfaction. Find your <br> ideal home in Bahria Town and DHA <br> Islamabad
                            with us.
                        </p>
                    </div>
                </div>
                <RouterLink to="/requestform"
                    class="mx-1 mt-4 nav-sub-links-main shadow text-nowrap px-2 px-md-5 py-1 py-md-2 d-flex flex-nowrap align-items-center justify-content-center"
                    role="button"><i class="far fa-paper-plane pe-2"></i>Request Form</RouterLink>
            </div>
            <div class="col-lg-6">
                <div class="d-flex flex-md-nowrap flex-wrap photo-gallery justify-content-center">
                    <img class="mt-5 photto-gallery-1" src="../assets/Images/home1.png">
                    <div class="d-flex flex-column">
                        <img class="photto-gallery-2" src="../assets/Images/home2.png">
                        <img class="photto-gallery-3" src="../assets/Images/home3.png">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ======================BlHeogs================== -->
    <div class="blogs">
        <div class="p-5">
            <h2 class="text-center text-white">Our Projects in Bahria/DHA</h2>
            <div class="row justify-content-center mt-4">
                <div class="col-md-4">
                    <div class="card border-0 bg-transparent">
                        <img class="img-fluid rounded-4 card-img-top" src="../assets/Images/project-img-1.jpg"
                            alt="Image">
                        <div class="card-body d-flex flex-column align-items-start">
                            <h5 class="card-title text-white">Exclusive Bahria Town Offering</h5>
                            <p><small class="text-white">
                                    Explore our latest project in Bahria Town, where we offer exceptional homes for sale
                                    and rent.</small></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card border-0 bg-transparent">
                        <img class="img-fluid rounded-4 card-img-top" src="../assets/Images/project-img-2.jpg"
                            alt="Image">
                        <div class="card-body d-flex flex-column align-items-start">
                            <h5 class="card-title text-white">
                                Our Diverse Portfolio of Projects
                            </h5>
                            <p><small class="text-white">
                                    Discover SK Marketing's diverse projects in Bahria Town and DHA Islamabad, offering
                                    luxurious and affordable homes tailored to your needs.</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="owl-carousel owl-theme mt-4 px-5 d-none">
                <div class="item mx-3">
                    <div class="card border-0 bg-transparent">
                        <img class="img-fluid card-img-top" src="../assets/Images/blogs.jpeg" alt="Image">
                        <div class="card-body">
                            <h5 class="card-title text-white">Top 10 Home Buying <br> Mistakes to Avoid</h5>
                            <p><small class="text-white">Etiam eget elementum elit. Aenean dignissim dapibus
                                    vestibulum</small></p>
                        </div>
                    </div>
                </div>
                <div class="item mx-3">
                    <div class="card border-0 bg-transparent">
                        <img class="img-fluid card-img-top" src="../assets/Images/blogs2.jpeg" alt="Image">
                        <div class="card-body">
                            <h5 class="card-title text-white">How to Stage Your <br> Home for a Quick Sale</h5>
                            <p><small class="text-white">In hac habitasse platea dictumst. Phasellus vel velit vel
                                    augue
                                    maximus.</small></p>
                        </div>
                    </div>
                </div>
                <div class="item mx-3">
                    <div class="card border-0 bg-transparent">
                        <img class="img-fluid card-img-top" src="../assets/Images/blogs3.jpeg" alt="Image">
                        <div class="card-body">
                            <h5 class="card-title text-white">5 Tips for First-Time <br> Home Sellers</h5>
                            <p><small class="text-white">103 Wright CourtBurien, WA 98168</small></p>
                        </div>
                    </div>
                </div>
                <div class="item mx-3">
                    <div class="card border-0 bg-transparent">
                        <img class="img-fluid card-img-top" src="../assets/Images/blogs.jpeg" alt="Image">
                        <div class="card-body">
                            <h5 class="card-title text-white">Top 10 Home Buying <br> Mistakes to Avoid</h5>
                            <p><small class="text-white">Etiam eget elementum elit. Aenean dignissim dapibus
                                    vestibulum</small></p>
                        </div>
                    </div>
                </div>
                <div class="item mx-3">
                    <div class="card border-0 bg-transparent">
                        <img class="img-fluid card-img-top" src="../assets/Images/blogs2.jpeg" alt="Image">
                        <div class="card-body">
                            <h5 class="card-title text-white">How to Stage Your <br> Home for a Quick Sale</h5>
                            <p><small class="text-white">In hac habitasse platea dictumst. Phasellus vel velit vel
                                    augue
                                    maximus.</small></p>
                        </div>
                    </div>
                </div>
                <div class="item mx-3">
                    <div class="card border-0 bg-transparent">
                        <img class="img-fluid card-img-top" src="../assets/Images/blogs3.jpeg" alt="Image">
                        <div class="card-body">
                            <h5 class="card-title text-white">5 Tips for First-Time <br> Home Sellers</h5>
                            <p><small class="text-white">103 Wright CourtBurien, WA 98168</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="container">
        <!-- ======================Manual Slider================== -->

        <div class="row mt-5 px-md-5">
            <p class="text-center">Trusted by 100+ Companies across the globe! </p>
            <div class="slider-carosal mt-4">
                <div class="slides_carosal">
                    <img src="https://addepto.com/wp-content/uploads/2022/05/sita.svg">
                    <img src="https://addepto.com/wp-content/uploads/2022/06/hertz.svg">
                    <img src="https://addepto.com/wp-content/uploads/2022/05/inpost.svg">
                    <img src="https://addepto.com/wp-content/uploads/2022/06/abb.svg">
                    <img src="https://addepto.com/wp-content/uploads/2022/05/jabil.svg">
                    <img src="https://addepto.com/wp-content/uploads/2024/03/NDA-2.png">
                </div>
                <div class="slides_carosal">
                    <img src="https://addepto.com/wp-content/uploads/2022/05/sita.svg">
                    <img src="https://addepto.com/wp-content/uploads/2022/06/hertz.svg">
                    <img src="https://addepto.com/wp-content/uploads/2022/05/inpost.svg">
                    <img src="https://addepto.com/wp-content/uploads/2022/06/abb.svg">
                    <img src="https://addepto.com/wp-content/uploads/2022/05/jabil.svg">
                    <img src="https://addepto.com/wp-content/uploads/2024/03/NDA-2.png">
                </div>
            </div>
        </div>


        <!-- ======================Listing================== -->
        <div class="row my-5 px-md-5">
            <span>Latest Properties</span>
            <div class="d-flex justify-content-between listing-ul mb-3">
                <p>
                    Explore the Latest Properties Listed by SK Marketing <br> in Bahria Town and DHA Islamabad.
                </p>
                <ul class="d-flex justify-content-end flex-nowrap mb-0 p-0">
                    <li class="nav-item mx-1">
                        <a class="listed-properties py-2 px-3 text-black active" href="#"
                            @click.prevent="setMediaType('All')">All</a>
                    </li>
                    <li class="nav-item mx-1">
                        <a class="listed-properties py-2 px-3 text-black" href="#"
                            @click.prevent="setMediaType('Sale')">Sale</a>
                    </li>
                    <li class="nav-item mx-1">
                        <a class="listed-properties py-2 px-3 text-black" href="#"
                            @click.prevent="setMediaType('Rent')">Rent</a>
                    </li>
                </ul>
            </div>


            <div v-if="mediaData.length > 0">
                <swiper :autoplay="autoplay" :speed="1000" :spaceBetween="5" :pagination="{ clickable: true }"
                    :modules="modules" :breakpoints="{
                        320: { slidesPerView: 1, spaceBetween: 5 },
                        480: { slidesPerView: 1, spaceBetween: 5 },
                        640: { slidesPerView: 1, spaceBetween: 5 },
                        768: { slidesPerView: 2, spaceBetween: 3 },
                        1024: { slidesPerView: 3, spaceBetween: 5 }
                    }" class="mySwiper">
                    <swiper-slide v-for="media in mediaData" :key="media.id" :slidesPerView="3">
                        <RouterLink :to="{ name: 'land-detail', params: { id: media.id } }"
                            style="text-decoration: none;">
                            <div class="item mx-3">
                                <div class="card border-0 bg-transparent">
                                    <img class="card-img-top rounded-5" :src="getImageUrl(media)" height="270"
                                        alt="Image">
                                    <div
                                        class="card-body d-flex flex-column justify-content-center justify-content-md-start align-items-md-start align-items-center pb-1">
                                        <h5 class="card-title">PKR {{ numFormatter(media.price) }}</h5>
                                        <p class="card-text elip">{{ media.property_listing_pape.extra_info_title }}</p>
                                    </div>
                                </div>
                            </div>
                        </RouterLink>

                        <div class="d-flex align-items-center justify-content-between px-4 mx-2 w-100">
                            <div class="d-flex align-items-center">
                                <div><i class="fa-solid fa-bed pe-2"></i>{{
                                    media.property_listing_pape.propertyDetail_bedrooms }}</div>
                                <div class="mx-3"><i class="fa-solid fa-toilet pe-2"></i>{{
                                    media.property_listing_pape.propertyDetail_bathrooms }}</div>
                            </div>
                            <div class="d-flex align-items-center">
                                <a class="btn btn-sm nav-sub-links-main text-nowrap px-2 px-md-3 py-1 d-flex flex-nowrap align-items-center justify-content-center"
                                    :href="'mailto:' + media.pInfo_email" role="button">
                                    <i class="fa-regular fa-envelope pe-2"></i>
                                </a>
                                <a class="btn btn-sm mx-2 nav-sub-links-main text-nowrap px-2 px-md-3 py-1 d-flex flex-nowrap align-items-center justify-content-center"
                                    :href="'tel:' + media.pInfo_phoneNumber" role="button">
                                    <i class="fa-solid fa-phone pe-2"></i>
                                </a>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>

            <div v-else class="no-properties-message">
                <p>No properties listed at the moment. Please check back later.</p>
            </div>
        </div>
    </div>

    <!-- ======================Our Services================== -->
    <div class="our-services py-5">
        <div class="container">
            <div class="row py-md-5 px-md-5 justify-content-center">
                <p class="text-center">Our Services</p>
                <h2 class="text-center pb-4">Real Estate Services in Bahria Town, DHA Islamabad</h2>
                <div class="row">
                    <div class="col-md-4">
                        <div class="card estate-services rounded-4 py-5 my-1">
                            <div class="d-flex align-items-center justify-content-center our-services-card-img">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <div class="card-body px-5 d-flex flex-column align-items-center pb-0 pt-3">
                                <h5 class="card-title text-center">Buy a New Home</h5>
                                <p class="card-text text-center">
                                    Purchase Your Ideal Home with SK Marketing in Bahria Town and DHA Islamabad.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card estate-services rounded-4 py-5 my-1">
                            <div class="d-flex align-items-center justify-content-center our-services-card-img">
                                <i class="fa-solid fa-house"></i>
                            </div>
                            <div class="card-body px-5 d-flex flex-column align-items-center pb-0 pt-3">
                                <h5 class="card-title text-center">Sell a House</h5>
                                <p class="card-text text-center">
                                    Let SK Marketing help you sell your house in Bahria Town or DHA Islamabad
                                    efficiently.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card estate-services rounded-4 py-5 my-1">
                            <div class="d-flex align-items-center justify-content-center our-services-card-img">
                                <i class="fa-solid fa-house-laptop"></i>
                            </div>
                            <div class="card-body px-5 d-flex flex-column align-items-center pb-0 pt-3">
                                <h5 class="card-title text-center">Rent a House</h5>
                                <p class="card-text text-center">
                                    Rent out your property securely in Bahria Town or DHA Islamabad.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ======================Areas================== -->
    <div class="container d-none">
        <div class="p-5">
            <span>AREAS ACROSS THE TOWN</span>
            <h2>Neighborhood Properties</h2>
            <div class="row">
                <div class="col-md-3 p-0 area-images"><img class="img-fluid h-100 area-images-1"
                        src="../assets/Images/area-img-1.png">
                    <div class="area-content d-flex flex-column">
                        <h2>216</h2>
                        <p>New York City, NY</p>
                    </div>
                </div>
                <div class="col-md-3 p-0 area-images"><img class="img-fluid h-100 area-images-2"
                        src="../assets/Images/area-img-2.png">
                    <div class="area-content d-flex flex-column">
                        <h2>141</h2>
                        <p>New York City, NY</p>
                    </div>
                </div>
                <div class="col-md-6 p-0 area-images"><img class="img-fluid h-100 area-images-3"
                        src="../assets/Images/area-img-3.png">
                    <div class="area-content d-flex flex-column">
                        <h2>212</h2>
                        <p>New York City, NY</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 p-0 area-images"><img class="img-fluid h-100 area-images-4"
                        src="../assets/Images/area-img-4.png">
                    <div class="area-content d-flex flex-column">
                        <h2>183</h2>
                        <p>New York City, NY</p>
                    </div>
                </div>
                <div class="col-md-8 p-0 area-images"><img class="img-fluid h-100 area-images-5"
                        src="../assets/Images/area-img-5.png">
                    <div class="area-content d-flex flex-column">
                        <h2>112</h2>
                        <p>New York City, NY</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- ======================Team================== -->

        <div class="p-5 d-none">
            <div class="row">
                <div class="col-md-3">
                    <div class="card border-0 bg-transparent team-card mx-3">
                        <img class="img-fluid" src="../assets/Images/team-image-1.jpg">
                        <div class="card-body">
                            <h4 class="card-title text-center">Brendon M</h4>
                            <p class="card-text text-center"><small>CEO & Founder</small></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border-0 bg-transparent team-card mx-3">
                        <img class="img-fluid" src="../assets/Images/team-image-1.jpg">
                        <div class="card-body">
                            <h4 class="card-title text-center">Jodi J. Appleby</h4>
                            <p class="card-text text-center"><small>Real Estate Developer</small></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border-0 bg-transparent team-card mx-3">
                        <img class="img-fluid" src="../assets/Images/team-image-1.jpg">
                        <div class="card-body">
                            <h4 class="card-title text-center">Justin S. Meza</h4>
                            <p class="card-text text-center"><small>Listing Agent</small></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border-0 bg-transparent team-card mx-3">
                        <img class="img-fluid" src="../assets/Images/team-image-1.jpg">
                        <div class="card-body">
                            <h4 class="card-title text-center">Susan T. Smith</h4>
                            <p class="card-text text-center"><small>Buyer's Agent</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- ======================Testimonials================== -->
    <div class="container ">
        <div class="testimonials">
            <div class="p-5">
                <div class="row justify-content-between">
                    <div class="col-md-7">
                        <span>TESTIMONIALS</span>
                        <h2>Look What Our Customers Say!</h2>
                        <p>
                            Discover the glowing reviews and heartfelt testimonials from our valued clients who have
                            experienced the exceptional real estate services provided by SK Marketing in Bahria Town and
                            DHA Islamabad. Our dedication to excellence ensures that every client finds their perfect
                            property with ease and satisfaction.
                        </p>
                    </div>
                    <div class="col-md-5">
                        <swiper :autoplay="autoplay" :slidesPerView="1" :speed="2000" :spaceBetween="50"
                            :modules="modules" class="mySwiper">
                            <swiper-slide v-for="testimonial in testimonials " :key="testimonial.id">
                                <div class="bg-transparent">
                                    <div class="right-testimonial border p-4 rounded-4 bg-transparent">
                                        <p>
                                            {{ testimonial.description }}
                                        </p>
                                        <hr>
                                        <div class="d-flex align-items-center justify-content-between ">
                                            <div class="d-flex align-items-center">
                                                <img class="img-fluid"
                                                    :src="getTestimonialImageUrl(testimonial.image_url)" alt="">
                                                <p class="px-2">{{ testimonial.name }}</p>
                                            </div>
                                            <!-- <img src="../assets/Images/ratings.png" alt="" style="height:50px;"> -->
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                        </swiper>


                    </div>
                </div>
            </div>
        </div>
        <!-- ======================Become Agent================== -->
        <div class="become-agent">
            <div class="inside-agent px-md-5 px-1 pt-2 pb-md-0 pb-2 m-5 rounded-4">
                <div class="d-flex align-items-center justify-content-between flex-md-nowrap flex-wrap">
                    <img class="img-fluid" src="../assets/Images/agent.png">
                    <div class="d-flex flex-column p-3">
                        <h2 class="text-white">Become a Partner.</h2>
                        <p class="text-white">
                            Join forces with SK Marketing and explore <br> partnership opportunities in Bahria Town and
                            DHA Islamabad.
                        </p>
                    </div>
                    <RouterLink to="/contact" type="button" class="enquiry-btn mx-3 rounded-pill nav-link text-nowrap px-2 px-md-4 py-1 
                        py-1 d-flex flex-column align-items-center justify-content-center">
                        Enquire Now
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
    <!-- ======================Modals================== -->

</template>





<script setup>
import { ref, onMounted, onBeforeUnmount, onBeforeMount } from 'vue';
import emitter from '../../emitter';
import { RouterLink, useRouter, onBeforeRouteLeave } from 'vue-router';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import { useFormDataStore } from '.././stores/HomeDataFilterStore'; // Adjust the path as necessary
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import Loader from './Loader.vue';
import { useCityData } from '@/composables/useCityData';
import { useFooterStore } from '../stores/FooterLoadingState';
import { numFormatter } from '../helpers/numberFormater';
// Modules for Swiper
const modules = ref([Navigation, Autoplay, Pagination]);
// Autoplay configuration
const autoplay = {
    delay: 3500, // 3 seconds delay between slides
    disableOnInteraction: false // Keep autoplay running even after user interaction
};

const formDataStore = useFormDataStore();
const { cityData, error, cityList, fetchCityData } = useCityData();
//Create the toast instance
const $toast = useToast();
const router = useRouter();
const footerState = useFooterStore();

const mediaData = ref([]);
const testimonials = ref([]);
const maxRooms = ref(1);
const loading = ref(true);

////////////////////////
const carousel = ref(null);
const autoplayInterval = ref(null);
const mediaSliderType = ref(null);
const autoplaySpeed = 5000;

const filterCriteria = ref({
    purpose: 'Sale',
    city: 'Select city',
    homeType: 'Select home type',
    plot: 'Select plot type',
    commercial: 'Select commercial type',
    rooms: 'Select rooms',
    //inactive still

    location: '',
    min_price: '',
    max_price: '',
    min_area: '',
    max_area: '',
    min_bedrooms: '',
    max_bedrooms: '',
    min_bathrooms: '',
    max_bathrooms: '',
    min_garages: '',
    max_garages: '',
    min_year: '',

});

const handleFilterCriteria = () => {
    const cityVal = filterCriteria.value.city;
    const homeTypeVal = filterCriteria.value.homeType;
    const plotVal = filterCriteria.value.plot;
    const commercialVal = filterCriteria.value.commercial;
    const rooms = filterCriteria.value.rooms;
    //  alert(cityVal+homeTypeVal+plotVal+commercialVal)
    if (cityVal.includes('Select')) {
        filterCriteria.value.city = '';
        //alert(filterCriteria.value.city)
    }
    if (homeTypeVal.includes('Select')) {
        filterCriteria.value.homeType = '';
        //alert(filterCriteria.value.homeType)
    }
    if (plotVal.includes('Select')) {
        filterCriteria.value.plot = '';
        //alert(filterCriteria.value.plot)
    }
    if (commercialVal.includes('Select')) {
        filterCriteria.value.commercial = '';
        //alert(filterCriteria.value.commercial)
    }
    // alert(rooms)
    // if (rooms.includes('Select')) {
    //     filterCriteria.value.rooms = '';
    //     //alert(filterCriteria.value.commercial)
    // }


    formDataStore.setFilterData(filterCriteria.value);
    router.push({ name: 'land' }); // Use named route
}

const setPurpose = (purpose) => {

    filterCriteria.value.purpose = purpose;
    //alert(filterCriteria.purpose)
}


//creating image url
const getImageUrl = (media) => {
    return `${import.meta.env.VITE_BASE_URL}/${media?.property_record_files[0]?.image_uri}`;
}


const getTestimonialImageUrl = (url) => {
    return `${import.meta.env.VITE_BASE_URL}/${url}`;
};

const startAutoplay = () => {
    autoplayInterval.value = setInterval(() => {
        carousel.value.querySelector('.carousel-control-next').click();
    }, autoplaySpeed);
}
const stopAutoplay = () => {
    if (autoplayInterval.value) {
        clearInterval(autoplayInterval.value);
        autoplayInterval.value = null;
    }
}
const handleSlideChange = () => {
    const activeItem = carousel.value.querySelector('.carousel-item.active');
    const textElements = activeItem.querySelectorAll('.slider-text-1, .slider-text-2, .slider-text-3');
    textElements.forEach(el => {
        el.style.animation = 'none';
        el.offsetHeight;
        el.style.animation = null;
    });
}
onMounted(() => {
    startAutoplay();
    carousel.value.addEventListener('slide.bs.carousel', handleSlideChange);
});
onBeforeUnmount(() => {
    stopAutoplay();
    if (carousel.value) {
        carousel.value.removeEventListener('slide.bs.carousel', handleSlideChange);
    }
});



const setMediaType = (type) => {
    mediaSliderType.value = type;
    getMediabyType();
};

const getMediabyType = () => {
    //loading.value = true;
    const base_url = import.meta.env.VITE_BASE_URL;
    fetch(base_url + '/api/frontend/home/property/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 'mediaSliderType': mediaSliderType.value }) // Use 'body' instead of 'data'
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




onMounted(() => {
    window.scrollTo(0, 0);
});


onMounted(() => {

    // Make API call
    //loading.value = true; 
    const base_url = import.meta.env.VITE_BASE_URL;
    fetch(base_url + '/api/frontend/home/property/get', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            setTimeout(() => {
                loading.value = false;
            }, 1000);
            mediaData.value = data.propertyInfo;
            testimonials.value = data.testimonials;
            maxRooms.value = data.maxRooms;

            // $toast.open({
            //     message: 'Property data fetched successfully!',
            //     type: 'success',
            //     position: 'top-right'
            // });
        })
        .catch(error => {
            setTimeout(() => {
                loading.value = false;
            }, 2000);
            console.error('Error:', error);
            $toast.open({
                message: 'Failed to fetch property data.',
                type: 'error',
                position: 'top-right'
            });
        });
});



onMounted(() => {

    gsap.to(".hero-left-section", { x: 0, opacity: 1, duration: 0.8 });
    gsap.to(".hero-right-section", { x: 0, opacity: 1, duration: 0.8 });

    gsap.to(".photto-gallery-1, .photto-gallery-2, .photto-gallery-3", {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        scrollTrigger: {
            trigger: ".photto-gallery-1",
            scroller: "body",
            start: "top 60%",
            end: "top 35%",
        },
    });

    gsap.to(".area-images-1, .area-images-2, .area-images-3, .area-images-4, .area-images-5", {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        scrollTrigger: {
            trigger: ".area-images-1",
            scroller: "body",
            start: "top 60%",
            end: "top 35%",
        },
    });


    $(document).ready(() => {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayHoverPause: true,

        });

        $('.right-testimonial-carousel').owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
        });

        $('.nav-links-property').on('click', function (event) {
            event.preventDefault();
            $('.nav-links-property').removeClass('active');
            $(this).addClass('active');
        });

        $('.listed-properties').on('click', function (event) {
            event.preventDefault();
            $('.listed-properties').removeClass('active');
            $(this).addClass('active');
        });
    });
});





onBeforeRouteLeave((to, from, next) => {
    footerState.setFooterState(false);
    next();
});

onMounted(() => {
    footerState.setFooterState(false);
    footerState.setFooterState(true);
})

onBeforeUnmount(() => {
    footerState.setFooterState(false);
})
</script>














<style scoped>
.swiper-button-prev {
    color: var(--second--main-color);
}

.swiper-button-next {
    color: var(--second--main-color);
}

.card-body {
    width: 100%;
}



img {
    object-fit: cover;
}

.enquiry-btn {
    border: 1px solid #fff;
}

h1 {
    font-size: clamp(45px, 10vw, 60px);
    font-weight: 300;
}

span {
    font-weight: 700;
}

.no-properties-message {
    text-align: center;
    font-size: 1.5em;
    color: rgb(244, 93, 8);
    margin-top: 20px;
    animation: fadeIn 1.5s ease-in-out;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(-5px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>