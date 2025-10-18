# HubACP Marketing Website

![HubACP](https://img.shields.io/badge/HubACP-Marketing%20Website-8b5cf6?style=for-the-badge)
![Version](https://img.shields.io/badge/version-1.0.0-blue?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

> **Let ChatGPT Close the Deal** - The definitive API that empowers AI agents to go from conversation to conversion in your WooCommerce store.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [File Structure](#file-structure)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Design System](#design-system)
- [Sections Overview](#sections-overview)
- [Customization Guide](#customization-guide)
- [Deployment](#deployment)
- [Browser Support](#browser-support)
- [Performance](#performance)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

This is a complete, production-ready marketing website for **HubACP** (WooCommerce Agentic Commerce Protocol). The website is designed to showcase the plugin's capabilities, provide comprehensive documentation, and drive conversions through clear CTAs.

### Key Highlights

- ✅ **Single-page marketing site** with smooth scroll navigation
- ✅ **Complete documentation page** with sidebar navigation
- ✅ **Fully responsive** design (mobile-first approach)
- ✅ **Light theme** inspired by [mcpily](https://mcpily.com) design aesthetic
- ✅ **Production-ready** with no dependencies on frameworks
- ✅ **SEO optimized** with semantic HTML
- ✅ **Accessibility compliant** with ARIA attributes

## ✨ Features

### Homepage (index.html)

- **Hero Section** - Compelling headline with dual CTAs
- **Social Proof** - Company logos with animation
- **How It Works** - 3-step visual guide with autoplay video
- **Features Grid** - 6 key features with icons
- **Pricing Section** - Free and Pro plans with feature comparison
- **FAQ Accordion** - Collapsible questions with smooth animations
- **Mobile Menu** - Slide-in navigation with close button
- **Smooth Scrolling** - Header-aware scroll behavior
- **Scroll Animations** - Intersection Observer animations

### Documentation Page (docs.html)

- **Sticky Sidebar** - Quick navigation between sections
- **API Reference** - Complete endpoint documentation
- **Code Examples** - JavaScript and Python samples
- **Authentication Guide** - HMAC signature examples
- **Webhooks Documentation** - Event handling and verification
- **Troubleshooting Guide** - Common issues and solutions
- **FAQ Section** - Frequently asked questions
- **Support Resources** - Email, forum, and GitHub links

## 📁 File Structure

```
website/
├── index.html          # Main marketing page
├── docs.html           # Documentation page
├── style.css           # Main stylesheet (shared)
├── docs.css            # Documentation-specific styles
├── script.js           # Interactive functionality
├── instruction.md      # Original project instructions
└── README.md           # This file
```

### File Descriptions

| File | Size | Purpose |
|------|------|---------|
| **index.html** | ~18 KB | Single-page marketing website with all sections |
| **docs.html** | ~62 KB | Complete API documentation and developer guide |
| **style.css** | ~30 KB | Global styles, components, responsive design |
| **docs.css** | ~12 KB | Documentation-specific layouts and components |
| **script.js** | ~12 KB | Mobile menu, FAQ, smooth scroll, animations |

## 🛠 Technology Stack

### Core Technologies

- **HTML5** - Semantic markup with accessibility features
- **CSS3** - Modern features (Grid, Flexbox, Custom Properties)
- **Vanilla JavaScript** - No frameworks or dependencies

### CSS Features

- **OKLCH Color Space** - Perceptually uniform colors from mcpily
- **CSS Custom Properties** - Theme variables for easy customization
- **CSS Grid & Flexbox** - Modern layout techniques
- **Media Queries** - Responsive breakpoints (640px, 768px, 1024px)
- **Smooth Transitions** - CSS animations with cubic-bezier easing

### JavaScript Features

- **IIFE Pattern** - Encapsulated code without global pollution
- **Intersection Observer API** - Performant scroll animations
- **Event Delegation** - Efficient event handling
- **Debounce Utility** - Optimized scroll/resize handlers
- **Focus Management** - Keyboard navigation support

## 🚀 Getting Started

### Option 1: Direct File Access

Simply open `index.html` in a web browser:

```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

### Option 2: Local Development Server

Using Python:

```bash
# Python 3
python -m http.server 8000

# Then visit: http://localhost:8000
```

Using Node.js:

```bash
# Install http-server globally
npm install -g http-server

# Start server
http-server -p 8000

# Then visit: http://localhost:8000
```

Using PHP:

```bash
php -S localhost:8000
```

### Option 3: WordPress Integration

1. Copy the entire `website/` folder to your theme directory
2. Create a WordPress page template
3. Include the HTML content in the template
4. Enqueue the CSS and JS files using WordPress functions

## 🎨 Design System

### Color Palette (OKLCH)

The website uses mcpily's exact color palette in OKLCH color space:

```css
/* Light Theme (Default) */
--color-background: oklch(1 0 0);                    /* #FFFFFF */
--color-foreground: oklch(0.145 0 0);                /* #252525 */
--color-primary: oklch(0.574 0.197 254.49);          /* #8B5CF6 (Purple) */
--color-primary-hover: oklch(0.488 0.243 264.376);   /* #7C3AED */
--color-muted: oklch(0.97 0 0);                      /* #F7F7F7 */
--color-muted-foreground: oklch(0.556 0 0);          /* #8E8E8E */
--color-border: oklch(0.922 0 0);                    /* #EBEBEB */
--color-success: oklch(0.646 0.222 41.116);          /* #10B981 (Green) */
--color-warning: oklch(0.828 0.189 84.429);          /* #FBBF24 (Yellow) */
--color-error: oklch(0.577 0.245 27.325);            /* #EF4444 (Red) */
```

### Typography

```css
/* Font Families */
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;

/* Font Scale */
h1: 3.5rem (56px) - Hero titles
h2: 2.5rem (40px) - Section headers
h3: 1.75rem (28px) - Subsection headers
h4: 1.5rem (24px) - Card titles
body: 1rem (16px) - Base text
```

### Spacing System

Consistent spacing using multiples of 8px:

```css
--spacing-xs: 0.5rem;    /* 8px */
--spacing-sm: 1rem;      /* 16px */
--spacing-md: 1.5rem;    /* 24px */
--spacing-lg: 2rem;      /* 32px */
--spacing-xl: 3rem;      /* 48px */
--spacing-2xl: 4rem;     /* 64px */
--spacing-3xl: 6rem;     /* 96px */
--spacing-4xl: 8rem;     /* 128px */
```

### Border Radius

```css
--radius-sm: 0.375rem;   /* 6px */
--radius-md: 0.5rem;     /* 8px */
--radius-lg: 0.75rem;    /* 12px */
--radius-xl: 1rem;       /* 16px */
--radius-2xl: 1.5rem;    /* 24px */
--radius-full: 9999px;   /* Fully rounded */
```

### Breakpoints

```css
Mobile: < 640px
Tablet: 640px - 1023px
Desktop: ≥ 1024px

/* Specific breakpoints */
640px  - sm (small tablets)
768px  - md (tablets)
1024px - lg (desktops)
1280px - xl (large desktops)
```

## 📑 Sections Overview

### 1. Header & Navigation

**Desktop:**
- Logo (left)
- Navigation links (center): How It Works, Features, Pricing, Docs
- CTA buttons (right): "Download Free Version", "Get Pro"

**Mobile:**
- Logo (left)
- Hamburger menu (right)
- Slide-in overlay menu with navigation and CTAs

**Features:**
- Sticky positioning with backdrop blur
- Active link highlighting
- Smooth scroll to anchors
- Mobile menu with smooth animations

### 2. Hero Section

**Content:**
- Main headline: "Let ChatGPT Close the Deal."
- Subtitle explaining HubACP's value proposition
- Two CTA buttons: "Download Free Version" (primary), "Get Pro" (secondary)
- Social proof: "Trusted by 150+ companies • 98% success rate • 24-hour setup"

**Styling:**
- Gradient background overlay
- Centered content
- Large typography for impact
- Responsive button layout

### 3. Social Proof Section

**Content:**
- Headline: "The Engine Behind the Next Generation of Commerce"
- 6 company logos (placeholder names): AgentSell, BotCart, AI-Shop, CommerceAI, SmartBuy, AutoStore

**Features:**
- Responsive grid (2 cols mobile → 3 cols tablet → 6 cols desktop)
- Staggered animation on page load
- Hover opacity effects

### 4. How It Works Section

**Content:**
- Main headline: "From Install to Sale in 3 Simple Steps"
- 3 step cards with gradient icons:
  - **Step 1:** Install & Connect (shield icon)
  - **Step 2:** Discover in Chat (chat bubble icon)
  - **Step 3:** Convert & Sell (shopping cart icon)
- Video embed: YouTube autoplay demo video

**Features:**
- Responsive grid (1 col mobile → 3 cols desktop)
- Gradient icon backgrounds with shadow
- Step numbers in top-right corner
- 16:9 responsive video container
- Video autoplays muted with loop

**Video Settings:**
```html
?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID
```

### 5. Features Section

**Content:**
- Headline: "Built for Trust. Engineered for Growth."
- 6 feature cards:
  1. **Enterprise-Grade Security** - HMAC signatures, idempotency keys
  2. **Full Checkout Lifecycle API** - Complete sales engine
  3. **Intelligent Product Feed** - Cached, paginated API
  4. **Reliable Webhooks** - Real-time order events
  5. **Built-in Caching & Performance** - Fast API responses
  6. **Superior Developer Experience** - Clean architecture

**Features:**
- Icon + title + description layout
- Hover elevation effects
- Responsive grid (1 col → 2 cols → 3 cols)
- Scroll animations

### 6. Pricing Section

**Content:**
- Headline: "Simple, Transparent Pricing."
- 2 pricing cards:

**Free Plan:**
- $0
- HubACP Connect
- Product Feed API
- Community Support
- Button: "Download Free Version"

**Pro Plan (Most Popular):**
- $149/year
- Complete AI-powered commerce solution
- Everything in Free
- Full Checkout Lifecycle API
- Reliable Webhooks
- Unlimited Site Licenses
- Priority Support
- Button: "Get Pro"

**Features:**
- "Most Popular" badge on Pro plan
- Checkmark icons for features
- Hover animations
- Responsive grid (1 col mobile → 2 cols desktop)

### 7. FAQ Section

**Content:**
- Headline: "Frequently Asked Questions"
- 4 collapsible questions:
  1. Difference between Free and Pro
  2. License renewal policy
  3. Refund policy
  4. System requirements

**Features:**
- Accordion behavior (one open at a time)
- Smooth height animations
- Keyboard accessible (Enter/Space)
- Chevron icon rotation
- Focus states

### 8. Footer

**Content:**
- 4 columns:
  - **HubACP** - Logo and copyright
  - **Product** - Features, Pricing, Download
  - **Resources** - Documentation, Support, Blog
  - **Legal** - Terms, Privacy

**Features:**
- Responsive grid (1 col → 2 cols → 4 cols)
- Hover states on links
- Border top separator

## ⚙️ Customization Guide

### Changing Colors

Edit the CSS custom properties in `style.css`:

```css
:root {
  /* Primary color (buttons, links, accents) */
  --color-primary: oklch(0.574 0.197 254.49);

  /* Change to blue */
  --color-primary: oklch(0.574 0.197 220);

  /* Change to green */
  --color-primary: oklch(0.574 0.197 150);
}
```

### Updating Content

1. **Hero Section** - Edit lines 74-79 in `index.html`
2. **Features** - Edit lines 167-234 in `index.html`
3. **Pricing** - Edit lines 242-316 in `index.html`
4. **FAQ** - Edit lines 329-390 in `index.html`

### Adding/Removing Sections

To remove a section:

```html
<!-- Comment out the entire section -->
<!--
<section id="section-name" class="section-class">
  ...
</section>
-->
```

To add a section, follow this template:

```html
<section id="new-section" class="custom-class">
    <div class="container">
        <h2 class="section-title">Section Title</h2>
        <!-- Your content here -->
    </div>
</section>
```

### Changing Fonts

Update the Google Fonts link in the `<head>`:

```html
<!-- Current fonts -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">

<!-- Example: Change to Roboto -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">
```

Then update CSS variables:

```css
:root {
  --font-sans: 'Roboto', sans-serif;
}
```

### Modifying Animations

All animations use the Intersection Observer API in `script.js`:

```javascript
// Change animation threshold (when elements start animating)
const observerOptions = {
  threshold: 0.1,  // 10% visible → Change to 0.5 for 50%
  rootMargin: '0px 0px -50px 0px'  // Adjust trigger point
};

// Change animation duration and easing
entry.target.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
//                                           ↑ Change duration
```

### Button Styles

Three button styles are available:

```html
<!-- Primary (purple background) -->
<a href="#" class="btn-primary">Primary Button</a>

<!-- Secondary (white background, border) -->
<a href="#" class="btn-secondary">Secondary Button</a>

<!-- Outline (transparent background, border) -->
<a href="#" class="btn-outline">Outline Button</a>

<!-- Large size modifier -->
<a href="#" class="btn-primary btn-large">Large Primary</a>
```

## 🚢 Deployment

### Option 1: Static Hosting (Recommended)

Deploy to any static hosting service:

**Netlify:**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

**Vercel:**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

**GitHub Pages:**
1. Push to GitHub repository
2. Go to Settings → Pages
3. Select branch and `/root` folder
4. Save and wait for deployment

### Option 2: WordPress Integration

```php
<?php
/**
 * Template Name: HubACP Landing Page
 */

get_header();

// Include the HTML content
include get_template_directory() . '/hubacp/index.html';

get_footer();
?>
```

Enqueue styles and scripts:

```php
function hubacp_enqueue_assets() {
    wp_enqueue_style(
        'hubacp-style',
        get_template_directory_uri() . '/hubacp/style.css',
        array(),
        '1.0.0'
    );

    wp_enqueue_script(
        'hubacp-script',
        get_template_directory_uri() . '/hubacp/script.js',
        array(),
        '1.0.0',
        true
    );
}
add_action('wp_enqueue_scripts', 'hubacp_enqueue_assets');
```

### Option 3: CDN Deployment

Upload files to a CDN:

1. Upload to AWS S3 + CloudFront
2. Upload to Cloudflare Pages
3. Upload to DigitalOcean Spaces

## 🌐 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 90+ | ✅ Full |
| Firefox | 88+ | ✅ Full |
| Safari | 14+ | ✅ Full |
| Edge | 90+ | ✅ Full |
| Opera | 76+ | ✅ Full |
| Mobile Safari | iOS 14+ | ✅ Full |
| Chrome Mobile | Android 90+ | ✅ Full |

### Fallbacks

- CSS Grid → Flexbox for older browsers
- OKLCH colors → RGB fallbacks
- Intersection Observer → Polyfill available
- Backdrop filter → Solid background fallback

## ⚡ Performance

### Lighthouse Scores (Target)

- **Performance:** 95+
- **Accessibility:** 100
- **Best Practices:** 100
- **SEO:** 100

### Optimization Features

✅ **No Framework Overhead** - Pure HTML/CSS/JS (< 80 KB total)
✅ **Optimized Images** - Use WebP format with fallbacks
✅ **Lazy Loading** - Intersection Observer for animations
✅ **Critical CSS** - Above-the-fold styles inlined
✅ **Minification Ready** - Remove comments and whitespace
✅ **Efficient Animations** - Hardware-accelerated transforms
✅ **Debounced Events** - Scroll and resize handlers optimized

### Build Process (Optional)

For production, minify and optimize:

```bash
# Install build tools
npm install -g html-minifier clean-css-cli uglify-js

# Minify HTML
html-minifier --collapse-whitespace --remove-comments index.html -o index.min.html

# Minify CSS
cleancss -o style.min.css style.css

# Minify JavaScript
uglifyjs script.js -o script.min.js -c -m
```

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Coding Standards

- Use **2 spaces** for indentation (not tabs)
- Follow **BEM naming convention** for CSS classes
- Write **semantic HTML** with proper ARIA attributes
- Comment complex JavaScript functions
- Test on multiple browsers before submitting

## 📝 License

This project is licensed under the MIT License - see below for details.

```
MIT License

Copyright (c) 2025 HubACP

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 📞 Support

- **Website:** [https://hubacp.com](https://hubacp.com)
- **Documentation:** [docs.html](./docs.html)
- **GitHub Issues:** [Report a bug](https://github.com/yairbarak22/HubACP/issues)
- **Email:** support@hubacp.com

## 🙏 Acknowledgments

- **Design Inspiration:** [mcpily.com](https://mcpily.com)
- **Fonts:** [Google Fonts](https://fonts.google.com)
- **Icons:** SVG icons (inline)
- **Color System:** OKLCH color space

---

**Built with ❤️ by the HubACP Team**

🤖 *Generated with [Claude Code](https://claude.com/claude-code)*
