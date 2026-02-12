# BTCPay Server Directory

Merchants, projects, and organizations accepting Bitcoin with [BTCPay Server](https://btcpayserver.org/).

Live at **[directory.btcpayserver.org](https://directory.btcpayserver.org/)**

## Development

```bash
npm install
npm run dev        # Start dev server
npm run build      # Type-check + production build
npm run preview    # Preview the production build locally
```

Requires Node 20+.

## Adding a new entry

Entries live in `src/data/merchants.json`. Each entry follows this structure:

```jsonc
{
  "name": "Store Name",
  "url": "https://example.com",
  "description": "Short description (max 250 chars).",
  "type": "merchants",          // required — see valid types below
  "subType": "electronics",     // required for type "merchants"
  "country": "US",              // optional — for type "hosted-btcpay" only
  "twitter": "@handle",         // optional
  "github": "https://github.com/org",  // optional
  "onionUrl": "http://...onion" // optional
}
```

### Valid `type` values

| Type | Description |
|------|-------------|
| `merchants` | Stores and services (requires `subType`) |
| `apps` | Applications built on BTCPay Server |
| `hosted-btcpay` | BTCPay Server hosting providers (supports optional `country`) |
| `non-profits` | Non-profit organizations |

### Merchant subtypes

`3d-printing`, `adult`, `appliances-furniture`, `art`, `books`, `cryptocurrency-paraphernalia`, `domains-hosting-vpns`, `education`, `electronics`, `fashion`, `food`, `gambling`, `gift-cards`, `health-household`, `holiday-travel`, `jewelry`, `payment-services`, `pets`, `services`, `software-video-games`, `sports`, `tools`

### Country codes (for `hosted-btcpay`)

Use [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes (e.g. `US`, `BR`, `IT`) or `GLOBAL` for providers without a specific region. The UI converts these to flag emojis automatically.

### Public submissions

End users submit new entries via the **Submit a Store** button on the site, which opens a pre-filled GitHub Issue. Maintainers review the issue and manually add the entry to `merchants.json`.

## Link checker

A maintenance script to detect dead merchant URLs and optionally remove them:

```bash
npm run check-links
```

By default it runs interactively — checks all URLs, prints a report, and prompts before removing dead entries.

### Flags

| Flag | Description |
|------|-------------|
| `--no-interactive` | Skip the removal prompt (report only) |
| `--verbose`, `-v` | Also list alive entries in the report |
| `--timeout=N` | Request timeout in ms (default: `15000`) |
| `--concurrency=N` | Parallel requests (default: `5`) |

### Examples

```bash
# Report only, no changes
npm run check-links -- --no-interactive

# Verbose report with custom timeout
npm run check-links -- --verbose --timeout=20000

# Faster scan with more concurrency
npm run check-links -- --concurrency=10
```

### How classification works

Each URL is tried up to 3 times (with 3s delay between retries):

- **Dead** (auto-removable): DNS lookup failed, connection refused, request timeout after all retries, HTTP 404/410
- **Warning** (manual review): SSL certificate errors, Cloudflare blocks (HTTP 403, 5xx, 520-530), connect timeouts (TCP-level bot blocking)
- **Alive**: HTTP 2xx, redirects resolving to 2xx

## Project structure

```
src/
  data/
    merchants.json      # All directory entries
    categories.ts       # Types, subtypes, country helpers, Merchant interface
    supporters.ts       # Foundation supporter logos
  components/
    DirectoryFilters.tsx # Sidebar category + subtype + country filters
    MerchantCard.tsx     # Individual entry card
    SubmitForm.tsx       # "Submit a Store" dialog form
    Navbar.tsx           # Top navigation bar
    Footer.tsx           # Site footer
  pages/
    Directory.tsx        # Main directory page (filtering, search, infinite scroll)
scripts/
  check-links.ts        # Dead link checker script
```
