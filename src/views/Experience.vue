<template>
  <div id="container" class="container">

  </div>
</template>

<script>
import * as Three from 'three'
import shaderFragment from '../shaders/fragment.glsl'
import shaderVertex from '../shaders/vertex.glsl'
import Floor from '@/components/floor.js'
import GLTFLoader from 'three-gltf-loader'

export default {
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      cameraDelta: 0
    }
  },
  methods: {
    init: function() {
      let container = document.getElementById('container');
      
      this.camera = new Three.PerspectiveCamera(30, container.clientWidth/container.clientHeight, 0.01, 10);
      this.camera.position.x = 0;
      this.camera.position.y = -2;
      this.camera.position.z = 1.2;

      this.scene = new Three.Scene();

      let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2);
      let material = new Three.MeshLambertMaterial({
        color: 0xFFFFFF
      });
      this.mesh = new Three.Mesh(geometry, material);
      this.scene.add(this.mesh);
      this.mesh.position.set(0,0,.3);

      var loader = new GLTFLoader();
      loader.load( 'hallways.glb',  gltf => {
        gltf.scene.position.set(0,.3,0);
        gltf.scene.scale.set(1,1,1);
        gltf.scene.rotateX(3.14/2);
        gltf.scene.rotateY(-3.14/2);
        this.scene.add( gltf.scene );
      })

      var amblight = new Three.AmbientLight( 0xa0a0a0 ); // soft white light
      this.scene.add( amblight );

      var light = new Three.PointLight( 0xe0e0e0, 1, 100 );
      light.position.set( 5, -5, 5 );
      this.scene.add( light );

      this.renderer = new Three.WebGLRenderer({antialias: true});
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(this.renderer.domElement);
      this.camera.lookAt(0,0,.4);
    },
    animate: function() {
      requestAnimationFrame(this.animate);
      this.mesh.rotation.z += 0.002;
      this.camera.position.set(this.camera.position.x+.01*this.cameraDelta,this.camera.position.y, this.camera.position.z);
      this.renderer.render(this.scene, this.camera);
    },
    moveCamera(e) {
      if (e.keyCode == 68)
        this.cameraDelta = 1;
      else if (e.keyCode == 65)
        this.cameraDelta = -1;
    },

    stopCamera(e) {
      if (e.keyCode == 68 || e.keyCode == 65)
        this.cameraDelta = 0;
    }
  },
  mounted() {
    this.init();
    this.animate();
    window.addEventListener('keydown', this.moveCamera);
    window.addEventListener('keyup', this.stopCamera);
  }
}
</script>

<style scoped>
.container {
  background: white;
  width: calc(100vw - 250px);
  height: 800px;
}
</style>