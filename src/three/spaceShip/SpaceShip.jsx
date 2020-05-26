import React from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as THREE from "three";
import { Vector3 } from 'three';
import Filter from './filter'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const afactor = 40e-6;
let a = [afactor, 0., -afactor].reverse();
let b = [1., -1.96712419, 0.96906742].reverse();

let spaceShip;

const modelToLoad = '/spaceShip.glb'

let camera, scene, renderer, controls;
let geometry, material;
let cube;
let running = false;

class SpaceShip extends React.Component {

    constructor() {
        super();

        this.yNow = 0;
        this.xNow = 0
        this.time = 0;
        this.filterZ = new Filter(a, b);
        this.filterX = new Filter(a, b);
    }

    init() {
        camera = new THREE.PerspectiveCamera(
            70,
            window.innerWidth / window.innerHeight,
            0.01,
            70
        );
        camera.position.x = 12;

        scene = new THREE.Scene();

        //Cube

        geometry = new THREE.BoxGeometry(.9, .9, .9);
        var material1 = new THREE.MeshPhongMaterial({ color: 0xfca503 });

        cube = new THREE.Mesh(geometry, material1);
        //scene.add(cube)

        //Lights

        let aLight = new THREE.AmbientLight(0xffffff, .1);
        scene.add(aLight);
        let directLight = new THREE.DirectionalLight(0xffffff, 1)
        directLight.position.set(1, 1, 1);
        scene.add(directLight);

        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('animation-div').appendChild(renderer.domElement);

        //Loading Model
        var loader = new GLTFLoader();

        let modelLoad = new Promise((resolve, reject) => {
            loader.load(modelToLoad, function (gltf) {
                console.log(gltf);
                scene.add(gltf.scene);
                spaceShip = gltf.scene.children[2];

                resolve('ok')

            }, undefined, function (error) {

                console.error(error);
                console.log("Deu PAAAAU");
                reject('deu pau')
            });

        })


        controls = new OrbitControls(camera, renderer.domElement);
        controls.enableZoom = false

        if (window.innerWidth < 1000) controls.enabled = false;

        modelLoad.then(() => {
            this.animate()
        })
    }

    //É aqui que anima o bagulho

    animate = () => {
        if (running) requestAnimationFrame(this.animate);

        let xFilterCalc = this.filterX.filterIter(this.xNow)[1];
        let yFilterCalc = this.filterZ.filterIter(this.yNow)[1];

        let factor = (Math.sin(this.time) + Math.sin(this.time * 2))
        spaceShip.rotation.z = xFilterCalc + factor / 100;
        spaceShip.position.y = -10 * yFilterCalc + factor / 10;
        spaceShip.position.z = -yFilterCalc * 10;
        spaceShip.rotation.x = yFilterCalc + factor / 50;
        spaceShip.position.x = 5 * xFilterCalc;

        renderer.render(scene, camera);
        this.time += .03
    }

    handleMove = e => {
        this.yNow = e.screenY
        this.xNow = e.screenX
        //console.log(this.yNow);
    };

    componentWillUnmount() {
        console.log('Unmmonting');
        running = false;
    }

    componentDidMount() {
        running = true;
        this.init();
    }

    render() {


        return (<div onMouseMove={this.handleMove} id="animation-div"></div>)
    }
}

export default SpaceShip