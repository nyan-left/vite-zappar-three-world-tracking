/* eslint-disable @typescript-eslint/no-floating-promises */
import * as THREE from 'three';
import * as ZapparThree from '@zappar/zappar-threejs';
import './style.css';

const renderer = new THREE.WebGLRenderer({antialias: true});

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
});

renderer.setAnimationLoop(render);

const camera = new ZapparThree.Camera();
camera.poseMode = ZapparThree.CameraPoseMode.AnchorOrigin;

ZapparThree.glContextSet(renderer.getContext());

const scene = new THREE.Scene();
scene.background = camera.backgroundTexture;

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

const box = new THREE.Mesh(
  new THREE.BoxGeometry(),
  new THREE.MeshBasicMaterial(),
);

box.scale.setScalar(0.05);
box.position.y = box.scale.y / 2;

trackerGroup.add(box);

const trackerInitializing = () =>
  worldTracker.quality ===
  ZapparThree.WorldTrackerQuality.WORLD_TRACKER_QUALITY_INITIALIZING;

function render() {
  if (trackerInitializing()) ui.update();
  else ui.hide();

  camera.updateFrame(renderer);
  featurepoints.update(renderer);

  renderer.render(scene, camera);
}
