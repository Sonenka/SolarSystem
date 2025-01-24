import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.124/build/three.module.js';

export class Planet {
    constructor({ name, texturePath, mass, radius, position, velocity }) {
        this.name = name;
        this.mass = mass;
        this.radius = radius;
        this.position = position; 
        this.velocity = velocity; 

        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load(texturePath);

        const geometry = new THREE.SphereGeometry(radius, 32, 16);
        const material = new THREE.MeshStandardMaterial({ map: texture });

        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.name = name;
        this.mesh.position.set(position[0], position[1], position[2]);
    }

    updatePosition(newPosition, newVelocity) {
        this.mesh.position.set(newPosition[0], newPosition[1], newPosition[2]);
        this.velocity = newVelocity;
    }
}