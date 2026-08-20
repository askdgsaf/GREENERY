# GREENERY

GREENERY is a static, multi-page eco-travel website focused on sustainable trekking, forest experiences, nature writing, and low-impact travel. The site combines destination pages, educational articles, a carbon footprint tool, and support pages into one shared visual system.

## Project Layout

```text
GREENERY/
|-- index.html
|-- aboutUs.html
|-- Discover.html
|-- forest.html
|-- articles.html
|-- article-1.html
|-- Article-2.html
|-- how-forest-breathe.html
|-- trail-waste-ethics.html
|-- leave-no-trace.html
|-- carbon-footprint.html
|-- carbon-footprint-calculate.html
|-- contact.html
|-- template.html
|-- style.css
|-- script.js
`-- IMAGES/
```

The `IMAGES/` folder is organized by topic, with separate subfolders for the homepage carousel, trail visuals, article graphics, forest bathing imagery, calculator artwork, dropdown images, and other page-specific assets.

## Shared Structure

Most pages follow the same layout pattern:

1. A top navigation bar with dropdown menus for trail, forest, article, and sustainability sections.
2. A calculator shortcut in the header that links directly to the carbon footprint tool.
3. A page-specific hero or content section that changes based on the topic.
4. A shared footer with newsletter signup, about text, quick links, and contact details.

This consistency keeps the site easy to navigate while allowing each page to focus on one topic.

## Page Guide

### `index.html`
Home page and main landing screen.

Features:
- Hero carousel with the main sustainability message.
- Story cards for mindful hiking, Leave No Trace behavior, and healing plants.
- Trail stewardship section highlighting eco-certified trails, tree planting, wildlife-safe travel, and zero-waste packing.
- Reflection section that reinforces responsible travel.
- Shared footer with newsletter signup and site links.

### `aboutUs.html`
About page describing the mission behind EcoTrails.

Features:
- Brand story and purpose statement.
- Core values around sustainability, education, community, and well-being.
- FAQ accordion covering forest bathing, sustainability support, Leave No Trace, the carbon calculator, and other experiences.

### `Discover.html`
Trail discovery page for the 5-day Poonhill trail.

Features:
- Trek summary with altitude, trip guide, best season, and accommodation details.
- Eco-friendly explanations for the route and local environment.
- Day-by-day itinerary with practical travel guidance.

### `forest.html`
Forest bathing experience page.

Features:
- Intro section explaining forest bathing.
- Benefits section covering stress reduction, clarity, immunity, and connection to nature.
- What-to-expect section for a guided session.
- Sustainability message connecting the experience to conservation.

### `articles.html`
Articles hub for guides and educational reads.

Features:
- Editorial intro titled "Explore Deeper."
- Article grid for deeper reading.
- Links to article detail pages about carbon capture and trail waste ethics.
- Shared subscription and footer layout.

### `article-1.html`
Article page about forest carbon capture.

Features:
- Explains how forests absorb and store carbon.
- Shows why forest protection matters for climate stability.
- Covers the impact of deforestation.
- Ends with actions readers can take.

### `Article-2.html`
Article page about trail waste ethics.

Features:
- Defines trail waste and why it is harmful.
- Gives practical guidance for human waste and food waste handling.
- Includes a waste-kit reminder and a "Pack It In, Pack It Out" message.

### `how-forest-breathe.html`
Alternate forest carbon article page.

Features:
- Large article hero with educational body content.
- Explains carbon capture in forests.
- Reinforces climate impact and visitor action points in a cleaner article layout.

### `trail-waste-ethics.html`
Alternate trail waste article page.

Features:
- Hero banner with article title and subtitle.
- Expanded trail waste guidance.
- Practical tips for hikers, including waste kits and disposal best practices.

### `leave-no-trace.html`
Leave No Trace guide page.

Features:
- Hero section introducing responsible travel principles.
- Carousel-style principle cards.
- Sustainable hiking gear tables with recommended swaps.
- Extra guidance for low-impact trekking habits.

### `carbon-footprint.html`
Carbon footprint overview page.

Features:
- Explains what a carbon footprint is.
- Promotes the calculator page.
- Lists offset ideas such as reforestation, renewable energy, clean cooking, agroforestry, and trail conservation.
- Breaks down common footprint sources like travel, food, home energy, consumption, and waste.

### `carbon-footprint-calculate.html`
Interactive carbon footprint calculator page.

Features:
- Tabbed calculator categories for transportation, food, accommodation, and water usage.
- Inputs for travel mode, diet type, nights stayed, showers, laundry, and similar metrics.
- Result panel for estimated emissions.
- Support-project section that connects results to sustainable actions.

### `contact.html`
Contact page for visitors.

Features:
- Contact details for address, phone, and email.
- Contact form for name, email, phone number, and message.
- Shared footer with brand and quick-link sections.

### `template.html`
Base page template.

Features:
- Shared header and footer scaffold.
- Useful starting point for new pages that should match the existing site style.

## Main Site Features

- Responsive multi-page structure with a consistent navigation system.
- Eco-tourism storytelling mixed with practical sustainability education.
- Article-driven content for users who want guides, principles, and environmental context.
- Carbon footprint awareness through both educational content and an interactive calculator.
- Reusable UI patterns such as hero banners, cards, FAQ accordions, dropdown menus, tables, and footer signup forms.

## File Roles

- `style.css` controls the layout, color system, typography, cards, forms, and page sections.
- `script.js` drives interactive behavior such as navigation dropdowns, search controls, carousels, FAQ accordions, and calculator behavior.
- `IMAGES/` stores all visual assets used by the pages.

## Running The Site

This is a static site, so there is no build step.

1. Open `index.html` directly in a browser, or
2. Use VS Code Live Server if you want local navigation and easier previewing.

## Summary

GREENERY is a lightweight sustainability-focused website that works as a travel and nature education platform, a content hub for articles, and a practical guide for responsible outdoor behavior.