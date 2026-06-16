# Wahyudi Alfurqon — Portfolio Website

This is a modern, high-performance, bilingual portfolio website converted from a static HTML design into a production-ready **Next.js 15** application with **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4 & PostCSS
- **Animations**: Framer Motion
- **Internationalization**: next-intl (Bilingual support for English `/en` and Indonesian `/id`)
- **Icons**: Lucide React & inline custom SVGs
- **Language**: TypeScript (Strict mode)

## Architecture
```
src/
├── app/            # Next.js App Router (localized routes)
├── components/     # Reusable layout, sections, and UI components
├── data/           # Data-driven projects system
├── i18n/           # Translation and localized routing configurations
├── messages/       # Translation dictionaries (en.json, id.json)
└── types/          # TypeScript custom type definitions
```

## Features
1. **Dynamic Localization**: Full bilingual toggle between English and Indonesian without reloading the page.
2. **Dynamic Project Slides**: Slide carousel and filter tags (All, Web, Mobile, AI) backed by a clean data model.
3. **Dynamic CV Printer**: High-fidelity candidates sheet modal designed with print-media styles for direct PDF export or print.
4. **Cinematic Text Animations**: Word-by-word blur focus entrances, rotating tags, and scroll reveal wrappers using Framer Motion.
5. **SEO & Performance**: Integrated JSON-LD structured data, dynamic OpenGraph metadata, Twitter cards, and sitemaps.

## Getting Started

### Installation
Install the project dependencies:
```bash
npm install
```

### Development Server
Run the local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build Production Bundle
Build and compile optimization paths:
```bash
npm run build
```
Start the production server:
```bash
npm run start
```
