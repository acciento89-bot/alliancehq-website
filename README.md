# AllianceHQ Website v1.0

Statische Launch-Website für GitHub Pages und `alliance-hq.com`.

## 1. Vor dem Upload konfigurieren

In `site-config.js` ersetzen:

- `YOUR_DISCORD_APP_ID` → Application ID aus Discord Developer Portal → General Information
- `YOUR_DISCORD_PRO_SKU_ID` → Guild-Subscription-SKU-ID vom Typ 5
- `YOUR_SUPPORT_DISCORD_INVITE` → permanenter Einladungslink des Support-Servers

## 2. GitHub Pages

1. Alle Dateien in das Root-Verzeichnis des Website-Repositories hochladen.
2. Repository → Settings → Pages.
3. Source: `Deploy from a branch`.
4. Branch: `main`, Ordner: `/ (root)`.
5. Custom domain: `alliance-hq.com`.
6. Nach erfolgreichem DNS-Check `Enforce HTTPS` aktivieren.

Die Datei `CNAME` ist bereits enthalten.

## 3. DNS für die Hauptdomain

Beim Domainanbieter vier A-Records für `@` anlegen:

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

Vorhandene widersprüchliche A-, AAAA-, ALIAS- oder Weiterleitungsrecords für `@` entfernen.
Der bestehende CNAME für `dashboard.alliance-hq.com` bleibt unverändert.

Optional: `www` als CNAME auf `<GitHub-Benutzername>.github.io` setzen.

## 4. Discord Developer Portal

General Information / App Directory:

- Website: `https://alliance-hq.com`
- Terms of Service: `https://alliance-hq.com/terms.html`
- Privacy Policy: `https://alliance-hq.com/privacy.html`
- Support Server: eigener AllianceHQ-Supportserver

## Rechtlicher Hinweis

Impressum, Datenschutz und Nutzungsbedingungen wurden an die bekannte technische Struktur angepasst. Vor dem ersten zahlenden Kunden ist eine professionelle rechtliche Prüfung empfehlenswert. Steuernummer oder USt-IdNr. nur ergänzen, wenn sie erteilt wurde und veröffentlicht werden muss.
