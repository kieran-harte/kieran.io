var canvas
var c
var mouseOld
var mouse
var mouseChange
var maxRadius
var minRadius
var sizeMax
var sizeMin
var circleCount
var speed
var colorArray
var mouseDown
var displaceDistance
var circlesArray

var randomOpacity = true

var oldCanvasHeight

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

function update_circle_count() {
  init()
}

function update_circle_opacity() {
  init()
}

function removeAllEventListeners() {
  window.removeEventListener('mousemove', event_mousemove)
  window.removeEventListener('touchmove', event_touchmove)
  window.removeEventListener('mousedown', event_mousedown)
  window.removeEventListener('touchstart', event_touchstart)
  window.removeEventListener('mouseup', event_mouseup)
  window.removeEventListener('touchend', event_touchend)
  canvas.removeEventListener('contextmenu', event_contextmenu)
  window.removeEventListener('resize', event_resize)
}

function allcanvas() {
  canvas = document.querySelector('canvas')

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  c = canvas.getContext('2d')

  mouseOld = {
    x: undefined,
    y: undefined,
  }

  mouse = {
    x: 0,
    y: 0,
  }

  mouseChange = {
    x: 0,
    y: 0,
  }

  maxRadius = 80
  minRadius = 50

  sizeMax = 16
  sizeMin = 4

  circleCount = 150
  speed = 6

  colorArray = ['rgba(0,0,0, 0.2)']

  circleColor = hexToRgb('#1f2b2d')

  randomOpacity = true

  responsive()

  window.addEventListener('mousemove', event_mousemove)
  window.addEventListener('touchmove', event_touchmove)
  window.addEventListener('mousedown', event_mousedown)
  window.addEventListener('touchstart', event_touchstart)
  window.addEventListener('mouseup', event_mouseup)
  window.addEventListener('touchend', event_touchend)
  canvas.addEventListener('contextmenu', event_contextmenu)
  window.addEventListener('resize', event_resize)

  displaceDistance = 1

  circlesArray = []

  for (var i = 0; i < 200; i++) {
    circlesArray.push(
      new Circle(Math.random() * innerWidth, Math.random() * innerHeight)
    )
  }

  init()
  animate()
}

setTimeout(() => {
  allcanvas()
}, 0)

var event_resize = function () {
  if (canvas.height == oldCanvasHeight && canvas.width == window.innerWidth) {
    return
  }
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  responsive()
  init()
}

var event_contextmenu = function () {
  event.preventDefault()
}

var event_touchend = function () {
  if (event.touches.length > 1) {
    for (var i = 0; i < circlesArray.length; i++) {
      circlesArray[i].mouseu = true
    }
  }
}

var event_mouseup = function () {
  mouseDown = false

  for (var i = 0; i < circlesArray.length; i++) {
    circlesArray[i].mouseu = true
  }
}

var event_touchstart = function () {
  if (event.touches.length > 1) {
    var xTotal = 0
    var yTotal = 0

    for (var i = 0; i < event.touches.length; i++) {
      xTotal += event.touches[i].clientX
      yTotal += event.touches[i].clientY
    }

    mouse.x = xTotal / event.touches.length
    mouse.y = yTotal / event.touches.length

    if (typeof mouseOld.x === 'undefined') {
      // init mouseOld
      mouseOld.x = mouse.x
      mouseOld.y = mouse.y
    } else {
      // calc mouseChange
      mouseChange.x = mouse.x - mouseOld.x
      mouseChange.y = mouse.y - mouseOld.y
    }

    // set old mouse pos to the new mouse pos as calcs have been done
    mouseOld.x = mouse.x
    mouseOld.y = mouse.y

    mouseDown = true

    for (var i = 0; i < circlesArray.length; i++) {
      circlesArray[i].mousedwn = true
    }
  }
}

var event_mousedown = function () {
  mouseDown = true

  for (var i = 0; i < circlesArray.length; i++) {
    circlesArray[i].mousedwn = true
  }
}

var event_touchmove = function () {
  var xTotal = 0
  var yTotal = 0

  for (var i = 0; i < event.touches.length; i++) {
    xTotal += event.touches[i].clientX
    yTotal += event.touches[i].clientY
  }

  mouse.x = xTotal / event.touches.length
  mouse.y = yTotal / event.touches.length

  if (typeof mouseOld.x === 'undefined') {
    // init mouseOld
    mouseOld.x = mouse.x
    mouseOld.y = mouse.y
  } else {
    // calc mouseChange
    mouseChange.x = mouse.x - mouseOld.x
    mouseChange.y = mouse.y - mouseOld.y
  }

  // set old mouse pos to the new mouse pos as calcs have been done
  mouseOld.x = mouse.x
  mouseOld.y = mouse.y
}

var event_mousemove = function (event) {
  mouse.x = event.x
  mouse.y = event.y

  if (typeof mouseOld.x === 'undefined') {
    // init mouseOld
    mouseOld.x = mouse.x
    mouseOld.y = mouse.y
  } else {
    // calc mouseChange
    mouseChange.x = mouse.x - mouseOld.x
    mouseChange.y = mouse.y - mouseOld.y
  }

  // set old mouse pos to the new mouse pos as calcs have been done
  mouseOld.x = mouse.x
  mouseOld.y = mouse.y
}

function responsive() {
  // Responsive
  if (innerWidth < 700) {
    sizeMax = innerWidth / 60
    sizeMin = innerWidth / 200
  } else if (innerWidth > 1920) {
    sizeMax = 1920 / 100
    sizeMin = 1920 / 500
  } else {
    sizeMax = innerWidth / 150
    sizeMin = innerWidth / 400
  }
}

function init() {
  // Save canvas height to fix resizing / URL bar issue on mobile
  oldCanvasHeight = canvas.height

  circlesArray = []

  for (var i = 0; i < circleCount; i++) {
    circlesArray.push(
      new Circle(Math.random() * innerWidth, Math.random() * innerHeight)
    )
  }
}

function Circle(x, y) {
  speed = 2
  this.x = x
  this.y = y
  this.dx = (Math.random() * 0.2 - 0.1) * speed
  this.dy = (Math.random() * 0.2 - 0.1) * speed
  this.originalDx = this.dx
  this.originalDy = this.dy

  this.bounceFactor = 1

  this.mousedwn = false
  this.mouseu = false

  this.ddx = 0
  this.ddy = 0

  this.radius = 2 * Math.random() * (sizeMax - sizeMin) + sizeMin
  this.originalRadius = this.radius

  var opacity = Math.random() / 2 + 0.1

  if (randomOpacity) {
    this.color = 'rgba(0,0,0,' + opacity + ')'
  } else {
    this.color = 'rgba(0,0,0,1)'
  }

  this.enteredScreen = false

  this.draw = function () {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
  }

  this.update = function () {
    var mouseDistance = {
      x: Math.abs(mouse.x - this.x),
      y: Math.abs(mouse.y - this.y),
      p: Math.sqrt(
        Math.abs(mouse.x - this.x) * Math.abs(mouse.x - this.x) +
          Math.abs(mouse.y - this.y) * Math.abs(mouse.y - this.y)
      ),
    }

    this.ddx +=
      mouseChange.x / ((mouseDistance.p * mouseDistance.p) / 40 + 100) / 0.1
    this.ddy +=
      mouseChange.y / ((mouseDistance.p * mouseDistance.p) / 40 + 100) / 0.1

    if (mouseDown) {
      this.ddx = (mouse.x + Math.random() * 100 - 50 - this.x) / 5
      this.ddy = (mouse.y + Math.random() * 100 - 50 - this.y) / 5
      this.dx = 0
      this.dy = 0
    } else {
      this.dx = this.originalDx
      this.dy = this.originalDy
    }

    if (this.mouseu) {
      this.ddx += (Math.random() * 2 - 1) * 10
      this.ddy += (Math.random() * 2 - 1) * 10
      this.mouseu = false
    }

    if (this.enteredScreen) {
      if (this.y - this.radius < 0) {
        this.ddy = Math.abs(this.ddy) + this.bounceFactor
      } else if (this.y + this.radius > innerHeight) {
        this.ddy = -Math.abs(this.ddy) - this.bounceFactor
      }

      if (this.x - this.radius < 0) {
        this.ddx = Math.abs(this.ddx) + this.bounceFactor
      } else if (this.x + this.radius > innerWidth) {
        this.ddx = -Math.abs(this.ddx) - this.bounceFactor
      }
    } else {
      if (
        this.y + this.radius >= 0 &&
        this.y + this.radius <= innerHeight &&
        this.x + this.radius >= 0 &&
        this.x + this.radius <= innerWidth
      ) {
        this.enteredScreen = true
      }
    }

    // update x value
    this.x += this.dx + this.ddx

    // update y value
    this.y += this.dy + this.ddy

    this.ddx /= 1.02
    this.ddy /= 1.02

    this.draw()
  }
}

function animate() {
  c.clearRect(0, 0, innerWidth, innerHeight)

  // Create gradient
  var grd = c.createLinearGradient(0.0, 0.0, innerWidth, innerHeight)

  // // Add colors
  grd.addColorStop(0.0, 'rgba(0, 51, 62, 1.000)')
  grd.addColorStop(1.0, 'rgba(85, 145, 136, 1.000)')

  // Fill with gradient
  c.fillStyle = grd
  c.fillRect(0, 0, innerWidth, innerHeight)

  for (var i = 0; i < circlesArray.length; i++) {
    circlesArray[i].update()
  }

  requestAnimationFrame(animate)

  mouseChange.x = 0
  mouseChange.y = 0
}
