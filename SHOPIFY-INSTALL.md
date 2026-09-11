# Install the RRUK Shopify conversion sections

These files are ready for the live RetroReplay UK theme:

- `shopify-sections/rruk-income-router.liquid`
- `shopify-sections/rruk-product-recovery.liquid`

## Safety first

Duplicate the current live theme before editing it. Do not change the logo, checkout, legal pages, warranty terms, product information, prices or redirects.

## Homepage income router

1. In Shopify, go to **Online Store > Themes**.
2. Open the three-dot menu for the duplicate theme and choose **Edit code**.
3. Under **Sections**, choose **Add a new section**.
4. Name it `rruk-income-router`.
5. Replace the generated content with the complete contents of `rruk-income-router.liquid`, then save.
6. Open **Customize** for the duplicate theme.
7. On the homepage, add **RRUK income router** immediately below the primary hero.
8. Confirm the Shop, Gift Finder, Console Checker, Console Hunt and Valuation destinations in the section settings.

## Product and sold-out recovery

1. In the same duplicate theme, add a section named `rruk-product-recovery`.
2. Paste the complete contents of `rruk-product-recovery.liquid`, then save.
3. In **Customize**, open the default product template.
4. Add **RRUK product recovery** below the product information.
5. Check one available product and one sold-out product on desktop and mobile.
6. Confirm Console Hunt and Console Checker destinations in the section settings.

## Release check

- Every button opens the intended page.
- Sold-out products show **Find another for me**.
- Available products show **Ask RRUK to find something different**.
- No modded or preloaded-console claim has been introduced.
- No product, price, warranty or legal content has changed.
- Mobile text is readable and buttons do not overflow.

Publish the duplicate theme only after these checks pass.
