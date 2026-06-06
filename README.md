# Sparkle Solitaires — Premium Corporate Website

A luxury, enterprise-grade corporate website for **Sparkle Solitaires** — an international diamond manufacturing, scanning, and global consultancy company. Built with a focus on premium UI/UX, editorial layouts, and high-end motion design inspired by global consulting firms and diamond industry leaders.

🔗 **Live Repo:** [github.com/naimish2464/sparkle-v2](https://github.com/naimish2464/sparkle-v2)

---

## Overview

This project transforms a standard corporate web presence into a **premium digital experience** that communicates trust, global capability, and professional excellence. Every section is designed with luxury brand principles — asymmetrical editorial layouts, refined typography, scroll-driven animations, and subtle ambient visuals.

**Client / Brand:** Sparkle Solitaires  
**Industry:** Natural & Lab-Grown Diamonds · Manufacturing · Global Consultancy  
**Global Presence:** India · Botswana · New York · Hong Kong · China

---

## Website Features

### Hero Section
- Full-screen cinematic background video with navy overlay
- Animated floating particles for a premium atmosphere
- Brand logo reveal with spring animation
- Scroll indicator and smooth anchor navigation

### About Section
- Editorial asymmetrical layout (45% image / 55% content)
- Parallax image scroll with scale transforms
- Staggered narrative text animations
- Trust indicators: 20+ years experience, global presence, advanced technology

### Services Section
- Premium carousel powered by **Embla Carousel**
- Auto-play with fade transitions
- Service slides covering:
  - **Galaxy™ Inclusion Scanning** — 0.01 ct to 100 ct rough scanning
  - **Contract Manufacturing** — rough to polished, GIA & IGI solutions
  - **Custom Jewelry Manufacturing** — rings, earrings, pendants, bracelets, watches
  - **Fancy Shapes** — specialized cutting expertise
- Split and fullscreen slide layouts with responsive imagery

### Global Consultancy Section
- Dark luxury editorial layout with animated world map background
- Interactive **3D globe** (Three.js / react-globe.gl)
- Scroll-linked parallax on globe and content
- Capability list with staggered reveal animations

### Contact Section
- Premium asymmetrical layout (40% content / 60% form)
- Floating-label form fields with focus glow and validation
- Success state animation on inquiry submission
- Single-row contact details: Location · Email · Phone · Global Presence
- Subtle world map, diamond geometry, and particle backgrounds

### Header & Footer
- Sticky navigation with smooth scroll anchors
- Responsive mobile menu
- Multi-column footer with brand identity, links, and social integration

### Additional Built Sections *(modular — ready to enable)*
- Manufacturing showcase
- Custom Jewelry gallery
- Galaxy™ Scanning Technology deep-dive
- Global Presence map
- Why Choose Us trust section

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | React 18 |
| **Build Tool** | Vite 6 |
| **Styling** | Tailwind CSS 4 |
| **Animations** | Motion (Framer Motion) |
| **UI Components** | Radix UI · shadcn/ui patterns |
| **Carousel** | Embla Carousel + Autoplay + Fade |
| **3D / Globe** | Three.js · react-globe.gl |
| **Icons** | Lucide React |
| **Typography** | Poppins (Google Fonts) |
| **Language** | TypeScript |

---

## Developer Skills Demonstrated

This project showcases end-to-end frontend expertise by **Naimish Patel** ([@naimish2464](https://github.com/naimish2464)):

### UI/UX Design
- Luxury corporate design language and editorial layouts
- Asymmetrical grid systems and premium whitespace
- Consistent typography scale and visual hierarchy
- Mobile-first responsive design with zero horizontal overflow

### Frontend Architecture
- Modular, section-based React component architecture
- Reusable UI primitives (Button, Input, Textarea, etc.)
- Clean separation of content, layout, and animation logic
- Performance-conscious asset and animation loading

### Motion & Interaction Design
- Scroll-triggered entrance animations with `useInView`
- Parallax effects via `useScroll` and `useTransform`
- Staggered text reveals with custom luxury easing curves
- Floating-label forms, hover states, and success micro-interactions

### Advanced Visuals
- 3D interactive globe integration
- Cinematic video hero backgrounds
- SVG world map and diamond-inspired geometric patterns
- Gradient mesh backgrounds and ambient particle systems

### Engineering Practices
- TypeScript for type-safe components and form handling
- Form validation with real-time error feedback
- Git version control and structured project organization
- Production build pipeline with Vite

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/naimish2464/sparkle-v2.git
cd sparkle-v2

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

The production build outputs to the `dist/` folder.

---

## Project Structure

```
sparkle-v2/
├── assests/                  # Images, videos, CSS assets
│   ├── services/             # Service slide imagery
│   └── css/                  # Legacy carousel styles
├── src/
│   ├── app/
│   │   ├── App.tsx           # Main page composition
│   │   └── components/
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Services.tsx
│   │       ├── GlobalConsultancy.tsx
│   │       ├── Contact.tsx
│   │       ├── Footer.tsx
│   │       ├── ConsultancyGlobe.tsx
│   │       └── ui/           # Reusable UI components
│   ├── imports/              # Video and media imports
│   └── styles/               # Global CSS, fonts, theme
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

---

## Active Page Sections

Currently enabled in `App.tsx`:

```
Header → Hero → About → Services → Global Consultancy → Contact → Footer
```

Additional sections can be enabled by uncommenting imports in `src/app/App.tsx`.

---

## Design Principles

- **No template layouts** — every section uses custom editorial design
- **No boxed card grids** — information presented with premium dividers and spacing
- **Luxury motion timing** — custom easing `[0.22, 1, 0.36, 1]` across all animations
- **Global brand feel** — dark navy palettes, warm off-white contact sections, refined contrast
- **Accessibility** — semantic HTML, focus states, reduced-motion-friendly structure

---

## Contact — Sparkle Solitaires

| | |
|---|---|
| **Address** | 2nd Floor, Wing A, Om Siya House, Katargam Road, Surat, Gujarat – 395004 |
| **Email** | sparklessolitaire@gmail.com · sparkle.solitaires@gmail.com |
| **Phone** | +1 551 359 1202 |

---

## License

This project is proprietary work developed for Sparkle Solitaires. All rights reserved.

---

## Author

**Naimish Patel**  
GitHub: [@naimish2464](https://github.com/naimish2464)  
Repository: [sparkle-v2](https://github.com/naimish2464/sparkle-v2)

*Senior UI/UX Designer · Creative Director · Frontend Architect*
