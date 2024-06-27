<script setup>
import { ref,onBeforeMount,onBeforeUnmount } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';
import { useFooterStore } from '../stores/FooterLoadingState';

// Modules for Swiper
const modules = ref([Navigation, Autoplay]);
const footerState = useFooterStore();
// Autoplay configuration
const autoplay = {
    delay: 3000, // 3 seconds delay between slides
    disableOnInteraction: false // Keep autoplay running even after user interaction
};



//handling footer by these two
onBeforeMount(() => {
    footerState.setFooterState(true);
})

onBeforeUnmount(() => {
    footerState.setFooterState(false);
})

</script>

<template>
    <div class="about-us-main pt-md-5">
        <div class="row justify-content-start pt-md-5">
            <div class="col-md-7 p-5">
                <h1 class="text-white text-start display-5 fw-bold pt-5">
                    About <br> Sk Marketing
                </h1>
                <p class="text-white text-start py-5">
                    SK Marketing specializes in eco-friendly construction and property sales. We deliver premium residential and commercial spaces, blending innovative design with sustainable materials for a perfect balance of luxury and environmental responsibility.
                </p>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12 py-5">
                <h2 class="text-center">
                    RAWAYAT BHAROSAY KI !
                </h2>
                <p class="text-center">
                    Sk Marketing is the fastest growing Real Estate Sales and Marketing Company that has been in
                    operation for the past 2 years. We are a group of incredibly aggressive, creative, and responsive
                    young enthusiasts with the goal of giving our clients a magnificent atmosphere for real estate sales
                    and marketing. To earn our customers’ trust, we have always pointed them in the direction of sound
                    investments, solid choices, and clear paths.

                    Our goal is to help you invest your money in successful real estate projects so you can benefit from
                    both spectacular returns and the security of wise investments. Our experienced staff helps you make
                    the best sales and purchases. Whether you need a little help or a comprehensive plan and
                    implementation, we offer a wide selection of recommendations, packages, and services to meet any
                    demand. In order to give you the most recent information, we make it a point to stay on the cutting
                    edge of marketing technology.

                    Our skilled staff has completed/delivered a number of well-known projects with excellent results and
                    offers sales and marketing services to a number of housing societies. Utilizing cutting-edge
                    marketing strategies to reach the most customers and consumers is one of our strengths. Examples
                    include e-media and web-based mediums for mass communication. We also put in a lot of effort in the
                    background with support employees available on demand so you may resume running and growing your
                    real estate successfully.
                </p>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-7 py-5">
                <h2 class="text-center">
                    CEO Message
                </h2>
                <p class="text-center">
                    Sk Marketing is the fastest growing Real Estate Sales and Marketing Company that has been in
                    operation for the past 2 years. We are a group of incredibly aggressive, creative, and responsive
                    young enthusiasts with the goal of giving our clients a magnificent atmosphere for real estate sales
                    and marketing. To earn our customers’ trust, we have always pointed them in the direction of sound
                    investments, solid choices, and clear paths.

                    Our goal is to help you invest your money in successful real estate projects so you can benefit from
                    both spectacular returns and the security of wise investments. Our experienced staff helps you make
                    the best sales and purchases. Whether you need a little help or a comprehensive plan and
                    implementation, we offer a wide selection of recommendations, packages, and services to meet any
                    demand. In order to give you the most recent information, we make it a point to stay on the cutting
                    edge of marketing technology.

                    Our skilled staff has completed/delivered a number of well-known projects with excellent results and
                    offers sales and marketing services to a number of housing societies. Utilizing cutting-edge
                    marketing strategies to reach the most customers and consumers is one of our strengths. Examples
                    include e-media and web-based mediums for mass communication. We also put in a lot of effort in the
                    background with support employees available on demand so you may resume running and growing your
                    real estate successfully.
                </p>
            </div>
            <div class="col-md-5 py-5 d-flex align-items-center">
                <img class="img-fluid ceo" src="../assets/Images/ceo.webp" alt="">
            </div>
        </div>
        <div class="p-5">
            <h2 class="text-center">Our Team</h2>
            <div class="owl-carousel owl-theme mt-4">
                <div class="item mx-3">
                    <div class="card border-0 bg-transparent">
                        <img class="img-fluid card-img-top" src="../assets/Images/team-1.webp" alt="Image">
                        <div class="card-body">
                            <h5 class="card-title text-center">Umar Aziz</h5>
                            <p class="card-text text-center">Real Estate Developer</p>
                            <div class="d-flex align-items-center justify-content-center mt-2">
                                <i class="fa-brands fa-instagram mx-md-2 mx-1"></i>
                                <i class="fa-brands fa-facebook-f mx-md-2 mx-1"></i>
                                <i class="fa-brands fa-x-twitter mx-md-2 mx-1"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item mx-3">
                    <div class="card border-0 bg-transparent">
                        <img class="img-fluid card-img-top" src="../assets/Images/team-2.webp" alt="Image">
                        <div class="card-body">
                            <h5 class="card-title text-center">Hamza Ashfaq</h5>
                            <p class="card-text text-center">Real Estate Developer</p>
                            <div class="d-flex align-items-center justify-content-center mt-2">
                                <i class="fa-brands fa-instagram mx-md-2 mx-1"></i>
                                <i class="fa-brands fa-facebook-f mx-md-2 mx-1"></i>
                                <i class="fa-brands fa-x-twitter mx-md-2 mx-1"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item mx-3">
                    <div class="card border-0 bg-transparent">
                        <img class="img-fluid card-img-top" src="../assets/Images/team-1.webp" alt="Image">
                        <div class="card-body">
                            <h5 class="card-title text-center">Umar Aziz</h5>
                            <p class="card-text text-center">Real Estate Developer</p>
                            <div class="d-flex align-items-center justify-content-center mt-2">
                                <i class="fa-brands fa-instagram mx-md-2 mx-1"></i>
                                <i class="fa-brands fa-facebook-f mx-md-2 mx-1"></i>
                                <i class="fa-brands fa-x-twitter mx-md-2 mx-1"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item mx-3">
                    <div class="card border-0 bg-transparent">
                        <img class="img-fluid card-img-top" src="../assets/Images/team-2.webp" alt="Image">
                        <div class="card-body">
                            <h5 class="card-title text-center">Hamza Ashfaq</h5>
                            <p class="card-text text-center">Real Estate Developer</p>
                            <div class="d-flex align-items-center justify-content-center mt-2">
                                <i class="fa-brands fa-instagram mx-md-2 mx-1"></i>
                                <i class="fa-brands fa-facebook-f mx-md-2 mx-1"></i>
                                <i class="fa-brands fa-x-twitter mx-md-2 mx-1"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item mx-3">
                    <div class="card border-0 bg-transparent">
                        <img class="img-fluid card-img-top" src="../assets/Images/team-1.webp" alt="Image">
                        <div class="card-body">
                            <h5 class="card-title text-center">Umar Aziz</h5>
                            <p class="card-text text-center">Real Estate Developer</p>
                            <div class="d-flex align-items-center justify-content-center mt-2">
                                <i class="fa-brands fa-instagram mx-md-2 mx-1"></i>
                                <i class="fa-brands fa-facebook-f mx-md-2 mx-1"></i>
                                <i class="fa-brands fa-x-twitter mx-md-2 mx-1"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <swiper :autoplay="autoplay" :speed="1000" :spaceBetween="5" :navigation="true" :modules="modules"
                :breakpoints="{
                    320: { slidesPerView: 1, spaceBetween: 5 },
                    480: { slidesPerView: 1, spaceBetween: 5 },
                    640: { slidesPerView: 1, spaceBetween: 5 },
                    768: { slidesPerView: 2, spaceBetween: 3 },
                    1024: { slidesPerView: 3, spaceBetween: 5 }
                }" class="mySwiper">
                <swiper-slide :slidesPerView="3">
                    <div class="item mx-3">
                        <div class="card border-0 bg-transparent">
                            <img class="img-fluid card-img-top" src="../assets/Images/team-1.webp" alt="Image">
                            <div class="card-body">
                                <h5 class="card-title text-center">Umar Aziz</h5>
                                <p class="card-text text-center">Real Estate Developer</p>
                                <div class="d-flex align-items-center justify-content-center mt-2">
                                    <i class="fa-brands fa-instagram mx-md-2 mx-1"></i>
                                    <i class="fa-brands fa-facebook-f mx-md-2 mx-1"></i>
                                    <i class="fa-brands fa-x-twitter mx-md-2 mx-1"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide :slidesPerView="3">
                    <div class="item mx-3">
                    <div class="card border-0 bg-transparent">
                        <img class="img-fluid card-img-top" src="../assets/Images/team-2.webp" alt="Image">
                        <div class="card-body">
                            <h5 class="card-title text-center">Hamza Ashfaq</h5>
                            <p class="card-text text-center">Real Estate Developer</p>
                            <div class="d-flex align-items-center justify-content-center mt-2">
                                <i class="fa-brands fa-instagram mx-md-2 mx-1"></i>
                                <i class="fa-brands fa-facebook-f mx-md-2 mx-1"></i>
                                <i class="fa-brands fa-x-twitter mx-md-2 mx-1"></i>
                            </div>
                        </div>
                    </div>
                </div>
                </swiper-slide>

                <swiper-slide :slidesPerView="3">
                    <div class="item mx-3">
                    <div class="card border-0 bg-transparent">
                        <img class="img-fluid card-img-top" src="../assets/Images/team-1.webp" alt="Image">
                        <div class="card-body">
                            <h5 class="card-title text-center">Umar Aziz</h5>
                            <p class="card-text text-center">Real Estate Developer</p>
                            <div class="d-flex align-items-center justify-content-center mt-2">
                                <i class="fa-brands fa-instagram mx-md-2 mx-1"></i>
                                <i class="fa-brands fa-facebook-f mx-md-2 mx-1"></i>
                                <i class="fa-brands fa-x-twitter mx-md-2 mx-1"></i>
                            </div>
                        </div>
                    </div>
                </div>
                </swiper-slide>

                <swiper-slide :slidesPerView="3">
                    <div class="item mx-3">
                        <div class="card border-0 bg-transparent">
                            <img class="img-fluid card-img-top" src="../assets/Images/team-1.webp" alt="Image">
                            <div class="card-body">
                                <h5 class="card-title text-center">Umar Aziz</h5>
                                <p class="card-text text-center">Real Estate Developer</p>
                                <div class="d-flex align-items-center justify-content-center mt-2">
                                    <i class="fa-brands fa-instagram mx-md-2 mx-1"></i>
                                    <i class="fa-brands fa-facebook-f mx-md-2 mx-1"></i>
                                    <i class="fa-brands fa-x-twitter mx-md-2 mx-1"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide :slidesPerView="3">
                    <div class="item mx-3">
                    <div class="card border-0 bg-transparent">
                        <img class="img-fluid card-img-top" src="../assets/Images/team-2.webp" alt="Image">
                        <div class="card-body">
                            <h5 class="card-title text-center">Hamza Ashfaq</h5>
                            <p class="card-text text-center">Real Estate Developer</p>
                            <div class="d-flex align-items-center justify-content-center mt-2">
                                <i class="fa-brands fa-instagram mx-md-2 mx-1"></i>
                                <i class="fa-brands fa-facebook-f mx-md-2 mx-1"></i>
                                <i class="fa-brands fa-x-twitter mx-md-2 mx-1"></i>
                            </div>
                        </div>
                    </div>
                </div>
                </swiper-slide>

                <swiper-slide :slidesPerView="3">
                    <div class="item mx-3">
                    <div class="card border-0 bg-transparent">
                        <img class="img-fluid card-img-top" src="../assets/Images/team-1.webp" alt="Image">
                        <div class="card-body">
                            <h5 class="card-title text-center">Umar Aziz</h5>
                            <p class="card-text text-center">Real Estate Developer</p>
                            <div class="d-flex align-items-center justify-content-center mt-2">
                                <i class="fa-brands fa-instagram mx-md-2 mx-1"></i>
                                <i class="fa-brands fa-facebook-f mx-md-2 mx-1"></i>
                                <i class="fa-brands fa-x-twitter mx-md-2 mx-1"></i>
                            </div>
                        </div>
                    </div>
                </div>
                </swiper-slide>
            </swiper>
        </div>

        <div class="p-5">
            <h2 class="text-center">Our Partners</h2>
            <div class="slider-carosal my-4">
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

    </div>
</template>