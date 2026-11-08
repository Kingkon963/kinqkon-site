# kinqkon.com

Personal site for Naim Kingkon (Md. Naimul Islam Kingkon): software engineer in Dhaka
working on AI agents, automation, and AWS.

Astro, statically generated, served from GitHub Pages behind Cloudflare DNS.
No trackers, no cookies, no analytics.

## Running it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # writes dist/
npm run preview    # serves the built output
npm run check      # astro check, types and content schema
```

Node 22 or newer.

## Where the content lives

Almost everything is data, not markup, so you edit one file and the page follows.

| File | Holds |
| --- | --- |
| `src/data/site.ts` | Name, role, location, links, the fact ledger, the lede, selected work, roles, toolbox, client quotes, about, colophon |
| `src/content/notes/*.md` | The articles. Frontmatter is `title`, `summary`, `date`, `topics`, `draft` |
| `src/content.config.ts` | The schema those frontmatter fields are validated against |
| `public/llms.txt` | Plain text summary for AI crawlers. Update it when the work changes |
| `public/CNAME` | The custom domain, `kinqkon.com` |

Adding a note is one file. The index, the notes list, and the RSS feed all pick it up
automatically. Set `draft: true` to keep one out of the build.

Two rules worth keeping:

- **Nothing on the page should be a claim you cannot back.** Every number came from the
  Upwork public profile or the CV. The quotes are verbatim client feedback, including
  the grammar, because tidying them up would turn testimony into copywriting.
- **TaskClone is scoped honestly.** You own the Django surface; the core engine is a
  separate Go system built by another team. The site says exactly that, and so does
  `llms.txt`, so no answer engine repeats the wrong version.

## Design system

Two fonts do the display work (Newsreader, a serif) and one does the machinery
(IBM Plex Mono for every label, date, and technology list). Body text is IBM Plex Sans.
All three are fetched and self hosted at build time by Astro, so there is no runtime
request to Google.

The palette is paper and ink with a single accent:

| Token | Light | Dark | Job |
| --- | --- | --- | --- |
| `--paper` | `oklch(0.979 0.0055 84)` | `oklch(0.183 0.008 70)` | Page background |
| `--ink` | `oklch(0.212 0.013 62)` | `oklch(0.932 0.008 86)` | Headings and prose |
| `--ink-muted` | `oklch(0.455 0.012 62)` | `oklch(0.735 0.010 84)` | Blurbs and secondary prose |
| `--ink-faint` | `oklch(0.532 0.010 62)` | `oklch(0.618 0.011 84)` | Mono labels and metadata |
| `--accent` | `oklch(0.520 0.155 32)` | `oklch(0.700 0.145 42)` | The one accent, a rust red |

Every one of those was checked for contrast against the page background in both themes,
at desktop and mobile widths. The weakest pair is the 12px mono metadata, which sits at
about 4.9:1. Nothing falls under WCAG AA. If you change a colour, recheck it rather than
eyeballing it.

Layout is a sticky identity rail beside a scrolling column of ruled lists. There is
deliberately no hero and no card grid: the structure is an index, so the work is a set
of rows you scan rather than tiles you decode.

Theme follows the operating system until the reader clicks the toggle, after which the
choice is stored in `localStorage`. The theme is applied by an inline script before
first paint, so there is no flash.

## Deploying

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and publishes
to GitHub Pages. Nothing else is needed.

### Cloudflare DNS

The domain is already on Cloudflare nameservers. The zone needs these records, and they
must be set to **DNS only** (grey cloud), not proxied, at least until GitHub has issued
its certificate:

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |
| CNAME | `www` | `kingkon963.github.io` |

Once GitHub reports the certificate as issued, you can switch the records to proxied
(orange cloud) if you want Cloudflare in front. Set the SSL mode to **Full (strict)** if
you do.

## Honest limitations

- No contact form, because a static site cannot receive one without a third party. The
  email link is the contact method.
- The notes are three pieces. The writing section is real, not seeded with filler.
- Lighthouse has not been run. The build is small and static and fonts are self hosted,
  but that is an assumption until it is measured.
