<script setup>
import { onBeforeMount,onBeforeUnmount } from 'vue';
import { useFooterStore } from '../stores/FooterLoadingState';
const footerState = useFooterStore();
onBeforeMount(() => {
      footerState.setFooterState(true);
    })

    onBeforeUnmount(() => {
      footerState.setFooterState(false);
    })

</script>

<template>
    <div class="services-banner">
        <div class="row justify-content-start pt-md-5">
            <div class="col-md-7 p-5 banner-text">
                <h1 class="text-white text-start display-5 fw-bold pt-5">
                    Societies <br> We Deal
                </h1>
                <p class="text-white text-start pt-3">
                    At SK Marketing, we focus exclusively on providing exceptional real estate services within the
                    prestigious communities of Bahria Town and DHA Islamabad. Our extensive knowledge and dedication
                    ensure that we meet the diverse needs of our clients, offering a range of properties from luxurious
                    homes to affordable options. Whether you're buying, selling, or renting, trust SK Marketing to
                    navigate these renowned societies with expertise and personalized service.
                </p>
            </div>
        </div>
        <div class="banner-overlay"></div>
    </div>
    <div class="p-5 societiess mx-md-5">
        <div class="row">
            <div class="col-md-4 my-1">
                <RouterLink to="/dha">
                    <div class="card border-0 bg-transparent mx-4">
                        <img class="img-fluid rounded-4" src="../assets/Images/dha.jpg" alt="Image">
                    </div>
                </RouterLink>
            </div>
            <div class="col-md-8 d-flex flex-column align-items-center justify-content-center">
                <div>
                    <h5 class="card-title pb-3">Defence Housing Autority</h5>
                    <p class="card-text">
                        Discover the prestigious properties and exceptional opportunities offered by Defence Housing
                        Authority (DHA) Islamabad through SK Marketing. As specialists in this renowned locality, we
                        provide unparalleled expertise and personalized service to help you find your ideal home or
                        investment property. Whether you are buying, selling, or renting, trust SK Marketing to navigate
                        the DHA Islamabad real estate market with confidence and success.
                    </p>
                    <RouterLink to="/dha"
                        class="mt-3 about-us-btn text-nowrap px-2 px-md-3 py-2 d-flex flex-column align-items-center justify-content-center mb-5 w-auto">
                        Explore Now
                    </RouterLink>
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-md-8 d-flex flex-column align-items-center justify-content-center">
                <div>
                    <h5 class="card-title pb-3">Bahria Town</h5>
                    <p class="card-text">
                        Explore the vibrant community and diverse real estate offerings of Bahria Town Islamabad with SK
                        Marketing. As experts in this renowned township, we offer comprehensive services tailored to
                        your property needs. Whether you seek a luxurious residence or an investment opportunity, SK
                        Marketing is your trusted partner in navigating the Bahria Town Islamabad real estate landscape.
                    </p>
                    <RouterLink to="bahria"
                        class="mt-3 about-us-btn text-nowrap px-2 px-md-3 py-2 d-flex flex-column align-items-center justify-content-center mb-5">
                        Explore Now
                    </RouterLink>
                </div>
            </div>
            <div class="col-md-4 my-1">
                <RouterLink to="/bahria">
                    <div class="card border-0 bg-transparent mx-4">
                        <img class="img-fluid rounded-4" src="../assets/Images/bahria-town.jpeg" alt="Image">
                    </div>
                </RouterLink>
            </div>
        </div>
    </div>
</template>