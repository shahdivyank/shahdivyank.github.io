# DESIGN.md — Personal Website Design System

Reference for any coding agent (Cline) working on this repo. Follow this document when building or changing UI. If a screenshot and this file disagree, ask before deviating.

## 1. Concept

An editorial, magazine-style personal site built on Swiss / International Typographic principles: huge neo-grotesque type, a strict grid, hairline borders, and almost no decoration. Photography and project imagery supply all the color. The site should feel like a printed magazine masthead translated to the web.

**Reference images:** the visual reference screenshots are in `/previews`. Look there before building any section, and match the layout, spacing, and type scale you see in them.

**Recreate the design language, not the template.** Do not copy the reference's branding, copy, or imagery ("Exhibition Magazine", its photos, its lorem ipsum). Use the owner's own name, sections, and photos.

## 2. Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS (tokens defined as CSS variables, exposed through the Tailwind theme)
- shadcn/ui only where it helps (dialogs, command palette); restyle to match the hairline look (no shadows, no rounded corners)
- Framer Motion for the marquee and layout transitions (optional; CSS keyframes are fine for the marquee)
- Content in MDX for writing/case studies

## 3. Design Tokens

Define in `globals.css` under `:root`, then map into `tailwind.config`.

```css
:root {
  --bg: #f2f0ec; /* warm off-white page background */
  --ink: #1f1e1c; /* near-black text, dark panels, filled buttons */
  --ink-muted: #6b6a66; /* body copy, captions, secondary text */
  --line: #1f1e1c; /* hairline borders (1px) */
  --line-soft: #cfccc5; /* optional lighter rules */
  --on-ink: #f2f0ec; /* text on dark panels */
  --accent: #e8541e; /* OPTIONAL single accent; use sparingly or skip */
}
```

Rules:

- Only `--bg` and `--ink` carry the design. Photography provides color.
- No gradients, no glassmorphism, no drop shadows.
- Border radius is `0` everywhere, with one exception: circular image crops inside letterforms and pill-shaped image inserts in headlines.
- Dark mode: invert `--bg` and `--ink` (bg `#1F1E1C`, ink `#F2F0EC`). Keep hairlines visible. Add this only after the light theme is finished.

## 4. Typography

- **Font:** a neo-grotesque sans. Preferred: **Inter Tight** (fallback: Geist, Instrument Sans, Archivo, Helvetica Neue, Arial). Load through `next/font`.
- **Display / masthead:** uppercase, medium weight (500), line-height `0.85–0.9`, letter-spacing `-0.04em` to `-0.06em`. Size with `clamp()` so it spans the full container width:
  `font-size: clamp(4rem, 17vw, 16rem)`
- **Section headings (H2):** uppercase, weight 500–600, tight tracking (`-0.02em`), `clamp(2rem, 5vw, 4.5rem)`, line-height `1.05`.
- **Card titles / H3:** sentence case, weight 500, `1.25–1.75rem`.
- **Body:** sentence case, weight 400, `1rem–1.0625rem`, line-height `1.7`, color `--ink-muted`, max width about `60ch`.
- **Labels, nav, buttons, footer:** `0.875rem`, normal tracking. Footer labels uppercase.
- **Meta text** (eyebrow labels like "Event", dates, bylines): `0.75rem–0.875rem`, `--ink-muted`.
- Never use more than one typeface family. Hierarchy comes from scale and weight, not from font mixing.

## 5. Layout and Grid

- Page container: full width with a consistent horizontal gutter (`px-4` mobile, `px-8` tablet, `px-12` desktop). Every element aligns to this gutter.
- 12-column grid on desktop, 4 on mobile. Use CSS grid.
- Sections are separated by **1px hairline rules** (`border-t` / `border-b` in `--line`), usually full-bleed.
- Boxed content (stat bars, cards, side panels) uses a 1px border, with no radius and no shadow.
- Generous vertical rhythm: `py-16` to `py-24` between major sections on desktop.
- Images are rectangular with `object-cover`, optionally with a 1px border. Use consistent aspect ratios per row (for example 3:4 portrait or 16:10 landscape).

## 6. Components

### 6.1 Top bar

- Height about 56–64px, 1px bottom border.
- Left: square hamburger button with a 1px right border.
- Right: "Login"-style secondary link with a 1px left border, then a filled `--ink` primary button (for example "Contact ↗") with `--on-ink` text.
- Middle is empty space. The bar spans full width.

### 6.2 Masthead (signature element)

- Page title in uppercase display type spanning the full container width.
- **Image-in-letter:** replace one or two letters with an image, either a circular crop (for round letters like O) or a rectangle clipped to the glyph's counter (like B). Implement with inline-block spans sized in `em` so they scale with the text:

```tsx
<h1 className="text-[clamp(4rem,17vw,16rem)] font-medium uppercase leading-[0.85] tracking-[-0.05em]">
  NAM
  <span className="mx-[0.02em] inline-block h-[0.78em] w-[0.78em] translate-y-[0.04em] overflow-hidden rounded-full align-baseline">
    <img src="/images/me.jpg" alt="" className="h-full w-full object-cover" />
  </span>
  HERE
</h1>
```

- The inserted image is decorative: `alt=""` and keep the real page title available to assistive tech (use `aria-label` on the `h1` or a visually hidden text copy).
- Small secondary label (for example "PORTFOLIO") right-aligned under the masthead in bold.
- Each page has its own masthead word (Home, Work, Writing, About, Now).

### 6.3 Section nav

- Full-width bar under the masthead with 1px top and bottom borders.
- 7–8 evenly distributed links, left-aligned first item, right-aligned last item.
- Active item: `font-medium` with a 2px underline that sits on the bottom border.
- Hover: underline slides in from the left (`scaleX` transition, 200ms).
- On mobile, collapse into the hamburger menu or a horizontal scroll strip.

### 6.4 Hero / feature banner

- Large image with dark overlay, centered uppercase title, small eyebrow line flanked by rules, and a boxed "Explore Now ↗" button.
- Carousel dots at the bottom (optional).

### 6.5 Section heading row

- Left: two-line uppercase H2.
- Right: short muted paragraph plus a filled button ("Explore Now ↗").
- On mobile, stack vertically.

### 6.6 Buttons

- **Primary:** filled `--ink`, text `--on-ink`, no radius, padding `0.75rem 1.25rem`, with a trailing ↗ arrow icon.
- **Secondary:** 1px `--line` border, transparent background.
- Hover: arrow nudges up and right by 2px; background shifts slightly. Focus: visible 2px outline in `--ink` with offset.

### 6.7 Stats bar

- A 1px bordered row with 3 large numerals (`~3.5rem`, weight 500) each followed by a small label on the same baseline.
- Use real numbers (projects shipped, years building, writing posts), not made-up ones.

### 6.8 Cards

- Image on top, then eyebrow label ("Project"), title, and a short muted description.
- 1px border or none. No shadow. No radius.
- Hover: image scales to `1.03` inside its clipped frame, and an arrow appears.

### 6.9 Image collage grid

- Asymmetric grid: a tall center image flanked by smaller images with small captions (title in uppercase, description in italic small text). Use for featured work.

### 6.10 Dark split section with diagonal

- Full-bleed `--ink` panel with a vertical rotated word on the left (`writing-mode: vertical-rl; transform: rotate(180deg)`), short quote or paragraph in `--on-ink`, a huge outlined or filled word across the bottom, and an image revealed through a diagonal cut using `clip-path: polygon(...)`.
- Include a circular arrow button (1px border) as the link affordance.

### 6.11 Vertical date accordion (timeline)

- Horizontal row of tall, narrow columns separated by hairlines. Each shows a rotated date and a byline.
- The active column expands (`flex-grow` transition) to reveal an image, label, date, and title. Inactive columns are muted.
- Use for posts, releases, or a career timeline. Provide a keyboard-accessible tab/arrow interaction and a stacked list fallback on mobile.

### 6.12 Marquee banner

- Full-width `--ink` bar, uppercase text repeated infinitely, scrolling right to left. Duplicate the content twice and animate `translateX(-50%)` on a linear infinite loop (about 30s).
- Pause on hover. Disable under `prefers-reduced-motion`.

### 6.13 Info side-panels (About page)

- Dashed-border boxes (`border: 1px dashed`) containing an image, an uppercase title, and dotted-leader rows (label ........ value). Use for "Now", "Uses", "Contact", "Find me online".

### 6.14 Footer

- Full-width `--ink` block, two rows divided by a hairline.
- Row 1: PAGES (links to every page) / FOLLOW (social links: GitHub, Google Scholar, LinkedIn, Instagram, e-mail) / RESUME (PDF link).
- Row 2: © year | name, centered underlined site name.
- A Spotify "now playing" widget can live here.

## 7. Motion

- Subtle only: 150–300ms, `ease-out`. Animate transform and opacity, not layout properties.
- Allowed: nav underline slide, button arrow nudge, image hover zoom, marquee, accordion expand, fade-up on scroll (once).
- Respect `prefers-reduced-motion: reduce` by disabling the marquee and parallax and using instant transitions.

## 8. Responsive Behavior

- Mobile first. Breakpoints: `sm 640`, `md 768`, `lg 1024`, `xl 1280`.
- Masthead scales through `clamp()` and must never overflow horizontally; verify at 360px width.
- Multi-column collages collapse to a single column. Keep the top bar and the hairlines.
- The vertical accordion becomes a vertical stacked list on mobile.
- Tap targets at least 44px.

## 9. Accessibility

- Color contrast at least 4.5:1 for body text (`--ink-muted` on `--bg` must pass; adjust if not).
- Decorative letter-images have empty `alt`; meaningful images have real alt text.
- Real heading hierarchy (one `h1` per page), semantic landmarks (`header`, `nav`, `main`, `footer`).
- Visible focus states on every interactive element.
- Marquee and carousels pausable and reduced-motion safe.

## 10. Content Mapping (magazine to personal site)

| Reference section       | Personal site equivalent               |
| ----------------------- | -------------------------------------- |
| Exhibition / Home       | Home (intro, featured projects, stats) |
| Fashion / Art           | Work (projects and case studies)       |
| Decoding                | Work (case studies)                 |
| Beauty / Services       | Experiments                           |
| Shop                    | Resume / Contact                       |
| Search                  | Command palette (Cmd+K)                |
| Upcoming events cards   | Featured projects                      |
| Vertical date accordion | Release timeline                       |
| About Us info panels    | Now, Uses, Contact                     |

Replace every placeholder (lorem ipsum, template names, stock photos) with real content. If real content isn't ready yet, use clearly marked placeholders like `[Project title]`, not template text.

## 11. Assets and IP

- Use the owner's own photography or properly licensed images (for example Unsplash with attribution where required).
- The reference screenshots live in `/previews`. They are for agent context only: never copy them into `public/` or ship them in the build.
- Do not reuse the template's logo, name, or copy.

## 12. Do / Don't

**Do**

- Let type size create hierarchy.
- Keep every element on the grid and gutter.
- Use hairlines to separate content.
- Keep color restrained and let images carry it.

**Don't**

- Add shadows, gradients, glow, or rounded cards.
- Mix multiple font families.
- Add motion that doesn't serve navigation or comprehension.
- Build everything at once; work section by section.

## 13. Build Order

1. Tokens, font loading, global styles, and the layout shell (container, gutter, hairline utilities).
2. Top bar, section nav, and footer.
3. Masthead component with image-in-letter and `clamp()` sizing.
4. Home sections: feature banner, section heading row, stats bar, project cards.
5. Marquee banner and the dark diagonal split section.
6. Work and Writing pages (MDX), then the vertical date accordion.
7. About / Now / Uses with dashed info panels.
8. Integrations (Spotify now playing, GitHub activity), cached via revalidation.
9. Polish: dark mode, reduced motion, SEO and Open Graph images, Lighthouse pass.

## 14. Working Agreement for the Agent

- Build one component or section per task and stop for review.
- Check the matching screenshot in `/previews` before starting each section.
- Before creating a component, state the file path and props.
- Prefer composition over duplication; shared pieces (Button, HairlineSection, Masthead, Marquee) live in `components/ui` or `components/site`.
- Do not introduce new dependencies without asking.
- After each change, check the layout at 360px, 768px, and 1440px widths.
