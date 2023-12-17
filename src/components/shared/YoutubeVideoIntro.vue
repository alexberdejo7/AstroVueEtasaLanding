<template>
    <div id="youtube-video">
      <div style="padding:56.25% 0 0 0;position:relative;">
        <iframe 
          src="https://player.vimeo.com/video/895400760?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1" 
          frameborder="0" 
          allow="autoplay; fullscreen; picture-in-picture" 
          style="position:absolute;top:0;left:0;width:100%;height:100%;" 
          title="Etasa">
        </iframe>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  
  onMounted(() => {
    const script = document.createElement('script');
    script.src = 'https://player.vimeo.com/api/player.js';
    script.async = true;
    document.head.appendChild(script);
  });
  </script>
  