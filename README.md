# Wedding Invite Website

A beautiful, mobile-optimized wedding invitation website with an elegant 3D letter animation that opens to reveal the invitation.

## Features

- ✨ Sophisticated 3D letter animation with envelope opening
- 📱 Fully responsive design for all devices
- 🎨 Beautiful rustic earth tone color scheme
- ⚡ Smooth 3D transforms and realistic envelope flaps
- 📧 Interactive RSVP buttons with confirmation modals
- 🎯 Mobile-first design with touch-friendly interactions
- 🌐 Cross-platform compatibility (iOS, Android, Desktop)
- 💌 Realistic envelope with seal, flaps, and letter content

## Quick Start

1. **Open the website**: Simply open `index.html` in any modern web browser
2. **Watch the animation**: Click on the envelope or wait for auto-open
3. **Test on mobile**: Use your browser's developer tools to test mobile views
4. **Deploy**: Upload all files to any web hosting service

## Animation Sequence

The website features a sophisticated 3D letter animation:

1. **Initial State**: Envelope appears with couple names and "Tap to open" prompt
2. **Envelope Opening**: 
   - Seal rotates and scales
   - Top flap opens upward
   - Side flaps open outward
   - Letter content becomes visible
3. **3D Transformation**: 
   - Envelope rotates in 3D space
   - Background transitions to invitation theme
   - Main invitation content fades in
4. **Final State**: Full invitation with RSVP functionality

## Customization Guide

### Easy Text Updates

#### 1. Couple Names
Find and replace all instances of "Sarah & Michael" in `index.html`:
```html
<!-- Envelope address -->
<div class="address-line">From: Your Names Here</div>

<!-- Letter signature -->
<div class="couple-signature">Your Names Here</div>

<!-- Header -->
<h1 class="couple-names">Your Names Here</h1>
```

#### 2. Envelope Design
Customize the envelope appearance in `styles.css`:

**Envelope Colors:**
```css
.envelope-front {
    background: linear-gradient(135deg, #your-color-1 0%, #your-color-2 100%);
}
```

**Seal Design:**
```css
.seal-design {
    /* Change the emoji or use a custom image */
    content: "💌"; /* or "💍" or "🌹" */
}
```

#### 3. Letter Content
Update the letter text in `index.html`:
```html
<div class="letter-greeting">Dear Friends & Family,</div>
<div class="letter-body">
    <p>Your custom message here</p>
    <p>Another line of your message</p>
</div>
```

#### 4. Wedding Details
Update the following sections in `index.html`:

**Date and Time:**
```html
<p class="wedding-date">Your Wedding Date</p>
<p class="wedding-time">Your Wedding Time</p>
```

**Venue Information:**
```html
<p>The Rustic Barn</p>
<p>123 Country Lane</p>
<p>Willow Creek, CA 90210</p>
```

**RSVP Deadline:**
```html
<p>Please respond by August 15, 2024</p>
```

**Contact Information:**
```html
<p>Questions? Contact us at your.email@example.com</p>
```

### Using JavaScript for Dynamic Updates

You can also update content dynamically using the provided JavaScript functions:

```javascript
// Update couple names (updates envelope, letter, and header)
WeddingInvite.updateCoupleNames('Jane', 'John');

// Update wedding date (updates letter and header)
WeddingInvite.updateWeddingDate('December 25, 2024');

// Update venue
WeddingInvite.updateVenue('The Grand Hotel', '456 Main Street, City, State 12345');

// Restart the animation (useful for testing)
WeddingInvite.restartAnimation();
```

### Animation Customization

**Timing Adjustments:**
Edit the `config` object in `script.js`:
```javascript
const config = {
    autoOpenDelay: 5000, // Auto-open after 5 seconds
    animationDuration: 3000, // Total animation duration
    fadeInDuration: 1000   // Fade in duration
};
```

**Envelope Size:**
Adjust the envelope dimensions in `styles.css`:
```css
.letter-scene {
    width: 300px;  /* Change envelope width */
    height: 400px; /* Change envelope height */
}
```

### Color Scheme Customization

The website uses a rustic earth tone palette. To customize colors, edit `styles.css`:

**Main Colors:**
- Primary Brown: `#8b7355`
- Accent Brown: `#a67c52`
- Text Color: `#2c1810`
- Background: `#f4f1eb` to `#e8e0d1`
- Envelope: `#d4c4a8` to `#c4b498`

**To change colors, find these CSS variables and update them:**
```css
/* Example: Change to a different color scheme */
.envelope-front {
    background: linear-gradient(135deg, #your-color-1 0%, #your-color-2 100%);
}
```

### Font Customization

The website uses Google Fonts. To change fonts:

1. **Update the Google Fonts link** in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@400;700&display=swap" rel="stylesheet">
```

2. **Update font-family declarations** in `styles.css`:
```css
body {
    font-family: 'Your Font', serif;
}
```

## File Structure

```
wedding-invite/
├── index.html          # Main HTML file with letter structure
├── styles.css          # All styling including 3D animations
├── script.js           # Letter animation and interactions
└── README.md           # This file
```

## Browser Compatibility

- ✅ Chrome (recommended for best 3D performance)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

**Note**: 3D transforms work best in modern browsers. For older browsers, the animation will gracefully degrade to a simple fade transition.

## Performance Features

- 🚀 Lightweight (no external dependencies except Google Fonts)
- 📱 Optimized for mobile performance
- 🎯 Smooth 60fps 3D animations
- ⚡ Hardware-accelerated CSS transforms
- 💾 Efficient memory usage

## Adding Images

To add background images or decorative elements:

1. **Create an `images/` folder** in your project
2. **Add your images** to the folder
3. **Update CSS** to reference your images:

```css
.envelope-front {
    background-image: url('images/your-envelope-pattern.jpg');
    background-size: cover;
    background-position: center;
}
```

## Deployment Options

### Free Hosting Services

1. **GitHub Pages**
   - Upload files to a GitHub repository
   - Enable GitHub Pages in repository settings

2. **Netlify**
   - Drag and drop your folder to Netlify
   - Get a free custom domain

3. **Vercel**
   - Connect your GitHub repository
   - Automatic deployments

4. **Firebase Hosting**
   - Use Firebase CLI to deploy
   - Free hosting with CDN

## Customization Tips

### For Different Wedding Styles

**Rustic/Country:**
- Current design is perfect as-is
- Consider adding paper texture to envelope

**Elegant/Formal:**
- Change envelope to gold/silver colors
- Use more formal fonts
- Add embossed seal design

**Modern/Minimal:**
- Simplify envelope design
- Use sans-serif fonts
- Reduce animation complexity

**Romantic:**
- Add floral patterns to envelope
- Use softer color palettes
- Include romantic seal design

### Adding More Features

**Custom Seal Design:**
```css
.seal-design {
    background-image: url('images/custom-seal.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}
```

**Envelope Pattern:**
```css
.envelope-front {
    background-image: url('images/envelope-pattern.png');
    background-size: 200px;
    background-repeat: repeat;
}
```

**RSVP Form:**
- Add form fields for name, email, number of guests
- Connect to a form service like Formspree or Netlify Forms

**Photo Gallery:**
- Add a section with wedding photos
- Use a lightbox for image viewing

**Countdown Timer:**
- Add a countdown to the wedding date
- Display in the header section

**Map Integration:**
- Add Google Maps embed for venue location
- Include directions and parking information

## Troubleshooting

**Animation not working?**
- Ensure you're using a modern browser
- Check that CSS 3D transforms are supported
- Try refreshing the page

**Mobile performance issues?**
- Reduce animation complexity for older devices
- Adjust timing in the config object
- Test on actual mobile devices

**Customization not showing?**
- Clear browser cache
- Check for JavaScript errors in console
- Verify file paths are correct

## Support

This is a static website using only HTML, CSS, and JavaScript. No server setup required!

For questions or customizations, you can:
1. Edit the files directly
2. Use the provided JavaScript functions
3. Modify the CSS for styling changes
4. Adjust animation timing in the config object

## License

This project is free to use and modify for personal wedding invitations. 