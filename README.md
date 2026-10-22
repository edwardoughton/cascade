# CASCADE

Public website for the Center for Cyber Physical Infrastructure Simulation.

A responsive, buildless website with an original SVG infrastructure diagram and keyboard-accessible research theme explorer. All asset paths are relative so the site works at `https://edwardoughton.github.io/cascade/`.

## Preview locally

Run `python3 -m http.server 8000` from the repository, then open http://localhost:8000.

## Publish on GitHub Pages

1. Commit and push this website to the repository's `main` branch.
2. In GitHub, open **Settings → Pages → Build and deployment**, and select **GitHub Actions** as the source.
3. The included `Deploy to GitHub Pages` workflow publishes the site on pushes to `main`. After enabling Pages, it can also be started manually from the Actions tab.

No package installation or build step is needed. The site uses Google Fonts with local system font fallbacks; it otherwise has no runtime dependencies.

## Editing

- `index.html`: page copy, team, partner and contact links.
- `assets/styles.css`: layout, colors and responsive styles.
- `assets/app.js`: research explorer and SVG network.

Content is based on the supplied October 2026 CASCADE materials. Draft budgets, fundraising targets and internal first-year plans are intentionally excluded. Leadership uses the final supplied roster: Joe Bricio, Ed Oughton and Alex Sprintson (all Co-Leads). Leadership portraits are sourced from the official university pages listed below. The collaboration button links to Ed's supplied GitHub account until an approved contact address is available. Team membership and public wording should be reviewed before launch.

## College logo sources

Artwork sourced from the official college websites, then cropped and given black lettering for the requested transparent presentation:

- College of Science: https://science.gmu.edu/themes/custom/newcity/logo.svg (SVG with black lettering and a cropped viewBox).
- College of Engineering and Computing: https://cec.gmu.edu/sites/default/files/UL%20COLLEGE%20OF%20ENGINEERING%20AND%20COMPUTING_4c%20H1.png (transparent PNG, cropped to its alpha bounds, with black lettering).

Both colleges are presented together beneath the hero as a joint George Mason initiative.

## Leadership photo sources

Photos are stored locally in `assets/people/`, with original image content preserved.

- Ed Oughton: https://github.com/edwardoughton/edwardoughton.github.io/blob/master/img/edward_oughton.jpg (jacket and tie portrait from his personal website).
- Alex Sprintson: https://ece.gmu.edu/profiles/asprints
- Joe Bricio: https://rprc.gmu.edu/the-team/ (image: https://rprc.gmu.edu/wp-content/uploads/2024/01/joeb-768x768.jpg)

- RPRC logo: https://rprc.gmu.edu/wp-content/uploads/2024/10/cropped-Rapid-Prototyping-Research-Center-UL_4c-H1.png — transparent background, cropped margins and black lettering, with green/gold GM artwork preserved.

RPRC artwork omits the college descriptor above the center name; Science lettering is reduced by 13% relative to the previous version. Logo order: RPRC, College of Science, College of Engineering and Computing.
