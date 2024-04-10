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
