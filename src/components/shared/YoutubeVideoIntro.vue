<template>
  <div id="youtube-video" v-if="videoLoaded">
    <div style="padding:56.25% 0 0 0;position:relative;">
      <iframe 
        muted
        loading="lazy"
        v-bind:src="videoUrl"
        frameborder="0" 
        allow="autoplay; fullscreen; picture-in-picture" 
        style="position:absolute;top:0;left:0;width:100%;height:100%;" 
        title="Etasa - Intro">
        
      </iframe>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const videoLoaded = ref(false);
const videoUrl = 'https://player.vimeo.com/video/895400760?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1';

onMounted(() => {
  // Retrasa la carga del video
  setTimeout(() => {
    videoLoaded.value = true; // Habilita la visualización del iframe
  }, 6000); // 5000 milisegundos = 5 segundos
});
</script>


