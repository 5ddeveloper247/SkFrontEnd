<script>
import { ref, onUnmounted, onMounted } from 'vue';

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
    },
    setup() {
        const navbarCollapse = ref(null);
        const navbarToggler = ref(null);

        const handleClickOutside = (event) => {
            if (navbarCollapse.value && navbarToggler.value) {
                const isClickInside = navbarCollapse.value.contains(event.target) || navbarToggler.value.contains(event.target);
                const isNavbarExpanded = navbarToggler.value.getAttribute('aria-expanded') === 'true';

                if (!isClickInside && isNavbarExpanded) {
                    navbarToggler.value.click(); // This will trigger the collapse
                }
            }
        };

        onMounted(() => {
            document.addEventListener('click', handleClickOutside);
        });

        onUnmounted(() => {
            document.removeEventListener('click', handleClickOutside);
        });
    }
}
</script>



<template>
    <!-- ======================Head================== -->
    <div class="heroandnav">
        <div class="navTop d-md-block" style="display: block;">
            <div class="container">
                <div class="d-flex justify-content-between">
                    <div class="d-flex align-items-center d-none d-lg-flex">
                        <i class="fa-solid fa-location-dot"></i>
                        <p class="px-3">Office # 1-2, AJ Tower II River View Commercial Bahria Phase 7 Islamabad.</p>
                    </div>
                    <div class="d-flex">
                        <div class="d-flex align-items-center mx-md-4">
                            <i class="fa-regular fa-envelope"></i>
                            <a href="/info@skrealestate.com.pk" class="px-2">info@skrealestate.pk</a>
                        </div>
                        <div class="d-flex align-items-center mx-md-4">
                            <i class="fa-solid fa-phone"></i>
                            <p class="px-2">+92 333 5702234</p>
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
                        <RouterLink class="navbar-brand" to="/">
                            <img class="logo" src="../assets/Images/SK-logo.png" alt="">
                        </RouterLink>
                        <button ref="navbarToggler" class="navbar-toggler collapsed" type="button"
                            data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"
                            aria-expanded="false" aria-label="Toggle navigation"><span
                                class="navbar-toggler-icon"></span></button>
                        <div ref="navbaCollapse" class="navbar-collapse collapse" id="navbarNav">
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
import { onMounted, ref } from 'vue';
import { redirectToPhoneDialer, redirectToWhatsApp, redirectToEmail } from '../helpers/redirectHelpers';
</script>


<style scoped>
p {
    font-size: 10px;
}

a {
    font-size: 12px;
    color: #fff;
    text-decoration: none;
}

.navbar-brand {
    background-color: transparent !important;
}
</style>