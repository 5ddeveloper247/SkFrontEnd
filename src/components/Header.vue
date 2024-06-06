<script>
export default {
    mounted() {
        $("body").on("scroll", function () {
            let navTop = $(".navTop");
            if ($("body").scrollTop() > 5) {
                $(".mainNavBar").css("top", "0");
            } else {
                $(".mainNavBar").css("top", "inherit");
            }
        });
        gsap.to(".mainNavBar,.mainNavBar .nav-item a", {
            backgroundColor: "#fff",
            color: "#000",
            scrollTrigger: {
                scroller: "body",
                trigger: ".mainNavBar",
                start: "top 5%",
                end: "top 8%",
                scrub: true,
                // markers: true,
            }
        })
    }
}
</script>
<template>
    <!-- ======================Head================== -->
    <div class="heroandnav">
        <div class="navTop d-md-block" style="display: block;">
            <div class="container">
                <div
                    class="d-flex flex-md-nowrap flex-wrap justify-content-md-between justify-content-start align-items-center py-2">
                    <div class="d-flex align-items-center">
                        <i class="fa-solid fa-location-dot"></i>
                        <p class="px-3">Plaza 13, Adjacent D Mall, Main G.T Rd,</p>
                    </div>
                    <div class="d-flex flex-md-nowrap flex-wrap align-items-center">
                        <div class="d-flex align-items-center mx-md-4">
                            <i class="fa-regular fa-envelope"></i>
                            <p class="px-2">skmarketing@gmail.com</p>
                        </div>
                        <div class="d-flex align-items-center mx-md-4">
                            <i class="fa-solid fa-phone"></i>
                            <p class="px-2">+92 222222222</p>
                        </div>
                        <ul class="list-unstyled d-flex m-0 mx-md-4">
                            <li class="px-2"><i class="fa-brands fa-linkedin-in"></i></li>
                            <li class="px-2"><i class="fa-brands fa-facebook-f"></i></li>
                            <li class="px-2"><i class="fa-brands fa-instagram"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="mainNavBar">
            <div class="container">
                <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">
                            <img class="logo" src="../assets/Images/SK-logo.png" alt="">
                        </a>
                        <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                        <div class="navbar-collapse collapse" id="navbarNav">
                            <ul class="navbar-nav mx-auto">
                                <li class="nav-item mx-md-2 mx-0">
                                    <RouterLink class="nav-link px-2" to="/">Home</RouterLink>
                                </li>
                                <li class="nav-item mx-md-2 mx-0">
                                    <RouterLink class="nav-link px-2" to="/about">About</RouterLink>
                                </li>
                                <li class="nav-item mx-md-2 mx-0">
                                    <RouterLink class="nav-link px-2" to="/land">Land/Properties</RouterLink>
                                </li>
                                <li class="nav-item mx-md-2 mx-0">
                                    <RouterLink class="nav-link px-2" to="/societies">Societies</RouterLink>
                                </li>
                                <li class="nav-item mx-md-2 mx-0">
                                    <RouterLink class="nav-link px-2" to="/media">Media</RouterLink>
                                </li>
                                <li class="nav-item mx-md-2 mx-0">
                                    <RouterLink class="nav-link px-2" to="/contact">Contact us</RouterLink>
                                </li>
                            </ul>
                            <div class="d-none d-lg-flex align-items-center">
                                <i class="fa-brands fa-square-whatsapp px-2" style="font-size: 35px; cursor: pointer;"
                                    @click="redirectToWhatsApp"></i>
                                <RouterLink to="/requestform"
                                    class="mx-1 nav-sub-links-main text-nowrap px-2 px-md-3 py-1 d-flex flex-nowrap align-items-center justify-content-center"
                                    role="button"><i class="far fa-paper-plane pe-2"></i>Request Form</RouterLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>


<script setup>
import { onMounted } from 'vue';
import { redirectToPhoneDialer, redirectToWhatsApp, redirectToEmail } from '../helpers/redirectHelpers';

</script>