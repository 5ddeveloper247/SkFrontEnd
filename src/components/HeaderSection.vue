<script>
export default {
    mounted() {
        
        // Array of background image URLs
        var backgroundImageUrls = [
            "url(../assets/Images/construction1.jpg)",
            "url(../assets/Images/construction2.jpg)",
            "url(../assets/Images/construction3.jpg)",
        ];

        // Array of corresponding content div IDs
        var contentDivs = [".content-1", ".content-2", ".content-3"];

        var currentIndex = 0; // Current index for tracking background image and content

        // Function to change background image and content
        function changeBackgroundAndContent() {
            // Update background image
            document.querySelector(".heroandnav").style.backgroundImage =
                backgroundImageUrls[currentIndex];

            // Hide all content divs
            contentDivs.forEach(function (div) {
                document.querySelector(div).style.display = "none";
            });

            // Show current content div
            document.querySelector(contentDivs[currentIndex]).style.display = "block";

            // Increment index
            currentIndex = (currentIndex + 1) % backgroundImageUrls.length;
        }

        // Initial call to start the timer
        changeBackgroundAndContent();

        // Set interval to call the function every 4 seconds
        setInterval(changeBackgroundAndContent, 5000);
    }
}
</script>
<template>
    <!-- ======================Head================== -->
    <div class="navTop d-md-block d-none" style="display: block;">
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
                                <li class="nav-item mx-md-2 mx-0"><a class="nav-link px-2 active" href="home.html">Home</a>
                                </li>
                                <li class="nav-item mx-md-2 mx-0"><a class="nav-link px-2" href="about.html">About</a></li>
                                <li class="nav-item mx-md-2 mx-0"><a class="nav-link px-2"
                                        href="listing.html">Land/Properties</a>
                                </li>
                                <li class="nav-item mx-md-2 mx-0"><a class="nav-link px-2"
                                        href="societies.html">Societies</a></li>
                                <li class="nav-item mx-md-2 mx-0"><a class="nav-link px-2" href="media.html">Media</a></li>
                                <li class="nav-item mx-md-2 mx-0"><a class="nav-link px-2" href="contact.html">Contact us</a>
                                </li>
                            </ul>
                            <div class="d-none d-lg-flex align-items-center">
                                <i class="fa-brands fa-square-whatsapp px-2"
                                    style="font-size: 35px; cursor: pointer;"></i>
                                <a href="requestform.html"
                                    class="mx-1 nav-sub-links-main text-nowrap px-2 px-md-3 py-1 d-flex flex-nowrap align-items-center justify-content-center"
                                    role="button"><i class="far fa-paper-plane pe-2"></i>Request Form</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
</template>