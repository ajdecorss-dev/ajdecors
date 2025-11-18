# AJ Decors - Static Site

This is a small static storefront for AJ Decors. Lightweight Bootstrap layout, local cart/orders and optional Firestore integration for orders.

Structure

```
AJ_DECORS_WEBSITE/
 ├── index.html
 ├── products.html
 ├── offers.html
 ├── order.html
 ├── user.html
 ├── about.html
 ├── assets/css/style.css
 ├── assets/js/main.js
 ├── assets/img/ (sample SVGs included)
 └── README.md
```

Local development

1. Start a local server (do NOT open files via file:// because some features require a server):

- Recommended (VS Code): Install Live Server and "Open with Live Server"
- Node: `npx http-server . -c-1` or `npx serve .`
- Python: `python -m http.server 8080` (works for static files)

2. Open `http://localhost:8080/` in your browser.

Firestore (optional)

Order form is "Firestore-ready". To enable Firestore:

1. Add Firebase CDN scripts and your config before `assets/js/main.js` in `order.html`:

```html
<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore-compat.js"></script>
<script>
  window.firebaseConfig = {
    apiKey: "...",
    authDomain: "...",
    projectId: "...",
  };
</script>
```

2. With those scripts and config present, the order form will attempt to write to the `orders` collection. If Firestore is not configured, orders are saved to `localStorage`.

Deploy

This is plain static HTML/CSS/JS—deploy to GitHub Pages by pushing the repository and enabling Pages on the branch.

Notes

- Payment is Venmo-only per site flow; orders expect the user to attach a Venmo payment screenshot.
- This is a minimal static site; user authentication is mocked locally.
  AJ_DECORS_WEBSITE

Simple static site scaffold for AJ Decors (Bootstrap-based) ready for GitHub Pages.

Structure

AJ_DECORS_WEBSITE/
├── index.html – Home (banner, featured magnets)
├── products.html – Product grid
├── offers.html – Combo deals
├── order.html – Order form (Venmo screenshot workflow)
├── user.html – Order history (local browser storage)
├── about.html – About / Contact
├── assets/css/style.css
├── assets/js/main.js
├── assets/js/firebase.js ← all Firebase Auth + Firestore logic (placeholder)
├── assets/img/ ← sample product images
└── README.md ← setup & deploy guide

Quick start

1. Open the folder in VS Code or any editor.
2. To preview locally, open `index.html` in your browser (no server required for static pages).

Payment and orders (local-only)

- This simplified version uses Venmo for payments. The site asks customers to attach a Venmo payment screenshot in the order form. Orders are stored locally in the browser (localStorage) under the key `aj_orders`.
- Because there is no server or payment webhook in this simplified scaffold, payment verification must be done manually by checking the attached screenshot on the `user.html` orders page.

Deploy to GitHub Pages (recommended quick steps - PowerShell):

# initialize a repo if needed

git init; git add .; git commit -m "Initial AJ Decors site";

# create repo on GitHub and push, then enable Pages from main branch or gh-pages

# create ZIP for distribution

Compress-Archive -Path \* -DestinationPath AJ_DECORS_WEBSITE.zip

Files to edit

- `assets/data/products.json` — edit products, prices, discounts
- `assets/css/style.css` — tweak colors and spacing
- `assets/img/` — replace sample product images

Notes

This simplified scaffold purposely does not use Firebase or any server-side payment verification. It's intended as a starting point for a static storefront; for production you should add a server-side payment integration (PayPal/Braintree/Venmo merchant APIs) and webhook-based verification.

Notes

This scaffold includes Firebase helper functions but only minimal client-side validation. For production, secure Firestore rules, add server-side validation, and don't store sensitive info in client code.
