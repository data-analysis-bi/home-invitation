# Griha Pravesh invitation

One web page. Open `index.html` to preview it. To put it on the internet, upload this folder to GitHub Pages.

## What to upload

Upload the files inside this folder, not the zip:

- `index.html` (the whole invitation)
- `art/` (the pictures)
- `Code.gs` (the Google Sheet script; not shown on the site)
- `.nojekyll` (stops GitHub from hiding files; optional if you cannot see it)
- this `README.md`

## Put it on GitHub Pages

1. Unzip `griha-pravesh-github-pages.zip` on your computer.
2. Open [github.com/new](https://github.com/new) and sign in.
3. Repository name: `griha-pravesh`. Leave it **Public**. Do not add a README (this folder already has one). Click **Create repository**.
4. On the empty repo page, click **uploading an existing file**.
5. Drag in `index.html`, the `art` folder, `.nojekyll`, and `README.md`. They must sit at the top of the repo, not inside another folder.
6. Click **Commit changes**.
7. Open **Settings → Pages**.
8. Under **Build and deployment**, set **Branch** to `main` and folder to `/ (root)`. Click **Save**.
9. Wait one or two minutes. The site will be:

   `https://YOUR-GITHUB-NAME.github.io/griha-pravesh/`

## Change the wording later

On GitHub, open `index.html`, click the pencil, edit the names, date, or address, then **Commit changes**. The page updates after Pages rebuilds (about a minute).

Replies are not stored by GitHub. Connect a Google Sheet once, and every guest reply is added as a new row you can open from anywhere.

## Save replies in Google Sheets

1. Create a blank Google Sheet. Name it `Griha Pravesh replies`.
2. In that sheet, open **Extensions → Apps Script**.
3. Delete any sample code and paste everything from `Code.gs` in this folder. Save.
4. Click **Deploy → New deployment**. Choose type **Web app**.
5. Set **Execute as** to **Me**, and **Who has access** to **Anyone**. Deploy and authorize when Google asks.
6. Copy the web app URL. It ends in `/exec`.
7. In `index.html`, find `const SHEET_URL = "";` and paste the URL between the quotes. Upload the changed `index.html` to GitHub again (or commit the edit on the site).

Send yourself a test reply. A row should appear: time, name, attending, guests, blessing.

To get an email as well, in the sheet open **Tools → Notification settings** and choose to be notified when the sheet changes.

Until `SHEET_URL` is filled in, a reply stays only in that guest's browser and you will not see it.
