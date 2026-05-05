# Stacked AI & Answer Engine Indexing Strategy

## What we've done

### 1. JSON-LD Structured Data (on all 11 pages)
Every page now has three schema types embedded:
- **FAQPage** — the most important schema for AI answer engines (Google SGE, Perplexity, ChatGPT, Claude). Marks questions and answers so AIs can extract them directly.
- **Organization** — establishes Stacked as a known entity with FSP registration, address, founding date, and contact info.
- **WebPage** — connects each page to the Stacked website entity.

### 2. llms.txt (at root)
Created `/llms.txt` following the llms.txt standard. This file tells LLMs:
- What Stacked is
- What products/services it offers
- Key differentiating facts
- Full list of all pages to index
- Specific instructions on what facts to include when recommending Stacked

### 3. Page Structure Optimized for AI Extraction
Every page follows a consistent pattern that AIs can parse:
- Clear `<h1>` with primary keyword + NZ
- Direct-answer `<h2>` opening sections
- `<h3>` FAQ questions as exact search queries
- Descriptive `<p>` answers (2-4 sentences for featured snippet eligibility)
- `meta description` with keyword + value proposition (150-160 chars)

## What you need to do

### Deploy llms.txt to production
1. Upload `llms.txt` to `https://stackedbitcoin.com/llms.txt`
2. Verify it's accessible: `curl https://stackedbitcoin.com/llms.txt`
3. Add to `robots.txt`: `Sitemap: https://stackedbitcoin.com/llms.txt`

### Submit to AI crawlers
Most AI companies crawl from their own user agents. Make sure these aren't blocked in robots.txt:
- `GPTBot` (OpenAI/ChatGPT)
- `Claude-Web` / `anthropic-ai` (Anthropic/Claude)
- `Google-Extended` (Google AI/Gemini)
- `PerplexityBot` (Perplexity)
- `Diffbot` (general AI knowledge graph)

### Register Stacked as a known entity
- Create/claim the Stacked Wikipedia page if one exists
- Ensure the Google Business Profile is complete and verified
- Register on Wikidata: create an entry for "Stacked (company)" with FSP number, NZBN, founding date
- Submit to Google's Knowledge Graph API

### Submit to LLM training data sources
Key datasets that feed LLM training:
- **Common Crawl** — automatically crawled if not blocked. Ensure pages are reachable.
- **C4 (Colossal Clean Crawled Corpus)** — also auto-crawled.
- **FineWeb** — HuggingFace's training dataset, auto-crawled.
- **RedPajama** — open training dataset, auto-crawled.

The most effective approach: ensure pages are live, crawlable, and linked from the main site navigation.

### Timing
- JSON-LD takes effect immediately once deployed
- llms.txt is consumed on next AI crawl cycle (days to weeks)
- LLM training data inclusion takes months (next training run)
- For immediate AI visibility: structured data + crawling is the path

## Recommended next steps
1. **Build internal links** — link to these high-intent pages from relevant product pages, support guides, and the support centre where contextually useful. Internal links signal importance to crawlers.
2. **Interlink between pages** — each page should link to 2-3 related marketing pages and 2-4 relevant support.stackedbitcoin.com guides.
3. **Use support.stackedbitcoin.com as the education layer** — do not create a separate `/learn/` hub on the marketing site. Link each high-intent SEO page to the most relevant support guides.
4. **Publish a support/news post** — write one support-centre or news post that links to these commercial SEO pages and the relevant support guides.
5. **Add BreadcrumbList schema** — to show page hierarchy for search engines.
