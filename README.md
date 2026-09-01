# RoleFit

RoleFit is a browser-local first-cut job-application workspace. It helps you review a seeded list of roles, compare fit signals, track application status, and keep notes without sending your data to a server.

## Run locally

No build step is required. Serve the folder with any static web server, for example:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Data and privacy

- The app runs entirely in the browser.
- Seed roles come from `seed-roles.json`.
- Notes and workflow state stay in browser local storage.
- There is no account, backend, analytics service, or paid dependency in this first cut.

This is a first-cut workspace, not an automated job-application service. Review role details and company sources before applying.

## Project files

- `index.html`: the complete local web app
- `seed-roles.json`: the initial role dataset

## License

No license has been added yet.
