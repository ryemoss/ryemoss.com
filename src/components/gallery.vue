<template>
  <div class="gallery">
    <div class="main-image-container">
      <img @click="toggleModal" class="main-image" :src="selectedImage" />
    </div>

    <div class="carousel-container">
      <hr/>
      <div class="flex center">
        <span v-show="!galleryBeginning" class="gallery-more-right-arrow">
          <i class="fa fa-circle"></i>
          <i class="fa fa-circle"></i>
          <i class="fa fa-circle"></i>
        </span>
        <span v-show="galleryBeginning" class="gallery-more-right-arrow">
          <i class="fa fa-circle single"></i>
        </span>
        <div class="other-images" @scroll='scrolling'>
          <img v-for="image in images" :key="image+Math.random()" 
            @click="selectedImage=image"
            class="gallery-image"
            width='60px'
            height='60px'
            :src='image'
          />
        </div>
        <span v-show="!galleryEnd" class="gallery-more-right-arrow">
          <i class="fa fa-circle"></i>
          <i class="fa fa-circle"></i>
          <i class="fa fa-circle"></i>
        </span>
        <span v-show="galleryEnd" class="gallery-more-right-arrow">
          <i class="fa fa-circle single"></i>
        </span>
      </div>
      <hr/>
    </div>
    <modal v-show="showModal" @closeModal="closeModal" :modalImg='selectedImage'></modal>
  </div>
</template>

<script>
import firebase from 'firebase'
import modal from './modal.vue'

export default {
  components: {modal},
  props: [
    'folderPath'
  ],
  data() {
    return {
      selectedImage: '',
      galleryEnd: false,
      galleryBeginning: true,
      firebasePic: '',
      images: [],
      showModal: false
    }
  },
  async mounted() {
    await this.getFirebaseImages();
    window.addEventListener('keydown', this.keyListener);
  },
  methods: {
    scrolling(e) {
      if (e.target.offsetWidth >= e.target.scrollWidth-e.target.scrollLeft-30)
        this.galleryEnd = true;
      else
        this.galleryEnd = false;
      if (e.target.scrollLeft <= 30  )
        this.galleryBeginning = true;
      else
        this.galleryBeginning = false;
    },
    async getFirebaseImages(){
      var storage = firebase.storage();
      var folderRef = storage.ref(this.folderPath);
      folderRef.listAll().then(res=>{
        res.items.forEach((imgref)=>{
          imgref.getDownloadURL().then(url=>{
            this.images.push(url);
            if (!this.selectedImage)
              this.selectedImage = this.images[0];
          })
        })
      })
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    closeModal() {
      if (this.showModal)
        this.showModal = false;
    },
    keyListener(e) {
      if (e.keyCode == 13) // enter
        this.toggleModal();
      else if (e.keyCode == 39) { // right
        var idx = this.images.indexOf(this.selectedImage);
        if (idx + 1 < this.images.length)
          this.selectedImage = this.images[idx+1];
      }
      else if (e.keyCode == 37) { // left
        var idx = this.images.indexOf(this.selectedImage);
        if (idx - 1 >= 0)
          this.selectedImage = this.images[idx-1];
      }
      else if (e.keyCode == 27) { // esc
        if (this.showModal)
          this.closeModal();
      }
      
    }
  },
}
</script>

<style scoped lang='less'>
@columnwidth: 220px;

.gallery {
  padding: 50px 50px 0px;
  display: flex;
  flex-direction: column;
  max-width: calc(100vw - @columnwidth);
  max-height: 100vh;
  margin: 0 auto;
}
.main-image-container {
  width: 100%;
}
.main-image {
  max-width: 100%;
  max-height: calc(100vh - 100px - 104px);
}
.carousel-container {
  margin: 20px 0;
  position: fixed;
  bottom: 0;
  max-width: calc(100vw - @columnwidth - 120px);
}
.other-images {
  overflow-x: scroll;
  padding: 10px 0;
  white-space: nowrap;
  height: 80px;
  overflow-y: hidden;
}
.carousel-container hr {
  width: 100%;
  height: 1px;
  background-image: linear-gradient(to right, #486b5030 0%, #435a48 20%, #435a48 80%, #486b5030 100%);
  border: none;
}
.gallery-image {
  margin: 0 3px;
  height: 60px;
  width: 60px;
  object-fit: cover;
  opacity: .6;
}
.gallery-image:hover {
  opacity: .9;
  cursor: pointer;
}
.gallery-more-right-arrow {
  color: #435a48b0;
  font-size: 4px;
  transition: opacity .4s;
  margin: 0 12px;
  display: flex;
  flex-wrap: nowrap;
}
.fa-circle {
  margin-right: 2px;
}
.fa-circle.single {
  width: 15px;
}
.fade-out {
  opacity: 0;
}
</style>