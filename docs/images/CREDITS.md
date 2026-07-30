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
  this round of work — notably no usable charger photograph and no Windows
  (ONrecorder) app screenshot exist anywhere in the local asset library.
