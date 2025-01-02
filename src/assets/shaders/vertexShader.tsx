export const vertexShader = `
    uniform float uTime;
    uniform vec2 mousePos;
    varying vec2 vUv;

    void main() {
        vUv = uv;
        vec3 newPosition = position;

        float mouseDist = distance(mousePos, uv);
        newPosition.z += 0.2 * sin(uTime + mouseDist * 10.0);

        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }
`;