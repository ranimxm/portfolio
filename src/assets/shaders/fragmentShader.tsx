export const fragmentShader = ` 
    varying vec2 vUv;

    void main() {
        vec2 center = vec2(0.5, 0.5);
        float radius = 0.5; // straal van de cirkel
        float dist = distance(vUv, center) / radius;

        vec3 color;
        if (dist < 0.4641) { //eerste cirkel (middelste) naar tweede
            color = mix(vec3(0.70196, 0.64705, 1.0), vec3(0.95294, 0.74509, 1.0), dist / 0.4641); //mix kleuren mbv CSS percentages in figma (46,51%)
        } else if (dist < 0.6783) { //tweede cirkel naar derde
            color = mix(vec3(0.95294, 0.74509, 1.0), vec3(0.58823, 0.52156, 1.0), (dist - 0.4641) / (0.6783 - 0.4641));
        } else if (dist < 0.8521) { //derde cirkel naar vierde
            color = mix(vec3(0.58823, 0.52156, 1.0), vec3(0.23921, 0.2, 0.47058), (dist - 0.6783) / (0.8521 - 0.6783));
        } else if (dist <= 1.0) { //vierde cirkel maar vijfde
            color = mix(vec3(0.23921, 0.2, 0.47058), vec3(0.01176, 0.0, 0.22745), (dist - 0.8521) / (1.0 - 0.8521));
        }

        gl_FragColor = vec4(color, 1.0);
    }
`;
