import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

import './ThreeSceneParticles.css';

const vertexShader = `
    varying vec3 v_position;
    varying vec2 vUv;

    uniform float time;
    uniform float scroll;
    uniform float u_factor;

    mat3 rotation3dX(float angle) {
        float s = sin(angle);
        float c = cos(angle);

        return mat3(
            1.0, 0.0, 0.0,
            0.0, c, s,
            0.0, -s, c
        );
    }

    mat3 rotation3dY(float angle) {
        float s = sin(angle);
        float c = cos(angle);

        return mat3(
            c, 0.0, -s,
            0.0, 1.0, 0.0,
            s, 0.0, c
        );
    }

    void main () {
        vUv = uv;
        vec3 new_position = position;

        float wave = 0.0;
        wave += 0.10 * sin(time + position.x) + 0.05 * sin(1.0 * time + position.x) + 0.05 * sin(0.25 * time + position.x);
        wave += 0.15 * sin(time + position.y) + 0.05 * sin(2.0 * time + position.y) + 0.05 * sin(0.25 * time + position.y);
        wave += 0.20 * sin(time + position.z) + 0.05 * sin(0.5 * time + position.z) + 0.05 * sin(0.25 * time + position.z);

        new_position *= mix(u_factor, 1.0, wave);

        new_position *= rotation3dX(scroll * 0.001);
        new_position *= rotation3dY(scroll * 0.002);

        gl_Position = projectionMatrix * modelViewMatrix * vec4( new_position, 1.0 );
        gl_PointSize = 1.5;

        v_position = new_position;
    }
`;

const fragmentShader = `
    uniform float time;
    uniform float u_opacity;
    varying vec3 v_position;
    varying vec2 vUv;

    vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d )
    {
        return a + b*cos( 6.28318*(c*t+d) );
    }

    void main () {
        vec3 position = v_position;
        vec3 col = palette(vUv.y, vec3(0.5,0.5,0.5),vec3(0.5,0.5,0.5),vec3(2.0,1.0,0.0),vec3(0.5,0.20,0.25) );

        vec3 color = vec3(0.965,0.482,0.176); // Color actualizado a #F67B2D
        gl_FragColor = vec4(color, 0.5);
    }
`;

function ThreeScene() {
    const containerRef = useRef();

    useEffect(() => {
        const container = containerRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true }); // Fondo transparente

        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);

        const geometry = new THREE.IcosahedronGeometry(4, 32);
        const material = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 },
                u_factor: { value: 0.5 },
                u_opacity: { value: 0 }
            },
            vertexShader: vertexShader,
            fragmentShader: fragmentShader
        });

        const cube = new THREE.Points(geometry, material);
        cube.scale.set(0.5, 0.5, 0.5);
        scene.add(cube);

        camera.position.z = 5;

        const animate = function () {
            requestAnimationFrame(animate);
            cube.rotation.y += 0.005;
            cube.rotation.x += 0.003;
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            container.removeChild(renderer.domElement);
        };
    }, []);

    return <div className="render" ref={containerRef} />;
}

export default ThreeScene;