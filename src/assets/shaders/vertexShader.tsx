export const vertexShader = `
    uniform float uTime;
    varying vec2 vUv;

    void main() {
        vUv = uv;
        vec3 newPosition = position;

        float distortion = sin(position.x * 5.0 + uTime) * 0.1;
        newPosition.z += distortion;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }
`;