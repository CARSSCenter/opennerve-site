# OpenNerve website — maintenance guide

This file explains how to edit and update this website, written for someone
with no web design background. If you can edit a text file, you can maintain
this site.

For deeper technical background (why things are built this way, open
questions, etc.), see `CLAUDE.md` in this same folder. This README only
covers the "how do I do X" basics.

---

## The short version

1. Almost every page on the site is a plain text file (Markdown, `.md`) in
   the `docs/` folder.
2. Edit the text file, save it, preview your change, then publish it.
3. "Publishing" currently means pushing the change to GitHub (see
   [Making a change live](#6-making-a-change-live) below).

---

## 1. Where the content lives

Open the `docs/` folder. Each subfolder roughly matches a section of the
website's left-hand menu:

| Folder | What's in it |
|---|---|
| `docs/index.md` | The home page |
| `docs/start/` | "Start here" pages |
| `docs/components/` | Pages about the IPG, leads, cuff, charger, sensors |
| `docs/software/` | Windows / Android app pages |
| `docs/data/` | Publications, animal data |
| `docs/regulatory/` | Regulatory status and maturity definitions |
| `docs/contribute/` | Contributor guide, governance |
| `docs/community/` | Community / discussion links |

To change the words on a page, open its `.md` file in any plain text editor
(TextEdit, VS Code, Notepad, GitHub's own web editor — anything that doesn't
add formatting) and edit the text.

Markdown is just text with a few simple symbols:

- A line starting with `#` is a big heading, `##` is a smaller heading, and
  so on.
- Surrounding a word with `**two asterisks**` makes it **bold**.
- A line starting with `-` makes a bullet point.
- `[link text](https://example.com)` makes a clickable link.

You don't need to know more than that for most edits.

## 2. Adding a brand-new page

1. Create a new `.md` file in the right folder (copy an existing page's
   layout as a starting point — most pages start with a `title:` line at the
   top between `---` lines).
2. Open `mkdocs.yml` in the main folder and find the `nav:` section. Add a
   line pointing to your new file, matching the pattern of the lines around
   it (indentation matters — copy an existing line's spacing).
3. If you add a file but forget this step, the page will still exist but
   nobody can navigate to it from the menu — the site's build check
   (`--strict`, see below) will warn you if you forget.

## 3. Adding a publication, animal dataset, or news item

These three lists are plain bullet points in a plain text file — no special
tool needed. Open the right file in `docs/data/` or `docs/news/`, copy the
pattern of an existing entry, and edit the words.

**To add a publication** (`docs/data/publications.md`):

1. Find the year section it belongs under (add a new `## 2027` heading near
   the top if it's a new year — newest year goes first).
2. Copy the format of an existing numbered entry: authors, a bolded title in
   quotes, the journal/venue and year, then a link to the paper. For example:

   ```
   15. Author, A., et al. **"Title of the paper."** *Journal Name* (2027).
       [a short label for the link](https://the-actual-link-to-the-paper)
   ```
3. Save the file. That's it — no other file needs to change.

**To add an animal dataset** (`docs/data/animal-data.md`):

1. Copy an existing dataset's whole section (from its `##` heading down to
   the citation block) as a template.
2. Update the heading, description, species, file count, license, DOI link,
   and citation to match the new dataset.
3. If the dataset has a banner image on its SPARC page, you can show it here
   too: `![short description](the image's URL)` as the first line of the
   section, same as the existing entries. If you're not sure whether an
   image is safe to link to, leave it out and just use the text — that's
   what `docs/data/publications.md` and `docs/news/index.md` already do,
   since reusing outside images from those kinds of sources gets legally
   murky.

**To add a news item** (`docs/news/index.md`):

1. Copy the format of an existing bullet:

   ```
   - **["Title of the article"](https://link-to-the-article)**
     — Publication or channel name (year)
   ```
2. Add it to the list, newest items near the top.

None of these three files need a `mkdocs.yml` change — they're existing
pages, so you're only adding a bullet point to a page that's already in the
menu.

## 4. Adding or replacing an image

Photos and diagrams that appear on more than one page (or on the home page)
live in `docs/images/`. A photo that only belongs to one page can go in that
page's own folder instead — either is fine, just follow the pattern of
what's already there.

1. Get your image into a reasonably small file first. A phone photo or a
   screenshot is usually much bigger than a web page needs — a good target
   is under 1000 pixels wide and under 300 KB. On a Mac, the built-in
   `sips` tool does this from Terminal without installing anything:

   ```
   sips -s format jpeg -s formatOptions 80 -Z 1000 "the original file.png" --out docs/images/my-image.jpg
   ```

   `-Z 1000` shrinks the longest side to 1000 pixels (keeping the original
   proportions), and `-s format jpeg -s formatOptions 80` saves it as a
   reasonably compressed JPEG. On Windows, the free "Photos" app or
   [squoosh.app](https://squoosh.app) (drag a file in, no install, nothing
   uploaded anywhere) both do the same job.
2. Reference it from a page with plain Markdown:

   ```
   ![A short description of what the image shows](images/my-image.jpg)
   ```

   The description in the brackets isn't just for looks — it's what a
   screen reader reads aloud, so make it describe the picture, not just
   restate the caption.
3. If you're replacing an existing image rather than adding a new one, keep
   the same filename so you don't have to update every page that links to
   it.

One thing worth knowing: a handful of images on this site (the platform
diagram on the home page, for one) are photos of real hardware sourced from
outside this repository, and `docs/images/CREDITS.md` keeps a record of
where each one came from. If you add a photo that isn't yours — something
pulled from a paper, a poster, or another repo — add a line there too, so
nobody has to guess later whether it's safe to reuse.

## 5. Previewing your changes before publishing

Don't guess whether a change looks right — preview it on your own computer
first.

**One-time setup** (only needed once per computer):

```
pip install -r requirements.txt
```

**Every time you want to preview:**

```
mkdocs serve
```

This starts a local preview. Open the web address it prints (usually
`http://127.0.0.1:8000`) in your browser. The preview updates automatically
as you save changes to files — just refresh the browser tab.

Press `Ctrl+C` in the terminal to stop the preview when you're done.

## 6. Making a change live

Right now, this repository is **not yet connected** to a live, public
website — pushing to GitHub does not automatically publish anything yet.
(Once that one-time hosting connection is set up, this section should be
updated to say exactly what "going live" involves.)

Until then, "publishing" your work means committing and pushing it to
GitHub, the same as any other change to this repository:

```
git add <the files you changed>
git commit -m "a short description of what you changed"
git push
```

If you're not comfortable with git commands, GitHub's website lets you edit
files and commit changes directly in the browser — open the file on
github.com, click the pencil (edit) icon, make your change, and use the
"Commit changes" button at the bottom.

## 7. Special case: pages copied in from other repos

Some pages (under folders like `components/ipg/`, `components/mechanical-sensors/`)
are not edited here directly — they're automatically copied in from other
OpenNerve repositories, so that this site always reflects the real,
up-to-date engineering documentation. You'll see a note at the top of these
pages saying where they came from.

**Do not hand-edit these pages** — your edit will be overwritten next time
someone refreshes the copy. Instead, edit the original file in its source
repository, then run:

```
python tools/sync_docs.py
```

This pulls the latest version of every page listed in `docs-sources.yml`
into this site. If a page you expect isn't showing up, check whether it's
listed in `docs-sources.yml` — if it's a new file that's never been synced
before, add a line for it there first (following the pattern of existing
lines), then run the command above.

## 8. Checking your work before publishing

Before pushing changes, it's worth running this once to catch broken links
or typos in the menu setup:

```
mkdocs build --strict
```

If it finishes with no errors, you're good to push. If it complains, read
the error — it usually names the exact file and problem (e.g., "page not
found in nav" or "broken link").

## 9. Getting help

If something doesn't work as described above, or you're not sure how to
make a specific kind of change, don't guess — ask whoever set up this
repository, or open an issue on GitHub describing what you were trying to
do.
