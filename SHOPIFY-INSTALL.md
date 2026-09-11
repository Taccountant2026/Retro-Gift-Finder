# Install the RRUK Shopify conversion sections

## Ready files

- `rruk-income-router.liquid` - homepage decision routes
- `rruk-product-recovery.liquid` - available and sold-out product recovery
- `rruk-product-helpful-routes.liquid` - Gift Finder, Console Checker and Console Hunt product-page routes
- `rruk-optional-thanks.liquid` - optional post-support contribution, disabled by default

All files are in `shopify-sections/`.

## Safety first

Duplicate the current live theme before editing it. Do not change the logo, checkout, legal pages, warranty terms, product information, prices or redirects.

## Install a section

1. Go to **Online Store > Themes**.
2. Open the three-dot menu for the duplicate theme and choose **Edit code**.
3. Under **Sections**, choose **Add a new section**.
4. Use the filename without `.liquid`.
5. Replace the generated content with the complete contents of the matching file and save.

Repeat for each required section.

## Place the sections

- Add **RRUK income router** immediately below the homepage hero.
- Add **RRUK product recovery** beneath product information on the default product template.
- Add **RRUK helpful routes** beneath product recovery.
- Add **RRUK optional thanks** only to a post-support or aftercare page. It is hidden until both the enable switch and an approved payment URL are set.

## Release check

- Confirm all section URL settings.
- Check one available and one sold-out product.
- Test desktop and mobile layouts.
- Confirm Gift Finder and Console Checker links open.
- Confirm Console Hunt receives product context.
- Keep **RRUK optional thanks** disabled until a genuine payment URL and final wording are approved.
- Do not describe an optional contribution as required, a purchase, or a condition of support.
- Confirm no product, price, warranty, return or legal content changed.
- Publish the duplicate theme only after every check passes.
