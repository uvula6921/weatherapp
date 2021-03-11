<template>
  <div class="map">
    <div id="openweathermap-widget-15"></div>
  </div> 
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup () {
    const weather = ref({});
    const route = useRoute();
    
    window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  window.myWidgetParam.push({id: 15,cityid: route.params.id,appid: '35a2cf9204fa47377fdd55adff23a4dc',units: 'metric',containerid: 'openweathermap-widget-15',  });  (function() {var script = document.createElement('script');script.async = true;script.charset = "utf-8";script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(script, s);  })();
    
    onBeforeMount(() => {
      fetch(`//api.openweathermap.org/data/2.5/weather/?id=${route.params.id}&lang=kr&units=metric&appid=35a2cf9204fa47377fdd55adff23a4dc`)
        .then(response => response.json())
        .then(data => {
          weather.value = data;
        });
    });
    
    return {
      weather
    }
  }
}
</script>

<style>
#openweathermap-widget-15 {
  margin-top: 50%;
}
.weather-right--type1:first-of-type {
  width: 100% !important;
}
.map {
  height: 100%;
}
</style>