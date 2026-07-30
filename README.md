# Aurelia Grand

Aurelia Grand is a luxury hotel single-page landing website built with modern frontend technologies. The project focuses on creating a premium hospitality experience through cinematic visuals, elegant UI design, smooth animations, and a responsive component-driven architecture.

The website showcases a fictional luxury hotel experience including rooms, amenities, dining, spa services, gallery, testimonials, and booking sections.

---

## Live Demo

🔗 **Live Website:**  
[(Vercel Link)](https://aurelia-grand-gamma.vercel.app/)

# Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Library:** shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

---

# Features

## Cinematic Hero Section

- Full-screen luxury hotel hero experience
- Background image with video transition support
- Static image fallback for slower internet connections
- Optimized background video:
  - autoplay
  - muted
  - loop
  - plays inline
- Smooth fade transition between image and video
- Scroll-based parallax effects using Framer Motion

---

## Responsive Design

- Fully responsive layout
- Desktop and mobile navigation
- Adaptive typography and spacing
- Tailwind CSS breakpoint system

---

## Hotel Showcase Sections

The landing page includes:

- Hero section
- Story section
- Rooms section
- Amenities section
- Dining section
- Spa section
- Gallery section
- Testimonials section
- Booking section
- Footer

Each section is developed as an independent reusable component.

---

## Room Showcase

- Dynamic room rendering using structured data
- Reusable RoomCard component
- Horizontal scrolling room carousel
- Hover animations
- Responsive card layouts

---

## Animation System

Animations are handled using Framer Motion.

Reusable animation variants are stored separately:

```
components/animations/variants.ts
```

This provides:

- Consistent animations
- Cleaner component code
- Easier animation updates

---

# Project Structure

```
src
│
├── app
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components
│   │
│   ├── animations
│   │   └── variants.ts
│   │
│   ├── cards
│   │   └── RoomCard.tsx
│   │
│   ├── layout
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   │
│   ├── sections
│   │   ├── Amenities.tsx
│   │   ├── Booking.tsx
│   │   ├── Dining.tsx
│   │   ├── Gallery.tsx
│   │   ├── Hero.tsx
│   │   ├── Rooms.tsx
│   │   ├── Spa.tsx
│   │   ├── Story.tsx
│   │   └── Testimonials.tsx
│   │
│   └── ui
│       ├── accordion.tsx
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── dropdown-menu.tsx
│       ├── input.tsx
│       ├── separator.tsx
│       ├── sheet.tsx
│       └── textarea.tsx
│
├── data
│   ├── gallery.ts
│   ├── rooms.ts
│   └── testimonials.ts
│
└── lib
    └── utils.ts
```

---

# Architecture Overview

## App Directory

Location:

```
src/app
```

Contains the main Next.js application structure.

### page.tsx

The main landing page composition file.

It combines all major website sections:

- Navbar
- Hero
- Story
- Rooms
- Amenities
- Dining
- Spa
- Gallery
- Testimonials
- Booking
- Footer

---

# Component Structure

The project follows a modular component architecture.

## Layout Components

Location:

```
components/layout
```

Contains reusable global components.

### Navbar.tsx

Handles:

- Navigation links
- Section scrolling
- Responsive menu behavior

### Footer.tsx

Contains:

- Footer layout
- Supporting information
- Brand details

---

## Section Components

Location:

```
components/sections
```

Each major website section has its own component.

Examples:

```
Hero.tsx
Rooms.tsx
Dining.tsx
Spa.tsx
Booking.tsx
```

Benefits:

- Better maintainability
- Clear separation of concerns
- Easier future updates

---

## Card Components

Location:

```
components/cards
```

Reusable content components.

Example:

```
RoomCard.tsx
```

Used for displaying:

- Room image
- Room category
- Description
- Pricing
- Actions

---

## UI Components

Location:

```
components/ui
```

Contains reusable shadcn/ui components.

Examples:

- Button
- Card
- Dialog
- Input
- Dropdown
- Sheet

These components maintain consistent UI patterns throughout the application.

---

# Data Management

Location:

```
src/data
```

Static content is separated from UI components.

## rooms.ts

Stores:

- Room names
- Categories
- Descriptions
- Pricing
- Images

## gallery.ts

Stores gallery image information.

## testimonials.ts

Stores guest testimonials.

This structure keeps UI components clean and makes future integration with APIs or CMS platforms easier.

---

# Styling

The project uses:

## Tailwind CSS v4

Benefits:

- Utility-first styling
- Responsive design
- Consistent spacing system
- Faster UI development

Global styles:

```
src/app/globals.css
```

---

# Running Locally

Clone the repository:

```bash
git clone https://github.com/Sejontop/aurelia-grand.git
```

Navigate into the project:

```bash
cd aurelia-grand
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

# Production Build

Create an optimized production build:

```bash
npm run build
```

Run production server:

```bash
npm run start
```

---

# Deployment

The project is optimized for deployment using Vercel.

Deployment steps:

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Configure project settings.
4. Deploy.

---

# Future Improvements

Potential improvements:

- Connect booking section with backend services
- Add real reservation functionality
- Integrate CMS for hotel content management
- Add room availability system
- Add multilingual support
- Improve media optimization
- Integrate real hotel APIs
- Add authentication system

---

# Developer Notes

- Built using Next.js App Router architecture.
- Components are organized by responsibility.
- Data is separated from presentation logic.
- Animations are centralized using Framer Motion.
- Responsive design is implemented with Tailwind CSS.
- Hero media loading is optimized with image fallback support.

---

# Author
Sejal Dashora
Frontend Development Intern

Built with:

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion