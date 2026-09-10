# RRUK Income Drive v1

## Purpose
Convert Retro Gift Finder from a standalone recommendation tool into a measurable RetroReplay UK sales and lead funnel.

## Conversion layer
`income-drive.js` adds four result exits:

1. **Shop this console** — returns the visitor to the relevant RRUK Shopify collection.
2. **Find one for me** — sends a sourcing lead to the existing RRUK contact route until the dedicated Console Hunt page is live.
3. **Check this console** — passes the recommended console family to Retro Console Checker.
4. **Start again** — preserves the existing finder reset journey.

It also adds UTM attribution using `utm_source=retro_gift_finder` and `utm_campaign=income_drive` so Shopify/analytics traffic can be separated from ordinary visits.

## Required HTML hook before release
Load the conversion layer after the existing finder script and before `</body>`:

```html
<script src="income-drive.js"></script>
```

Keep the existing finder questions, recommendation logic and RRUK visual identity unchanged.

## Temporary lead route
The current RRUK Contact page is used for `Find one for me`. Replace this with the permanent Shopify Console Hunt URL as soon as that page is created.

## Shopify handoff
After this branch is tested, Shopify should expose the Gift Finder prominently from the homepage and navigation. Product pages and sold-out states should also link to the permanent Console Hunt route.
