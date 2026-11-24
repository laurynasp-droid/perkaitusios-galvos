# myteam

A multi-page marketing website for **myteam**, a service that helps companies find top talent and build distributed teams. The site is built with plain HTML, CSS and JavaScript, with no frameworks and no build step.

## Pages

| Page     | File            | Description                                          |
| -------- | --------------- | ---------------------------------------------------- |
| Home     | `index.html`    | Hero, features and client testimonials               |
| About    | `about.html`    | Company intro, directors and clients                 |
| Contacts | `contacts.html` | Contact information and contact form                 |

## Project Structure

```
perkaitusios-galvos/
├── index.html          # Home page
├── about.html          # About page
├── contacts.html       # Contacts page
├── CSS/
│   ├── variables.css   # Design tokens: colors, fonts, sizes, line heights
│   ├── global.css      # Reset and styles shared across all pages
│   ├── home.css        # Home page styles
│   ├── about.css       # About page styles
│   └── contact.css     # Contacts page styles
├── js/
│   └── main.js         # Site-wide JavaScript
├── .gitignore
└── README.md
```

### CSS conventions

- Every page loads `variables.css`, then `global.css`, then its own page stylesheet.
- Use the custom properties in `variables.css` (for example `var(--midnight-green)` or `var(--font-size-h2)`) instead of hard-coded colors and sizes.
- The site uses the [Livvic](https://fonts.google.com/specimen/Livvic) font (weights 500, 600, 700) from Google Fonts.

## Running Locally

You don't need to install anything or build the project.

1. Clone the repository:

   ```bash
   git clone https://github.com/laurynasp-droid/perkaitusios-galvos.git
   cd perkaitusios-galvos
   ```

2. Open the site in one of these ways:
   - **Simplest:** open `index.html` in your browser.
   - **Recommended:** use a local server so pages reload as you edit:
     - VS Code: install the **Live Server** extension, right-click `index.html` and choose **Open with Live Server**.
     - Python: run `python3 -m http.server 8000`, then go to <http://localhost:8000>.
     - Node.js: run `npx serve .`

## Git Workflow

### Branches

- `main` is the stable branch. Don't commit to it directly; every change goes through a pull request.
- Make a new branch from the latest `main` for each task, named after its task ID:

  ```
  Task/PG-<number>
  ```

  For example: `Task/PG-10`.

```bash
git checkout main
git pull origin main
git checkout -b Task/PG-10
```

### Commits

- Start each commit message with the task ID, followed by a short description in the imperative mood:

  ```
  PG-<number>: <what the commit does>
  ```

  For example: `PG-8: Import and configure Livvic font`.
- Keep each commit focused on one logical change.
- Don't commit OS, IDE or dependency files (`.gitignore` already excludes them).

### Pull Requests

1. Before opening a PR, bring your branch up to date with `main` and resolve any conflicts:

   ```bash
   git fetch origin
   git merge origin/main
   ```

2. Push your branch and open a pull request into `main`.
3. Start the PR title with the task ID, for example `PG-10: Create README.md`.
4. In the description, say what changed and why, and add screenshots for any visual changes.
5. Keep each PR to a single task.

### Code Review

- At least **one** other team member must approve a PR before it's merged.
- Reviewers check that:
  - the HTML is semantic and valid
  - styles use the variables in `variables.css` and go in the right stylesheet
  - the pages match the design and nothing that already worked is broken
  - the branch, commit and PR names follow the conventions above
- Leave clear, constructive comments. The author either addresses each comment or replies to it before merging.
- After approval, the PR is merged into `main` and the task branch can be deleted.
