import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

const group = new THREE.Group();
group.position.y = 3;
group.scale.x = 1;
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0xff0000})
)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0x0022ff})
)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0x0022ff})
)
cube2.position.x = -2;
cube3.position.x = 2;

group.add(cube1)
group.add(cube2)
group.add(cube3)
/**
 * Objects
 */
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)
// scene.add(mesh)

// // Position
// mesh.position.set(0.7, -0.6, .5)

// // Scale
// mesh.scale.set(2, 0.5, 0.5)

// // Rotation
// mesh.rotation.reorder('YXZ');
// mesh.rotation.x = Math.PI *.25;
// mesh.rotation.y = Math.PI *.25;

// Axes helper
const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.set(1, 1, 4);

scene.add(camera);

// camera.lookAt(mesh.position)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)