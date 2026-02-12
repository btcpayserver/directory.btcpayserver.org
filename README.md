# BTCPay Server Directory

A community-curated directory of merchants, projects, and organizations accepting Bitcoin via [BTCPay Server](https://btcpayserver.org).

## How to add a merchant

**Only submit entries that use BTCPay Server to accept payments. All submissions are reviewed before merging.**

### Option 1: Edit the JSON directly (preferred)

1. Fork this repository
2. Open `src/data/merchants.json`
3. Add your entry in alphabetical order:

```json
{
  "name": "Your Store Name",
  "url": "https://yourstore.com",
  "description": "A brief description of your store (max ~250 characters).",
  "type": "merchants",
  "subType": "fashion"
}
```

4. Submit a pull request

### Option 2: Open an issue

If you're not comfortable editing JSON, [open an issue](https://github.com/btcpayserver/directory.btcpayserver.org/issues/new?template=submission.md) with your store details.

### Entry schema

| Field | Required | Description |
|-------|----------|-------------|
| `name` | Yes | Store or project name |
| `url` | Yes | Website URL (include `https://`) |
| `description` | Yes | Brief description (keep it under 250 characters) |
| `type` | Yes | One of: `merchants`, `apps`, `hosts`, `non-profits` |
| `subType` | No | For merchants only. See subtypes below |
| `twitter` | No | Twitter/X handle (e.g. `@yourhandle`) |
| `github` | No | GitHub URL |
| `onionUrl` | No | Tor `.onion` URL |

### Merchant subtypes

`3d-printing`, `adult`, `appliances-furniture`, `art`, `books`, `cryptocurrency-paraphernalia`, `domains-hosting-vpns`, `education`, `electronics`, `fashion`, `food`, `gambling`, `gift-cards`, `health-household`, `holiday-travel`, `jewelry`, `pets`, `services`, `software-video-games`, `sports`, `tools`

## Development

```bash
# Install dependencies
npm install

# Start dev server (default port 5173)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

### Tech stack

- [React](https://react.dev) 19 + TypeScript
- [Tailwind CSS](https://tailwindcss.com) 4
- [Vite](https://vite.dev) for build tooling
- Deployed via GitHub Pages

## License

MIT
