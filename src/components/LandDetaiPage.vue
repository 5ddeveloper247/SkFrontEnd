<script setup>
</script>

<template>
    <div class="container pt-5">
        <div class="row justify-content-start px-md-4 pb-md-4 p-2 pt-2 pt-md-5">
            <div class="mb-2 d-flex justify-content-between pt-5">
                <div>
                    <h5>signature properties offer beautiful plot sector B park face dha phase 2 islamabad</h5>
                    <p><small>DHA Defence Phase 2, DHA Defence, Islamabad, Islamabad Capital</small></p>
                </div>
                <div>
                    <i class="fa-solid fa-print px-2"></i>
                    <i class="fa-solid fa-share-from-square px-2"></i>
                </div>
            </div>








            <div class="col-md-8">
                <div id="society-detail-carousel" class="carousel slide">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="../assets/Images/about-us-bg.avif" class="d-block w-100" alt="Image 1">
                            <div class="verified-society rounded-2">
                                <p class="text-white p-2 d-flex align-items-center"><i
                                        class="fa-solid fa-check pe-2"></i>Verified</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/Images/services-bg.avif" class="d-block w-100" alt="Image 2">
                            <div class="verified-society rounded-2">
                                <p class="text-white p-2 d-flex align-items-center"><i
                                        class="fa-solid fa-check pe-2"></i>Verified</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/Images/about-us-bg.avif" class="d-block w-100" alt="Image 3">
                            <div class="verified-society rounded-2">
                                <p class="text-white p-2 d-flex align-items-center"><i
                                        class="fa-solid fa-check pe-2"></i>Verified</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#society-detail-carousel"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#society-detail-carousel"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

                <div class="d-flex justify-content-start my-4 mx-md-5">
                    <div class="d-flex flex-column justify-content-center align-items-center mx-3">
                        <i class="fa-solid fa-bed px-4"></i>
                        <p class="mt-3 text-center">{{ propertyData.property_listing_pape?.propertyDetail_bathrooms }}</p>
                    </div>
                    <div class="d-flex flex-column justify-content-center align-items-center mx-3">
                        <i class="fa-solid fa-bath px-4"></i>
                        <p class="mt-3 text-center">{{ propertyData.property_listing_pape?.propertyDetail_bedrooms }}</p>
                    </div>
                    <div class="d-flex flex-column justify-content-center align-items-center mx-3">
                        <i class="fa-solid fa-arrows-up-down px-4"></i>
                        <p class="mt-3 text-center">{{ propertyData.property_listing_pape?.propertyDetail_area_unit }} / {{ propertyData.property_listing_pape?.propertyDetail_area }}</p>
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
                                            <p class="text-start text-nowrap">Residential Plot</p>
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
                                        <p>Residential Plot</p>
                                    </div>
                                </div>
                                <div class="col-md-5 col-12">
                                    <div class="d-flex align-items-center justify-content-between m-2">
                                        <p>Area</p>
                                        <p>1 Kanal</p>
                                    </div>
                                </div>
                                <div class="col-md-5 col-12">
                                    <div class="d-flex align-items-center justify-content-between m-2">
                                        <p>Price</p>
                                        <p>PKR 4.35 Crore</p>
                                    </div>
                                </div>
                                <div class="col-md-5 col-12">
                                    <div class="d-flex align-items-center justify-content-between m-2">
                                        <p>Purpose</p>
                                        <p>For Sale</p>
                                    </div>
                                </div>
                                <div class="col-md-5 col-12">
                                    <div class="d-flex align-items-center justify-content-between m-2">
                                        <p>Type</p>
                                        <p>Residential Plot</p>
                                    </div>
                                </div>
                                <div class="col-md-5 col-12">
                                    <div class="d-flex align-items-center justify-content-between m-2">
                                        <p>Area</p>
                                        <p>1 Kanal</p>
                                    </div>
                                </div>
                                <div class="col-md-5 col-12">
                                    <div class="d-flex align-items-center justify-content-between m-2">
                                        <p>Price</p>
                                        <p>PKR 4.35 Crore</p>
                                    </div>
                                </div>
                                <div class="col-md-5 col-12">
                                    <div class="d-flex align-items-center justify-content-between m-2">
                                        <p>Purpose</p>
                                        <p>For Sale</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="description shadow p-2 rounded-4">
                            <h5>Description</h5>
                            <p>
                                <small>BEAUTIFUL HOUSE FOR SALE IN DHA DEFENCE <br>
                                    LOCATION DHA PHASE 2 ISLAMABAD <br>HOUSE TYPE BUNGLOW
                                    <br>BEDROOMS 05
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
                                            <p class="d-flex align-items-center"><i
                                                    class="fa-solid fa-bolt pe-1"></i><small>Possesion</small></p>
                                            <p class="d-flex align-items-center"><i
                                                    class="fa-solid fa-check-to-slot pe-1"></i><small>Balloted</small>
                                            </p>
                                            <p class="d-flex align-items-center"><i
                                                    class="fa-solid fa-plate-wheat pe-1"></i><small>Sewerage</small></p>
                                        </div>
                                        <div class="d-flex flex-wrap flex-md-nowrap amenties-content mt-3">
                                            <p class="d-flex align-items-center"><i
                                                    class="fa-solid fa-bolt pe-1"></i><small>Electricity</small></p>
                                            <p class="d-flex align-items-center"><i
                                                    class="fa-solid fa-water pe-1"></i><small>Water Supply</small></p>
                                            <p class="d-flex align-items-center"><i
                                                    class="fa-solid fa-fire-flame-simple pe-1"></i><small>Sui
                                                    Gas</small></p>
                                        </div>
                                        <div class="d-flex flex-wrap flex-md-nowrap amenties-content mt-3">
                                            <p class="d-flex align-items-center"><i
                                                    class="fa-solid fa-border-all pe-1"></i><small>Boundary Wall</small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-md-4 mt-2">
                                <div class="col-md-3 m-0 p-0 d-flex align-items-center justify-content-center">
                                    <h6><small>Nearby Locations <br> and Other Facilitie</small></h6>
                                </div>
                                <div class="col-md-9 amenties-border-left">
                                    <div class="d-flex flex-column justify-content-between">
                                        <div class="d-flex flex-wrap flex-md-nowrap amenties-content">
                                            <p class="d-flex align-items-center"><i
                                                    class="fa-solid fa-bolt pe-1"></i><small>Nearby Schools</small></p>
                                            <p class="d-flex align-items-center"><i
                                                    class="fa-solid fa-check-to-slot pe-1"></i><small>Nearby
                                                    Hospitals</small></p>
                                            <p class="d-flex align-items-center"><i
                                                    class="fa-solid fa-plate-wheat pe-1"></i><small>Nearby Shopping
                                                    Malls</small></p>
                                        </div>
                                        <div class="d-flex flex-wrap flex-md-nowrap amenties-content mt-3">
                                            <p class="d-flex align-items-center"><i
                                                    class="fa-solid fa-bolt pe-1"></i><small>Nearby Restaurants</small>
                                            </p>
                                            <p class="d-flex align-items-center"><i
                                                    class="fa-solid fa-water pe-1"></i><small>Nearby Public Transport
                                                    <br> Service</small></p>
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
                                            <p class="d-flex align-items-center"><i
                                                    class="fa-solid fa-person-rifle pe-1"></i><small>Security
                                                    Staff</small></p>
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
                        <h5>PKR 16.85 Crore</h5>
                        <div class="d-flex align-items-center justify-content-center">
                            <i class="fa-brands fa-whatsapp px-2"></i>
                            <i class="fa-solid fa-phone px-2"></i>
                        </div>
                    </div>
                    <form class="detail-page-form">
                        <div class="form-floating my-4">
                            <input type="text" class="form-control" id="floatingInput"
                                placeholder="New York, San Francisco, etc">
                            <label for="floatingInput">New York, San Francisco, etc</label>
                        </div>
                        <div class="form-floating mb-4">
                            <input type="email" class="form-control" id="floatingInput" placeholder="Email">
                            <label for="floatingInput">Email</label>
                        </div>
                        <div class="form-floating mb-4">
                            <input type="number" class="form-control" id="floatingInput" placeholder="Phone">
                            <label for="floatingInput">Phone</label>
                        </div>
                        <div class="form-floating mb-4">
                            <textarea class="form-control textarea-size" placeholder="Leave a comment here"
                                id="floatingTextarea">I would like to inquire about your property Zameen - ID47459374. Please contact me at your earliest convenience.</textarea>
                            <label for="floatingTextarea">Comments</label>
                        </div>
                        <div class="d-flex align-items-center mb-4">
                            <p>
                                <small>
                                    I am a:
                                </small>
                            </p>
                            <div class="d-flex align-items-center">
                                <input class="form-check-input mx-2" type="checkbox" value="" id="flexCheckDefault">
                                <p><small>Buyer/Tenant</small></p>
                            </div>
                            <div class="d-flex align-items-center">
                                <input class="form-check-input mx-2" type="checkbox" value="" id="flexCheckDefault">
                                <p><small>Agent</small></p>
                            </div>
                            <div class="d-flex align-items-center">
                                <input class="form-check-input mx-2" type="checkbox" value="" id="flexCheckDefault">
                                <p><small>Others</small></p>
                            </div>
                        </div>
                        <div class="form-check mb-4">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                                Keep me informed about similar properties.
                            </label>
                        </div>

                        <button type="submit"
                            class="btn main-button w-100 d-flex align-items-center justify-content-center"><i
                                class="fa-regular fa-envelope px-2"></i>Send Email</button>
                    </form>

                </div>
                <div class="property-detail d-flex flex-column py-4 px-md-2 shadow rounded-4 mt-4">
                    <div class="d-flex flex-wrap align-items-center justify-content-center">
                        <h5 class="text-center">Useful Links</h5>
                    </div>
                    <div class="d-flex flex-column property-links px-md-4 px-2">
                        <a href="">Property for Sale in Islamabad</a>
                        <a href="">Property for Sale in Lahore</a>
                        <a href="">Property for Sale in Peshawar</a>
                    </div>
                </div>
                <div class="property-detail d-flex flex-column py-4 px-md-2 shadow rounded-4 mt-4">
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
                    class="mx-1 nav-sub-links-main text-nowrap shadow px-2 px-md-3 py-2 d-flex flex-nowrap align-items-center justify-content-center mt-4"
                    role="button"><i class="fa-regular fa-flag pe-2"></i>Report this property</a>
            </div>

            <div class="row px-md-5">
                    <h2>Relevent Properties</h2>
                <div class="owl-carousel owl-theme mt-4 property-listed">
                    <div class="item mx-3">
                        <div class="card border-0 bg-transparent">
                            <img class="img-fluid" src="../assets/Images/listed-propery-1.webp" alt="Image">
                            <div class="card-body">
                                <h5 class="card-title">$ 5,970</h5>
                                <p class="card-text">Tranquil Haven in the Woods</p>
                                <p><small>103 Wright CourtBurien, WA 98168</small></p>
                                <div class="d-flex align-items-center">
                                    <div><i class="fa-solid fa-bed pe-2"></i>40 beds</div>
                                    <div class="mx-3"><i class="fa-solid fa-toilet pe-2"></i>3 bath</div>
                                </div>
                                <div class="d-flex align-items-center mt-2">
                                    <a class="btn btn-sm mx-1 nav-sub-links-main text-nowrap px-2 px-md-3 py-0 d-flex flex-nowrap align-items-center justify-content-center"
                                        role="button"><i class="fa-regular fa-envelope pe-2"></i>Email</a>
                                    <a class="btn btn-sm mx-1 nav-sub-links-main text-nowrap px-2 px-md-3 py-0 d-flex flex-nowrap align-items-center justify-content-center"
                                        role="button"><i class="fa-solid fa-phone pe-2"></i>Call</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item mx-3">
                        <div class="card border-0 bg-transparent">
                            <img class="img-fluid" src="../assets/Images/listed-propery-2.webp" alt="Image">
                            <div class="card-body">
                                <h5 class="card-title">$ 5,970</h5>
                                <p class="card-text">Tranquil Haven in the Woods</p>
                                <p><small>103 Wright CourtBurien, WA 98168</small></p>
                                <div class="d-flex align-items-center">
                                    <div><i class="fa-solid fa-bed pe-2"></i>4 beds</div>
                                    <div class="mx-3"><i class="fa-solid fa-toilet pe-2"></i>3 bath</div>
                                </div>
                                <div class="d-flex align-items-center mt-2">
                                    <a class="btn btn-sm mx-1 nav-sub-links-main text-nowrap px-2 px-md-3 py-0 d-flex flex-nowrap align-items-center justify-content-center"
                                        role="button"><i class="fa-regular fa-envelope pe-2"></i>Email</a>
                                    <a class="btn btn-sm mx-1 nav-sub-links-main text-nowrap px-2 px-md-3 py-0 d-flex flex-nowrap align-items-center justify-content-center"
                                        role="button"><i class="fa-solid fa-phone pe-2"></i>Call</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item mx-3">
                        <div class="card border-0 bg-transparent">
                            <img class="img-fluid" src="../assets/Images/listed-propery-3.jpeg" alt="Image">
                            <div class="card-body">
                                <h5 class="card-title">$ 5,970</h5>
                                <p class="card-text">Tranquil Haven in the Woods</p>
                                <p><small>103 Wright CourtBurien, WA 98168</small></p>
                                <div class="d-flex align-items-center">
                                    <div><i class="fa-solid fa-bed pe-2"></i>4 beds</div>
                                    <div class="mx-3"><i class="fa-solid fa-toilet pe-2"></i>3 bath</div>
                                </div>
                                <div class="d-flex align-items-center mt-2">
                                    <a class="btn btn-sm mx-1 nav-sub-links-main text-nowrap px-2 px-md-3 py-0 d-flex flex-nowrap align-items-center justify-content-center"
                                        role="button"><i class="fa-regular fa-envelope pe-2"></i>Email</a>
                                    <a class="btn btn-sm mx-1 nav-sub-links-main text-nowrap px-2 px-md-3 py-0 d-flex flex-nowrap align-items-center justify-content-center"
                                        role="button"><i class="fa-solid fa-phone pe-2"></i>Call</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item mx-3">
                        <div class="card border-0 bg-transparent">
                            <img class="img-fluid" src="../assets/Images/listed-propery-1.webp" alt="Image">
                            <div class="card-body">
                                <h5 class="card-title">$ 5,970</h5>
                                <p class="card-text">Tranquil Haven in the Woods</p>
                                <p><small>103 Wright CourtBurien, WA 98168</small></p>
                                <div class="d-flex align-items-center">
                                    <div><i class="fa-solid fa-bed pe-2"></i>4 beds</div>
                                    <div class="mx-3"><i class="fa-solid fa-toilet pe-2"></i>3 bath</div>
                                </div>
                                <div class="d-flex align-items-center mt-2">
                                    <a class="btn btn-sm mx-1 nav-sub-links-main text-nowrap px-2 px-md-3 py-0 d-flex flex-nowrap align-items-center justify-content-center"
                                        role="button"><i class="fa-regular fa-envelope pe-2"></i>Email</a>
                                    <a class="btn btn-sm mx-1 nav-sub-links-main text-nowrap px-2 px-md-3 py-0 d-flex flex-nowrap align-items-center justify-content-center"
                                        role="button"><i class="fa-solid fa-phone pe-2"></i>Call</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item mx-3">
                        <div class="card border-0 bg-transparent">
                            <img class="img-fluid" src="../assets/Images/listed-propery-2.webp" alt="Image">
                            <div class="card-body">
                                <h5 class="card-title">$ 5,970</h5>
                                <p class="card-text">Tranquil Haven in the Woods</p>
                                <p><small>103 Wright CourtBurien, WA 98168</small></p>
                                <div class="d-flex align-items-center">
                                    <div><i class="fa-solid fa-bed pe-2"></i>4 beds</div>
                                    <div class="mx-3"><i class="fa-solid fa-toilet pe-2"></i>3 bath</div>
                                </div>
                                <div class="d-flex align-items-center mt-2">
                                    <a class="btn btn-sm mx-1 nav-sub-links-main text-nowrap px-2 px-md-3 py-0 d-flex flex-nowrap align-items-center justify-content-center"
                                        role="button"><i class="fa-regular fa-envelope pe-2"></i>Email</a>
                                    <a class="btn btn-sm mx-1 nav-sub-links-main text-nowrap px-2 px-md-3 py-0 d-flex flex-nowrap align-items-center justify-content-center"
                                        role="button"><i class="fa-solid fa-phone pe-2"></i>Call</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item mx-3">
                        <div class="card border-0 bg-transparent">
                            <img class="img-fluid" src="../assets/Images/listed-propery-3.jpeg" alt="Image">
                            <div class="card-body">
                                <h5 class="card-title">$ 5,970</h5>
                                <p class="card-text">Tranquil Haven in the Woods</p>
                                <p><small>103 Wright CourtBurien, WA 98168</small></p>
                                <div class="d-flex align-items-center">
                                    <div><i class="fa-solid fa-bed pe-2"></i>4 beds</div>
                                    <div class="mx-3"><i class="fa-solid fa-toilet pe-2"></i>3 bath</div>
                                </div>
                                <div class="d-flex align-items-center mt-2">
                                    <a class="btn btn-sm mx-1 nav-sub-links-main text-nowrap px-2 px-md-3 py-0 d-flex flex-nowrap align-items-center justify-content-center"
                                        role="button"><i class="fa-regular fa-envelope pe-2"></i>Email</a>
                                    <a class="btn btn-sm mx-1 nav-sub-links-main text-nowrap px-2 px-md-3 py-0 d-flex flex-nowrap align-items-center justify-content-center"
                                        role="button"><i class="fa-solid fa-phone pe-2"></i>Call</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>





<script setup>
import { ref, onMounted } from 'vue';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import { useRoute } from 'vue-router';

const route = useRoute();
const propertyId = ref(route.params.id);

// Create the toast instance
const $toast = useToast();

const propertyData = ref([]);

// Fetch the media data when the component is mounted
onMounted(() => {
  // Fetch the media data
  const base_url = import.meta.env.VITE_BASE_URL;
  fetch(`${base_url}/api/frontend/home/property/getbyid/${propertyId.value}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data.propertyInfo.id);
      console.log('Success:', data.propertyInfo);
      propertyData .value = data.propertyInfo;
      $toast.open({
        message: 'Property data fetched successfully!',
        type: 'success',
        position: 'top-right',
      });
    })
    .catch(error => {
      console.error('Error:', error);
      $toast.open({
        message: 'Failed to fetch property data.',
        type: 'error',
        position: 'top-right',
      });
    });
});
</script>
