# Portfolio Keyboard

developed by siddharth

Siddharth's personal portfolio: pastel keyboard keys spelling PORTFOLIO, a confident introduction, and a continuous gold marquee. Siddharth is a data and product business analyst and a vibe coder.

**Personal use only. Not for sale.**

> This website was built with AI-assisted (vibe coding) tools. Results may differ on other platforms.

## Run it

This is a static site with no build step. Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

Then visit http://localhost:8000.

Satoshi (Fontshare) and Inter (Google Fonts) load from their CDNs, with system-font fallbacks. Bundle licensed local font files if you need the site to work offline.

## Update the email address

Edit the single `CONTACT_EMAIL` constant at the top of `script.js`. It feeds the header "Let's talk" link, the Enter key, the Contact Me key and the email link in the contact section.

## Update the dialog text

The text shown when you press a key lives in the `DIALOGS` object in `script.js`. Selected Work currently has no projects listed. When real projects are ready, add their actual titles and links there.

## Files

- `index.html`: semantic markup and the keyboard
- `styles.css`: all styling
- `script.js`: email config, dialogs, keyboard scaling, auto-press sequence and marquee