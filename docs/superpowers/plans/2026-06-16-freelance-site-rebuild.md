# Freelance Site Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild matthewsaxe.com into a focused freelance site with Hero → Services → How It Works → Past Work → Contact Form sections on a single scroll page.

**Architecture:** Single Next.js App Router page (`src/app/page.tsx`) composes all sections as imported React components. A `/api/contact` route handler handles form submission and sends email via Resend. All components are server components except `ContactForm` (client, needs form state) and existing client components (`AppBar`, `SocialBar`).

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, @tailwindcss/postcss, Resend (email), react-icons (lu prefix for Lucide icons), MUI (SwipeableDrawer in NavDrawer only), Yarn 4, Node 22.

## Global Constraints

- Node version: 22.x (`nvm use 22` before running any commands)
- Package manager: Yarn 4 (`yarn`, not `npm`)
- Build command: `source ~/.nvm/nvm.sh && nvm use 22 && yarn build`
- Dev command: `source ~/.nvm/nvm.sh && nvm use 22 && yarn dev`
- Tailwind colors (do not change): primary `#ed6d3c`, dark bg `#252422`, light bg `#e5e5e5`, primary-text `#0a0a0a`, secondary-text `#525252`, dark-primary-text `#e5e7eb`, dark-secondary-text `#8b8b8b`
- All config token names must match `tailwind.config.ts` exactly (e.g. `text-primary`, `bg-dark-primary-bg`)
- No new dependencies beyond `resend`
- No test framework is set up — verification is `yarn build` passing + visual check via `yarn dev`
- Commit after every task
- Email destination: `matt@matthewsaxe.com`
- Resend API key env var: `RESEND_API_KEY` (in `.env.local`)

---

## File Map

| File | Action | Responsibility |
|---|---|---|
| `next.config.ts` | Create (replaces `.js`) | Next.js config with `images.unoptimized` |
| `postcss.config.ts` | Create (replaces `.js`) | PostCSS with `@tailwindcss/postcss` |
| `next.config.js` | Delete | Replaced by `.ts` |
| `postcss.config.js` | Delete | Replaced by `.ts` |
| `src/app/blog/page.tsx` | Delete | Dead stub page |
| `src/app/software/page.tsx` | Delete | Replaced by Past Work section on home |
| `src/app/globals.css` | Modify | Add `@config` to load tailwind.config.ts in v4 |
| `src/app/layout.tsx` | Modify | Update nav items, metadata, remove quotes array |
| `src/app/page.tsx` | Rewrite | Compose all sections |
| `src/app/api/contact/route.ts` | Create | POST handler — validate, send email via Resend |
| `src/components/AppBar.tsx` | Modify | Remove `quotes` prop and all quote-related code |
| `src/components/NavDrawer.tsx` | Modify | Remove `quotes` prop and rendered quote line |
| `src/components/Footer.tsx` | Modify | Add GitHub, LinkedIn, Email links |
| `src/components/ServiceCard.tsx` | Create | Single service card (icon + headline + body) |
| `src/components/ServicesSection.tsx` | Create | Grid of 3 `ServiceCard`s with `SectionHeader` |
| `src/components/HowItWorks.tsx` | Create | 3-step numbered process with `SectionHeader` |
| `src/components/ContactForm.tsx` | Create | Client form with validation + submit + feedback |

---

### Task 1: TypeScript config conversion + file cleanup

**Files:**
- Create: `next.config.ts`
- Create: `postcss.config.ts`
- Delete: `next.config.js`, `postcss.config.js`, `src/app/blog/page.tsx`, `src/app/software/page.tsx`
- Modify: `src/app/globals.css`

**Interfaces:**
- Produces: nothing consumed by other tasks — just housekeeping

- [ ] **Step 1: Create `next.config.ts`**

```ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
```

- [ ] **Step 2: Create `postcss.config.ts`**

```ts
export default {
    plugins: {
        '@tailwindcss/postcss': {},
    },
};
```

- [ ] **Step 3: Delete the old JS config files and dead pages**

```bash
rm next.config.js postcss.config.js \
   src/app/blog/page.tsx \
   src/app/software/page.tsx \
   src/app/reading/_page.tsx \
   src/components/PlatformIcon.tsx
```

- [ ] **Step 4: Update `src/app/globals.css` to load Tailwind config in v4**

Tailwind 4 requires `@config` to pick up a JS config file. Replace the existing contents:

```css
@import "tailwindcss";
@config "../../tailwind.config.ts";
```

- [ ] **Step 5: Verify build passes**

```bash
source ~/.nvm/nvm.sh && nvm use 22 && yarn build
```

Expected: build succeeds with no TypeScript errors. If you see "Module not found" for blog or software, the delete didn't work — check the paths.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "chore: convert configs to TypeScript, delete dead pages, fix Tailwind 4 import"
```

---

### Task 2: AppBar + NavDrawer — remove quotes feature

**Files:**
- Modify: `src/components/AppBar.tsx`
- Modify: `src/components/NavDrawer.tsx`

**Interfaces:**
- Consumes: nothing
- Produces: `AppBarProps` no longer has `quotes`; `NavDrawerProps` no longer has `quotes` — Task 3 (`layout.tsx`) depends on this

- [ ] **Step 1: Remove `quotes` from `AppBar.tsx`**

Replace the full file contents:

```tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import ThemeToggler from '@/components/ThemeToggler';
import { useEffect, useState } from 'react';
import NavDrawer from '@/components/NavDrawer';

type NavItem = {
    label: string;
    url: string;
};

type AppBarProps = {
    navItems: Array<NavItem>;
    socials: Array<{ link: string; icon: import('react').ReactElement }>;
};

export default function AppBar({ navItems, socials }: AppBarProps) {
    const [scrollPos, setScrollPos] = useState(100);
    const [conditionalStyles, setConditionalStyles] = useState('');
    const [navDrawerOpen, setNavDrawerOpen] = useState(false);

    const toggleNavDrawer = (override: boolean) => {
        override === undefined ? setNavDrawerOpen(!navDrawerOpen) : setNavDrawerOpen(override);
    };

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const currentScrollPos = window.scrollY;
            const styles = [];

            if (scrollPos > currentScrollPos || currentScrollPos < 30) styles.push('top-0');
            else styles.push('-top-32');

            if (currentScrollPos < 30) {
                styles.push('shadow-none');
                styles.push('py-6');
                styles.push('h-32');
            } else {
                styles.push('bg-primary-bg dark:bg-dark-primary-bg');
                styles.push('shadow-2xl');
                styles.push('py-8');
                styles.push('h-24');
            }

            setConditionalStyles(styles.join(' '));
            setScrollPos(currentScrollPos);
        });
    });

    useEffect(() => {
        const handleresize = () => {
            if (window.innerWidth > 768) toggleNavDrawer(false);
        };
        window.addEventListener('resize', handleresize);
    });

    return (
        <div className={`fixed flex justify-between px-6 py-8 items-center w-full -delay-100 duration-500 transition-all z-50 ${conditionalStyles}`}>
            <Link href='/' className='flex items-center gap-2'>
                <Image src='/logo.svg' alt='My logo' width={40} height={50} />
            </Link>

            <div className='md:hidden' onClick={() => setNavDrawerOpen(true)}>
                <Image src='/menu.svg' alt='Menu svg' width={40} height={50} />
                <NavDrawer open={navDrawerOpen} navItems={navItems} socials={socials} toggleNavDrawer={toggleNavDrawer} />
            </div>

            <div className='hidden md:flex gap-4 items-center'>
                {navItems.map((navItem: NavItem, ind: number) => (
                    <Link href={navItem.url} key={navItem.label} className='text-primary-text dark:text-dark-primary-text group'>
                        <div className='group-hover:animate-bounce group-hover:text-secondary-text ease-in-out transition transform'>
                            <span className='text-primary font-bold'>{`00${ind}`.slice(-2)}.&nbsp;</span>
                            <span>{navItem.label}</span>
                        </div>
                    </Link>
                ))}
                <ThemeToggler />
            </div>
        </div>
    );
}
```

- [ ] **Step 2: Remove `quotes` from `NavDrawer.tsx`**

Replace the full file contents:

```tsx
import { Link, SwipeableDrawer } from '@mui/material';
import SocialBar from './SocialBar';
import ThemeToggler from '@/components/ThemeToggler';
import { LuPanelRightClose } from 'react-icons/lu';

type NavItem = {
    label: string;
    url: string;
};

type NavDrawerProps = {
    open: boolean;
    toggleNavDrawer: (open: boolean) => void;
    navItems: Array<NavItem>;
    socials: Array<{ link: string; icon: import('react').ReactElement }>;
};

export default function NavDrawer({ open, navItems, socials, toggleNavDrawer }: NavDrawerProps) {
    return (
        <SwipeableDrawer
            anchor='right'
            open={open}
            onClose={() => toggleNavDrawer(false)}
            onOpen={() => toggleNavDrawer(true)}
            sx={{ '.MuiLink-root': { textDecoration: 'none' } }}
            onClick={e => e.stopPropagation()}
        >
            <div className='flex min-w-6xl bg-primary-bg dark:bg-dark-primary-bg p-6 h-full w-full justify-between align-start'>
                <div className='pr-36 flex flex-col gap-3'>
                    {navItems.map((navItem: NavItem, ind: number) => (
                        <div key={navItem.label} onClick={() => toggleNavDrawer(false)}>
                            <Link href={navItem.url} className='text-primary-text dark:text-dark-primary-text group'>
                                <div className='group-hover:text-secondary-text ease-in-out flex flex-col'>
                                    <span className='text-primary font-bold'>{`00${ind}`.slice(-2)}.&nbsp;</span>
                                    <span className='font-thin'>{navItem.label}</span>
                                </div>
                            </Link>
                        </div>
                    ))}
                    <ThemeToggler />
                    <SocialBar socials={socials} location='right' fixed={false} desktopOnly={false} />
                </div>
                <div>
                    <div className='text-2xl text-primary p-1 cursor-pointer' onClick={() => toggleNavDrawer(false)}>
                        <LuPanelRightClose />
                    </div>
                </div>
            </div>
        </SwipeableDrawer>
    );
}
```

- [ ] **Step 3: Verify build passes**

```bash
source ~/.nvm/nvm.sh && nvm use 22 && yarn build
```

Expected: build succeeds with no TypeScript errors.

- [ ] **Step 4: Commit**

```bash
git add src/components/AppBar.tsx src/components/NavDrawer.tsx
git commit -m "feat: remove quotes feature from AppBar and NavDrawer"
```

---

### Task 3: Update layout.tsx — nav, metadata, remove quotes

**Files:**
- Modify: `src/app/layout.tsx`

**Interfaces:**
- Consumes: `AppBarProps` without `quotes` (from Task 2)
- Produces: global nav with 3 items (Services, Work, Contact), updated page metadata

- [ ] **Step 1: Replace `src/app/layout.tsx`**

```tsx
import AppBar from '@/components/AppBar';
import './globals.css';
import type { Metadata } from 'next';
import Providers from '@/components/Providers';
import SocialBar from '@/components/SocialBar';
import { MdEmail } from 'react-icons/md';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export const metadata: Metadata = {
    title: 'Matt Saxe | Software Engineer & Freelancer',
    description: "I'm a software engineer in Dallas, TX helping small businesses automate processes and solve real problems with code.",
};

const navItems = [
    { label: 'Services', url: '/#services' },
    { label: 'Work', url: '/#work' },
    { label: 'Contact', url: '/#contact' },
];

const socials = [
    { link: 'https://github.com/mattsaxe17', icon: <BsGithub /> },
    { link: 'https://www.linkedin.com/in/mattsaxe17/', icon: <BsLinkedin /> },
    { link: 'mailto:matt@matthewsaxe.com', icon: <MdEmail /> },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en' className='dark'>
            <body className='bg-primary-bg dark:bg-dark-primary-bg max-w-full overflow-x-hidden'>
                <Providers>
                    <AppBar navItems={navItems} socials={socials} />
                    {children}
                    <SocialBar desktopOnly fixed location='right' socials={socials} rotateable />
                </Providers>
            </body>
        </html>
    );
}
```

- [ ] **Step 2: Verify build passes**

```bash
source ~/.nvm/nvm.sh && nvm use 22 && yarn build
```

Expected: build succeeds. Nav should show Services / Work / Contact.

- [ ] **Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat: update nav items and metadata for freelance site"
```

---

### Task 4: Footer — add social links

**Files:**
- Modify: `src/components/Footer.tsx`

**Interfaces:**
- Consumes: nothing
- Produces: `Footer` component with copyright + GitHub, LinkedIn, Email links

- [ ] **Step 1: Replace `src/components/Footer.tsx`**

```tsx
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const links = [
    { href: 'https://github.com/mattsaxe17', icon: <BsGithub />, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/mattsaxe17/', icon: <BsLinkedin />, label: 'LinkedIn' },
    { href: 'mailto:matt@matthewsaxe.com', icon: <MdEmail />, label: 'Email' },
];

export default function Footer() {
    return (
        <footer className='h-24 px-6 w-screen bg-primary-bg dark:bg-dark-primary-bg border-t-2 border-t-secondary-text dark:border-t-dark-secondary-text text-secondary-text dark:text-dark-secondary-text flex justify-between items-center'>
            <p className='text-sm'>© {new Date().getFullYear()} Matthew Saxe</p>
            <div className='flex gap-4 text-xl'>
                {links.map(({ href, icon, label }) => (
                    <a key={label} href={href} target='_blank' aria-label={label} className='hover:text-primary transition-colors'>
                        {icon}
                    </a>
                ))}
            </div>
        </footer>
    );
}
```

- [ ] **Step 2: Verify build passes**

```bash
source ~/.nvm/nvm.sh && nvm use 22 && yarn build
```

Expected: build succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "feat: add social links to footer"
```

---

### Task 5: ServiceCard + ServicesSection components

**Files:**
- Create: `src/components/ServiceCard.tsx`
- Create: `src/components/ServicesSection.tsx`

**Interfaces:**
- Consumes: `SectionHeader` component (already exists at `src/components/SectionHeader.tsx`)
- Produces:
  - `ServiceCard({ icon: ReactElement, headline: string, body: string }): JSX`
  - `ServicesSection(): JSX` — renders 3 hardcoded cards with `SectionHeader` prefix "01." title "Services" anchor "services"

- [ ] **Step 1: Create `src/components/ServiceCard.tsx`**

```tsx
import { ReactElement } from 'react';

type ServiceCardProps = {
    icon: ReactElement;
    headline: string;
    body: string;
};

export default function ServiceCard({ icon, headline, body }: ServiceCardProps) {
    return (
        <div className='flex flex-col gap-4 p-8 rounded-lg bg-primary-bg dark:bg-dark-primary-bg shadow-lg border border-secondary-text/20'>
            <div className='text-4xl text-primary'>{icon}</div>
            <h3 className='text-xl font-bold text-primary-text dark:text-dark-primary-text'>{headline}</h3>
            <p className='text-secondary-text dark:text-dark-secondary-text leading-relaxed'>{body}</p>
        </div>
    );
}
```

- [ ] **Step 2: Create `src/components/ServicesSection.tsx`**

```tsx
import { LuZap, LuLayoutDashboard, LuBrain } from 'react-icons/lu';
import SectionHeader from '@/components/SectionHeader';
import ServiceCard from '@/components/ServiceCard';

const services = [
    {
        icon: <LuZap />,
        headline: 'Stop doing it manually',
        body: "If your team copies data between spreadsheets, sends the same emails every week, or chases approvals by hand — I can automate it. You'll get time back and fewer mistakes.",
    },
    {
        icon: <LuLayoutDashboard />,
        headline: 'Software built for your business',
        body: "Off-the-shelf tools don't always fit. I build internal tools, dashboards, and client-facing apps tailored to how your business actually works.",
    },
    {
        icon: <LuBrain />,
        headline: 'Let AI do the heavy lifting',
        body: 'Use AI to summarize documents, extract data, route decisions, or generate content — integrated into your existing workflow, not bolted on.',
    },
];

export default function ServicesSection() {
    return (
        <section className='px-6 md:px-12 flex flex-col items-center max-w-screen-xl mx-auto py-24'>
            <SectionHeader prefix='01.' title='Services' anchor='services' />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full'>
                {services.map(service => (
                    <ServiceCard key={service.headline} icon={service.icon} headline={service.headline} body={service.body} />
                ))}
            </div>
        </section>
    );
}
```

- [ ] **Step 3: Verify build passes**

```bash
source ~/.nvm/nvm.sh && nvm use 22 && yarn build
```

Expected: build succeeds. The components aren't rendered yet — that happens in Task 8.

- [ ] **Step 4: Commit**

```bash
git add src/components/ServiceCard.tsx src/components/ServicesSection.tsx
git commit -m "feat: add ServiceCard and ServicesSection components"
```

---

### Task 6: HowItWorks component

**Files:**
- Create: `src/components/HowItWorks.tsx`

**Interfaces:**
- Consumes: `SectionHeader` (already exists)
- Produces: `HowItWorks(): JSX` — renders 3-step process with `SectionHeader` prefix "02." title "How It Works" anchor "process"

- [ ] **Step 1: Create `src/components/HowItWorks.tsx`**

```tsx
import SectionHeader from '@/components/SectionHeader';

const steps = [
    {
        number: '01',
        title: 'Tell me your problem',
        body: 'Fill out the contact form and describe what you\'re trying to fix or build. No jargon needed — plain language is fine.',
    },
    {
        number: '02',
        title: 'I scope and quote it',
        body: "We have a quick call. I ask questions, figure out the best solution, and give you a clear price with no surprises.",
    },
    {
        number: '03',
        title: 'We build and ship',
        body: "I build it, keep you updated along the way, and deliver something that works. You stay in the loop — no black box.",
    },
];

export default function HowItWorks() {
    return (
        <section className='px-6 md:px-12 flex flex-col items-center max-w-screen-xl mx-auto py-24'>
            <SectionHeader prefix='02.' title='How It Works' anchor='process' />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-12 w-full'>
                {steps.map(step => (
                    <div key={step.number} className='flex flex-col gap-3'>
                        <span className='text-5xl font-bold text-primary opacity-40'>{step.number}</span>
                        <h3 className='text-xl font-bold text-primary-text dark:text-dark-primary-text'>{step.title}</h3>
                        <p className='text-secondary-text dark:text-dark-secondary-text leading-relaxed'>{step.body}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
```

- [ ] **Step 2: Verify build passes**

```bash
source ~/.nvm/nvm.sh && nvm use 22 && yarn build
```

Expected: build succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/components/HowItWorks.tsx
git commit -m "feat: add HowItWorks component"
```

---

### Task 7: Contact API route

**Files:**
- Create: `src/app/api/contact/route.ts`
- Create: `.env.local` (if it doesn't exist — add `RESEND_API_KEY`)

**Interfaces:**
- Consumes: nothing from other tasks
- Produces: `POST /api/contact` — accepts `{ name: string, email: string, message: string }`, returns `200 { success: true }` or `400 { error: string }` or `500 { error: string }`. `ContactForm` in Task 8 depends on this contract.

- [ ] **Step 1: Install Resend**

```bash
source ~/.nvm/nvm.sh && nvm use 22 && yarn add resend
```

Expected: resend added to `package.json` dependencies.

- [ ] **Step 2: Add `RESEND_API_KEY` to `.env.local`**

Create or append to `.env.local`:

```
RESEND_API_KEY=your_resend_api_key_here
```

To get a key: sign up at resend.com → API Keys → Create API Key. For local dev without a real key, the route will still build — it'll just fail at runtime when the form is actually submitted.

- [ ] **Step 3: Create `src/app/api/contact/route.ts`**

```ts
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { name, email, message } = body as { name: string; email: string; message: string };

    if (!name || !email || !message || message.length < 20) {
        return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
    }

    try {
        await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: 'matt@matthewsaxe.com',
            subject: `New inquiry from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        });

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
    }
}
```

Note: The `from` address uses `onboarding@resend.dev` for Resend's sandbox (works without a verified domain). When you have a verified domain, update it to `noreply@matthewsaxe.com` or similar.

- [ ] **Step 4: Verify build passes**

```bash
source ~/.nvm/nvm.sh && nvm use 22 && yarn build
```

Expected: build succeeds. The `/api/contact` route appears in the build output.

- [ ] **Step 5: Commit**

```bash
git add src/app/api/contact/route.ts package.json yarn.lock
git commit -m "feat: add /api/contact route with Resend email sending"
```

Do NOT commit `.env.local` — it contains your API key.

---

### Task 8: ContactForm component

**Files:**
- Create: `src/components/ContactForm.tsx`

**Interfaces:**
- Consumes: `POST /api/contact` → `{ success: true }` or `{ error: string }` (from Task 7)
- Produces: `ContactForm(): JSX` — client component with form state, validation, and inline success/error feedback. Used in Task 9.

- [ ] **Step 1: Create `src/components/ContactForm.tsx`**

```tsx
'use client';

import { FormEvent, useState } from 'react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
    const [state, setState] = useState<FormState>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
        const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
        const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim();

        if (!name || !email || message.length < 20) {
            setErrorMsg('Please fill in all fields. Message must be at least 20 characters.');
            setState('error');
            return;
        }

        setState('submitting');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message }),
            });

            if (res.ok) {
                setState('success');
                form.reset();
            } else {
                const data = await res.json();
                setErrorMsg(data.error ?? 'Something went wrong. Please try again.');
                setState('error');
            }
        } catch {
            setErrorMsg('Network error. Please check your connection and try again.');
            setState('error');
        }
    }

    const inputClass = 'w-full px-4 py-3 rounded-lg bg-primary-bg dark:bg-dark-primary-bg border border-secondary-text/30 text-primary-text dark:text-dark-primary-text placeholder:text-secondary-text dark:placeholder:text-dark-secondary-text focus:outline-none focus:border-primary transition-colors';

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-5 w-full max-w-2xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <input
                    name='name'
                    type='text'
                    placeholder='Your name'
                    required
                    className={inputClass}
                />
                <input
                    name='email'
                    type='email'
                    placeholder='Your email'
                    required
                    className={inputClass}
                />
            </div>
            <textarea
                name='message'
                placeholder="Describe the problem you're trying to solve..."
                required
                minLength={20}
                rows={6}
                className={inputClass}
            />

            {state === 'success' && (
                <p className='text-primary font-medium'>Message sent! I'll be in touch soon.</p>
            )}
            {state === 'error' && (
                <p className='text-red-500'>{errorMsg}</p>
            )}

            <button
                type='submit'
                disabled={state === 'submitting'}
                className='bg-primary text-primary-text dark:text-dark-primary-text font-bold px-8 py-3 rounded-lg self-start hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed'
            >
                {state === 'submitting' ? 'Sending…' : 'Send Message'}
            </button>
        </form>
    );
}
```

- [ ] **Step 2: Verify build passes**

```bash
source ~/.nvm/nvm.sh && nvm use 22 && yarn build
```

Expected: build succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/components/ContactForm.tsx
git commit -m "feat: add ContactForm component with validation and inline feedback"
```

---

### Task 9: Rebuild home page — wire all sections

**Files:**
- Rewrite: `src/app/page.tsx`

**Interfaces:**
- Consumes:
  - `Hero({ intro, name, constant, characteristics, description, cta })` from `src/components/Hero.tsx`
  - `Watermark({ text })` from `src/components/Watermark.tsx`
  - `ServicesSection()` from `src/components/ServicesSection.tsx` (Task 5)
  - `HowItWorks()` from `src/components/HowItWorks.tsx` (Task 6)
  - `Project({ title, imageUrl, description, techStack, projectLink?, githubLink? })` from `src/components/Project.tsx`
  - `SectionHeader({ prefix, title, anchor? })` from `src/components/SectionHeader.tsx`
  - `ContactForm()` from `src/components/ContactForm.tsx` (Task 8)
  - `Footer()` from `src/components/Footer.tsx`
- Produces: the full single-scroll home page

- [ ] **Step 1: Replace `src/app/page.tsx`**

```tsx
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Watermark from '@/components/Watermark';
import ServicesSection from '@/components/ServicesSection';
import HowItWorks from '@/components/HowItWorks';
import Project from '@/components/Project';
import SectionHeader from '@/components/SectionHeader';
import ContactForm from '@/components/ContactForm';

export default function Home() {
    return (
        <>
            <Watermark text='Saxe' />
            <Hero
                intro="Hello, I'm"
                name='Matt Saxe'
                constant='I'
                characteristics={['automate your workflows.', 'build custom software.', 'solve business problems.']}
                description="I'm a software engineer in Dallas, TX helping small businesses stop doing things manually. Tell me your problem — I'll build the solution."
                cta={{ url: '/#contact', label: 'Get In Touch' }}
            />

            <ServicesSection />

            <HowItWorks />

            <section id='work' className='px-6 md:px-12 flex flex-col items-center max-w-screen-xl mx-auto py-24'>
                <SectionHeader prefix='03.' title='Past Work' anchor='work' />
                <div className='flex flex-col items-center gap-16 w-full'>
                    <Project
                        title='The Go-Getters'
                        imageUrl='the-go-getters.png'
                        description='A site for the Go Getters podcast. Built with React, Next.js, and Strapi — clients add and edit episodes in the content manager, which are served as static assets generated at build-time for fast loads and cheap hosting.'
                        techStack={['React', 'Next.js', 'Strapi']}
                        projectLink='https://thegogetters.co/'
                    />
                    <Project
                        title='The Villas at Hidden Acres'
                        imageUrl='the-villas.png'
                        description='A fast, responsive site for The Villas living community. Built with React and Gatsby, with content delivery through Contentful — the client updates site content without touching code.'
                        techStack={['React', 'Gatsby', 'Sass']}
                        projectLink='https://the-villas-at-hidden-acres.netlify.app/'
                    />
                </div>
            </section>

            <section id='contact' className='px-6 md:px-12 flex flex-col items-center max-w-screen-xl mx-auto py-24 mb-24'>
                <SectionHeader prefix='04.' title='Get In Touch' anchor='contact' />
                <p className='text-secondary-text dark:text-dark-secondary-text mb-10 max-w-2xl w-full'>
                    Tell me what you&apos;re trying to fix or build. I&apos;ll reach out within one business day to set up a call.
                </p>
                <ContactForm />
            </section>

            <Footer />
        </>
    );
}
```

- [ ] **Step 2: Verify build passes**

```bash
source ~/.nvm/nvm.sh && nvm use 22 && yarn build
```

Expected: build succeeds. All 6 routes should appear in the output (/, /_not-found, /api/contact, and any remaining stubs).

- [ ] **Step 3: Start dev server and visually verify the page**

```bash
source ~/.nvm/nvm.sh && nvm use 22 && yarn dev
```

Open http://localhost:3000. Check:
- Hero with animated text cycler shows "I automate your workflows." cycling
- "Get In Touch" button scrolls to the contact form
- Nav links (Services / Work / Contact) scroll to correct sections
- Services section shows 3 cards with orange icons
- How It Works shows 3 numbered steps
- Past Work shows 2 project cards
- Contact form validates: try submitting empty fields — should show error
- Footer shows GitHub / LinkedIn / Email icons
- Dark mode toggle works (ThemeToggler in AppBar)
- Mobile: hamburger opens drawer with nav links

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: rebuild home page with all freelance sections"
```

---

### Task 10: Final build + smoke test

**Files:** None modified

- [ ] **Step 1: Run production build**

```bash
source ~/.nvm/nvm.sh && nvm use 22 && yarn build
```

Expected: zero TypeScript errors, zero build warnings about missing files.

- [ ] **Step 2: Check for any remaining dead imports**

```bash
grep -r 'podcast\|reading\|blog\|whatIveBeenUpTo\|quotes' src/ --include='*.tsx' --include='*.ts'
```

Expected: no results (or only results inside comments). If any are found, remove them.

- [ ] **Step 3: Final commit if any cleanup was needed**

```bash
git add -A
git commit -m "chore: final cleanup after freelance site rebuild"
```
