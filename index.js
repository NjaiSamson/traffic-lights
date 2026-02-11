const colors = ['red', 'yellow', 'green'];

function updateLights(active, seconds = null) {
  colors.forEach(color => {

    const colorIndicator = document.querySelector('.light.' + color);

    if (!colorIndicator) return;

    colorIndicator.textContent = (color === active && seconds !== null) ? seconds : '';
    colorIndicator.className = `light ${color}` + (color === active && seconds !== null ? ' timer-text' : '') + (color === 'yellow' && color === active && seconds !== null ? ' timer-yellow' : '');
    colorIndicator.style.opacity = color === active ? '1' : '0.4';
    colorIndicator.style.boxShadow = color === active ? `0 0 40px ${color}` : 'none';
  });
}

function showLight(color) {

  let seconds = 10, blink = false;

  const colorIndicator = document.querySelector('.light.' + color);

  updateLights(color, seconds);

  const interval = setInterval(() => {

    seconds--;
    updateLights(color, seconds >= 0 ? seconds : 0);

    if (seconds <= 3 && seconds > 0 && colorIndicator) {
      blink = !blink;
      colorIndicator.style.opacity = blink ? '0.3' : '1';
    } else if (colorIndicator) {
      colorIndicator.style.opacity = '1';
    }

    if (seconds < 0) {
      clearInterval(interval);
      if (colorIndicator) colorIndicator.style.opacity = '1';
      updateLights();
    }
  }, 1000);

  return new Promise(res => setTimeout(res, 11000));
}

async function trafficLight() {
  while (true) for (let color of colors) await showLight(color);
}

function redLight()    { updateLights('red', 0); }
function yellowLight() { updateLights('yellow', 0); }
function greenLight()  { updateLights('green', 0); }

trafficLight();