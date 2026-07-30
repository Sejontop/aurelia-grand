```md
# Aurelia Grand

Aurelia Grand is a premium luxury hotel landing page built as a modern single-page application using Next.js and a component-driven architecture.

The website is designed to deliver a high-end hospitality experience through cinematic visuals, elegant typography, smooth animations, and a responsive layout. It features a luxury hero section with a static image fallback and background video experience, along with dedicated sections for rooms, amenities, dining, spa, gallery, testimonials, and booking.

---

## Live Demo

🔗 **Live Website:**  
(Add Vercel deployment link here)

# Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

---

# Features

## Cinematic Hero Section

- Full-screen luxury hotel hero section
- Background image with video transition support
- Static image fallback for users with slower internet connections
- Background video features:
  - autoplay
  - muted playback
  - infinite looping
  - smooth fade transition
- Scroll-based parallax effects using Framer Motion

---

## Responsive Navigation

- Desktop and mobile responsive navbar
- Smooth scrolling between sections
- Mobile-friendly layout

---

## Hotel Experience Sections

The landing page includes:

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

Each section is isolated into a separate reusable component for easier maintenance.

---

## Room Showcase

- Dynamic room rendering using structured data
- Reusable `RoomCard` component
- Horizontal room carousel
- Hover animations
- Responsive layouts

---

## Animation System

Animations are handled using Framer Motion.

Reusable animation variants are stored separately:

```

components/animations/variants.ts

```

Benefits:

- Consistent animations across the website
- Cleaner components
- Easier future customization

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

### `page.tsx`

The main landing page composition file.

It combines all major sections:

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

# Components Architecture

The project follows a modular component structure.

## Layout Components

Location:

```

components/layout

```

Contains global reusable components:

### Navbar.tsx

Handles website navigation and section links.

### Footer.tsx

Contains the footer layout and supporting information.

---

## Section Components

Location:

```

components/sections

```

Each major website area has its own component.

Examples:

```

Hero.tsx
Rooms.tsx
Dining.tsx
Spa.tsx
Booking.tsx

```

Advantages:

- Easier maintenance
- Better separation of concerns
- Components can be updated independently

---

## Card Components

Location:

```

components/cards

```

Reusable content-based components.

Example:

```

RoomCard.tsx

```

Used to display:

- Room category
- Description
- Pricing
- Images
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

These components provide consistent UI patterns throughout the application.

---

# Data Management

Location:

```

src/data

```

Static content is separated from UI components.

## rooms.ts

Contains hotel room information:

- Room name
- Category
- Description
- Pricing
- Images

## gallery.ts

Contains gallery images.

## testimonials.ts

Contains guest reviews and testimonials.

This structure keeps components clean and allows future migration to:

- CMS
- Database
- External API

---

# Styling

The project uses:

## Tailwind CSS v4

Benefits:

- Utility-first styling
- Responsive design
- Consistent spacing and colors
- Faster UI development

Global styles are located at:

```

src/app/globals.css

````

---

# Running Locally

Clone the repository:

```bash
git clone <repository-url>
````

Navigate to the project:

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

Create an optimized build:

```bash
npm run build
```

Run production server:

```bash
npm run start
```

---

# Deployment

The project is optimized for deployment on Vercel.

Deployment process:

1. Push repository to GitHub
2. Import repository into Vercel
3. Configure required settings
4. Deploy

---

# Future Improvements

Possible future enhancements:

* Connect booking system with backend services
* Integrate CMS for hotel content management
* Add room availability checking
* Add online reservation workflow
* Add multilingual support
* Optimize all media assets further
* Add real hotel API integrations
* Add customer authentication

---

# Developer Notes

* Built using Next.js App Router architecture.
* Components are modular and reusable.
* Data is separated from UI logic.
* Animations are centralized using Framer Motion variants.
* Responsive design is implemented using Tailwind CSS breakpoints.
* The hero section includes performance considerations through image fallback and optimized video loading.

---

# Author

Frontend Development Intern

Built with:

* Next.js
* TypeScript
* Tailwind CSS
* shadcn/ui
* Framer Motion

```
```
