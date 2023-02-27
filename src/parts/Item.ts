import * as THREE from "three";
import vertex from "../glsl/item.vert";
import fragment from "../glsl/item.frag";
import { MyObject3D } from "../webgl/myObject3D";
import { Update } from "../libs/update";
import { Func } from "../core/func";

export class Item extends MyObject3D {
  constructor() {
    super();

    const geometry = new THREE.PlaneGeometry(1, 1);
    const material = new THREE.ShaderMaterial({
      vertexShader: vertex,
      fragmentShader: fragment,
      uniforms: {
        uTime: { value: Update.instance.cnt },
      },
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.scale.set(Func.instance.sw(), Func.instance.sh(), 1);
    console.log(mesh.position);
    this.add(mesh);
  }

  protected _update(): void {
    super._update();
  }
}
