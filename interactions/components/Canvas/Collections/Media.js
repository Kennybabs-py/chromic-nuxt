import { Program, Mesh } from "ogl";
import gsap from "gsap";

import vertex from "@/interactions/shaders/collections-vertex.vert";
import fragment from "@/interactions/shaders/collections-fragment.frag";

export default class Media {
  constructor({ element, index, geometry, gl, scene, sizes }) {
    this.element = element;
    this.gl = gl;
    this.geometry = geometry;
    this.scene = scene;
    this.sizes = sizes;
    this.index = index;

    // The recurring dom element after scroll
    this.extra = {
      x: 0,
      y: 0,
    };

    this.opacity = {
      current: 0,
      target: 0,
      lerp: 0.1,
      multiplier: 0,
    };

    this.createTexture();
    this.createProgram();
    this.createMesh();
    this.createBounds({ sizes: this.sizes });
  }

  createTexture() {
    const elementImage = this.element.querySelector(
      ".collections__gallery__media__image"
    );
    this.texture = window.TEXTURES[elementImage.getAttribute("data-src")];
  }

  createProgram() {
    this.program = new Program(this.gl, {
      vertex: vertex,
      fragment: fragment,
      uniforms: { uAlpha: { value: 0 }, tMap: { value: this.texture } },
    });
  }

  createMesh() {
    this.mesh = new Mesh(this.gl, {
      geometry: this.geometry,
      program: this.program,
    });

    this.mesh.setParent(this.scene);
  }

  createBounds({ sizes }) {
    // The width and height of the canvas field of view
    this.sizes = sizes;
    this.bounds = this.element.getBoundingClientRect();

    this.updateScale();
    this.updateX();
    this.updateY();
  }

  show() {
    gsap.fromTo(this.opacity, { multiplier: 0 }, { multiplier: 1 });
  }

  hide() {
    gsap.to(this.opacity, { multiplier: 0 });
  }

  onResize(event, scroll) {
    this.extra = {
      x: 0,
      y: 0,
    };

    this.createBounds(event);
    this.updateX(scroll.x);
    this.updateY(scroll.y);
  }

  updateScale() {
    // To get the percentage of dom width & height in the window
    this.width = this.bounds.width / window.innerWidth;
    this.height = this.bounds.height / window.innerHeight;

    this.mesh.scale.x = this.sizes.width * this.width;
    this.mesh.scale.y = this.sizes.height * this.height;
  }

  updateX(x = 0) {
    this.x = (this.bounds.left + x) / window.innerWidth;

    this.mesh.position.x =
      -this.sizes.width / 2 +
      this.mesh.scale.x / 2 +
      this.x * this.sizes.width +
      this.extra.x;
  }

  updateY(y = 0) {
    this.y = (this.bounds.top + y) / window.innerHeight;

    this.mesh.position.y =
      this.sizes.height / 2 -
      this.mesh.scale.y / 2 -
      this.y * this.sizes.height +
      this.extra.y;
  }
  update(scroll, index) {
    this.updateX(scroll);
    this.updateY(0);

    const amplitude = 0.1;
    const frequency = 1;

    this.mesh.rotation.z = -0.02 * Math.PI * Math.sin(this.index / frequency);
    this.mesh.position.y = amplitude * Math.sin(this.index / frequency);

    // Setting the opacity of the card
    this.opacity.target = index === this.index ? 1 : 0.4;
    this.opacity.current = gsap.utils.interpolate(
      this.opacity.current,
      this.opacity.target,
      this.opacity.lerp
    );

    this.program.uniforms.uAlpha.value =
      this.opacity.multiplier * this.opacity.current;
  }
}
