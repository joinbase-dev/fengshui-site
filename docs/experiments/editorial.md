# Taste Skill creative experiment: Contemporary Editorial

Isolated proof of concept for the home page's hero and service list, at `/experiments/editorial`.
It is not linked from the site, is `noindex`, is not in the sitemap, and must never be merged as
the home page. Requested by Ohm on 2026-11-01 as a test of what the `design-taste-frontend` skill
can contribute beyond the Figma design. For this experiment only, Ohm lifted the repo rule that
the skill keeps the palette and type (`--keep palette,type`).

Screenshots: `/mnt/project-files/fengshui-site-review/taste-experiment/` (project folder).

## 1. What of the Taste Skill was actually used

| Part of the skill | Used? | How |
| --- | --- | --- |
| `SKILL.md` (the run, house rules) | Yes | Read in full; steps 1 to 7 and 10 followed. |
| `scripts/draw.mjs` | Yes, run | `--sector culture --tone luxury --have photography --options 3`, then the full sheet for `uneven-photographs` (seed 1179671289). Run **without** `--keep palette,type`, per Ohm's override. |
| `references/critique.md` | Yes | Its 14 passes, score weights and caps are used for the critique and scores below. |
| `references/motion.md` | Yes | Reveal-on-scroll recipe (IntersectionObserver, `html.js`-style gate) and its easing tokens. |
| `scripts/lint.mjs` | Yes, run | Final: 0 FAIL, 0 WARN on the experiment's files. |
| `scripts/inspect.mjs` | Yes, run | Real Chromium at 1440, 768 and 390 on the production build. Final: **0 FAIL, 4 WARN** (defended below). Also run on the live home page for the critique: 8 FAIL, 8 WARN. |
| `scripts/assets.mjs` (open-collection pictures) | No | Not needed: Ohm's own originals (up to 6720 px) were in the project uploads and are better than any found picture. |
| `scripts/scenes.mjs` / scroll scenes | No | The sheet dealt none. |
| `references/type.md`, `colour.md`, `layout.md`, `copy.md`, `imagery.md` | Skimmed only where a decision needed them | Not read end to end. |

Redraws and departures from the dealt sheet, with reasons (the skill asks for these to be recorded):

- **Type: Literata replaced by Trirong.** Literata has no Thai glyphs; the page is Thai. Trirong
  (Cadson Demak, Google Fonts) is a looped Thai serif with matching Latin, the closest thing to
  the sheet's "sturdy screen-reading serif".
- **Palette: Tobacco and olive re-coloured from the subject.** The skill says to keep the dealt
  proportions but take colours from the subject when it has its own. Kept: dark ground, bone ink,
  one accent on the action, one field that breaks the ground once. Coloured with the brand: ground
  lacquer `#1d0d09`, ink `#eee9e2`, action brand gold `#fae4c0`, field brand red `#ac0805` (both
  from `fengshui-tokens.css`).
- **Hero leading 1.18, not 1.0.** Thai tone marks stack above the line and clip at 1.0.
- **Hero photo: one still, not a slow crossfade of three.** No other photo of the same framing
  exists at usable resolution. The crossfade moved to the services print (hover/focus).
- **Sections after the list** (about, how-it-works, gallery, contact, footer) were dealt but not
  built: Ohm scoped this to hero and services. The founder intro is kept as the hero's second beat.

Inspector warnings left in place, with the one-sentence defence the skill asks for:

- `palette-cream`: it flags the bone **ink** `#eee9e2`, not a ground; the ground is dark lacquer.
- `font-not-dealt`: Literata cannot set Thai (see above).
- `no-footage`: no honest clip of the club exists in the project; the TikTok videos are the
  client's and cannot be downloaded or looped here.
- `still-page`: motion is deliberately quiet (load sequence, reveals, a 32 s drift on the hero
  photo, the services crossfade). The skill caps design at 7 for this, and the score below takes it.

## 2. Critique of the current design

Two designs exist: the **live** home page on `main` (Figma 1:751, blush ground, Epilogue) and the
**Web v.3** design (Figma 19:1781) being built in draft PR #12. Both were reviewed; v.3 from the
Figma and build screenshots already in the project folder (no Figma calls spent).

### Objective usability problems (measurable, would fail a review)

1. **No focal point on the live first screen.** The largest type is a 32 px sentence; the club's
   name is a small label beside a red dot. The inspector measured no element holding a third of
   the viewport (`focal-point` FAIL). A stranger cannot say in five seconds whose site this is.
2. **The primary action is not a button.** "ปรึกษาอาจารย์ดำรงชัย" is a red text link below a
   six-line paragraph; on a 390 px phone it sits at the bottom of the first screen, after the
   paragraph (`first-action` WARN at all widths). v.3 has no action in the hero at all.
3. **Headlines that are paragraphs.** The live h1 is 11 words and wraps to 6 lines at 768 px and
   3 at 390 px; the red highlight band breaks mid-name ("อาจารย์ / ดำรงชัย") on phones.
4. **The services panel hides its own statement.** On hover the photo stack covers the statement
   "ศาสตร์แห่งความสมดุล…" completely (`covered-text` FAIL), and the gold sphere already
   halves its legibility with the two-tone text trick.
5. **Right-aligned Thai service summaries** create a ragged left edge, the edge the eye returns to;
   on phones the number, title and summary read as one 4-line block (`headline-lines` FAIL).
6. **Unequal margins at 768 px** (40 px left, 56 px right).
7. **v.3: mock-up partner logos** ("aven", "circle", "CodeLab"…) are fake social proof until
   replaced; the handoff file flags this itself. **v.3: 風水 on the Personal โหงวเฮ้ง card** is
   the wrong term (โหงวเฮ้ง is 面相).

### Subjective creative opinions (my judgment, not facts)

1. **The founder is the brand, and neither design opens on him working.** 35 years of standing in
   front of real buildings with a luopan (LADAWAN, Baan 365, Thai Hot Pot, eUnite, a construction
   site) is the proof no competitor can copy. Both designs show him posed or in a collage; the
   site visits are hidden inside the service overlay's image loop.
2. **v.3's hero could belong to any Chinese New Year promotion.** A blurred red gradient with an
   emblem watermark and centred white type says "Chinese" but not "this master" or "consultation".
   It also uses the gradient and glow that CLAUDE.md §7 lists as generic.
3. **Decoration standing in for content.** The live dotted panel and gold sphere, the gold-framed
   tilted photos and the faded emblem fill space without saying anything. The 01–04 numbering
   orders things that have no order.
4. **Typography speaks app, not almanac.** Noto Sans Thai (loopless) and Epilogue read as a
   product UI. Thai readers associate looped serif Thai with print, books and almanacs, the world
   of ฮวงจุ้ย and ปฏิทินจีน. This is the single biggest lever for "premium" and costs nothing.
5. **Colour is used everywhere, so it means nothing.** Brand red is on labels, dots, links, bands
   and arrows; there is no one place where red means "here".
6. **v.3 services are four identical cards** (eyebrow, title, two lines, "ดูรายละเอียด", photo):
   the "row of identical cards" pattern. The live list is more distinctive than v.3 here.
7. **Missed seasonal hook.** ปีชง is the main reason Thai people look for a feng shui master around
   Chinese New Year, and แซกี is a service built for it. Neither design mentions the year.
8. **What already works and should stay:** v.3's founder band (dragon photo, portrait, checklist,
   LINE button) is the strongest section of either design; the overlay pattern for service detail
   is good; the live design's list (not cards) for services is right.

## 3. Three creative directions

### A. Refined Heritage: "The seal and the almanac"

- **Core idea.** The club's emblem is a seal; the page is a printed almanac (通勝 / ปฏิทินจีน)
  that the master annotates. Red appears only where a seal would be stamped.
- **Visual identity.** Stone-grey paper ground (not cream), black ink, one vermilion seal mark per
  screen (the emblem, the CTA). No ornament beyond the seal.
- **Typography.** Trirong for Thai; Noto Serif TC only for Chinese terms that are part of the copy
  (風水, 面相), set as real text, never decoration.
- **Colour.** 90 % stone and ink, vermilion under 3 % of the surface.
- **Layout.** Narrow almanac columns with wide margins; services as almanac entries (term, plain
  meaning, who it is for); the founder as a printed frontispiece.
- **Images.** Black-and-white or desaturated site visits, the studio portrait in full colour as the
  only colour photograph.
- **Motion.** The seal "presses" on the CTA (scale 1.04 to 1, 140 ms); ink-bleed reveals.
- **Distinctive.** Restraint as luxury; red becomes precious.
- **Trade-offs.** Can read old or austere to younger clients; desaturated photos lose warmth;
  vertical Chinese text (tempting here) is an accessibility and translation trap.

### B. Contemporary Editorial: "Thirty-five years of standing in front of buildings" (built)

- **Core idea.** อ.ดำรงชัย reading real places becomes the gallery wall of uneven prints: one
  full-bleed site photograph as the headline, then prints at their own sizes and offsets.
- **Visual identity.** Dark lacquer ground, bone type, brand gold on the single action, the brand
  red as one field. No rules, no cards, no badges.
- **Typography.** Trirong only: light 300 for large lines, 400 for reading, 500 for titles. Five
  sizes (14 / 18–20 / 20–28 / 36–68 / 44–104 px).
- **Colour.** Lacquer about 80 %, photographs about 15 %, gold on one button, red once.
- **Layout.** 12-column grid, 5 vw margins. Hero name bottom-left, action bottom-right on the same
  baseline. Services: a two-line statement, the list pushed into the right five columns, one 4:5
  print at the left that follows the pointer or focus.
- **Images.** Only Ohm's own photographs, re-cropped from the originals: the site visit, the studio
  portrait, LADAWAN, the โหงวเฮ้ง book, the sae-ki shrine, the Mandarin ballroom.
- **Motion.** 1.2 s load sequence (photo settles, lines rise), reveal once on scroll, a 700 ms
  crossfade on the services print, a slow 32 s drift on the hero photograph.
- **Distinctive.** It is about this master's work in this city, not about "Chinese culture".
- **Trade-offs.** Dark pages read as luxury but are a change for an audience used to bright red;
  it depends on photo quality (the hero is a phone photo at 1478 px); the live element needs the
  master's sign-off.

### C. Experimental: "The luopan is the interface"

- **Core idea.** The page is a luopan. The 12 zodiac branches sit on its ring; you set your birth
  year and the ring turns to your animal and marks the year that clashes with it. On phones the
  ring follows the device's real compass heading: "which way does your front door face?"
- **Visual identity.** A real, photographed luopan (Ohm's compass close-up) as the one object,
  enlarged to fill the first screen and cropped by its edges.
- **Typography.** One heavy Thai display face for the ring labels, Trirong for reading.
- **Colour.** Black ground, the luopan's own lacquer red and gold.
- **Layout.** Radial: services sit at four bearings; scrolling rotates the ring to the next one.
- **Images.** The luopan, and the master's hands on it; site photos appear in the ring's centre.
- **Motion.** Scroll-linked rotation, `deviceorientation` on phones, a settle when a bearing locks.
- **Distinctive.** Nobody else in the category has a site you can point at your door.
- **Trade-offs.** iOS asks permission for orientation; rotary navigation is hard with a keyboard
  and screen reader; content hides behind interaction; heavy JS and a risk of gimmick; Lighthouse
  95 and INP under 200 ms are hard to hold.

## 4. Recommendation

Scored 1 (weak) to 5 (strong); complexity is scored so that 5 = easiest. My judgment, not data.

| | A Heritage | B Editorial | C Luopan |
| --- | --- | --- | --- |
| Brand relevance | 4 | 5 | 4 |
| Visual distinctiveness | 3 | 4 | 5 |
| Trust and credibility | 4 | 5 | 3 |
| Conversion potential | 3 | 4 | 3 |
| Mobile usability | 4 | 4 | 2 |
| Accessibility | 4 | 5 | 2 |
| Implementation ease | 4 | 4 | 1 |
| **Total** | 26 | **31** | 20 |

**Recommend B, Contemporary Editorial,** with A's discipline about red and C's one live idea (the
clash-year finder) folded in. It wins on trust because it shows the real man doing the real work,
which is what a consultation client is buying; it is fully static, accessible and cheap to build;
and it is still clearly unlike the category. C is the most original but puts the content behind a
toy, and its accessibility and performance costs are real. A is safe and elegant but less warm.

## 5. The experiment

Route `/experiments/editorial` (static, `noindex`). Files: `app/experiments/editorial/page.tsx`,
`components/experiments/editorial/*`, `content/experiments/editorial.ts`,
`public/images/experiments/editorial/*`. Nothing outside these folders changed except one
`.gitignore` line for the skill's working folder.

- **Hero.** Full-bleed site photograph, sky left empty; letterhead and three links on the sky in
  dark ink; h1 "คลับฮวงจุ้ย / แห่งประเทศไทย" (the handoff's h1) at up to 104 px; the live site's
  hero sentence and a real gold button to LINE on the same baseline; a caption that says what the
  photo is. On phones the photo is a 4:5 crop around him with the type below on lacquer, so no
  line of type crosses his face.
- **Founder intro.** Studio portrait, his name, the live introduction paragraph and "กว่า 35 ปี".
- **Services.** "โหราศาสตร์จีน / โดย อ.ดำรงชัย" (v.3's heading); the four services from
  `content/services` (no copy changed) pushed right; one sticky 4:5 print at the left that
  crossfades to the hovered or focused service. Rows open **the existing service overlays**
  (`ServiceLink` + `ServiceOverlay`, verified: click opens, Escape closes, URL updates). On phones
  each service carries its own print, alternating 100 % / 72 % left / 60 % right.
- **The live thing.** A red band: "ปี 2569 ปีเกิดของคุณชงหรือไม่". Type a birth year (พ.ศ. or
  ค.ศ.) and read the animal and its clash with the Fire Horse year, then go on to the แซกี
  overlay or LINE. Without script the band still lists every clashing year.

Checks run: `npm run lint`, `npm run typecheck`, `npm run build` pass; Taste Skill lint 0/0,
inspect 0 FAIL; no horizontal scroll at 320, 360, 390, 768, 1024, 1440, 1920; keyboard tab order
skip link > home > บริการ > ปีชง > ติดต่อ > CTA > services; reduced motion turns off every move.
Not run: Lighthouse, VoiceOver/NVDA, a real phone.

### Skill critique of the final round (critique.md §4)

```
ROUND 3 (final)
Seen in one second: the man in the red hat on a building site, and the club's name.
Idea: อ.ดำรงชัย reading real sites becomes a gallery wall of uneven prints.
Live thing: the 2569 clash-year finder, leading to แซกี.
Layout words: hero=full-bleed / intro=offset split / services=statement + list pushed right / clash=field band
Scores: design 7 · usability 8 · creativity 7 · content 7.5 → overall 7.4
Caps applied: still-page → design ≤ 7; competitor test (another master could show site visits) → creativity ≤ 7
Still short: hero photo is a 1478 px phone snapshot (soft on retina, casual outfit); desktop services
leave open ground under the heading; no footage.
```

For comparison with the same rubric (my scores): live home about 6.1 (capped at 6.5 for
numbering, gradients, labels), v.3 about 6.4 (capped at 6.5 for the gradient hero and eyebrows).

## 6. Before and after (screenshots in the project folder)

| | Current (live) | Experiment |
| --- | --- | --- |
| Hierarchy | Album dominates, name is a label, h1 is a paragraph | Photo then name: two masses, one order |
| Brand character | Warm, friendly, generic "Chinese" cues | The master at work; lacquer, gold, red as signals |
| Readability | Good body sizes; right-aligned summaries; 6-line h1 at 768 | 18–20 px body, left-aligned, 2-line headings everywhere |
| Interaction | Card hover swaps sphere for photo stack (hides statement) | Hover/focus crossfades the print; live finder; same overlays |
| Content clarity | Name + what + action spread over a long screen | Name, what, who and the action all on the first screen |
| Mobile | Long paragraph before the action | Photo, name, sentence, button within 844 px |

No conversion improvement is claimed; none was measured.

## 7. Risks and trade-offs

- **Dark ground** is the largest departure from the brand (blush/white). Older readers may find
  long dark passages harder; contrast is 15:1 for body, but it is a taste risk worth testing.
- **Hero photo quality.** The site visit is a phone photo, casual (hat, shirt). It is the most
  honest picture, but a commissioned shoot of the master with a luopan on a real site would make
  this direction much stronger.
- **Clash-year content** is the standard 犯太歲 table for 2026 (ชวด ชงตรง, มะเมีย ชงตัวเอง,
  ฉลู and เถาะ ชงร่วม) and the ลีชุน cut-off. **อ.ดำรงชัย must confirm it** before any of it ships.
- **Copy written for the experiment** (the service "kind" lines, the band's wording, photo
  captions) is sample copy and needs approval. All other copy is from the live site and v.3.
- **New font** (Trirong, three weights, Thai + Latin) adds roughly 100–150 KB of font files.
- **Two sources of truth.** If adopted, this would need a Figma update first; the code must not
  lead the design.

## 8. Worth bringing back into the main design (each can be adopted alone)

1. **Open on the master at work.** Put one real site-visit photograph in the hero (v.3 currently
   shows a red gradient). Commission one good shot if possible.
2. **Make the CTA a real button in the hero**, worded as now, opening LINE.
3. **One h1 that is the name**, two lines, large (the handoff already asks for this).
4. **Looped Thai serif (Trirong) for headings**, keeping Noto Sans Thai for body if preferred.
5. **Red only where it means "act"** (the CTA, one band); remove dots, red labels and decorative red.
6. **Services as a list with one changing photograph** instead of four identical cards.
7. **The ปีชง finder as a seasonal band** before Chinese New Year, linked to แซกี (after the
   master confirms the rules).
8. **Captions that say what each photo is** (place and job), which turns snapshots into evidence.
9. Drop the mock partner logos until real ones are cleared, and fix 風水 on the Personal card.
