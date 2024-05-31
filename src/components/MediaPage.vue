<script setup>
import { onMounted, ref } from 'vue';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

// Create the toast instance
const $toast = useToast();

// Define reactive state variables
const mediaData = ref([]);
const currentTopVideo = ref(1);
const currentBottomVideo = ref(1);
const showMatchMedia = ref('');

// Function to show the top video
function showTopVideo(index) {
  currentTopVideo.value = index;
  getMediaUrlFromMediaData(index);
}

// Function to show the bottom video
function showBottomVideo(index) {
  currentBottomVideo.value = index;
}

// Function to get media URL from media data by ID
function getMediaUrlFromMediaData(id) {
  const mediaItem = mediaData.value.find(media => media.id === id);
  if (mediaItem) {
    const media_uri = mediaItem.url;
    showMatchMedia.value = media_uri;
    $toast.open({
      message: `Media URL: ${media_uri}`,
      type: 'success'
    });
  } else {
    $toast.open({
      message: 'Media not found for the given ID.',
      type: 'error'
    });
  }
}

// Fetch media data on component mount
onMounted(() => {
  // $toast.open({
  //   message: 'Fetching media data...',
  //   type: 'info',
  //   position:'top-right'
  // });

  // Make API call
  const base_url = import.meta.env.VITE_BASE_URL;
  fetch(base_url + '/api/frontend/home/media/get', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data.media);
      mediaData.value = data.media;
      $toast.open({
        message: 'Media data fetched successfully!',
        type: 'success',
        position: 'top-right'
      });
    })
    .catch(error => {
      console.error('Error:', error);
      $toast.open({
        message: 'Failed to fetch media data.',
        type: 'error',
        position: 'top-right'
      });
    });
});
</script>



<template>
  <div>


    <!-- <li v-for="media in mediaData">
      {{ media.url }}
      {{ mediaData[0].url }}
    </li> -->



    <div class="media mx-md-5 px-md-5 mt-3 pt-5">
      <div class="d-flex flex-column align-items-center justify-content-center pt-5">
        <iframe class="Uvideo-1" :src="mediaData[0]?.url"></iframe>
        <!-- <iframe v-show="currentTopVideo === 2" class="Uvideo-2"
          src="https://www.youtube.com/embed/3WrZMzqpFTc?si=PIqTmb58BLs8ftEQ"></iframe>
        <iframe v-show="currentTopVideo === 3" class="Uvideo-3"
          src="https://www.youtube.com/embed/wexzvClUcUk?si=e0btNBYWjsyozHtb"></iframe> -->
        <a href="https://www.youtube.com/embed/tgbNymZ7vqY" target="_blank"
          class="btn subscribe-btn d-flex align-items-center my-2">
          <i class="fa-brands fa-youtube pe-2"></i>Subscribe
        </a>
      </div>
    </div>

    <!-- Media Cards Top -->
    <div class="row justify-content-center mx-md-5 mx-2 px-md-5 mt-3 media-cards">
      <div class="col-md-3" v-for="media in mediaData">
        <div class="card media-card-1" @click="showTopVideo(media.id)">
          <img src="../assets/Images/media-gallery-1.jpeg" alt="..." />
          <div class="card-body">
            <p class="card-text text-center px-2">
              {{ media.description }}
            </p>
          </div>
          <i class="fa-brands fa-youtube"></i>
        </div>
      </div>

      <!-- <div class="col-md-3">
        <div class="card media-card-2" @click="showTopVideo(2)">
          <img src="../assets/Images/media-gallery-2.jpeg" alt="..." />
          <div class="card-body">
            <p class="card-text text-center px-2">
              Capital Smart City Islamabad | Future Benefits Unveiled Silicon
              Village | Development Updates | RBS
            </p>
          </div>
          <i class="fa-brands fa-youtube"></i>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card media-card-3" @click="showTopVideo(3)">
          <img src="../assets/Images/media-gallery-3.jpeg" alt="..." />
          <div class="card-body">
            <p class="card-text text-center px-2">
              Captivating Aerial Tour of Capital Smart City Islamabad: Experience
              the Beauty from Above! | RBS
            </p>
          </div>
          <i class="fa-brands fa-youtube"></i>
        </div>
      </div> -->
    </div>

    <!-- Video Section Bottom -->
    <div class="media mx-md-5 px-md-5 mt-3">
      <div class="d-flex flex-column align-items-center justify-content-center">
        <iframe v-show="currentBottomVideo === 1" class="Uvideo-4"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
        <iframe v-show="currentBottomVideo === 2" class="Uvideo-5"
          src="https://www.youtube.com/embed/3WrZMzqpFTc?si=PIqTmb58BLs8ftEQ"></iframe>
        <iframe v-show="currentBottomVideo === 3" class="Uvideo-6"
          src="https://www.youtube.com/embed/wexzvClUcUk?si=e0btNBYWjsyozHtb"></iframe>
        <a href="https://www.youtube.com/embed/tgbNymZ7vqY" target="_blank"
          class="btn subscribe-btn d-flex align-items-center my-2">
          <i class="fa-brands fa-youtube pe-2"></i>Subscribe
        </a>
      </div>
    </div>

    <!-- Media Cards Bottom -->
    <div class="row justify-content-center mx-md-5 mx-2 px-md-5 mt-3 media-cards">
      <div class="col-md-3" v-for="media in mediaData">
        <div class="card media-card-4" @click="showBottomVideo(media.id)">
          <img src="../assets/Images/media-gallery-1.jpeg" alt="..." />
          <div class="card-body">
            <p class="card-text text-center px-2">
              {{ media.description }}
            </p>
          </div>
          <i class="fa-brands fa-youtube"></i>
        </div>
      </div>

      <!-- <div class="col-md-3">
        <div class="card media-card-5" @click="showBottomVideo(2)">
          <img src="../assets/Images/media-gallery-2.jpeg" alt="..." />
          <div class="card-body">
            <p class="card-text text-center px-2">
              Capital Smart City Islamabad | Future Benefits Unveiled Silicon
              Village | Development Updates | RBS
            </p>
          </div>
          <i class="fa-brands fa-youtube"></i>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card media-card-6" @click="showBottomVideo(3)">
          <img src="../assets/Images/media-gallery-3.jpeg" alt="..." />
          <div class="card-body">
            <p class="card-text text-center px-2">
              Captivating Aerial Tour of Capital Smart City Islamabad: Experience
              the Beauty from Above! | RBS
            </p>
          </div>
          <i class="fa-brands fa-youtube"></i>
        </div>
      </div> -->
    </div>
  </div>
</template>