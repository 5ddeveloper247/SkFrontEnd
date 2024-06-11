<template>
  <div>
    <div class="video-sec">
      <!-- <li v-for="media in mediaData">
      {{ media.url }}
      {{ mediaData[0].url }}
    </li> -->
      <div class="media mt-3 pt-5">
        <div class="d-flex flex-column align-items-center id_sxy justify-content-center pt-5">
          <iframe class="Uvideo-1" width="100%"src="currentTopVideo"></iframe>
          <!-- <iframe v-show="currentTopVideo === 2" class="Uvideo-2"
          src="https://www.youtube.com/embed/3WrZMzqpFTc?si=PIqTmb58BLs8ftEQ"></iframe>
        <iframe v-show="currentTopVideo === 3" class="Uvideo-3"
          src="https://www.youtube.com/embed/wexzvClUcUk?si=e0btNBYWjsyozHtb"></iframe> -->
          <!-- <a href="https://www.youtube.com/embed/tgbNymZ7vqY" target="_blank" -->
          <a :href="currentTopVideo" target="_blank" class="btn subscribe-btn d-flex align-items-center my-2">
            <i class="fa-brands fa-youtube pe-2"></i>Subscribe
          </a>
        </div>
      </div>

      <!-- Media Cards Top -->
      <!-- <div class="row justify-content-center mx-md-5 mx-2 px-md-5 mt-3 media-cards">

    </div> -->

      <swiper :autoplay="autoplay" :speed="1000" :spaceBetween="40" :navigation="true" :modules="modules" :breakpoints="{
        320: { slidesPerView: 1, spaceBetween: 5 },
        480: { slidesPerView: 1, spaceBetween: 5 },
        640: { slidesPerView: 1, spaceBetween: 5 },
        768: { slidesPerView: 2, spaceBetween: 3 },
        1024: { slidesPerView: 3, spaceBetween: 40 }
      }" class="mySwiper">
        <swiper-slide v-for="media in mediaData" :slidesPerView="3">
          <div class="media-cards">
            <div>
              <div class="card media-card-1" @click="showTopVideo(media.id)">
                <img :src="'http://localhost:8000/' + mediaOnly[0].url" height="180" alt="..." />
                <div class="card-body">
                  <p class="card-text text-center px-2">
                    {{ media.description }}
                  </p>
                </div>
                <i class="fa-brands fa-youtube"></i>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>


    <!-- Video Section Bottom -->
    <div class="img-section">
      <div class="media ">
        <div class="d-flex flex-column align-items-center justify-content-center">
          <img :src="mainImage" width="100%" height="350" alt="">
          <a href="https://www.youtube.com/embed/tgbNymZ7vqY" target="_blank"
            class="btn subscribe-btn d-flex align-items-center my-2">
            <i class="fa-brands fa-youtube pe-2"></i>Subscribe
          </a>
        </div>
      </div>

      <!-- Media Cards Bottom -->
      <swiper :autoplay="autoplay" :speed="1000" :spaceBetween="50" :navigation="true" :modules="modules" :breakpoints="{
        320: { slidesPerView: 1, spaceBetween: 5 },
        480: { slidesPerView: 1, spaceBetween: 5 },
        640: { slidesPerView: 1, spaceBetween: 5 },
        768: { slidesPerView: 2, spaceBetween: 3 },
        1024: { slidesPerView: 3, spaceBetween: 50 }
      }" class="mySwiper">
        <swiper-slide :slidesPerView="3" v-for="(image, index) in images" :key="index">
          <div class="media-cards">
            <div>
              <div class="card media-card-1">
                <img :src="image.src" height="170" width="100%" alt="..." @click="updateMainImage(image.src)" />
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
  </div>
</template>


<script setup>
import { onMounted, ref } from 'vue';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';
// Modules for Swiper
const modules = ref([Navigation, Autoplay]);
// Autoplay configuration
const autoplay = {
  delay: 3000, // 3 seconds delay between slides
  disableOnInteraction: false // Keep autoplay running even after user interaction
};

const mainImage = ref('https://images.pexels.com/photos/25758512/pexels-photo-25758512/free-photo-of-american-car.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load');

const images = ref([
  {
    src: 'https://images.pexels.com/photos/25758512/pexels-photo-25758512/free-photo-of-american-car.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cupiditate repudiandae placeat nisi odit nostrum facilis ducimus voluptates tempore architecto! Sapiente, eveniet odit consequuntur pariatur a suscipit debitis nostrum maiores.'
  },

  {
    src: 'https://images.pexels.com/photos/19324703/pexels-photo-19324703/free-photo-of-hills-seen-from-a-car.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cupiditate repudiandae placeat nisi odit nostrum facilis ducimus voluptates tempore architecto! Sapiente, eveniet odit consequuntur pariatur a suscipit debitis nostrum maiores.'
  },

  {
    src: 'https://images.pexels.com/photos/9220184/pexels-photo-9220184.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cupiditate repudiandae placeat nisi odit nostrum facilis ducimus voluptates tempore architecto! Sapiente, eveniet odit consequuntur pariatur a suscipit debitis nostrum maiores.'
  },

  {
    src: 'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cupiditate repudiandae placeat nisi odit nostrum facilis ducimus voluptates tempore architecto! Sapiente, eveniet odit consequuntur pariatur a suscipit debitis nostrum maiores.'
  },

  {
    src: 'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cupiditate repudiandae placeat nisi odit nostrum facilis ducimus voluptates tempore architecto! Sapiente, eveniet odit consequuntur pariatur a suscipit debitis nostrum maiores.'
  },
]);

function updateMainImage(imageSrc) {
  mainImage.value = imageSrc;
}


// Create the toast instance
const $toast = useToast();

// Define reactive state variables
const mediaData = ref([]);
const mediaOnly = ref([]);
const currentTopVideo = ref(1);
const currentBottomVideo = ref(1);
const showMatchMedia = ref('');
const loading = ref(false);

// Function to show the top video
function showTopVideo(index) {
  const parsed_uri = getMediaUrlFromMediaData(index);
  currentTopVideo.value = parsed_uri;
}

// Function to show the bottom video
function showBottomVideo(index) {
  const parsed_uri = getMediaUrlFromMediaData(index);
  currentBottomVideo.value = parsed_uri;
}

// Function to get media URL from media data by ID
function getMediaUrlFromMediaData(id) {
  loading.value = true;
  const mediaItem = mediaData.value.find(media => media.id === id);
  if (mediaItem) {
    const media_uri = mediaItem.url;
    const uriSpliter = media_uri.split('/');
    const parsed_uri = `${uriSpliter[0] + '/' + uriSpliter[1] + '/' + uriSpliter[2] + '/' + 'embed' + '/' + uriSpliter[3]}`;

    showMatchMedia.value = media_uri;
    setTimeout(() => {
      loading.value = false;
    }, 2000);
    return parsed_uri;
  } else {
    loading.value = false;
    $toast.open({
      message: 'Media not found or removed for the given url.',
      type: 'error',
    });
  }
}

// Fetch media data on component mount
onMounted(() => {
  loading.value = false;
  const base_url = import.meta.env.VITE_BASE_URL;
  fetch(base_url + '/api/frontend/home/media/get', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(data => {
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
</script>


<style scoped>
.img-section, .video-sec {
  margin: 0 18rem;
}

@media (max-width:1200px) {
  .img-section, .video-sec {
    margin: 0 14rem;
  }
}

@media (max-width:900px) {
  .img-section, .video-sec {
    margin: 0 10rem;
  }
}

@media (max-width:700px) {
  .img-section, .video-sec {
    margin: 0 1rem;
  }
}
</style>