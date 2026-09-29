# lilanpei.github.io

Personal homepage of Lanpei Li: <https://lilanpei.github.io/>

Plain HTML/CSS served directly by GitHub Pages; there is no build step.

- `index.html` holds all page content (bio, news, research, publications, experience, activities).
- `zh/index.html` is the Chinese version of the same page; when adding news or papers, update both.
- `assets/css/style.css` holds styling, including the mobile layout.
- `assets/cv/Lanpei_Li_CV.pdf` is the downloadable CV (compiled from a local `cv.tex`, which is git-ignored).
- `assets/icons.svg` is the icon sprite (Font Awesome Free, CC BY 4.0).

Preview locally with `python3 -m http.server 8000`, then open <http://localhost:8000>.
