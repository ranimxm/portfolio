export const vertexShader = `
    uniform float uTime;
    varying vec2 vUv;

    void main() {
        vUv = uv;
        vec3 newPosition = position;

        float ripple = sin((position.x * 5.0 + position.y * 5.0) + uTime * 1.0) * 0.06;
        newPosition.z += ripple;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }
`;