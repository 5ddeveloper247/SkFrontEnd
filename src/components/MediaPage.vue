<template>
  <Loader :isLoading="loading" />
  <div v-show="!loading">
    <div class="media mx-md-5 px-md-5 mt-3 pt-5">
      <div class="d-flex flex-column align-items-center id_sxy justify-content-center pt-5">
        <iframe class="Uvideo-1" :src="currentTopVideo"></iframe>
        <a :href="currentTopVideo" target="_blank" class="btn subscribe-btn d-flex align-items-center my-2">
          <i class="fa-brands fa-youtube pe-2"></i>Subscribe
        </a>
      </div>
    </div>

    <!-- Media Cards Top -->
    <div class="row justify-content-center mx-md-5 mx-2 px-md-5 mt-3 media-cards">
      <div class="col-md-3" v-for="media in mediaData" :key="media.id">
        <div class="card media-card-1" @click="showTopVideo(media.id)">
          <img :src="'http://localhost:8000/' + mediaOnly[0].url" alt="..." />
          <div class="card-body">
            <p class="card-text text-center px-2">
              {{ media.description }}
            </p>
          </div>
          <i class="fa-brands fa-youtube"></i>
        </div>
      </div>
    </div>

    <!-- Video Section Bottom -->
    <div class="media mx-md-5 px-md-5 mt-3">
      <div class="d-flex flex-column align-items-center justify-content-center">
        <iframe class="Uvideo-4" :src="currentBottomVideo"></iframe>
        <a href="https://www.youtube.com/embed/tgbNymZ7vqY" target="_blank"
          class="btn subscribe-btn d-flex align-items-center my-2">
          <i class="fa-brands fa-youtube pe-2"></i>Subscribe
        </a>
      </div>
    </div>

    <!-- Media Cards Bottom -->
    <div class="row justify-content-center mx-md-5 mx-2 px-md-5 mt-3 media-cards">
      <div class="col-md-3" v-for="media in mediaData" :key="media.id">
        <div class="card media-card-4" @click="showBottomVideo(media.id)">
          <img :src="'http://localhost:8000/' + mediaOnly[0].url" alt="..." />
          <div class="card-body">
            <p class="card-text text-center px-2">
              {{ media.description }}
            </p>
          </div>
          <i class="fa-brands fa-youtube"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import Loader from './Loader.vue';

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
