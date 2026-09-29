# Portfolio Maintenance Manual — Golam Mashrafi Labib

This website is completely free, runs on static HTML/CSS/JS, and does not require Node.js or any paid subscriptions.

## How to Test Locally
Simply double-click `index.html` to open it in Google Chrome or any browser. Any edits made in `content.js` will show up immediately after refreshing the page.

## How to Update Your Information
Open `js/content.js` in any text editor (VS Code, Notepad, etc.):
- **Update Email/Links:** Look for `personal` or `social` at the top.
- **Add a Project:** Copy an existing object inside the `projects: [ ... ]` array and fill in the details.
- **Add Work Experience:** Add an entry inside `experience: [ ... ]`.
- **Change Colors:** Open `css/variables.css` and change `--accent-primary` or `--bg-primary`.

## How to Update Photo & Resume
- Place your photo inside `assets/images/` and name it `profile.jpg`.
- Place your resume inside `assets/` and name it `resume.pdf`.
No code editing is required for these updates.