<script setup>
</script>

<template>
    <!-- ======================Footer================== -->
    <footer>
        <div class="footer-container py-4">
            <div class="container">
                <div class="row justify-content-between">
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
                            <li class="mt-2 f-link"><router-link to="/" class="px-2">Home</router-link></li>
                            <li class="mt-2 f-link"><router-link to="/about" class="px-2">About</router-link></li>
                            <li class="mt-2 f-link"><router-link to="/land" class="px-2">Listing</router-link></li>
                            <li class="mt-2 f-link"><router-link to="/societies" class="px-2">Societies</router-link></li>
                            <li class="mt-2 f-link"><router-link to="/media" class="px-2">Media</router-link></li>
                            <li class="mt-2 f-link"><router-link to="/requestform" class="px-2">Request</router-link></li>
                        </ul>
                    </div>
                    <!-- Column 4 -->
                    <div class="col-md-5">
                        <div class="d-flex flex-column">
                            <h5>Address</h5>
                            <p class="pt-3 d-flex align-items-center "><i class="fa-solid fa-location-dot pe-3"></i>
                                Office # 1-2, AJ Tower II River View Commercial Bahria Phase 7 Islamabad.
                            </p>
                            <p class="pt-3 d-flex align-items-center"><i class="fa-solid fa-phone pe-2"></i>+92 333 5702234 / +44 7894 279999
                            </p>
                            <a href="mailto:info@skrealestate.pk" class="py-3 d-flex align-items-center"><i
                                    class="fa-solid fa-envelope pe-3"></i>info@skrealestate.pk
                            </a>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-between py-2 flex-column flex-md-row">
                    <p class="text-white">© 2024 copyright – All rights reserved</p>
                    <div class="d-flex align-items-center justify-content-between pt-3 pt-md-0">
                        <a class="px-3" href="">Terms and Conditions</a>
                        <a class="px-3" href="">Privacy Policy</a>
                        <a class="px-3" href="">Disclaimer</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="footer-bottom">
            <div class="container">
                
            </div>
        </div> -->
    </footer>
</template>

<style scoped>
.footer-container {
    
    background: linear-gradient( rgba(244, 93, 8, 1) 0%, rgba(255, 143, 51, 1) 50%, rgba(244, 93, 8, 1) 100%);
    color: white;
}

.footer-bottom {
    background: linear-gradient( rgba(244, 93, 8, 1) 0%, rgba(255, 143, 51, 1) 50%, rgba(244, 93, 8, 1) 100%);
    color: rgba(244, 93, 8, 1);
}

a {
    text-decoration: none;
    color: white;
}

.footer-icons li i {
    color: white;
}

footer h5, footer p, footer a, .footer-bottom a {
    color: white;
}

.fa-solid {
    color: #fff
}

.router-link-active {
    background-color: transparent !important;
    color: #000 !important;
    padding: .3rem .6rem !important;
}

.f-link:hover {
    color: #000 !important
}
</style>
