# Honor Games

Source for [honorgames.github.io](https://honorgames.github.io) — the portfolio site for Honor Games' mobile games. Plain HTML/CSS/JS, no build step, ready for GitHub Pages.

## Structure

```
index.html          Home page (hero + games grid)
vira-letra/          Vira-Letra game page
privacy/              Privacy Policy
terms/                Terms of Service
contact/              Contact page + FAQ
assets/css/style.css  Shared stylesheet
assets/js/main.js     Mobile menu + FAQ accordion
assets/img/           Icons and screenshots
404.html             Custom 404 page
```

## Adding a new game

1. Duplicate the `vira-letra/` folder for the new game (e.g. `my-game/index.html`).
2. Add its icon to `assets/img/`.
3. Add a new `.game-card` block to the games grid in `index.html`.
4. Add the game to the footer link list on every page.

## Local preview

Any static file server works, for example:

```bash
npx serve .
```

## Deploying

Push to the `main` branch of this repository. GitHub Pages serves the root of the repo automatically for a `<username>.github.io` repository — no extra configuration needed.
