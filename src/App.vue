<template>
  <div class="flex" id="app">
    <columnheader></columnheader>
    <router-view/>
  </div>
</template>

<script>
import columnheader from '@/components/columnheader.vue'
export default {
  components: {columnheader}
}
</script>

<style lang="less">
* {
  box-sizing: border-box;
}
html,
body {
	font-family: 'Montserrat', sans-serif;
	color: #ddd;
	margin: 0;
	padding: 0;
	background-color: #111;
	width: 100%;
}
a {
	color: inherit;
	text-decoration: none;
	font-size: 1.1em;
	font-weight: 100;
}
p span {
	font-weight: normal;
}
.pages, .indexpages {
	display: flex;
	text-align: center;
	justify-content: center;
}
.indexpages {
	color: silver;
	font-size: 1.3em;
	margin-top: 60px;
	margin-bottom: 80px;
}
.indextitle{
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 20px;
}
.title{
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 16px;
	margin-top: 40px;
	text-align: center;
}
.titleimg {
	filter: invert(1);
	width: 600px;
	display: inline-block;
}
.titleicon{
	width: 120px;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 60px;
	filter: invert(1);
}
.titletext{
	font-size: 11px;
	color: silver;
	font-weight: 400;
}
.icons, .indexicons{
	display: block;
	text-align: center;
	padding: 12px;
}
.icons{
	margin-bottom: 10px;
	padding-bottom: 0px;
}
.socialicon{
	display: inline-block;
	position: relative;
	font-size: 1.1em;
	margin-left: 12px;
	margin-right: 12px;
}
.socialicon:hover{
	color: #1CAB50;
	cursor: pointer;
}
.aboutblock{
	display: block;
	text-align: center;
	margin-top: 10px;
}
.aboutimage{
	display: inline-block;
	width: 400px;
}
.galleryimage {
	object-fit: cover;
	width: 260px;
	height: 200px;
	max-width: 260px;
}
.galleryimage:hover{
	cursor:pointer;
}

.flex {
  display: flex;
}
.center {
  align-items: center;
}

</style>
