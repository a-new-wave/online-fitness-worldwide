# Online Fitness Worldwide

Live coaching site for Online Fitness Worldwide.

Public repo: source plus the cPanel upload package.

## cPanel

Photos and the zip are stored as text parts so they can live in Git. Restore them, then upload the zip:

```bash
node scripts/restore-binaries.mjs
```

That writes `cpanel/online-fitness-worldwide-cpanel.zip`. In cPanel File Manager, open `public_html`, upload that zip, and extract it there.

## Run the site locally

```bash
npm install
node scripts/restore-binaries.mjs
npm run dev
```
