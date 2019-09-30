// jshint esversion:6

// Define GPU
const gpu = new GPU();
// const gpu = new GPU({mode: 'cpu'});

// map_range function from stackoverflow https://stackoverflow.com/a/5650012/6912572
function map_range(value, low1, high1, low2, high2) {
  return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}
gpu.addFunction(map_range);

var size = [1024, 768];
var coords = [0.34526854219948844, -0.08028600612870274];

// Change coordinates when moving mouse
document.onmousemove = function(event) {
  coords[0] = map_range(event.clientX, 0, size[0], 0.35, 0.38);
  coords[1] = map_range(event.clientY, 0, size[1], 0.32, 0.38);
  // Update canvas
  requestAnimationFrame(render);
};

// Zoom using mouse scroll wheel
let zoom = 1.15;
let zoomRate = 0.075;
window.addEventListener('wheel', function(e){
	if (e.deltaY < 0) {
		zoom += zoomRate;
	} else {
		zoom = zoom <= 0.7 ? 0.7 : zoom - zoomRate;
	}
	window.requestAnimationFrame(render);
	console.log(zoom);
});


function render() {
  // Kernel for generating canvas
  const kernel = gpu.createKernel(function(size, zoom, coords) {
      // Fractal Parameters
      let real = coords[0];
      let imaginary = coords[1];
      // let real = -0.4125492029;
      // let imaginary = -0.581;
      let maxIterations = 260;
      let scale = zoom;
      let height = size[1];
      let width = size[0];
      let ratio_x = 1 / scale;
      let ratio_y = (height / width) / scale;
      let t_r = 0;
      let t_i = 0;
      let i = 0;

      // Adjust zoom function
      scale = Math.round(Math.pow(scale, 4) * 10) / 10;

      let x = this.thread.x;
      x /= width / ratio_x;
      x *= 2;
      x -= 1 * ratio_x;
      x /= scale;

      let y = this.thread.y;
      y /= height / ratio_y;
      y *= 2;
      y -= 1 * ratio_y;
      y /= scale;

      i = 1;
      while (i < maxIterations && (x * x) + (y * y) < 4) {

        t_r = (x * x) - (y * y) + real;
        t_i = 2 * x * y + imaginary;
        x = t_r;
        y = t_i;

        i++;
      }

      // color the pixel
      i /= maxIterations;

      this.color(i, i, i, 1);
    })
    .setOutput(size)
    .setGraphical(true)
    .setOptimizeFloatMemory(true)
    .setLoopMaxIterations(1000);

  // Run kernel and show resulting canvas
  let k = kernel(size, zoom, coords);
  $('body').append(kernel.canvas);

}

// Render first frame
render();
