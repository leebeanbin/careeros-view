# Sub-Page Hero Pattern

All 5 product sub-pages (/intake, /plan, /build, /diffs, /monitor) share the same hero structure.

## Hero Layout

Full-viewport height (`100vh`) section with:
1. **Background**: Full-bleed animated/decorative canvas (unique per page — see below)
2. **Bottom-left content**: Number label + Page name + Large H1

### Computed Styles

#### Section Container
- position: relative
- width: 100%
- height: 100vh (or min-height: 100vh)
- overflow: hidden
- background-color: rgb(8, 9, 10)
- display: flex
- flex-direction: column
- justify-content: flex-end
- padding: 0 64px 80px

#### Number Label Row (above H1)
- display: flex
- align-items: center
- gap: 12px
- margin-bottom: 16px

#### Number (e.g. "1.0")
- font-size: 13px
- font-weight: 400
- color: rgb(138, 143, 152)

#### Page Name (e.g. "Intake")
- font-size: 13px
- font-weight: 400
- color: rgb(247, 248, 248)

#### H1
- font-size: 72px
- font-weight: 500
- line-height: 72px
- letter-spacing: -1.584px
- color: rgb(247, 248, 248)
- max-width: 800px

## Per-Page Content

### /intake (1.0 Intake)
- H1: "Make product\noperations self-driving"
- Background: Floating kanban issue cards (faint, dark) scattered across viewport
  - Cards contain issue IDs (ENG-xxx, MKT-xxx), labels (Performance, Design, Bug), avatars
  - Text is faint white, very low opacity (~0.15)
  - Cards are rotated slightly, scattered at different positions
  - Implement as: multiple absolutely-positioned `<div>` elements styled as issue card chips

### /plan (2.0 Plan)
- H1: "Plan and navigate\nfrom idea to launch"
- Background: Large calendar/date numbers scattered across viewport
  - Numbers like "12", "19", "26", "28", "MAR", "APR" etc.
  - Ultra-faint white text at varying sizes (24px–80px), very low opacity (~0.08-0.12)
  - Implement as: absolute-positioned `<span>` elements with random-ish positions

### /build (3.0 Build)
- H1: "Move work forward\nacross teams and agents"
- Background: Floating code/agent avatar icon elements
  - Small circular avatar chips with agent icons scattered across
  - Very low opacity dark elements
  - Implement as: absolutely-positioned avatar circle elements

### /diffs (4.0 Diffs)
- H1: "A faster way\nto review code"
- Right side: "● Code review should be fast →" link (blue dot, white text, arrow)
  - position: absolute, right: 64px, bottom: 80px
- Background: Faint code diff lines (horizontal streaks/lines across viewport)
  - Implement as: multiple horizontal `<div>` lines at very low opacity

### /monitor (5.0 Monitor)
- H1: "Understand\nprogress at scale"
- Background: Glowing colored particle dots scattered across viewport
  - Small circles (4-8px) in blue (#60a5fa), green (#4ade80), purple (#a78bfa) colors
  - Some have a slight glow (box-shadow with matching color)
  - Scattered densely across most of the viewport
  - Implement as: many absolutely-positioned small `<div>` circles with radial glow

## Sub-Section Pattern (below hero)

After the hero, each page has feature sub-sections. Each sub-section contains:
- Left: H2 (48px/510) + number.letter label
- Right: Description (16px/400/muted) + feature link
- Below: App UI illustration (same style as homepage feature sections)

Use the same `FeatureSection` shell component from the homepage.
