precision highp float;
uniform sampler2D tMap;
uniform float uAlpha;

varying vec4 vPosition;
varying vec2 vUv;

void main() {
    vec4 texture = texture2D(tMap, vUv);

    gl_FragColor = texture;
    // For the alpha of the texture
    gl_FragColor.a = uAlpha;
}