# Freelance Site Rebuild — matthewsaxe.com

**Date:** 2026-06-16
**Status:** Approved

## Goal

Rebuild matthewsaxe.com from a personal/hobby site into a focused freelance site that converts small business owners into leads. The primary conversion action is filling out the contact form.

## Target audience

Small business owners with manual, repetitive processes they want automated. Non-technical. They care about outcomes, not tech stacks.

## Page structure

Single long-scroll page with the following sections in order:

1. **Hero**
2. **Services**
3. **How It Works**
4. **Past Work**
5. **Contact Form**
6. **Footer**

Nav links: Services, Work, Contact.

## Section specs

### Hero

- Keep existing `Hero` component and `TextCycler`
- Intro line: "Hello, I'm"
- Name: "Matt Saxe"
- Cycling phrases: "I automate your workflows.", "I build custom software.", "I solve business problems."
- Description: "I'm a software engineer in Dallas, TX helping small businesses stop doing things manually. Tell me your problem — I'll build the solution."
- CTA button: "Get In Touch" → scrolls to `#contact`
- Keep `Watermark` component with text "Saxe"

### Services

Three cards in a row (stacked on mobile), each with:
- Icon (from `react-icons`)
- Short headline
- 2–3 sentence outcome-focused description

| Service | Icon | Headline | Description |
|---|---|---|---|
| Process Automation | `LuZap` | Stop doing it manually | If your team copies data between spreadsheets, sends the same emails every week, or chases approvals by hand — I can automate it. |
| Custom Web Apps | `LuLayoutDashboard` | Software built for your business | Off-the-shelf tools don't always fit. I build internal tools, dashboards, and client-facing apps tailored to how your business actually works. |
| AI-Powered Workflows | `LuBrain` | Let AI do the heavy lifting | Use AI to summarize documents, extract data, route decisions, or generate content — integrated into your existing workflow. |

### How It Works

`SectionHeader` with prefix "02." and title "How It Works", anchor `process`.

Three numbered steps in a horizontal row (stacked on mobile):

1. **Tell me your problem** — Fill out the contact form and describe what you're trying to fix or build. No jargon needed.
2. **I scope and quote it** — We have a quick call. I ask questions, figure out the best solution, and give you a clear price.
3. **We build and ship** — I build it, keep you updated, and deliver something that works.

### Past Work

Reuse existing `Project` component. Show only client-facing projects:

- The Go-Getters (React, Next.js, Strapi)
- The Villas at Hidden Acres (React, Gatsby, Sass)

Remove all personal/side projects (ISC, breezy.js, watch face, personal site versions).

`SectionHeader` with prefix "03." and title "Past Work".

### Contact Form

Fields:
- Name (text input, required)
- Email (email input, required)
- Message / "Describe your problem" (textarea, required, min 20 chars)
- Submit button: "Send Message"

On submit: POST to `/api/contact` Next.js route handler. The handler sends an email to `matt@matthewsaxe.com` via **Resend** (preferred) or Nodemailer as fallback. Show inline success/error state — no page redirect.

Form validation: client-side required field check before submit. Server returns 200 on success, 400/500 on failure.

Email sending uses Resend SDK. API key stored in env var `RESEND_API_KEY`.

### Footer

Minimal. Contains:
- Name / copyright line
- Links: LinkedIn, GitHub, Email

No quotes ticker. No watermark.

### AppBar / Nav

Nav items: Services (`/#services`), Work (`/#work`), Contact (`/#contact`).

Remove the quotes ticker from the AppBar entirely.

Socials in `SocialBar`: GitHub, LinkedIn, Email only (Twitter, Instagram, Spotify removed).

## TypeScript conversion

Convert the two remaining JS config files:
- `next.config.js` → `next.config.ts`
- `postcss.config.js` → `postcss.config.ts`

## Files to delete

- `src/app/blog/page.tsx`
- `src/app/software/page.tsx`

## Files to keep / modify

- All existing components are kept and updated in-place
- `Watermark` component — kept as-is
- `TextCycler` — kept as-is
- `Project` — kept as-is
- `SectionHeader` — kept as-is
- `Hero` — content updated via props, component unchanged
- `AppBar` — remove quotes prop/feature
- `Footer` — simplified content
- `layout.tsx` — update nav items, remove quotes array

## Color system

No changes. Keep existing Tailwind config:
- Primary accent: `#ed6d3c`
- Dark mode: class-based
- Background, text token names unchanged

## Out of scope

- Blog
- Reading list
- Testimonials
- Pricing page
- CMS integration
- Analytics
