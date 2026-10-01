# Home Budget — Final

A professional, responsive, local-first household budget app designed for GitHub Pages.

## Features
- Desktop + mobile responsive layout
- Dashboard with monthly/annual KPIs
- Professional SVG charts (no chart CDN)
- Monthly category breakdown
- Daily transaction logging
- Category → description dependent dropdowns
- Transaction modes: UPI, Cash, Debit Card, Credit Card, Bank Transfer, Net Banking, Cheque, Auto Debit, Other
- Searchable/filterable history with edit/delete
- Editable categories and descriptions
- Monthly budget report with category drill-down
- Print/Save-as-PDF monthly report
- Excel import/export without a third-party CDN
- JSON backup/restore
- CSV export
- Local browser storage only
- PWA/service-worker shell for offline use after first load
- Fortnight/semi-monthly calculations removed

## GitHub Pages
Upload all files in this folder to the root of a GitHub repository, then enable:
Settings → Pages → Deploy from branch → main → /root

## Privacy
The app does not send transaction data to a server. GitHub Pages only serves the static application files. Budget data is stored in browser localStorage. Keep a JSON or Excel backup before clearing browser/site data.

## Excel compatibility
The built-in lightweight XLSX reader understands the original workbook structure:
- `Expenditures & income`
- `Data lists`

It also reads the app's exported `Transactions` workbook format.


## Aurora Glass Edition
This edition adds an animated glassmorphism visual layer, ambient aurora orbs, cursor spotlight, button ripples, transaction celebration effects, keyboard shortcuts (N, G, /), and a local privacy indicator. All effects are local and respect reduced-motion preferences.
