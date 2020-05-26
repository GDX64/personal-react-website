import React, { Component } from 'react'
import Loading from '../../components/utilities/loading/Loading'
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GUI } from 'three/examples/jsm/libs/dat.gui.module';
import { WebGLGeometries } from 'three';

var camera, scene, renderer, controls, mixer, composer;
let modelToLoad = 'robot.glb'

let solda;
let running = false;

let animated = true;

function init(reactFather) {
    camera = new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        0.01,
        100
    );
    camera.position.set(-7, 3, -3)

    scene = new THREE.Scene();

    //Adding lights

    var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    scene.add(directionalLight);
    directionalLight.position.set(-1, 1, 0);

    let aLight = new THREE.AmbientLight(0xffffff, .1);
    scene.add(aLight);

    console.log(window.innerHeight, window.innerWidth)
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('canvas-3d').appendChild(renderer.domElement);

    //Loading Model
    var loader = new GLTFLoader();

    // Optional: Provide a DRACOLoader instance to decode compressed mesh data
    var dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/draco/');
    loader.setDRACOLoader(dracoLoader);

    loader.load(modelToLoad, function (gltf) {
        console.log(gltf);
        scene.add(gltf.scene);
        if (animated) {
            var model = gltf.scene;
            mixer = new THREE.AnimationMixer(model);
            var clips = gltf.animations;
            clips.forEach(function (clip) {
                mixer.clipAction(clip).play();
            });
        }
        let empty = gltf.scene.children[3];

        solda = new THREE.PointLight(0xffff00, 1, 100);
        //solda.position.copy(empty.position)
        empty.add(solda)

        //sphere
        let geometry = new THREE.SphereGeometry(.03, 8, 8, 8)
        let material = new THREE.MeshPhongMaterial()
        let sphere = new THREE.Mesh(geometry, material)
        empty.add(sphere)

        reactFather.setState({ ready: true })
        running = true;
        animate();

    }, undefined, function (error) {

        console.error(error);
        console.log("Deu PAAAAU");
    });

    //OrbitControls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true;

    //Risize

    window.addEventListener('resize', onWindowResize, false);

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);

    }

}

let t = 0
function animate() {
    if (running) requestAnimationFrame(animate);
    renderer.render(scene, camera);
    if (animated) mixer.update(.01);

    solda.power = (1 + Math.sin(t) + Math.random() * .3) * 10;
    t += .01
}


class Rings extends Component {

    state = {
        ready: false
    }

    componentDidMount() {
        console.log('Moutend');
        running = true;
        window.onload = () => console.log(console.log(window.innerHeight, window.innerWidth))
        init(this);
    }

    componentWillUnmount() {
        const htmlElement = document.getElementsByClassName("dg main")[0]
        if (htmlElement) htmlElement.remove();
        console.log("removing");
        running = false
    }

    render() {

        return (<>
            {this.state.ready ? "" : <Loading data="scene" />}
            <div id="canvas-3d">
            </div>
        </>)

    }
}

export default Rings