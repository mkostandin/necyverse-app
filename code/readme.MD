## Maps JavaScript API

The Google Maps JavaScript API was used, and advanced markers with WebGL 3D maps were utilized along with three.js for 3D animation.

### Info Windows
Advanced Markers were set up with HTML info windows. A combination of Cloudinary and AWS Cloud Front delivered images and video quickly to the user with minimal load times.

<p align="center">
<img src="https://github.com/mkostandin/mkostandin/blob/main/info-windows.gif" style="display:block;margin:auto;" alt="Info Windows" width="50%"/>
</p>

## Animation
For the 3D animation when using the WebGL maps, Google recommended using Three.js, a JavaScript library for 3D animation.

Import Library from CDN
``` javascript
import {
  Easing,
  Tween,
  update,
} from "https://cdnjs.cloudflare.com/ajax/libs/tween.js/19.0.0/tween.esm.js";
```
Set up camera options and Tween
``` javascript
 const newCameraOptions = {
    tilt: 50,
  heading: 60,
  zoom: 12,
  center: nextEventTarget
  };

  // install Tweenjs with npm i @tweenjs/tween.js
  new Tween(newCameraOptions) // Create a new tween that modifies 'cameraOptions'.
  .to({ tilt: 65, heading: 10, zoom: 18 }, 800) // Move to destination in 15 second.
  .easing(Easing.Quadratic.Out) // Use an easing function to make the animation smooth.
  .onUpdate(() => {
    map.moveCamera(newCameraOptions);
  })
  .start(); // Start the tween immediately.

// Setup the animation loop.
function animate(time) {
  requestAnimationFrame(animate);
  update(time);
}
```
<p align="center">
<img src="https://github.com/mkostandin/mkostandin/blob/main/three-js.gif" style="display:block;margin:auto;" alt="three.js" width="50%"/>
</p>
## EJS Templates

## Express.js
Express.js was used for Routing and Templating. 

## Workbox and Service Worker for PWA - Stale Until Revalidation
