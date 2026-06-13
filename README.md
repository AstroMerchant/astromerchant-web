# AstroMerchant Web

The merchant-facing frontend application for the AstroMerchant Stellar-powered payment gateway.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State/Data:** React Query, Axios
- **Auth:** NextAuth.js
- **QR Payments:** qrcode.react
- **Charts:** Recharts
- **Icons:** lucide-react

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page |
| `/login` | Merchant login |
| `/register` | Merchant registration |
| `/dashboard` | Revenue overview, stats, recent transactions |
| `/payments` | Payment tracking and management |
| `/invoices` | Invoice creation and management |
| `/analytics` | Revenue charts, payment methods, success rates |
| `/settings` | Merchant profile and wallet settings |
| `/api-keys` | API key generation and management |

## Getting Started

```bash
npm install
npm run dev
```

## Environment

```env
NEXT_PUBLIC_API_URL=http://localhost:4000
NEXT_PUBLIC_STELLAR_API_URL=http://localhost:4001
```
