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

## Express Routing and Templates
Express.js was used for Routing and Templating. Dynamic linking to events is being developed, and a dynamic route is created to view and share individual events using native device sharing. 

EJS was used for view templating. It allows the content for each page to be filled dynamically ex { key: value }.

``` javascript
const mainRoutes = require("./routes/main.routes");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
```

EJS Template
``` ejs
<%- include('includes/head', { pageTitle: 'NECYPAA | NH BID' }) %>
<script type="module" src="javascript/mainMaps.js"></script>
</head>
  <body>  
  <%- include('includes/navbar-header', { page: "necyverse" }) %>
  <div id="map" class="map"></div>
    
  </body>
<%- include('includes/footer') %>
```
To deep link and be used as a PWA on Google Play, the asset link file needs to be in .well-known. This proves ownership of the PWA, and it changes from a PWA to a TWA, a trusted web application, which is published to the store.
``` javascript
const serveIndex = require('serve-index');

const express = require("express");

app.use('/.well-known', express.static('.well-known'), serveIndex('.well-known'));
app.use(express.static("public"));
```
## Offline PWA/Service Worker

For the PWA service worker, the caching strategy chosen was StaleWhileRevalidate. The cached offline version will be used unless the server has something newer, and then the cache is updated. This allows for a snappy application that will just look at the server to see if the service worker version has changed.

A Worbox was used because it simplifies the generation of service workers and the implementation of caching strategies.
``` javascript
importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);

self.addEventListener('fetch', event => {
  if (event.request.url.endsWith('.png')) {
    const cacheFirst = new workbox.strategies.StaleWhileRevalidate();
    event.respondWith(cacheFirst.handle({request: event.request}));
  }
});
```
