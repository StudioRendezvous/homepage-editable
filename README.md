# Human Interest — Homepage (editable recreation)

Faithful editable recreation of `Homepage_v1 (5-28-26).html` in this folder.

## What this is

- **Reference file (read-only):** `../Homepage_v1 (5-28-26).html` — the 8 MB bundler draft you provided
- **Editable version:** this folder — runs the same `CombinedLandingPage` React prototype extracted from that bundler

Layout, copy, colors, and interactions come from the original component scripts in `scripts/raw-component-*.js`, not from a simplified static rewrite.

## Preview

```bash
cd "/Users/shanefrench/Projects/Human Interest - Cursor/homepage-editable"
./preview.sh
# or: python3 -m http.server 8081
# open http://localhost:8081
# pricing: http://localhost:8081/pricing.html
```

React and Babel are vendored in `vendor/` (no CDN). **Sharing with teammates:** see [SHARING.md](./SHARING.md) and run `./package-share.sh`.

## GitHub Pages deploy

The public [GitHub Pages](https://studiorendezvous.github.io/homepage-editable/) preview ships the homepage only. The standalone pricing route (`pricing.html`) is for **local preview** and is not linked from the public deploy.


## Where to edit (for creative direction)

| File | What it controls |
|------|------------------|
| `scripts/raw-component-4-41ad4417.js` | Page assembly: nav, hero, section order |
| `scripts/raw-component-2-e6e43dfa.js` | 6-benchmark standard tiles |
| `scripts/raw-component-3-07db1e28.js` | How it works section |
| `scripts/raw-component-1-fd348cec.js` | Brand tokens (`HI_BRAND`), nav, footer, logo |
| `scripts/raw-component-5-pricing.js` | Pricing page (`PricingPage`) — tiers + comparison tabs |
| `pricing.html` + `scripts/pricing-boot.js` | Standalone pricing route |
| `styles/main.css` | Self-hosted fonts only |
| `assets/images/` | Awards, testimonials, customer logos |

## Page structure (from the provided draft)

1. Nav + Hero (Direction B)
2. 6 benchmarks — TileGridMint variant
3. Why choose us — Treatment 2 + ratings card
4. Testimonials carousel + customer logos
5. Teal CTA — "You deserve a great 401(k)"
6. How it works — Editorial three-up (Variant B)
7. FAQ cards + final CTA
8. Footer
