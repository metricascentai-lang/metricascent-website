import type { ImageMetadata } from 'astro';
import tradeCommand from '../assets/shots/tradeos-command-centre.png';
import tradeProcess from '../assets/shots/tradeos-process-map.png';
import tradePL from '../assets/shots/tradeos-order-pl.png';
import plantToday from '../assets/shots/plantos-today-dark.png';
import plantMap from '../assets/shots/plantos-plant-map-dark.png';
import plantPhone from '../assets/shots/plantos-phone-dark.png';
import buildDesk from '../assets/shots/buildportal-timeline-desk.png';
import buildHome from '../assets/shots/buildportal-home-phone.png';
import buildProgress from '../assets/shots/buildportal-progress-phone.png';
import buildApprovals from '../assets/shots/buildportal-approvals-phone.png';
import buildPayments from '../assets/shots/buildportal-payments-phone.png';

export type Status = 'production' | 'launching' | 'build' | 'demo';

export const statusLabel: Record<Status, string> = {
  production: 'In production',
  launching: 'Launching',
  build: 'In build',
  demo: 'Demo build',
};

export interface Screen {
  src: ImageMetadata;
  alt: string;
  caption: string;
  kind: 'desktop' | 'phone';
  dark?: boolean;
  url: string;
}

export interface System {
  slug: string;
  name: string;
  kind: string;
  icon: string;
  status: Status;
  statusNote: string;
  tagline: string;
  builtFor: string;
  problem: string;
  built: { title: string; text: string }[];
  guardrails: string[];
  facts: { n: string; l: string }[];
  stack: string[];
  highlights: string[];
  screens: Screen[];
  /** Systems without screenshots render a purpose-built sample visual instead. */
  visual: 'screens' | 'lead-desk';
  demo?: { href: string; label: string };
  honesty?: string;
}

export const systems: System[] = [
  {
    slug: 'trade-os',
    name: 'Trade OS',
    kind: 'Operations system',
    icon: 'workflow',
    status: 'production',
    statusNote: 'Live in production',
    tagline: 'One commercial cycle, from customer enquiry to order profit, in a single system.',
    builtFor: 'A biochemicals trading company in India',
    problem:
      'Enquiries arrived by email and PDF. Vendor quotes lived in spreadsheets. Landed cost was worked out by hand, and the profit on an order was only known long after it closed.',
    built: [
      { title: 'Enquiry to quotation', text: 'Files and pasted emails are read into one table of product lines, checked line by line, then approved.' },
      { title: 'Vendor sourcing and RFQs', text: 'Vendors are matched to every line. RFQs are drafted and approved in the system, then sent by a person from their own mailbox.' },
      { title: 'Landed-cost pricing', text: 'Import duty is computed from the HS code across six cost heads, so each quotation is priced on real cost.' },
      { title: 'Orders and tracking', text: 'Customer POs, vendor POs and every order milestone sit on one screen instead of five inboxes.' },
      { title: 'Order profit and loss', text: 'Margin for every order, estimated against actual cost. A closed order cannot be edited.' },
      { title: 'Command Centre', text: 'The owner sees the whole pipeline at a glance: enquiries, quotations, orders and dispatches.' },
    ],
    guardrails: [
      'Nothing is ever sent automatically. The application has no mail server at all.',
      'The audit trail is append-only. The database itself refuses edits and deletes.',
      'Material receipt and customer payment cannot complete without a named person.',
      'Two-factor sign-in is mandatory for every account.',
    ],
    facts: [
      { n: 'Live', l: 'in production' },
      { n: '2,800+', l: 'automated tests' },
      { n: '15+', l: 'screens' },
      { n: '54', l: 'database migrations' },
    ],
    stack: ['Next.js 15', 'TypeScript', 'Supabase Postgres', 'Drizzle ORM', 'Tailwind CSS'],
    highlights: ['Enquiry to profit in one flow', 'Rules enforced in the database', 'A person approves every send'],
    visual: 'screens',
    screens: [
      { src: tradeCommand, alt: 'Trade OS Command Centre showing enquiries, quotations, purchase orders and the enquiry pipeline with sample data', caption: 'Command Centre: the owner’s view of the whole pipeline.', kind: 'desktop', url: 'trade-os / command-centre' },
      { src: tradeProcess, alt: 'Trade OS process map showing the six steps from enquiry to vendor purchase order, with approval points marked', caption: 'Process map: every step, and every point where a person must approve.', kind: 'desktop', url: 'trade-os / process-map' },
      { src: tradePL, alt: 'Trade OS order profitability screen listing sample orders with sales value, actual cost and gross margin', caption: 'Order P&L: margin per order against actual cost.', kind: 'desktop', url: 'trade-os / order-pl' },
    ],
  },
  {
    slug: 'build-portal',
    name: 'Build Portal',
    kind: 'Client app and staff portal',
    icon: 'smartphone',
    status: 'launching',
    statusNote: 'In final QA before launch',
    tagline: 'One app where homeowners follow their build, and the whole team runs it.',
    builtFor: 'A home construction company',
    problem:
      'Homeowners called and messaged for updates. Progress, payments and documents sat in different places, and each staff role kept its own records.',
    built: [
      { title: 'Homeowner app', text: 'Clients follow their home through a 15-stage build, with updates, documents and payments in one place.' },
      { title: 'Staff portal', text: 'Five staff roles, from business owner to site engineer, each see exactly what their job needs.' },
      { title: 'Payments and extra costs', text: 'Homeowners report their bank transfers in the app, and extra costs are recorded with their amounts.' },
      { title: 'Requests, visits and reminders', text: 'Client requests and site visits are tracked by the project manager instead of scattered across chats.' },
      { title: 'One codebase, three platforms', text: 'The same app runs on the web, Android and iOS.' },
      { title: 'Sign-in by phone', text: 'Homeowners sign in with a one-time code sent to their mobile number.' },
    ],
    guardrails: [
      'Clients see only their own project, and only items marked client-visible.',
      'Staff see only the projects they are assigned to. Owner and admin see all.',
      'Finance is limited to the owner, admin, the assigned project manager and the client.',
      'Access rules are enforced in the database, not just hidden on screen.',
    ],
    facts: [
      { n: '5', l: 'staff roles' },
      { n: '15', l: 'build stages tracked' },
      { n: '3', l: 'platforms: web, Android, iOS' },
      { n: '1', l: 'shared codebase' },
    ],
    stack: ['Expo (React Native)', 'TypeScript', 'Supabase', 'Row-level security', 'Phone OTP'],
    highlights: ['Homeowner app and staff portal', 'Role-based access in the database', 'Web, Android and iOS'],
    visual: 'screens',
    screens: [
      { src: buildDesk, alt: 'Build Portal project screen on desktop, showing the construction timeline for a sample project with 15 stages, 7 completed', caption: 'Project timeline: every stage, its date and where it stands.', kind: 'desktop', url: 'build-portal / project / timeline' },
      { src: buildHome, alt: 'Build Portal homeowner home screen on a phone, showing a sample project at 57% overall progress and on schedule', caption: 'My Home: where the build stands today.', kind: 'phone', url: '' },
      { src: buildProgress, alt: 'Build Portal progress screen on a phone, showing 15 milestones for a sample project with 7 completed', caption: 'Progress: all 15 stages, with dates.', kind: 'phone', url: '' },
      { src: buildApprovals, alt: 'Build Portal approvals screen on a phone, listing sample selections waiting for the homeowner', caption: 'Approvals: choices waiting for the homeowner.', kind: 'phone', url: '' },
      { src: buildPayments, alt: 'Build Portal payments screen on a phone, showing sample contract value, amount paid and amount outstanding', caption: 'Payments: paid, outstanding and what is due next.', kind: 'phone', url: '' },
    ],
  },
  {
    slug: 'plant-os',
    name: 'Plant OS',
    kind: 'Plant and factory system',
    icon: 'factory',
    status: 'demo',
    statusNote: 'Clickable demo with sample data',
    tagline: 'A control room for a packaged drinking water plant, from borewell to bank.',
    builtFor: 'A packaged drinking water plant',
    problem:
      'Invoices sat in accounting software, production and testing in spreadsheets and paper registers, and orders in chat. Small losses on every bottle went unseen, and the owner heard about problems late.',
    built: [
      { title: 'Today', text: 'A live drawing of the plant plus a “Needs you” list. Each problem arrives with its action button.' },
      { title: 'Water and quality', text: 'Readings, batch hold and release, and the test calendar. Trace any batch to the trucks and customers that received it.' },
      { title: 'Sales and dispatch', text: 'Orders are checked against credit limits. A truck timeline and a jar ledger show what is out and who holds it.' },
      { title: 'Stores', text: 'Stock of preforms, caps and labels, with usage compared against output to catch leaks.' },
      { title: 'Money', text: 'Who owes what and for how long, and the true cost of one case.' },
      { title: 'Approvals', text: 'Credit overrides, special prices and batch releases, each recorded with who approved and when.' },
    ],
    guardrails: [
      'Grey means normal. Colour appears only when something needs a decision.',
      'A batch that fails a test is held, and the truck carrying it is blocked.',
      'An order over the credit limit is not refused. It goes to the owner to decide.',
      'Every approval records who approved it and when.',
    ],
    facts: [
      { n: '11', l: 'screens' },
      { n: '3', l: 'alert levels' },
      { n: '2', l: 'themes: light and dark' },
      { n: 'Phone', l: 'and desktop layouts' },
    ],
    stack: ['Interactive prototype', 'Live SVG plant drawing', 'Role-based views'],
    highlights: ['The whole plant on one screen', 'Flags only what needs a decision', 'Bad batches cannot leave'],
    visual: 'screens',
    screens: [
      { src: plantToday, alt: 'Plant OS Today screen in dark mode showing a live drawing of the water plant, with one batch on hold, using sample data', caption: 'Today: the plant at a glance, and what needs the owner.', kind: 'desktop', dark: true, url: 'plant-os / today' },
      { src: plantMap, alt: 'Plant OS plant map showing the chain from water treatment to dispatch and payment, using sample data', caption: 'Plant map: when one step stops, the steps after it show why.', kind: 'desktop', dark: true, url: 'plant-os / plant-map' },
      { src: plantPhone, alt: 'Plant OS on a phone, listing each plant unit with its live reading, using sample data', caption: 'The same control room on a phone.', kind: 'phone', dark: true, url: '' },
    ],
    honesty: 'Plant OS is a clickable demo, not working software yet. Every number in it is sample data. It was built to show an owner the system before any build begins.',
  },
  {
    slug: 'lead-engine',
    name: 'Lead Engine',
    kind: 'Outbound and lead system',
    icon: 'target',
    status: 'build',
    statusNote: 'Pilot in build',
    tagline: 'Type a product and a country. Get buyers worth contacting, with the evidence and a first message ready.',
    builtFor: 'A specialty chemicals group selling into the United States',
    problem:
      'New customers came mostly from trade shows. Between shows, finding the right buyer at the right company was slow manual research, and most lists were never followed up.',
    built: [
      { title: 'Finds the buyers', text: 'Pick a product and a country. The system searches for companies that could buy it.' },
      { title: 'Proves the fit', text: 'It reads each company’s own pages and keeps only those with evidence, quoting the source. Dropped companies are listed with the reason.' },
      { title: 'Names the person', text: 'The right role at each company, with an email address that has been verified.' },
      { title: 'Drafts the first message', text: 'A first email written for that buyer, ready for you to edit.' },
      { title: 'A weekly to-do list', text: 'Best buyers first, each with its next step, moving through a pipeline from found to customer.' },
      { title: 'Channel rules by country', text: 'Where cold email needs consent, the system points you to a call or a trade-show invitation instead.' },
    ],
    guardrails: [
      'Nothing is sent by the system. You send from your own mailbox.',
      'Every buyer shows the evidence behind it, with the source.',
      'Email addresses are verified before they reach your list.',
      'Your “good fit” and “wrong fit” answers steer the next search.',
    ],
    facts: [
      { n: '6', l: 'pipeline stages' },
      { n: 'Weekly', l: 'search runs' },
      { n: '0', l: 'messages sent automatically' },
      { n: 'Per country', l: 'channel rules' },
    ],
    stack: ['Search and page reading', 'Evidence scoring', 'Email verification', 'Draft generation'],
    highlights: ['Evidence for every buyer', 'Verified contact, drafted message', 'You check and send'],
    visual: 'lead-desk',
    screens: [],
    honesty: 'The Lead Engine is in build for its first client. The visual on this page is an illustration with fictional companies, because the real pilot contains real people and businesses.',
  },
];

export const getSystem = (slug: string) => systems.find((s) => s.slug === slug)!;
