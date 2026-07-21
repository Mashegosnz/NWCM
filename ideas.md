# Design Spec — Neighborhood Cleaning & Maintenance Services

## Ground Truth
This is a **replication task**: the user provided a full-page screenshot of https://www.cwcleaners.co.za/ (CWC — Commercial & Residential Window Cleaning) as the layout/style reference. The reference screenshot is the ground-truth spec for layout, section structure, spacing, and component composition. The user ALSO provided their own business portfolio (Neighborhood Cleaning & Maintenance Services) whose content, branding colors (blue, red, grey, navy), and real work photos MUST replace the CWC content.

## Reference Layout (from screenshot, top to bottom)
1. **Header**: white bg, left logo (stylized letters + small tagline underneath), center nav links (HOME, ABOUT US, GALLERY, CONTACT) in navy uppercase small text, right navy pill button "GET A FREE QUOTE".
2. **Hero**: full-width photo background (residential building + pool), centered white uppercase headline in two lines (first line bold, second line lighter), small white paragraph, then a navy rectangular button "CONTACT US FOR A FREE INSPECTION TO QUOTE" centered lower in hero. Hero is tall (~60-70vh+).
3. **Feature strip**: white bg, 4 columns divided by thin vertical borders. Each column: navy outline icon, uppercase navy heading (SPECIALISED / SAFETY / QUICK / RINSING), small grey two-line description. Centered text.
4. **Light blue section with wave top divider**: pale blue (#d7ecf8-ish) bg, wave SVG at top. Two-column: left = big heading "SPECIALISED **HIGH REACH** WINDOW CLEANING" (mixed weights), paragraph with bold highlights, bulleted list with circular icon bullets (Environmentally-Friendly, Mineral Free, Chemical Free), bold line, navy button "GET A QUOTE". Right = tall portrait photo.
5. **Dark parallax stat section**: full-width photo bg dark overlay, centered: "100%" inside navy circle badge, big white text "CUSTOMER SATISFACTION", small white paragraph.
6. **Two-column established section**: left = tall photo; right = navy-grey light bg block with small uppercase letterspaced label "ESTABLISHED", huge navy year "2011", bold heading "We've worked with clients big and small...", small grey paragraph.
7. (Beyond screenshot: gallery, contact/quote form, footer — build per portfolio requirements.)

## Adaptation Rules (portfolio overrides content)
- Brand: **Neighborhood Cleaning & Maintenance Services** (aka Neighborhood Window Cleaners; "NCM"/"NWC" style logo like CWC's letterform logo).
- Colors: navy (primary, like reference), blue (water/trust accents, pale blue section), **red accents** (buttons highlights per user request — use red as the accent alongside navy), grey neutrals.
- Hero headline: "PROFESSIONAL CLEANING & MAINTENANCE SERVICES YOU CAN TRUST" (two-line, mixed weight, uppercase).
- Feature strip 4 items: SAFETY, ECO-FRIENDLY, HIGH REACH, RELIABLE (adapted from portfolio key offerings).
- Section 4 → Specialised high reach / rope access window cleaning w/ user's real photos.
- Stat section → 100% CUSTOMER SATISFACTION (keep same as reference, matches portfolio tone).
- Established section → repurpose: "TRUSTED BY / Phunya Consulting – Dube Tradeport" or company intro w/ user photo.
- Additional required sections (from user brief): Services grid (9 services), Vision & Mission, Target Market, Competitive Advantage (3 cards), Key Offerings, Sustainability, Compliance/SHE badges (10 items), Customers, Quote form (full fields), Contact w/ WhatsApp + call buttons, Footer.
- User's 4 real photos (rope access, WFP pole cleaning, dome cherry-picker) MUST be used in gallery/sections.
- Typography: reference uses clean sans (Montserrat-like) w/ uppercase headings mixing weights. Use Montserrat (headings) + Open Sans / Source Sans (body).
- Sticky header, smooth scroll animations, responsive.

## Component Details
- Buttons: rectangular, small radius (~4px), navy bg, white uppercase small bold text, generous x-padding. Red variant for primary CTAs per user color request.
- Wave divider between hero-following white strip and pale-blue section (top wave).
- Icon bullets: navy filled circle with small white glyph.
- Stat badge: navy circle, white "100%" inside, overlapping title below.
