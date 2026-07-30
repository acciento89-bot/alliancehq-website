# AllianceHQ Website – GitHub Pages

Static bilingual landing page and legal pages for **AllianceHQ by Kamilunavo**.

## 1. Insert Discord links

Open `config.js` and replace:

```js
installUrl: "PASTE_DISCORD_INSTALL_LINK_HERE",
supportUrl: "PASTE_SUPPORT_SERVER_INVITE_HERE",
```

The email address is already set to `acciento89@gmail.com`.

## 2. Upload to GitHub

Recommended repository name:

```text
alliancehq-website
```

Upload all files from this folder to the repository root.

## 3. Enable GitHub Pages

1. Open repository **Settings**.
2. Select **Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch **main** and folder **/(root)**.
5. Save.

Expected URL for GitHub user `acciento89-bot`:

```text
https://acciento89-bot.github.io/alliancehq-website/
```

## 4. Discord Developer Portal

After the site is live, use:

```text
Privacy Policy: https://acciento89-bot.github.io/alliancehq-website/privacy.html
Terms of Service: https://acciento89-bot.github.io/alliancehq-website/terms.html
```

## Files

- `index.html` – bilingual landing page
- `privacy.html` – bilingual privacy policy
- `terms.html` – bilingual terms
- `imprint.html` – bilingual imprint
- `contact.html` – contact and support
- `config.js` – Discord links and contact email
- `styles.css` – complete responsive design
- `app.js` – language toggle and link configuration
- `404.html` – error page
- `.nojekyll` – disables Jekyll processing

## Important

The legal pages are drafted for the current AllianceHQ functionality as of 30 July 2026. Update them whenever hosting providers, collected data, retention periods, pricing or bot functionality changes. They are not a substitute for individual legal advice.
