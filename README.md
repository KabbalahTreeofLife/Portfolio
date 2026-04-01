# ◈ Marco Daniel Castillo — Portfolio

> _"Architecting digital artifacts in the heart of Western Visayas."_

A personal developer portfolio built with vanilla HTML, CSS, and JavaScript. Features a dark arcane aesthetic powered by the Catppuccin Mocha color palette, live GitHub repository integration, and an interactive particle background.

---

## ✦ Preview

![Status](https://img.shields.io/badge/STATUS-1ST%20YEAR%20SE%20STUDENT-cba6f7?style=flat-square&labelColor=0b0b10)
![License](https://img.shields.io/badge/LICENSE-MIT-89b4fa?style=flat-square&labelColor=0b0b10)
![Built With](https://img.shields.io/badge/BUILT%20WITH-Vanilla%20JS-f5e0dc?style=flat-square&labelColor=0b0b10)

---

## ✦ Features

- **Live GitHub Integration** — Automatically fetches and displays your top 6 repositories via the GitHub REST API, sorted by stars
- **Particle Canvas** — Interactive `particles.js` background with grab-on-hover effect
- **Smooth Navigation** — Fixed navbar with scroll-aware styling and smooth anchor scrolling
- **GitHub Stats** — Embedded activity and top languages cards via `github-readme-stats`
- **Responsive Design** — Mobile-aware layout with hidden nav links on small screens
- **Zero Dependencies** — No build tools, no frameworks, just files

---

## ✦ Tech Stack

| Layer     | Technology                                                                                                    |
| --------- | ------------------------------------------------------------------------------------------------------------- |
| Markup    | HTML5                                                                                                         |
| Styling   | CSS3 (custom properties, keyframe animations)                                                                 |
| Logic     | Vanilla JavaScript (ES6+)                                                                                     |
| Particles | [particles.js](https://vincentgarreau.com/particles.js/) `v2.0.0`                                             |
| Icons     | [Font Awesome](https://fontawesome.com/) `v6.4.2`                                                             |
| Fonts     | [Cinzel](https://fonts.google.com/specimen/Cinzel) · [Fira Code](https://fonts.google.com/specimen/Fira+Code) |
| Data      | [GitHub REST API](https://docs.github.com/en/rest)                                                            |

---

## ✦ Project Structure

```
portfolio/
├── index.html      # Structure & layout
├── style.css       # Catppuccin Mocha theme & animations
├── main.js         # Particles config, scroll logic, GitHub API fetch
├── README.md       # This file
└── LICENSE         # MIT
```

---

## ✦ Getting Started

No build step required. Clone and open.

```bash
git clone https://github.com/KabbalahTreeofLife/<repo-name>.git
cd <repo-name>
# Open index.html in your browser
```

Or serve it locally for API requests to work without CORS issues:

```bash
# Python
python -m http.server 8080

# Node.js (npx)
npx serve .
```

Then visit `http://localhost:8080`.

---

## ✦ Customization

Most personalizations live in two places:

**`index.html`** — Update name, status badge, identity line, location text, and contact links.

**`main.js`** — Change the GitHub username in `fetchRepos()` to pull your own repositories:

```js
const username = "YourGitHubUsername";
```

**`style.css`** — The entire color palette is defined in `:root`. Swap values to retheme instantly:

```css
:root {
  --base: #0b0b10;
  --mauve: #cba6f7; /* primary accent */
  --blue: #89b4fa; /* secondary accent */
  --rosewater: #f5e0dc; /* headings */
  --text: #cdd6f4; /* body text */
}
```

---

## ✦ Deployment

This is a static site — deploy anywhere:

- **GitHub Pages** — Push to a `gh-pages` branch or enable Pages from `main` in repository settings
- **Netlify / Vercel** — Drop the folder or connect the repository for instant CI/CD
- **Any static host** — Upload the three files and you're live

---

## ✦ License

Released under the [MIT License](LICENSE). Free to use, modify, and redistribute.

---

<p align="center">
  <sub>ESTABLISHED MMXXVI · ILOILO CITY, PH</sub>
</p>

