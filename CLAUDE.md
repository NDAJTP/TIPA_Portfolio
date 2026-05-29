# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This is a static website with no build process required:

**Viewing the Site**
- Open `index.html` in any web browser to view the portfolio
- No development server needed - the site uses only client-side technologies

**Making Changes**
- Edit `index.html` to modify content and structure
- Edit `style.css` to change styling and appearance
- Edit `script.js` to modify interactive behaviors (mobile menu, active nav links, typing effect)

**Testing Changes**
- Save changes and refresh the browser to see updates
- For responsive testing, use browser dev tools to simulate different screen sizes
- The site includes media queries for mobile (< 995px), tablet (< 895px), and small mobile (< 600px) views

## Code Architecture

### File Structure
- `index.html` - Main HTML structure with semantic sections
- `style.css` - All styling including responsive design
- `script.js` - Client-side interactivity

### Key Components

**HTML Structure (index.html)**
- Fixed header with logo and navigation menu
- Home section with profile image, greeting, and typing effect
- Skills section showcasing abilities in photography, writing, music, web design, networking, communication
- Projects section featuring creative projects with images and descriptions
- Education section with timeline showing academic progression
- Social media links in footer

**CSS Architecture (style.css)**
- CSS variables for consistent theming (colors, fonts)
- Mobile-first responsive design with breakpoints at 995px, 895px, and 600px
- Fixed header with blur effect on scroll
- Smooth scrolling behavior
- Hover animations and transitions throughout
- Dark theme with accent colors

**JavaScript Functionality (script.js)**
- Mobile menu toggle (hamburger icon)
- Active navigation link highlighting on scroll
- Typing effect for job titles in hero section
- DOMContentLoaded not needed as script is placed at body end

### Design Patterns
- Semantic HTML5 structure with clear sectioning
- CSS custom properties for maintainable theming
- Modular JavaScript with separate functionality blocks
- Responsive design using media queries
- Accessible attributes (aria-labels) for screen readers

### Dependencies
- Font Awesome 6.5.2 (via CDN) for icons
- Google Fonts: Poppins (via CDN)
- No local dependencies or package managers required

## Common Tasks

**Updating Content**
- Modify text in index.html sections
- Update images by replacing URLs in src attributes
- Add/remove navigation links in header and update corresponding sections

**Styling Changes**
- Adjust CSS variables in :root for color scheme changes
- Modify typography by adjusting font-sizes and weights
- Update spacing and layout properties in relevant sections
- Adjust responsive breakpoints if needed

**Behavior Modifications**
- Update jobTitles array in script.js for different typing effect text
- Adjust timing values in typing/delete functions
- Modify mobile menu breakpoint in CSS
- Change animation timing or effects in CSS transitions

## Best Practices
- Keep external resources (CDN links) updated for security
- Maintain semantic HTML for accessibility and SEO
- Use CSS variables for easy theme modifications
- Keep JavaScript functions modular and well-commented
- Test responsiveness across device sizes
- Optimize images for web use before updating