<script setup>
</script>


<template>
    <!-- ======================Footer================== -->
    <footer>
        <div class="container py-4">
            <div class="row justify-content-between px-5">
                <!-- Column 1 -->
                <div class="col-md-4">
                    <h5>SK Marketing</h5>
                    <p class="mt-4">
                        SK Marketing excels in eco-friendly construction, offering premium residential and commercial
                        properties. With innovative designs and sustainable materials, our homes and offices promise
                        luxury and environmental harmony.
                    </p>
                    <div class="d-flex flex-column mt-4">
                        <ul class="list-unstyled d-flex footer-icons">
                            <li class="pe-md-3 pe-2"><i class="fa-brands fa-linkedin-in"></i></li>
                            <li class="px-md-3 px-2"><i class="fa-brands fa-facebook-f"></i></li>
                            <li class="px-md-3 px-2"><i class="fa-brands fa-instagram"></i></li>
                        </ul>
                    </div>
                </div>
                <!-- Column 2 -->
                <div class="col-md-3 services-footer">
                    <h5>Services</h5>
                    <ul class="list-unstyled">
                        <li class="mt-2"><router-link to="/" class="px-2">Home</router-link></li>
                        <li class="mt-2"><router-link to="/about" class="px-2">About</router-link></li>
                        <li class="mt-2"><router-link to="/land" class="px-2">Listing</router-link></li>
                        <li class="mt-2"><router-link to="/societies" class="px-2">Socities</router-link></li>
                        <li class="mt-2"><router-link to="/media" class="px-2">Media</router-link></li>
                        <li class="mt-2"><router-link to="/requestform" class="px-2">Request</router-link></li>

                    </ul>
                </div>
                <!-- Column 4 -->
                <div class="col-md-5 ps-md-5">
                    <div class="d-flex flex-column">
                        <h5>Address</h5>

                        <p class="pt-3"><i class="fa-solid fa-location-dot pe-3"></i>
                            Office # 1-2, AJ Tower II River View Commercial Bahria Phase 7 Islamabad.
                        </p>
                        <p class="pt-3"><i class="fa-solid fa-phone pe-3"></i>+92 333 5702234 / +44 7894 279999
                        </p>
                        <a href="info@skrealestate.pk" class="py-3"><i
                                class="fa-solid fa-envelope pe-3"></i>info@skrealestate.pk
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-black">
            <div class="container">
                <div class="d-flex justify-content-between px-5 py-2 flex-md-nowrap flex-wrap">
                    <p class="text-white">© 2024 copyright – All rights reserved</p>
                    <div class="d-flex footer-bottom">
                        <a class="px-3" href="">Terms and Conditions</a>
                        <a class="px-3" href="">Privacy Policy</a>
                        <a class="px-3" href="">Disclaimer</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>



<style scoped>
a {
    text-decoration: none;
    color: #000;
}
</style>
