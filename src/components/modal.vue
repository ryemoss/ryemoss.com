<template>
  <div class="modal">
    <img class="modal-content" :src='modalImg' />
    <div @click='closeModal' class="close">✕</div>
  </div>
</template>

<script>
export default {
  props: ['modalImg'],
  methods: {
    closeModal() {
			this.$emit('closeModal');
		},
  }
}
</script>

<style scoped>
.modal {
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 15;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgba(0,0,0,.92);
}
.modal-content {
	margin: auto;
	display: block;
	width: auto;
	max-width: 90%;
	max-height: 95%;
}
.modal-content{
	animation-name: zoom;
	animation-duration: 0.4s;
}
@keyframes zoom {
	from {transform:scale(0)}
	to {transform:scale(1)}
}
.close {
	position: absolute;
	top: 0;
	right: 10px;
	padding: 10px;
	color: #f1f1f177;
	font-size: 24px;
	font-weight: bold;
	transition: .3s;
}
.close:hover,
.close:focus {
	color: #bbb;
	text-decoration: none;
	cursor: pointer;
}
</style>