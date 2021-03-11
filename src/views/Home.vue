<template>
  <div id="appp" :class="typeof weather.main != 'undefined' && weather.main.temp > 16 ? 'warm' : ''">
    <main>
      <div class="search-box">
        <input
          type="text"
          class="search-bar"
          placeholder="Search..."
          v-model="query"
          @keypress="fetchWeather"
        />
      </div>
      <div class="weather-wrap" v-if="typeof weather.main != 'undefined'">
        <div class="location-box">
          <div class="location">{{ weather.name }}, {{ weather.sys.country }}</div>
          <div class="date">{{ dateBuilder() }}</div>
        </div>
        
        <div class="weather-box">
          <div class="temp">
            <span class="temp_min">{{ Math.round(weather.main.temp_min) }}℃</span> /
            <span class="temp_min">{{ Math.round(weather.main.temp_max) }}℃</span>
            <div class="temp_feel">체감 온도 {{ Math.round(weather.main.feels_like) }}℃</div>
          </div>
          <div class="weather">
            <span class="weather_description">{{ weather.weather[0].description }}</span>
            <span class="weather_icon"><img :src="`//openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`" /></span>
          </div>
          <div class="sunrise">
            <img :src="require('@/assets/sunrise.jpg')" class="sunrise_img" />
            {{ Unix_timestamp(weather.sys.sunrise) }}
          </div>
          <div class="sunset">
            <img :src="require('@/assets/sunset.jpg')" class="sunset_img" />
            {{ Unix_timestamp(weather.sys.sunset) }}
          </div>
        </div>
      </div>
      <router-link :to="`/map/`" class="my_list">
        내 도시로 이동
      </router-link>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    
  },
  data () {
    return {
      api_key: '35a2cf9204fa47377fdd55adff23a4dc',
      url_base: '//api.openweathermap.org/data/2.5/weather/',
      query: '',
      weather: {},
      //map_btn_boolean: false
    }
  },
  methods: {
    fetchWeather (e) {
      if (e.key == "Enter") {
        fetch(`${this.url_base}?q=${this.query}&lang=kr&units=metric&appid=${this.api_key}`)
          // .then(response => response.json())
          // .then(data => {});
          .then(res => {
            return res.json();
          }).then(this.setResults);
        // this.showMapButton();
      }
    },
    setResults (results) {
      this.weather = results;
    },
    /*showMapButton () {
      this.map_btn_boolean = true;
    },*/
    dateBuilder () {
      let d = new Date();
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
      return `${day} ${date} ${month} ${year}`;
    },
    Unix_timestamp(t){
      let dt = new Date(t*1000);
      let hr = dt.getHours();
      let m = "0" + dt.getMinutes();
      let s = "0" + dt.getSeconds();
      return hr+ ':' + m.substr(-2) + ':' + s.substr(-2);  
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'montserrat', sans-serif;
}
#appp {
  background-image: url('../assets/cold-bg.jpg');
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
}
#appp.warm {
  background-image: url('../assets/warm-bg.jpg');
}
#appp main {
  min-height: 100vh;
  padding: 25px;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));
}
.search-box {
  width: 100%;
  margin-bottom: 30px;
}
.search-box .search-bar {
  display: block;
  width: 100%;
  padding: 15px;
  
  color: #313131;
  font-size: 20px;
  appearance: none;
  border:none;
  outline: none;
  background: none;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
}
.search-box .search-bar:focus {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 16px 0px 16px 0px;
}
.location-box .location {
  color: #FFF;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}
.location-box .date {
  color: #FFF;
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
  text-align: center;
}
.weather-box {
  text-align: center;
}
.weather-box .temp {
  display: inline-block;
  padding: 10px 25px;
  color: #FFF;
  font-size: 50px;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color:rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0px;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
.weather-box .temp_feel {
  font-size: 35px;
}
.weather-box .weather {
  color: #FFF;
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
.weather .weather_icon img {
  width: 45px;
  background-color: white;
  border-radius: 100%;
  vertical-align: middle;
  margin-left: 15px;
}
.sunrise, .sunset {
  display: inline-block;
  padding: 10px 10px;
  color: #FFF;
  font-size: 35px;
  font-weight: 900;
  text-shadow: 3px 6px rgb(0 0 0 / 25%);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0px;
  box-shadow: 3px 6px rgb(0 0 0 / 25%);
}
.sunrise_img, .sunset_img {
  width: 55px;
  height: 40px;
  display: block;
  margin: 0 auto;
}
.sunset {
  margin-left: 20px;
}
.my_list {
  font-size: 16px;
  text-align: center;
  color: white;
  text-decoration: none;
  display: block;
  padding: 10px 0;
  border: 2px solid #3f6679;
  border-radius: 10px;
  text-shadow: 3px 6px rgb(0 0 0 / 25%);
}
</style>