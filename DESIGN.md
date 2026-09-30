---
name: Lumina Student Collective
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#3e494a'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#6e797a'
  outline-variant: '#bdc9ca'
  surface-tint: '#006972'
  primary: '#00626a'
  on-primary: '#ffffff'
  primary-container: '#0e7c86'
  on-primary-container: '#ddfbff'
  inverse-primary: '#7cd4df'
  secondary: '#ab3500'
  on-secondary: '#ffffff'
  secondary-container: '#fc6b37'
  on-secondary-container: '#5d1900'
  tertiary: '#7c4e00'
  on-tertiary: '#ffffff'
  tertiary-container: '#9e6400'
  on-tertiary-container: '#fff4eb'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#98f0fb'
  primary-fixed-dim: '#7cd4df'
  on-primary-fixed: '#001f23'
  on-primary-fixed-variant: '#004f56'
  secondary-fixed: '#ffdbd0'
  secondary-fixed-dim: '#ffb59d'
  on-secondary-fixed: '#390c00'
  on-secondary-fixed-variant: '#832600'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95e'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 34px
    fontWeight: '800'
    lineHeight: 42px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  caption:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system reflects a vibrant, civic-minded student hub built around growth, discovery, and community collaboration. Drawing inspiration from the upward-reaching geometric blossom and graduation cap motif, the interface channels optimism, youthful academic momentum, and warm solidarity.

The visual style blends **Contemporary Warm Minimalism** with **Organic Tactile Playfulness**. Clean structural whitespace and airy canvases keep complex academic life and social calendars clear, while energetic chromatic highlights (teal, peacock blue, sunset amber, and vibrant coral red) animate interactions and celebrations. The mood is welcoming rather than institutional—resembling a modern campus atrium filled with natural light, active peer circles, and collaborative study pods.

## Colors

The palette directly extrapolates the multi-hued energy of the brand emblem:
- **Primary (`#0E7C86` - Deep Teal / Cyan):** Anchors navigation, foundational actions, active states, and structural clarity. It brings academic trustworthiness, balanced focus, and civic maturity.
- **Secondary (`#F26430` - Warm Sunset Orange / Coral):** Injects passion, student initiatives, alerts, deadlines, and lively call-to-actions.
- **Tertiary (`#F4A228` - Amber Gold):** Used for achievements, badges, club spotlights, ratings, and peer recognition.
- **Accent Red (`#C82D3B`):** Reserved for urgent deadlines, drop-in alerts, and real-time live events.
- **Peacock Navy (`#1D3557`):** High-contrast text, dark headers, and grounded navigational states.
- **Canvas & Neutrals (`#F8F9FA` through `#FFFFFF`):** Warm crisp paper tones that allow vibrant student media and color badges to pop without visual exhaustion.

## Typography

The design system exclusively adopts **Plus Jakarta Sans** across all roles. Its geometric geometry, open counters, and humanistic terminals evoke an upbeat, contemporary, and approachable demeanor. 

- Display and headline levels make use of bold and extra-bold weights with tight negative letter tracking to convey energy and decisive community announcements.
- Body levels maintain generous line heights (1.5x–1.6x) for effortless readability across course announcements, community feeds, and forum discussions.
- Small labels and metadata badges leverage medium/semi-bold weights with subtle tracking expansion for legibility in dense academic schedules and campus map tags.

## Layout & Spacing

A structured 12-column responsive fluid grid anchors all desktop layouts, collapsing into 8 columns on tablet viewports and 4 columns on mobile screens. 

The rhythm is structured in 8px increments:
- **Desktop (1200px+):** Outer section margins rest at `2rem` (32px), with standard grid gutters at `1.5rem` (24px).
- **Tablet (768px - 1199px):** Content wraps with `1.5rem` margins and `1rem` column gutters.
- **Mobile (< 768px):** Outer horizontal margins tighten to `1rem` (16px), enabling full-bleed swipeable card carousels for study groups, student events, and club highlights.
- **Component Breathing Room:** High component-internal padding (`space-md` to `space-lg`) keeps forms, event cards, and chat pods uncluttered and easy to tap on touchscreen devices.

## Elevation & Depth

Visual hierarchy employs **Tonal Layering with Subtle Chromatic Shadows**. Rather than heavy drop shadows, the system feels weightless and buoyant:

- **Level 0 (Flat Surface):** Clean crisp surfaces (`#FFFFFF`) against soft warm-gray canvas backgrounds (`#F8F9FA`).
- **Level 1 (Resting Cards & Interactive Elements):** Subtle border definition (1px solid `#E9ECEF`) supplemented with an ambient, tinted shadow: `0 4px 16px -2px rgba(14, 124, 134, 0.06)`. The primary teal tint warms the shadow, avoiding dull gray muddying.
- **Level 2 (Hover States, Floating Menus & Snackbars):** Elevated with `0 12px 28px -4px rgba(29, 53, 87, 0.10)`.
- **Level 3 (Modals, Overlays & Drawers):** High-prominence overlays with backdrop blur (`backdrop-filter: blur(8px)`) and a deep, soft ambient spread: `0 24px 48px -8px rgba(29, 53, 87, 0.16)`.
- **Subtle Gradients:** Feature banners and avatar rings occasionally adopt gentle dual-stop linear gradients transitioning from the primary teal (`#0E7C86`) to warm orange (`#F26430`) or amber gold (`#F4A228`) to honor the logo's petal blend.

## Shapes

The design system uses a pronounced **Level 2 (Rounded)** curvature with specific adaptations inspired by the circular and teardrop forms of the identity mark:

- **Cards & Surfaces:** Standardized at `16px` (`1rem`) border-radius for an approachable, friendly silhouette that matches the smooth curvature of the community emblem.
- **Buttons & Interactive Chips:** Standard buttons use `8px` (`0.5rem`) to `12px` (`0.75rem`) radii, while category filters, user tags, and pill chips utilize a full pill radius (`9999px`).
- **Avatars & Visual Badges:** Circular forms (`border-radius: 50%`) with optional dual-color teardrop accent markers indicating mentor roles, club leads, or graduation status.
- **Inner Controls:** Input fields, dropdowns, and text areas adopt a coordinated `10px` to `12px` corner curve.

## Components

### Buttons
- **Primary:** Solid deep teal (`#0E7C86`) background with pure white text, 12px border radius, 44px minimum touch target, and smooth scale transition on click (`transform: scale(0.98)`).
- **Secondary / Action:** Sunset orange (`#F26430`) fill, used strategically for single high-priority conversions like "Join Club", "RSVP", or "Submit Proposal".
- **Tertiary / Ghost:** Transparent background with `#0E7C86` border (1.5px) and font color, shifting to a soft teal tint background (`rgba(14, 124, 134, 0.08)`) on hover.

### Chips & Badges
- **Tag Chips:** Pill-shaped (`rounded-full`), padded `6px 14px`, featuring light pastel tints of the logo colors with saturated text (e.g., Amber Chip: background `#FEF3C7`, text `#B45309`; Teal Chip: background `#E0F2FE`, text `#0369A1`).
- **Status Indicators:** Mini dot accents paired with text labels for "Active Discussion", "Study Session Live", and "Campus Event".

### Cards
- **Community & Event Cards:** Background `#FFFFFF`, 16px corner radius, thin warm-neutral border (`1px solid #E9ECEF`), and 20px internal padding. Cards feature distinct header accent lines or tinted badge clusters in top right corners. Hover states raise the elevation subtly and shift the border to `rgba(14, 124, 134, 0.3)`.

### Input Fields & Controls
- **Inputs:** 48px height, 10px rounded corners, neutral border (`#DEE2E6`), and clear label anchors above. On focus, the field applies a 2px stroke in `#0E7C86` and a soft cyan focus ring (`0 0 0 3px rgba(14, 124, 134, 0.15)`).
- **Checkboxes & Radios:** Teal-filled when checked, accompanied by high-contrast white glyphs. Transitions feel tactile and snappy (150ms ease-out).

### Lists & Activity Feeds
- **Student Activity Rows:** Separated by soft dividers (`#F1F3F5`), displaying 48px circular avatars, semi-bold author titles, inline club chips, and light gray timestamp metadata.
- **Upcoming Schedule Items:** Highlighted by vertical colored edge strips indicating category (Teal = Lectures, Orange = Socials, Gold = Study Pods).