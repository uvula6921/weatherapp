<template>
  <div class="map">
    <table>
      <router-link :to="'/map/5368361'" class="movie-link">
        <tr class="row">
          <td class="country_flag"><img :src="require('@/assets/usa_flag.jpg')" class="flag_img" /></td>
          <td class="city_name">Los Angeles</td>
        </tr>
      </router-link>
      <router-link :to="'/map/2147714'" class="movie-link">
        <tr class="row">
          <td class="country_flag"><img :src="require('@/assets/australia_flag.jpg')" class="flag_img" /></td>
          <td class="city_name">Sydney</td>
        </tr>
      </router-link>
      <router-link :to="'/map/3128760'" class="movie-link">
        <tr class="row">
          <td class="country_flag"><img :src="require('@/assets/spain_flag.jpg')" class="flag_img" /></td>
          <td class="city_name">Barcelona</td>
        </tr>
      </router-link>
    </table>
    
  </div> 
</template>

<script>
export default {
  
}
</script>

<style>
.country_flag {
  width: 40%;
}
.city_name {
  width: 60%;
  text-align: center;
  text-decoration: none;
  color: #333;
  font-size: 20px;
  vertical-align: middle;
}
.city_name:visited {
  text-decoration: none;
}
.flag_img {
  width: 100%;
  height: 100px;
}
.row {
  padding: 7px 0;
  border-bottom: 1px solid #333;
  display: inline-table;
}
</style>