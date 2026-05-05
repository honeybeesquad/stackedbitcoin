# Stacked SEO Pages — Image & Video Asset Plan

## General Guidelines
- **Format:** WebP for images (with PNG fallback), MP4 for video
- **Resolution:** 2x retina (images displayed at 600px should be 1200px source)
- **Alt text:** Always descriptive, include "Stacked Bitcoin" and NZ context
- **No AI-generated placeholder images** — use real Stacked product screenshots
- **File naming:** `page-slug-description.webp` (e.g., `buy-bitcoin-nz-step-1-signup.webp`)

---

## Page-by-Page Recommendations

### 1. how-to-buy-bitcoin-nz
**Already has:** Video walkthrough (mp4 + poster), needs actual assets

| Asset | Placement | Why | How to Create |
|-------|-----------|-----|---------------|
| `how-to-buy-bitcoin-nz-walkthrough.mp4` | Below Step 4 card, centered in `video-wrap` div (already coded) | Shows the actual Stacked onboarding flow — builds trust and reduces anxiety about the process | Screen-record the Stacked signup → verify → buy flow using QuickTime. Keep under 90 seconds. Mute system audio. Add no voiceover — let the UI speak. Caption key steps. Already has `<video controls playsinline autoplay muted>` |
| `how-to-buy-bitcoin-nz-poster.jpg` | Video poster image | Prevents blank player before play. Shows a frame from the walkthrough | Screenshot a key frame from the video — ideally the "buy complete" confirmation screen |
| `buy-step-1-create-account.webp` | Inside Step 1 card (replace text-only card with image+text) | Visual reinforcement of each step reduces cognitive load | Screenshot of Stacked signup page with NZ fields visible. Blur any personal info shown |
| `buy-step-2-get-app.webp` | Inside Step 2 card | Shows app store listing — builds legitimacy | Screenshot of Stacked on NZ App Store or Google Play listing |
| `buy-step-3-hit-buy.webp` | Inside Step 3 card | Shows the buy interface — demystifies the process | Screenshot of Stacked buy screen with NZD amount input visible |

### 2. cheapest-way-to-buy-bitcoin-nz
**High-value page** — comparison-focused, needs visual data reinforcement

| Asset | Placement | Why | How to Create |
|-------|-----------|-----|---------------|
| `cheapest-fee-comparison-chart.webp` | After the "fee stack" explanation section | Visual comparison of total cost (fee + spread + deposit) across platforms. Hard to explain in text alone | Create a simple bar chart comparing: Stacked vs typical multi-coin exchange vs P2P. Show total cost for a $500 NZD buy. Use Stacked brand colors. Keep it clean — no chartjunk |
| `cheapest-buyer-checklist.webp` | Beside the "Buyer Checklist" section | Quick visual reference for what to check — scannable | Design a simple 3-item checklist graphic: ① NZD pricing ② Transparent fees ③ Self-custody. Use teal checkmarks on dark background |

### 3. what-is-self-custody
**Educational page** — needs concept illustrations

| Asset | Placement | Why | How to Create |
|-------|-----------|-----|---------------|
| `self-custody-comparison-diagram.webp` | Beside the "Self-custody vs exchange custody" compare table | Visual metaphor for "your keys vs their keys" — more memorable than text | Simple diagram: two columns. Left: "You" with a key icon → Bitcoin. Right: "Exchange" with a building icon → "IOU (not your Bitcoin)". Dark theme, minimal |
| `recovery-phrase-security.webp` | Beside the "Security tips" section | Shows what a recovery phrase backup looks like — makes the advice concrete | Photo of a hand-written recovery phrase card (use example words, never real ones) next to a metal backup plate. Shows "this is what we mean by offline backup" |

### 4. bitcoin-wallet-nz
**Product page** — needs app screenshots

| Asset | Placement | Why | How to Create |
|-------|-----------|-----|---------------|
| `wallet-hero-mockup.webp` | Replace the hero app store buttons area — show the actual wallet | Shows the product instead of just describing it. Hero images convert better than text CTAs | Screenshot of Stacked wallet home screen on an iPhone frame. Show balance, Lightning and on-chain tabs visible. No personal data |
| `wallet-feature-buy.webp` | Inside "Buy Bitcoin" feature card | Each card gets its own visual — makes the 6-feature grid scannable | Crop of the buy screen from the wallet app |
| `wallet-feature-lightning.webp` | Inside "Lightning Payments" feature card | Shows Lightning payment UI | Crop of a Lightning invoice payment screen |
| `wallet-feature-keys.webp` | Inside "Full Control" feature card | Visual proof of self-custody | Screenshot of the recovery phrase setup screen (with placeholder words) |
| `wallet-app-store-badges.webp` | Replace inline SVG app store buttons with proper badge images | Native app store badges have higher trust and recognition than custom SVGs | Download official Apple App Store and Google Play badge assets. Stack vertically on mobile, horizontally on desktop |

### 5. bitcoin-savings-plan-nz
**Conversion page** — needs to show the Autostack feature

| Asset | Placement | Why | How to Create |
|-------|-----------|-----|---------------|
| `savings-plan-autostack-setup.webp` | After "How to Start a Bitcoin Savings Plan" steps | Shows the actual Autostack setup UI — makes "set it and forget it" tangible | Screenshot of Stacked Autostack configuration screen showing frequency options (weekly/monthly) and amount input |
| `savings-plan-dca-chart.webp` | After "Bitcoin Savings Plan vs Traditional Savings" compare table | Visual DCA explanation — shows how regular buying smooths out volatility | Simple line chart: Bitcoin price (volatile) over 12 months, with dots showing weekly buy points. Optional: overlay average purchase price line. Stacked brand colors |
| `savings-plan-projection.webp` | Before the final CTA | Shows potential accumulation over time — motivates action | Simple bar or area chart showing "Amount stacked" growing over 1/3/5 years with weekly $50 buys. Include disclaimer: "Past performance doesn't guarantee future results. This is illustrative only." |

### 6. bitcoin-exchange-nz
**Comparison page** — needs trust signals

| Asset | Placement | Why | How to Create |
|-------|-----------|-----|---------------|
| `exchange-fsp-badge.webp` | Beside "What Makes a Good Bitcoin Exchange" section | Visual trust signal — FSP registration badge | Design a clean badge showing "FSP-Registered" with the FSP number. Or screenshot of the FSP register entry |
| `exchange-comparison-table.webp` | As alternative to the text compare table | Some users scan images faster than tables | Design a visual version of "Bitcoin-Only vs Multi-Coin" comparison. Could be a simple side-by-side with checkmarks |

### 7. sell-bitcoin-nz
| Asset | Placement | Why | How to Create |
|-------|-----------|-----|---------------|
| `sell-bitcoin-flow.webp` | After "How to Sell Bitcoin in New Zealand" section | Visual flow diagram: "Bitcoin → Stacked → NZD → Bank Account". Reduces perceived complexity | Simple 3-step flow graphic with icons: BTC icon → Stacked logo → NZD icon → Bank icon. Horizontal on desktop, vertical on mobile |
| `sell-bitcoin-interface.webp` | Beside the sell methods list | Shows the actual sell interface | Screenshot of Stacked sell screen with NZD amount and bank account details (blur specifics) |

### 8. lightning-wallet-nz
| Asset | Placement | Why | How to Create |
|-------|-----------|-----|---------------|
| `lightning-vs-onchain-speed.webp` | Beside "Lightning vs On-Chain Bitcoin" compare table | Visual speed comparison: seconds vs minutes | Simple animation concept (or static with visual cues): Lightning = ⚡ "Instant", On-chain = ⏱ "10-60 min". Show a payment going through instantly vs pending |
| `lightning-payment-demo.webp` | After "How to Get a Lightning Wallet in NZ" steps | Shows a Lightning invoice being paid — makes it real | Screenshot of a Lightning invoice QR code being scanned, or the payment confirmation screen |

### 9. bitcoin-for-business-nz
| Asset | Placement | Why | How to Create |
|-------|-----------|-----|---------------|
| `business-payment-flow.webp` | After "How to Accept Bitcoin Payments in NZ" | Shows merchant checkout flow with Bitcoin option | Mockup of a point-of-sale screen or checkout page showing "Pay with Bitcoin" as an option. Could use a phone or tablet frame |
| `business-settlement-diagram.webp` | Beside "Bitcoin Payment Options for NZ Businesses" | Visual of Lightning settlement: Customer pays BTC → auto-convert to NZD → lands in business bank account | Simple 3-step flow diagram with icons |

### 10. pay-bills-with-bitcoin-nz
| Asset | Placement | Why | How to Create |
|-------|-----------|-----|---------------|
| `pay-bills-lightning-demo.webp` | After "How to Pay Bills With Bitcoin in New Zealand" | Shows Lightning bill payment in action | Screenshot of a Lightning wallet sending a payment with a bill reference. Could simulate a power or internet bill payment |
| `pay-bills-speed-comparison.webp` | Beside "Why Use Bitcoin for Bill Payments" | Visual speed/cost comparison: Lightning vs Bank Transfer | Simple comparison card: Lightning (seconds, <1¢) vs Bank Transfer (1-3 days, $0-5). Visual emphasis on the speed difference |

### 11. buy-bitcoin-nz
| Asset | Placement | Why | How to Create |
|-------|-----------|-----|---------------|
| `buy-bitcoin-nz-hero.webp` | Replace or complement the hero section | Hero image with Bitcoin + NZ elements builds immediate relevance | Bitcoin symbol with subtle NZ elements (silver fern, kiwi motif). Keep it abstract and clean — no literal "money" imagery |
| `buy-bitcoin-platform-checklist.webp` | Beside "What to Look for in a NZ Bitcoin Platform" | Visual checklist — scannable version of the 5 criteria | 5-item checklist graphic with checkmarks: Bitcoin-only, NZD support, FSP registered, Self-custody, Auto-stacking |

---

## Video Recommendations

### Walkthrough Video (reusable across multiple pages)
**File:** `stacked-buy-walkthrough.mp4`
**Duration:** 60-90 seconds
**Used on:** how-to-buy-bitcoin-nz, buy-bitcoin-nz, cheapest-way-to-buy-bitcoin-nz

**What to show:**
1. Signup screen → fill in details (blur personal info)
2. Verification screen → "verification complete" confirmation
3. Dashboard → tap "Buy Bitcoin"
4. Enter amount in NZD → choose payment method
5. Confirmation screen → "Bitcoin purchased"

**How to create:**
- Use QuickTime Screen Recording on iPhone or Mac
- Create a test account with no real funds
- Record at 2x resolution (750×1334 minimum for phone)
- No audio needed — UI should tell the story
- Add simple text overlays for each step (keep on brand: Gotham, white text, subtle background)
- Export as MP4 H.264, keep under 5MB

### Autostack Setup Video
**File:** `stacked-autostack-setup.mp4`
**Duration:** 30-45 seconds
**Used on:** bitcoin-savings-plan-nz

**What to show:**
1. Dashboard → tap "Autostack"
2. Choose frequency (weekly)
3. Set amount ($50)
4. Confirmation → "Autostack active"
5. Show the "next buy" countdown

---

## Priority Order
1. **how-to-buy-bitcoin-nz walkthrough video** — already coded, highest impact
2. **bitcoin-wallet-nz app screenshots** — product page, needs visuals to convert
3. **what-is-self-custody diagram** — educational, needs the concept illustrated
4. **bitcoin-savings-plan-nz Autostack screenshots** — shows the product feature
5. **cheapest-way-to-buy-bitcoin-nz fee chart** — data-driven page, needs data viz
6. Everything else — add as bandwidth allows
