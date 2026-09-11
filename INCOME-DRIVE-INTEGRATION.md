# RRUK Income Engine

## Customer acquisition

- `/` - six-clue Retro Gift Finder
- `/console-checker/` - UK/PAL-first console identification and buying checks
- Both tools send tracked shoppers to current RRUK collections or Console Hunt.
- `income-drive.js` supplies contextual shop, sourcing and checking actions.

## Customer retention

- `/aftercare/` - setup, fault, delivery, warranty, valuation and next-console routes
- `/feedback/` - honest feedback, service recovery and equal access to public reviews
- `/share/` - referral sharing and repeat-purchase routes
- `/parcel/` - A5 print insert with a tracked Aftercare QR code

## Measurement

- `analytics.js` uses RRUK GA4 property `G-PF6Q3TSMVL`.
- Analytics storage defaults to denied and loads only after explicit visitor consent.
- Advertising storage, ad user data and ad personalisation remain denied.
- It records consented page views, tool actions, form completions and outbound clicks.
- Existing UTM parameters identify the originating tool and campaign.

## Weekly control

- `/scoreboard/` is a noindex weekly performance calculator.
- It stores anonymous totals only in the current browser and exports CSV.
- The Monday GitHub workflow opens one weekly checklist issue and avoids duplicates.
- Never enter customer identities or order details.

## Shopify conversion layer

- Homepage income router
- Product and sold-out recovery
- Product-page helpful routes
- Disabled-by-default optional thank-you section
- Installation and release steps are in `SHOPIFY-INSTALL.md`.

## Guardrails

- No fake inventory, reviews or availability claims
- No modded or preloaded-console claims
- No change to current prices, warranties, returns, legal pages or checkout
- Optional contributions never affect an order, warranty, return or support
