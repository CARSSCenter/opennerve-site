# Image credits and provenance

Not a published page — this file documents where every image under `docs/images/`
came from, for maintainers reviewing this site before launch. See `CLAUDE.md` §8 for
the general rule this folder is an exception to, and §9 for the open flag on
verifying re-use rights before these go public.

| File | Source (local path at time of import) | Notes |
|---|---|---|
| `logo.png` | `HORNET/Posters and graphics/OpenNerve logo/OpenNerve_logo_final_new.png` | Project wordmark. Original is 2348×817 RGBA; used as-is, no resize. |
| `hero-ipg.jpg` | `HORNET/IPG.png` | Photograph of one assembled OpenNerve IPG unit (serial `00000162`), etched `HORNET-CARSS`. Converted PNG→JPEG (quality 80), resized to 1000 px wide. See flag below re: `HORNET`/`CARSS` markings on the physical unit. |
| `lead-standard.jpg` | `HORNET/Posters and graphics/StandardLeads.png` | Macro photo, three lead types on white, 1 cm scale bar. Resized to 800 px wide, JPEG q80. |
| `lead-cuff.jpg` | `HORNET/Posters and graphics/ThinFilmCuff.png` | Macro photo of the sub-mm Parylene cuff. Resized to 800 px wide, JPEG q80. No scale bar in source. |
| `sensor-mechanical.jpg` | `HORNET/Posters and graphics/StrainSensor.png` | Photo of two strain-sensor sizes with 1 cm scale bar. Resized to 800 px wide, JPEG q80. **Provenance unconfirmed** — this image is figure-styled (annotated, cropped to a panel) and may already be published under a journal's copyright rather than an original consortium photo. Confirm before public launch. |
| `sensor-chemical.jpg` | `HORNET/Posters and graphics/NeurotransmitterSensor.png` | Cyclic-voltammetry plot for the electrochemical sensor (labelled panel "A"). Resized to 800 px wide, JPEG q80. **Same provenance flag as above** — this is a journal-figure-style plot, not a product photo; confirm re-use rights before public launch. |
| `dev-board.jpg` | `HORNET/Supplemental pitches/UCLA Study #1 3_19_2025/Images/IMG_4123.JPG` | Bench photo from the March 2025 UCLA acute study, cropped tightly to just the board (original frame also shows a laptop, a DAQ unit, and — on other frames in the same folder, not this one — the surgical site itself; none of that is in this crop). Board is stamped `HORNET-1-IPG Rev A – Ver 1.4`, an earlier hardware revision than the Gen2 PCBA the development board ships as today — captioned accordingly wherever used, per `CLAUDE.md` §5's revision-binding rule. Resized to 1000 px wide, JPEG q80. |
| `placeholder.jpg` | Not sourced — generated (2026-07-30) | Not a photo of anything. A plain diagonal-hatch pattern plus a generic image glyph, drawn with PIL for the platform diagram (`index.md`, `start/architecture.md`) so the software/charger nodes have something in the photo slot pending real photography, per §7's 2026-07-30 diagram round. Originally reused across all three nodes (Windows app, Android app, Charger); as of 2026-08-04, only the Android app node still uses it — see `windows-software.jpg` and `charger.jpg` below. 700×280 px (5:2), JPEG q80. |
| `charger.jpg` | Site owner-supplied, `docs/images/charger.png` (2026-08-04) | CAD render of the charger's internal coil and PCB assembly (top enclosure half and wrist straps visible, coil marked `WE` — a Würth Elektronik part). Not a photo of a built unit. Converted PNG→JPEG (quality 80), resized to 800 px wide. Replaces `placeholder.jpg` on the Charger diagram node in `index.md` and `start/architecture.md`. |
| `windows-software.jpg` | Site owner-supplied, `docs/images/Windows-software.png` (2026-08-04) | Screenshot of the OpenNerve Controller Windows app (titlebar reads `OpenNerve Controller FW2-260501`), showing a captured waveform and the stimulation-parameter control panel. Converted PNG→JPEG (quality 80), resized to 800 px wide. Replaces `placeholder.jpg` on the Windows app diagram node in `index.md` and `start/architecture.md`. The Android app node is unchanged — still `placeholder.jpg`, no screenshot supplied. |

## Not used, and why

- **Favicon** — no OpenNerve favicon exists anywhere in the asset library.
  `Posters and graphics/logo512notext.png` is the **CARSS** logo (a hornet-and-car
  mark), which `CLAUDE.md` §1 restricts to the Governance page only, so it cannot
  stand in as the site icon. I attempted to derive one by cropping the starburst+"O"
  glyph out of the wordmark, but the wordmark's letters and rays overlap in the same
  x-range at different heights with no clean vertical cut between them: a crop wide
  enough to keep the burst intact always includes a stray fragment of the "p" in
  "OpenNerve," and a crop narrow enough to exclude the "p" slices a ray mid-stroke.
  Neither reads as an intentional mark at favicon scale (tested at a simulated 32 px).
  Fixing this needs the original layered vector (not this flattened export) or a
  fresh icon design — left undone rather than shipped looking broken. The site
  currently has no `theme.favicon` set in `mkdocs.yml`, so Material's own default
  applies.
- **`logo.svg`** — the vector version bundles four colour variants (blue/navy/magenta,
  grey/orange, orange/dark, and a dark rounded badge) as flat sibling `<g>` elements
  that are not cleanly separable by group ID; extracting just the on-brand variant
  turned out to require the same kind of hand-editing as the favicon attempt above,
  for a file this project doesn't currently need (Material's `theme.logo` renders
  fine from the PNG). Left as a future improvement if a cleaned single-variant SVG
  is produced upstream.
- Everything else considered and rejected is listed in the exploration notes behind
  this round of work. As of 2026-07-30, no usable charger photograph and no Windows
  (ONrecorder) app screenshot existed anywhere in the local asset library — both were
  supplied by the site owner on 2026-08-04, see `charger.jpg` / `windows-software.jpg`
  above. No Android app screenshot has been supplied; that node still uses
  `placeholder.jpg`.
