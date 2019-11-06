import * as Three from 'three'

export default class Floor {
  constructor() {
    var ground = new Three.BoxGeometry(4,1,.01);
    var material = new Three.MeshLambertMaterial({
      color: 0xFFFFFF
    });
    this.mesh = new Three.Mesh(ground,material);
  }
}