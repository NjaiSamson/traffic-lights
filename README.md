# Traffic Lights Simulator

An interactive, web-based traffic light simulator featuring automatic cycling, countdown timers, and manual control. Built with vanilla HTML, CSS, and JavaScript.

## Features

- **Automatic Cycling**: The traffic light automatically cycles through red → yellow → green in a continuous loop
- **Countdown Timer**: Each light displays a 10-second countdown timer when active
- **Visual Effects**: 
  - Active lights glow with a shadow effect
  - Blinking animation when the timer reaches 3 seconds or less
  - Smooth opacity transitions for inactive lights
- **Manual Control**: Click on any light (red, yellow, or green) to manually activate it
- **Responsive Design**: Adapts to different screen sizes using viewport-based units

## Project Structure

```
traffic_lights/
├── index.html      # Main HTML structure
├── index.js        # JavaScript logic for traffic light behavior
├── styles.css      # Styling and visual effects
└── README.md       # Project documentation
```

## How It Works

### Automatic Mode
The traffic light automatically cycles through the three colors:
1. **Red Light**: Active for 10 seconds with countdown
2. **Yellow Light**: Active for 10 seconds with countdown
3. **Green Light**: Active for 10 seconds with countdown
4. Repeats indefinitely

### Manual Mode
Click on any light to manually activate it:
- Click the red light → Activates red light (no timer)
- Click the yellow light → Activates yellow light (no timer)
- Click the green light → Activates green light (no timer)

**Note**: Manual activation interrupts the automatic cycle. The automatic cycle will resume after the manual light is deactivated.

### Visual Indicators
- **Active Light**: 
  - Full opacity (1.0)
  - Glowing box-shadow effect
  - Displays countdown timer (in automatic mode)
- **Inactive Lights**: 
  - Reduced opacity (0.4)
  - No shadow effect
- **Blinking Effect**: 
  - When timer ≤ 3 seconds, the active light blinks
  - Alternates between opacity 0.3 and 1.0

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies or build tools required

### Installation

1. Clone or download this repository:
   ```bash
   git clone https://github.com/NjaiSamson/traffic-lights.git
   cd traffic_lights
   ```

2. Open `index.html` in your web browser:
   - Double-click the file, or
   - Right-click → Open with → Your preferred browser, or
 

3. The traffic light will start automatically!

## Usage

### Automatic Operation
Simply open the page and watch the traffic light cycle through the colors automatically. Each light will display a countdown timer and blink when approaching zero.

### Manual Operation
Click on any colored light circle to manually activate it. This will:
- Turn off all other lights
- Activate the clicked light with full brightness
- Interrupt the automatic cycle

## Customization

### Changing Timer Duration
Edit `index.js` and modify the `seconds` variable in the `showLight()` function:
```javascript
let seconds = 10; // Change this value (in seconds)
```

### Changing Colors
Edit `styles.css` to modify the light colors:
- `.red`: Red light color
- `.yellow`: Yellow/amber light color  
- `.green`: Green light color

### Adjusting Blink Threshold
Modify the blink condition in `index.js`:
```javascript
if (seconds <= 3 && seconds > 0 && colorIndicator) {
    // Change '3' to your desired threshold
}
```

### Responsive Sizing
The project uses viewport-based units (`vw`, `vh`) for responsive design. Adjust these values in `styles.css`:
- `.traffic-light`: Main container size
- `.light`: Individual light size
- `.timer-text`: Timer font size

## Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Technical Details

### Technologies Used
- **HTML5**: Semantic structure
- **CSS3**: Styling, animations, and responsive design
- **JavaScript (ES6+)**: Logic, async/await, DOM manipulation

### Key Functions

- `updateLights(active, seconds)`: Updates the visual state of all lights
- `showLight(color)`: Activates a specific light with countdown timer
- `trafficLight()`: Main async function that cycles through colors automatically
- `redLight()`, `yellowLight()`, `greenLight()`: Manual activation handlers

### Performance
- Uses `setInterval` for countdown timers
- Efficient DOM queries with `querySelector`
- Smooth CSS transitions for visual effects

## Future Enhancements

Potential improvements for future versions:
- [ ] Sound effects for light changes
- [ ] Configurable cycle duration per light
- [ ] Multiple traffic lights on the same page
- [ ] Pedestrian crossing signal integration
- [ ] Dark/light theme toggle
- [ ] Pause/resume functionality
- [ ] Custom color themes

## License

This project is open source and available for educational and personal use.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to fork this project and submit pull requests.

## Author

Created as a web development project demonstrating interactive UI elements, timers, and visual effects.

---

**Enjoy your traffic light simulator!** 🚦

