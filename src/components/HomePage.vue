<template>

    <div id="carouselExampleFade" ref="carousel" class="carousel slide carousel-fade">
        <div class="carousel-inner">
            <div class="carousel-item top-carousal active">
                <img src="../assets/Images/construction1.jpg" class="d-block w-100" alt="...">
                <div class="slider-text">
                    <div class="anim">
                        <h1 class="text-white p-5 text-center">Biggest Comapny
                            to Deal with <u>Properties</u>
                        </h1>
                    </div>
                </div>
                <div class="overlay"></div>
            </div>
            <div class="carousel-item top-carousal">
                <img src="../assets/Images/construction2.jpg" class="d-block w-100" alt="...">
                <div class="slider-text text-end">
                    <div class="anim-2">
                        <h1 class="text-white p-5 text-center">Biggest Comapny
                            to Deal with <u>Properties2</u>
                        </h1>
                    </div>
                </div>
                <div class="overlay"></div>
            </div>
            <div class="carousel-item top-carousal">
                <img src="../assets/Images/construction3.jpg" class="d-block w-100" alt="...">
                <div class="slider-text">
                    <div class="anim">
                        <h1 class="text-white p-5 text-center">Biggest Comapny
                            to Deal with <u>Properties3</u>
                        </h1>
                    </div>
                </div>
                <div class="overlay"></div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon prev-carousal-btn" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                data-bs-slide="next">
                <span class="carousel-control-next-icon next-carousal-btn" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>



        <div class="row justify-content-center pb-4 mt-3 properties-calculation-card">
            <div class="col-10 mt-md-5">
                <form action="" class="rounded-2" style="background-color: #111111b8">
                    <div class="d-flex flex-wrap justify-content-between align-items-center p-3 all-property-form">
                        <ul class="d-flex flex-wrap mb-0 p-0">
                            <li class="nav-item mx-3"><a class="nav-links-property p-2 text-white active"
                                    href="#">All</a>
                            </li>
                            <li class="nav-item mx-3"><a class="nav-links-property p-2 text-white" href="#">Sale</a>
                            </li>
                            <li class="nav-item mx-3"><a class="nav-links-property p-2 text-white" href="#">Rent</a>
                            </li>
                        </ul>
                        <div>
                            <p class="text-white mt-md-0 mt-2 mx-2">(50,000) Properties</p>
                        </div>
                    </div>
                    <div class="d-flex flex-md-nowrap flex-wrap align-items-center m-2 mb-4">
                        <form>
                            <div class="form-floating m-2 mb-4 w-100">
                                <input type="text" class="form-control" id="floatingInput"
                                    placeholder="New York, San Francisco, etc">
                                <label for="floatingInput">New York, San Francisco, etc</label>
                            </div>
                            <div class="m-2 mb-4 w-100">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Select Property Type</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div class="m-2 mb-4 w-100">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Select Rooms</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <button type="submit" class="btn main-button px-5 mb-4 m-2 btn-round">Submit</button>
                        </form>
                    </div>
                </form>
            </div>

        </div>
    </div>




    <div class="container main-body-content mt-5">
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
        <div class="row px-md-5 d-flex justify-content-center">
            <div class="col-md-6 d-flex flex-column">
                <span>
                    WHO ARE WE
                </span>
                <h2>
                    Assisting individuals in <br> locating the appropriate <br> real estate.
                </h2>
                <p>Donec porttitor euismod dignissim. Nullam a lacinia ipsum, <br> nec dignissim purus. Nulla convallis
                    ipsum molestie nibh <br> malesuada, ac malesuada leo volutpat.</p>
                <div class="who-we-are-card d-flex align-items-center px-4 py-2 shadow rounded-4 mt-3">
                    <i class="fa-solid fa-house"></i>
                    <div class="d-flex flex-column px-4">
                        <span>Donec porttitor euismod</span>
                        <p>Nullam a lacinia ipsum, nec <br> dignissim purus. Nulla</p>
                    </div>
                </div>
                <div class="who-we-are-card d-flex align-items-center px-4 py-2 shadow rounded-4 mt-3">
                    <i class="fa-regular fa-user"></i>
                    <div class="d-flex flex-column px-4">
                        <span>Donec porttitor euismod</span>
                        <p>Nullam a lacinia ipsum, nec <br> dignissim purus. Nulla</p>
                    </div>
                </div>
                <a href="requestform.html"
                    class="mx-1 mt-4 nav-sub-links-main shadow text-nowrap px-2 px-md-5 py-1 py-md-2 d-flex flex-nowrap align-items-center justify-content-center"
                    role="button"><i class="far fa-paper-plane pe-2"></i>Request Form</a>
            </div>
            <div class="col-md-6">
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
    <!-- ======================Blogs================== -->
    <div class="blogs">
        <div class="p-5">
            <h2 class="text-center text-white">Our Projects in Bahria/DHA</h2>
            <div class="row justify-content-center mt-4">
                <div class="col-md-4">
                    <div class="card border-0 bg-transparent">
                        <img class="img-fluid rounded-4 card-img-top" src="../assets/Images/project-1.jpeg" alt="Image">
                        <div class="card-body d-flex flex-column align-items-center">
                            <h5 class="card-title text-white ">Top 10 Home Buying Mistakes to Avoid</h5>
                            <p><small class="text-white">Etiam eget elementum elit. Aenean dignissim dapibus
                                    vestibulum</small></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card border-0 bg-transparent">
                        <img class="img-fluid rounded-4 card-img-top" src="../assets/Images/blogs.jpeg" alt="Image">
                        <div class="card-body d-flex flex-column align-items-center">
                            <h5 class="card-title text-white">Top 10 Home Buying Mistakes to Avoid</h5>
                            <p><small class="text-white">Etiam eget elementum elit. Aenean dignissim dapibus
                                    vestibulum</small></p>
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
            <span>CHECKOUT OUR NEW</span>
            <div class="d-flex justify-content-between listing-ul">
                <h2>Latest Listed Properties</h2>
                <ul class="d-flex flex-nowrap mb-0 p-0">
                    <li class="nav-item mx-1"><a class="listed-properties py-2 px-3 text-black active" href="#">All</a>
                    </li>
                    <li class="nav-item mx-1"><a class="listed-properties py-2 px-3 text-black" href="#">Sale</a></li>
                    <li class="nav-item mx-1"><a class="listed-properties py-2 px-3 text-black" href="#">Rent</a>
                    </li>
                </ul>
            </div>
            <p>Donec porttitor euismod dignissim. Nullam a lacinia ipsum, <br> nec dignissim purus. </p>
            <div class="owl-carousel owl-theme mt-4 property-listed d-flex ">
                <!-- <div class="item mx-3">    
                    <div class="card border-0 bg-transparent">
                        <img class="img-fluid card-img-top" src="../assets/Images/listed-propery-1.webp" alt="Image">
                        <div
                            class="card-body d-flex flex-column justify-content-center justify-content-md-start align-items-md-start align-items-center">
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
                        <img class="img-fluid card-img-top" src="../assets/Images/listed-propery-2.webp" alt="Image">
                        <div
                            class="card-body d-flex flex-column justify-content-center justify-content-md-start align-items-md-start align-items-center">
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
                        <img class="img-fluid card-img-top" src="../assets/Images/listed-propery-3.jpeg" alt="Image">
                        <div
                            class="card-body d-flex flex-column justify-content-center justify-content-md-start align-items-md-start align-items-center">
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
                        <img class="img-fluid card-img-top" src="../assets/Images/listed-propery-3.jpeg" alt="Image">
                        <div
                            class="card-body d-flex flex-column justify-content-center justify-content-md-start align-items-md-start align-items-center">
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
                        <img class="img-fluid card-img-top" src="../assets/Images/listed-propery-2.webp" alt="Image">
                        <div
                            class="card-body d-flex flex-column justify-content-center justify-content-md-start align-items-md-start align-items-center">
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
                </div>  -->


                <div class="item mx-3" v-for="media in mediaData " :key="media.id">
                    <div class="card border-0 bg-transparent">
                        <img class="img-fluid card-img-top" src="../assets/Images/listed-propery-3.jpeg" alt="Image">
                        <div
                            class="card-body d-flex flex-column justify-content-center justify-content-md-start align-items-md-start align-items-center">
                            <h5 class="card-title">${{ media.price }}</h5>
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

    <!-- ======================Our Services================== -->
    <div class="our-services">
        <div class="container">
            <div class="row py-md-5 px-md-5 justify-content-center">
                <p class="text-center">Our Services</p>
                <h2 class="text-center">Donec porttitor euismod dignissim</h2>
                <div class="row">
                    <div class="col-md-4">
                        <div class="card rounded-4 py-5 my-1">
                            <div class="d-flex align-items-center justify-content-center our-services-card-img">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <div class="card-body px-5 d-flex flex-column align-items-center pb-0 pt-3">
                                <h5 class="card-title text-center">Buy a New Home</h5>
                                <p class="card-text text-center">Donec porttitor euismod dignissim. Nullam a lacinia
                                    ipsum, nec dignissim purus. </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card rounded-4 py-5 my-1">
                            <div class="d-flex align-items-center justify-content-center our-services-card-img">
                                <i class="fa-solid fa-house"></i>
                            </div>
                            <div class="card-body px-5 d-flex flex-column align-items-center pb-0 pt-3">
                                <h5 class="card-title text-center">Sell a House</h5>
                                <p class="card-text text-center">Donec porttitor euismod dignissim. Nullam a lacinia
                                    ipsum, nec dignissim purus. </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card rounded-4 py-5 my-1">
                            <div class="d-flex align-items-center justify-content-center our-services-card-img">
                                <i class="fa-solid fa-house-laptop"></i>
                            </div>
                            <div class="card-body px-5 d-flex flex-column align-items-center pb-0 pt-3">
                                <h5 class="card-title text-center">Rent a House</h5>
                                <p class="card-text text-center">Donec porttitor euismod dignissim. Nullam a lacinia
                                    ipsum, nec dignissim purus. </p>
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
                        <p>Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque. Lorem ipsum dolor
                            sit amet consectetur adipisicing elit. Beatae fuga illum magnam pariatur, enim deleniti
                            consectetur earum quae veritatis rerum quo repudiandae officiis quasi ab vero debitis
                            recusandae expedita laudantium! Tempora ipsum perferendis debitis!</p>
                    </div>
                    <div class="col-md-5">

                        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner bg-transparent">
                                <div class="carousel-item bg-transparent active">
                                    <div class="right-testimonial border p-4 rounded-4 bg-transparent">
                                        <p>I highly recommend Jodi J. Appleby. She was attentive to our needs and worked
                                            tirelessly
                                            to find us the perfect home. We couldn't be happier with our new place!</p>
                                        <hr>
                                        <div class="d-flex align-items-center justify-content-between ">
                                            <div class="d-flex align-items-center">
                                                <img class="img-fluid" src="../assets/Images/listing.png" alt="">
                                                <p class="px-2">Barbara D. Smith</p>
                                            </div>
                                            <img src="../assets/Images/ratings.png" alt="">
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item ">
                                    <div class="right-testimonial border bg-transparent p-4 rounded-4 bg-transparent">
                                        <p>dadsa nsbanm I highly recommend Jodi J. Appleby. She was attentive to our
                                            needs and worked tirelessly
                                            to find us the perfect home. We couldn't be happier with our new place!</p>
                                        <hr>
                                        <div class="d-flex align-items-center justify-content-between ">
                                            <div class="d-flex align-items-center">
                                                <img class="img-fluid" src="../assets/Images/listing.png" alt="">
                                                <p class="px-2">Barbara D. Smith</p>
                                            </div>
                                            <img src="../assets/Images/ratings.png" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- ======================Become Agent================== -->
        <div class="become-agent">
            <div class="inside-agent px-md-5 px-1 pt-2 pb-md-0 pb-2 m-5 rounded-4">
                <div class="d-flex align-items-center justify-content-between flex-md-nowrap flex-wrap">
                    <img class="img-fluid" src="../assets/Images/agent.png">
                    <div class="d-flex flex-column">
                        <h2 class="text-white">Become a Partner.</h2>
                        <p class="text-white">Fusce venenatis tellus a felis scelerisque. <br> venenatis tellus a felis
                            scelerisque. </p>
                    </div>
                    <button type="button"
                        class="mx-1 rounded-pill nav-link text-nowrap px-2 px-md-4 py-1 py-1 d-flex flex-column align-items-center justify-content-center"
                        data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Enquire
                        Now</button>
                </div>
            </div>
        </div>
    </div>
    <!-- ======================Modals================== -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content p-md-3 p-2">
                <div class="d-flex justify-content-between px-md-3">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Enquire Now</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="row justify-content-between">
                    <div class="col-md-6 d-flex align-items-center justify-content-center modal-animated-image">
                        <img class="img-fluid" src="../assets/Images/property-animated.jpeg" alt="">
                    </div>
                    <div class="col-md-6">
                        <form>
                            <div class="col-12 mb-3">
                                <label for="recipient-name" class="col-form-label">Name:</label>
                                <input type="text" class="form-control" id="recipient-name">
                            </div>
                            <div class="col-12 mb-3">
                                <label for="recipient-name" class="col-form-label">Email:</label>
                                <input type="email" class="form-control" id="recipient-name">
                            </div>
                            <div class="col-12 mb-3">
                                <label for="recipient-name" class="col-form-label">Phone:</label>
                                <input type="number" class="form-control" id="recipient-name">
                            </div>
                        </form>
                    </div>
                </div>
                <div class="d-flex justify-content-end">
                    <button type="button" class="btn nav-sub-links-main rounded-pill mx-1"
                        data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn main-button mx-1">Send message</button>
                </div>
            </div>
        </div>
    </div>
</template>













<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
// Create the toast instance
const $toast = useToast();

const mediaData = ref([]);

////////////////////////

const carousel = ref(null);
const autoplayInterval = ref(null);
const autoplaySpeed = 5000;
const startAutoplay = () => {
    autoplayInterval.value = setInterval(() => {
        carousel.value.querySelector('.carousel-control-next').click();
    }, autoplaySpeed);
};
const stopAutoplay = () => {
    if (autoplayInterval.value) {
        clearInterval(autoplayInterval.value);
        autoplayInterval.value = null;
    }
};
const handleSlideChange = () => {
    const activeItem = carousel.value.querySelector('.carousel-item.active');
    const textElements = activeItem.querySelectorAll('.slider-text-1, .slider-text-2, .slider-text-3');
    textElements.forEach(el => {
        el.style.animation = 'none';
        el.offsetHeight;
        el.style.animation = null;
    });
};
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
            // items: 1,
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



onMounted(() => {
    // $toast.open({
    //   message: 'Fetching media data...',
    //   type: 'info',
    //   position:'top-right'
    // });

    // Make API call
    const base_url = import.meta.env.VITE_BASE_URL;
    fetch(base_url + '/api/frontend/home/property/get', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
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
});
</script>
