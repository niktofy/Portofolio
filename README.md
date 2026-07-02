# Portofoliu — Vadim Melnic

Pagină unică (`index.html`), stil cyberpunk/neon, gata de publicat pe GitHub Pages, Netlify sau Vercel.

## Ce trebuie completat înainte de publicare

1. **Email real** — în secțiunea Contact, înlocuiește `your-email@example.com` (apare de 2 ori: link `mailto:` și text).
2. **Link Fiverr / Upwork** — cele două butoane "Fiverr Profile" / "Upwork Profile" au `href="#"`. Pune URL-urile reale ale profilurilor odată ce le creezi.
3. **Screenshot-uri reale** (opțional, dar recomandat) — cele 3 case studies folosesc mockup-uri făcute din CSS (nu screenshot-uri reale), pentru că nu am imagini de la proiectele tale. Dacă ai capturi de ecran / render-uri reale din Crypto Mining Simulator, Cyberpunk Dashboard sau Rick Assistant, înlocuiește blocurile `.mockup` cu `<img>`-uri — va arăta mult mai credibil.

## Notă importantă despre onestitate

Cele 3 "case studies" sunt proiectele tale personale reale (Crypto Mining Simulator, Rick Assistant, Cyberpunk Dashboard), etichetate explicit ca **"Personal Project"** — nu ca lucru plătit pentru un client. Asta e complet în regulă și e practică standard pentru freelanceri la început de drum.

**Nu adăuga testimoniale false sau clienți inventați** — Fiverr/Upwork pot suspenda conturi pentru reprezentare falsă a experienței, iar clienții verifică ușor. Pe măsură ce faci primele proiecte plătite, înlocuiește treptat aceste 3 cu proiecte reale de client (cu permisiunea lor) și adaugă testimoniale reale.

## Cum publici gratuit

**Opțiunea simplă — Netlify Drop:**
1. Mergi pe https://app.netlify.com/drop
2. Trage folderul `portofoliu-vadim-melnic` peste pagină
3. Primești un link live în ~10 secunde

**Opțiunea GitHub Pages:**
1. Creează un repo nou pe GitHub, urcă conținutul acestui folder
2. Settings → Pages → Deploy from branch → `main` / root
3. Link-ul va fi `https://<user>.github.io/<repo>`

## Structura fișierelor

- `index.html` — tot site-ul (HTML + Tailwind CDN + CSS custom + Anime.js pentru animații subtile de scroll)
- Fonturi: Orbitron (titluri) + Exo 2 (text), via Google Fonts
- Fără build step — se rulează direct, orice hosting static merge
