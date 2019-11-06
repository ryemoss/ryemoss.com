<template>
  <div class="column-header">

    <img src="@/assets/icon.gif" class="titleicon" />

    <div class="indextitle">
      <router-link to="/photos">RYEMOSS</router-link>
    </div>

    <div class="nav-buttons">
			<router-link class="nav-button" to="/photos">Photos</router-link>
			<router-link class="nav-button" to="/artwork">Artwork</router-link>
			<router-link class="nav-button" to="/about">About</router-link>
			<router-link class="nav-button" to="/experience">Experience</router-link>
    </div>

    <div class="socials">
      <a class="socialicon" href="https://www.instagram.com/rye_moss/" target="_blank"><i class="la la-instagram"></i></a>
      <a class="socialicon" href="https://rye-moss.tumblr.com/" target="_blank"><i class="la la-tumblr-square"></i></a>
      <a class="socialicon" href="https://theeldergoose.deviantart.com/gallery/" target="_blank"><i class="la la-deviantart"></i></a>
      <a class="socialicon" href="mailto:images@ryemoss.com" target="_blank"><i class="la la-envelope"></i></a>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 'photos'
    }
  }
}
</script>

<style scoped lang='less'>
@columnheaderWidth: 220px;

.column-header {
  background-color: #222;
  height: 100vh;
  position: relative;
  width: @columnheaderWidth;
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  color: #888;
}
.titleicon {
  margin-top: 60px;
  opacity: .1;
}
.nav-buttons {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
}
.nav-button {
  font-size: 14px;
  margin-bottom: 15px;
}
.nav-button:hover {
  color: green;
}
.indextitle .router-link-active {
  color: inherit !important;
}
.router-link-active {
  color: #ccc !important;
}
.socials {
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  width: @columnheaderWidth;
  justify-content: space-between;
  padding: 20px;
}
</style>