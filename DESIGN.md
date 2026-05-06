---
version: alpha
name: KampungSG Route Rebuild
description: React/Vite Singapore property management and market intelligence showcase generated from crawled KampungSG pages.
colors:
  ink: "#17201c"
  muted: "#5f6b66"
  line: "#dfe5e1"
  paper: "#ffffff"
  mist: "#f6f8f6"
  green: "#176b4d"
  blue: "#2459d6"
  coral: "#d95c3b"
  yellow: "#e4b836"
typography:
  display:
    fontFamily: Fraunces
    fontSize: 76px
    fontWeight: 750
    lineHeight: 0.96
    letterSpacing: "0"
  heading:
    fontFamily: Manrope
    fontSize: 34px
    fontWeight: 900
    lineHeight: 1.08
    letterSpacing: "0"
  body:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0"
rounded:
  sm: 4px
  md: 8px
spacing:
  sm: 8px
  md: 16px
  lg: 24px
  xl: 56px
components:
  button-primary:
    backgroundColor: "{colors.green}"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "0 16px"
  card:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: 20px
---

# KampungSG Design Brief

This file follows the spirit of the public `design.md` workflow: make product decisions visible, name reusable patterns, and keep the interface consistent across pages.

## Product Shape

KampungSG is a Singapore property management and market intelligence product. The rebuilt site behaves like the crawled source site, with React hash routes for listings, explore, articles, community, partners, help, FAQ, and auth.

## Visual Direction

- Product mood: calm, operational, trustworthy, local.
- Layout: React route-specific views with shared navigation and footer.
- Density: homepage can be editorial, but internal pages should be scannable and work-focused.
- Radius: keep cards and controls at 8px.
- Color: neutral base with balanced green, blue, coral, and yellow accents. Avoid a one-hue theme.
- Typography: readable sans for UI, expressive serif only for large brand moments.
- Assets: use crawled KampungSG assets and Singapore imagery where it helps identify real content.

## Core Components

- Header with route links matching the source pages.
- Announcement strip for crawled property headlines.
- Hero blocks for page identity.
- Toolbar blocks for search, filters, and tabs.
- Data cards for repeated content.
- Empty states for listings and community pages.
- Footer with platform, resources, and legal links.

## Routes

- `#/home` homepage and product overview.
- `#/listings` property search shell with crawled empty state.
- `#/explore` activity directory.
- `#/articles` market insight listing.
- `#/community` forum shell.
- `#/partners` service partner directory.
- `#/help` support center and guides.
- `#/faq` FAQ categories.
- `#/auth` sign-in/sign-up page.

## Build Output

The Vite production build emits to `docs/` so GitHub Pages can host the React app from the repository.
