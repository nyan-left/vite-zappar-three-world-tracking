/* eslint-disable @typescript-eslint/no-floating-promises */
import * as THREE from 'three';
import * as ZapparThree from '@zappar/zappar-threejs';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import './style.css';

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;

document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const camera = new ZapparThree.Camera();
camera.poseMode = ZapparThree.CameraPoseMode.AnchorOrigin;

ZapparThree.glContextSet(renderer.getContext());

const scene = new THREE.Scene();
scene.background = camera.backgroundTexture;

const envMap = new ZapparThree.CameraEnvironmentMap();
scene.environment = envMap.environmentMap;

const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.5);
const mainLight = new THREE.DirectionalLight(0xffffff, 3);
mainLight.position.set(0.125, 1.5, -0.125);

ZapparThree.permissionRequestUI().then(granted => {
  if (granted) camera.start();
  else ZapparThree.permissionDeniedUI();
});

const ui = new ZapparThree.WorldTrackerUI(renderer.domElement!);
ui.show();

const worldTracker = new ZapparThree.WorldTracker();
const featurepoints = new ZapparThree.FeaturePointsMesh(worldTracker);
const trackerGroup = new ZapparThree.UserPlacementAnchorGroup(
  camera,
  worldTracker,
  renderer,
);

scene.add(trackerGroup, featurepoints);

const loader = new GLTFLoader();
loader.load('/model.glb', gltf => {
  const model = gltf.scene;
  model.scale.setScalar(0.075);
  trackerGroup.add(model);
});

trackerGroup.add(mainLight, hemiLight);

const trackerInitializing = () =>
  worldTracker.quality ===
  ZapparThree.WorldTrackerQuality.WORLD_TRACKER_QUALITY_INITIALIZING;

renderer.setAnimationLoop(render);

function render() {
  if (trackerInitializing()) ui.update();
  else ui.hide();

  camera.updateFrame(renderer);
  featurepoints.update(renderer);
  envMap.update(renderer, camera);

  renderer.render(scene, camera);
}
