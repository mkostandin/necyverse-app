## Maps JavaScript API

The Google Maps JavaScript API was used and advanced markers with WebGL 3D maps were used along with three.js for 3D animation.

### Info Windows
Advanced arkers were set up to have HTML. A combination of Cloudinary and AWS Cloud Front were used to deliver images and video fast to the user with minimal load times.

<p align="center">
<img src="https://github.com/mkostandin/mkostandin/blob/main/info-windows.gif" style="display:block;margin:auto;" alt="Info Windows" width="50%"/>
</p>
``` javascript
  const dfcContentString =
    "<style>" +
    "body-content { font-size: 5rem; }" +
    "#firstHeading { font-size: 1.2rem; margin: 0; }" +
    "#bodyContent img { margin-top: 8px; }" +
    "</style>" +
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h4 id="firstHeading" class="firstHeading">The New Hampshire<br>Bid Committee<br>for NECYPAA 34</h4>' +
    '<div id="bodyContent">' +
    '<a href="https://res.cloudinary.com/dftbijomi/video/upload/c_scale,w_720/v1686837841/vader-vid-flyer-giphy-prep_ykkkg9.mp4">' +
    '<img src="https://res.cloudinary.com/dftbijomi/image/upload/v1686853887/gif-try-2_edgh4v.gif" width="190px" height="100%" crossorigin>'+
    '</a>' +
    "<h4><b>Derry Friendship Center</b>,<br>" +
    '<a href="https://www.google.com/maps/place/Derry+Friendship+Center/@42.8807362,-71.3275861,17z/data=!3m1!4b1!4m6!3m5!1s0x89e2530573ac46e5:0x5060494e2ba82b33!8m2!3d42.8807362!4d-71.3253974!16s%2Fg%2F1z449zjmk">6 Railroad Ave, Derry NH</a></h4>' +
    "<h4>Last Saturday of the Month<br>6:00pm</h4>" +
    "<p>NECYPAA hasn't been in NH for 7 years! Come help us bring New England YPAA together and get the conference" +
    " back in the Granite State.</p>" +
    "</div>" +
    "</div>";



  const dfcInfowindow = new google.maps.InfoWindow({
    content: dfcContentString,
    maxWidth: 226,
    ariaLabel: "NH Bid",
  });

  const dfc = new google.maps.Marker({
    position: derryFCLatLng,
    map,
    label: "NH",
    title: "NH Bid Committee",
  });

  dfc.addListener("click", () => {
    dfcInfowindow.open({
      anchor: dfc,
      map,
    });
  });
```

## 3D Animation

## EJS Templates

## Express.js

## Workbox and Service Worker for PWA - Stale Until Revalidation
