<template>

  <Loader :isLoading="loading" />
  <div class="video-sec mb-5" v-show="!loading">
    <h2 class="mt-5">PROPERTIES <span class="fw-bolder">VIDEOS</span></h2>
    <div class="media">
      <div class="d-flex flex-column align-items-center id_sxy justify-content-center pt-5">
        <iframe class="Uvideo-1" width="100%" :src="currentTopVideo"></iframe>
        <!-- <a :href="currentTopVideo" target="_blank" class="btn subscribe-btn d-flex align-items-center my-2">
            <i class="fa-brands fa-youtube pe-2"></i>Subscribe
          </a> -->
      </div>
    </div>

    <!-- Media Cards Top -->
    <!-- <div class="row justify-content-center mx-md-5 mx-2 px-md-5 mt-3 media-cards">

    </div> -->

      <swiper :autoplay="autoplay" :speed="1000" :spaceBetween="40" :pagination="{ clickable: true }" :modules="modules" :breakpoints="{
        320: { slidesPerView: 1, spaceBetween: 5 },
        480: { slidesPerView: 1, spaceBetween: 5 },
        640: { slidesPerView: 1, spaceBetween: 5 },
        768: { slidesPerView: 2, spaceBetween: 3 },
        1024: { slidesPerView: 3, spaceBetween: 40 }
      }" class="mySwiper mt-5">
        <swiper-slide v-for="media in mediaData" :key="media.id" :slidesPerView="3">
          <div class="media-cards">
            <div class="card media-card-1" @click="showTopVideo(media.id)">
              <iframe :src="convertToEmbedUrl(media.url)" height="180" frameborder="0" allowfullscreen></iframe>
              <div class="card-body">
                <p class="card-text text-center px-2">
                  {{ media.description }}
                </p>
              </div>
              <i class="fa-brands fa-youtube"></i>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>


  <!-- Video Section Bottom -->
  <div class="img-section ">
    <h2 class="mt-5 pt-5 mb-5">PROPERTIES <span class="fw-bolder">IMAGES</span></h2>
    <div class="media ">
      <div class="d-flex flex-column align-items-center justify-content-center">
        <img :src="currentBottomVideo" width="100%" height="350" alt="">
      </div>
    </div>

      <!-- Media Cards Bottom -->
      <swiper :autoplay="autoplay" :speed="1000" :spaceBetween="50" :pagination="{ clickable: true }" :modules="modules" :breakpoints="{
        320: { slidesPerView: 1, spaceBetween: 5 },
        480: { slidesPerView: 1, spaceBetween: 5 },
        640: { slidesPerView: 1, spaceBetween: 5 },
        768: { slidesPerView: 2, spaceBetween: 3 },
        1024: { slidesPerView: 3, spaceBetween: 50 }
      }" class="mySwiper mt-5">
        <swiper-slide :slidesPerView="3" v-for="(image, index) in mediaOnly" :key="index">
          <div class="media-cards">
            <div>
              <div class="card media-card-1">
                <img :src="convertToMediaOnlyUrl(image.url)" height="170" width="100%" alt="..." @click="bottomTopMeida(image.id)" />
                <div class="card-body">
                  <p class="card-text text-center px-2">
                    {{ image.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
 
</template>


<script setup>
import { onMounted, ref, watch, onBeforeMount, onBeforeUnmount } from 'vue';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { useFooterStore } from '../stores/FooterLoadingState';
const footerState = useFooterStore();


// Modules for Swiper
const modules = ref([Navigation, Autoplay, Pagination]);
// Autoplay configuration
const autoplay = {
  delay: 3000, // 3 seconds delay between slides
  disableOnInteraction: false // Keep autoplay running even after user interaction
};
import Loader from './Loader.vue';

const mainImage = ref('https://images.pexels.com/photos/25758512/pexels-photo-25758512/free-photo-of-american-car.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load');



// Create the toast instance
const $toast = useToast();
// Define reactive state variables
const mediaData = ref([]);
const mediaOnly = ref([]);
const currentTopVideo = ref('');
const currentBottomVideo = ref('');
const loading = ref(false);

function updateMainImage(imageSrc) {
  mainImage.value = imageSrc;
}


function convertToEmbedUrl(url) {
  // Create an anchor element to leverage the browser's URL parsing capabilities
  const urlObj = new URL(url);

  // Extract the video ID from the URL's query parameters
  const videoId = urlObj.searchParams.get('v');

  // If a video ID is found, return the embeddable URL with autoplay and mute options
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
  }

  // If no video ID is found, return the original URL (fallback)
  return url;
}


function convertToMediaOnlyUrl(url) {
  const parsed_media_only_url = import.meta.env.VITE_BASE_URL + '/' + url;
  return parsed_media_only_url;
}



// Function to show the top video
function showTopVideo(index) {
  const parsed_uri = getMediaUrlFromMediaData(index);
  currentTopVideo.value = parsed_uri;
}

// Function to get media URL from media data by ID
function getMediaUrlFromMediaData(id) {
  loading.value = true;
  const mediaItem = mediaData.value.find(media => media.id === id);
  if (mediaItem) {
    const media_uri = mediaItem.url;
    const parsed_media_uri = convertToEmbedUrl(media_uri);
    setTimeout(() => {
      loading.value = false;
    }, 2000);
    return parsed_media_uri;
  } else {
    loading.value = false;
    $toast.open({
      message: 'Media not found or removed for the given url.',
      type: 'error',
    });

    return null;
  }
}



function bottomTopMeida(id) {

  const parsed_uri = getMediaFromMediaOnly(id);
  currentBottomVideo.value = parsed_uri;
}
function convertToMediaUrl(url) {
  const parsed_media_only_url = import.meta.env.VITE_BASE_URL + '/' + url;
  return parsed_media_only_url;
}


function getMediaFromMediaOnly(id) {
  loading.value = true;
  const mediaItem = mediaOnly.value.find(media => media.id === id);
  if (mediaItem) {
    const media_uri = mediaItem.url;
    const parsed_media_uri = convertToMediaUrl(media_uri);
    setTimeout(() => {
      loading.value = false;
    }, 2000);
    return parsed_media_uri;
  } else {
    loading.value = false;
    $toast.open({
      message: 'Media not found or removed for the given url.',
      type: 'error',
    });

    return null;
  }
}

// Watch mediaData and set the first video as the top video
watch(mediaData, (newMediaData) => {
  if (newMediaData.length > 0) {
    currentTopVideo.value = convertToEmbedUrl(newMediaData[0].url);
  }
});

watch(mediaOnly, (newMediaOnly) => {
  if (newMediaOnly.length > 0) {
    currentBottomVideo.value = convertToMediaUrl(newMediaOnly[0].url);
  }
});

// Fetch media data on component mount
onMounted(() => {
  loading.value = true;
  const base_url = import.meta.env.VITE_BASE_URL;
  fetch(base_url + '/api/frontend/home/media/get', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      mediaData.value = data.media;
      mediaOnly.value = data.mediaOnly;
      loading.value = false;
    })
    .catch(error => {
      loading.value = false;
      $toast.open({
        message: 'Failed to fetch media data.',
        type: 'error',
        position: 'top-right',
      });
    });

});




onMounted(() => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 3000)
});



onBeforeMount(() => {
  footerState.setFooterState(true);
})

onBeforeUnmount(() => {
  footerState.setFooterState(false);
})
</script>



<style scoped>
h2 {
  position: relative;
}

h2::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5%;
  border-bottom: 3px solid var(--second--main-color);
  height: 100%;
  width: 14%
}

img {
  object-fit: cover
}

.img-section,
.video-sec {
  margin: 0 15rem;
}

.swiper {
  margin-top: 3rem;
}

@media (max-width:1200px) {

  .img-section,
  .video-sec {
    margin: 0 14rem;
  }
}

@media (max-width:900px) {

  .img-section,
  .video-sec {
    margin: 0 10rem;
  }
}

@media (max-width:700px) {

  .img-section,
  .video-sec {
    margin: 0 1rem;
  }
}
</style>