import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  ChevronRight,
  CircleDollarSign,
  ClipboardList,
  FileText,
  HelpCircle,
  Home,
  KeyRound,
  LifeBuoy,
  LogIn,
  Map,
  Menu,
  MessageSquare,
  Paintbrush,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
  X,
} from "lucide-react";
import { MarketDataModule } from "./MarketDataModule.jsx";
import "./styles.css";

const pages = [
  { id: "home", label: "Home", icon: Home },
  { id: "listings", label: "Listings", icon: Search },
  { id: "explore", label: "Explore", icon: Map },
  { id: "articles", label: "Articles", icon: FileText },
  { id: "community", label: "Community", icon: MessageSquare },
  { id: "partners", label: "Partners", icon: Wrench },
  { id: "help", label: "Help", icon: LifeBuoy },
];

const headlines = [
  "New HDB BTO launch in Punggol with 3,500 units",
  "Rental market shows signs of cooling",
  "Singapore private home prices rise 2.9% in Q4 2024",
];

const featureCards = [
  { icon: Building2, label: "Smart Portfolio", title: "AI-powered property management", copy: "Predictive analytics, portfolio views, and automated workflows for modern property professionals." },
  { icon: Users, label: "Tenant Intelligence", title: "Better matching and verification", copy: "Tenant workflows are designed around confidence, visibility, and smoother agent coordination." },
  { icon: FileText, label: "Digital Leasing", title: "Lease lifecycle management", copy: "Digital agreements, renewal reminders, and document flows help reduce missed deadlines." },
  { icon: Wrench, label: "Maintenance Hub", title: "Repair tracking", copy: "Request intake, contractor assignment, status updates, and completion records stay connected." },
  { icon: BarChart3, label: "Market Analytics", title: "URA and HDB signals", copy: "Trend views support better pricing decisions across HDB, condo, landed, and non-landed homes." },
  { icon: ShieldCheck, label: "Secure Payments", title: "Payment visibility", copy: "Payment processing and reminders are presented as part of the lease workflow." },
];

const activities = [
  { image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&auto=format&fit=crop&q=80", title: "Gardens by the Bay", area: "Marina Bay", rating: "4.8", type: "Nature", duration: "3-4 hours", copy: "Supertree Grove, Cloud Forest, and Flower Dome conservatories." },
  { image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=900&auto=format&fit=crop&q=80", title: "Marina Bay Sands SkyPark", area: "Marina Bay", rating: "4.6", type: "Landmarks", duration: "1-2 hours", copy: "Observation deck with panoramic city and waterfront views." },
  { image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=900&auto=format&fit=crop&q=80", title: "Sentosa Island", area: "Sentosa", rating: "4.5", type: "Family", duration: "Full day", copy: "Beaches, Universal Studios, S.E.A. Aquarium, and resort attractions." },
  { image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=900&auto=format&fit=crop&q=80", title: "Orchard Road Shopping", area: "Orchard", rating: "4.4", type: "Shopping", duration: "4-6 hours", copy: "Singapore's premier shopping boulevard with luxury malls and boutiques." },
  { image: "https://images.unsplash.com/photo-1597347316205-36f6c451902a?w=900&auto=format&fit=crop&q=80", title: "Singapore Botanic Gardens", area: "Tanglin", rating: "4.7", type: "Nature", duration: "2-3 hours", copy: "UNESCO World Heritage Site with orchid gardens and calm walking trails." },
  { image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=900&auto=format&fit=crop&q=80", title: "Night Safari", area: "Mandai", rating: "4.6", type: "Wildlife", duration: "3-4 hours", copy: "Nocturnal wildlife park with tram safari and walking trails." },
  { image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&auto=format&fit=crop&q=80", title: "Hawker Centre Food Tour", area: "Citywide", rating: "4.9", type: "Food", duration: "2-3 hours", copy: "Maxwell, Lau Pa Sat, Old Airport Road, chicken rice, laksa, and local favorites." },
  { image: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=900&auto=format&fit=crop&q=80", title: "Clarke Quay Nightlife", area: "Clarke Quay", rating: "4.3", type: "Nightlife", duration: "Evening", copy: "Riverside bars, clubs, restaurants, and live music venues." },
];

const articles = [
  { tag: "Market Trends", minutes: "8 min read", title: "Singapore Rental Market Outlook 2024: Key Trends & Predictions", copy: "Comprehensive analysis of rental trends, price movements, and market forecasts for Singapore's property sector.", author: "NasiLemakSG Research Team" },
  { tag: "URA Data", minutes: "6 min read", title: "Private Residential Rental Index: Q4 2023 Analysis", copy: "Deep dive into URA rental index data showing regional variations and property type performance.", author: "Market Analyst" },
  { tag: "Rental Yield", minutes: "12 min read", title: "Landlord's Complete Guide to Rental Yield Optimization", copy: "Strategic approaches to maximize rental returns, reduce vacancy periods, and enhance property value.", author: "David Wong" },
];

const partnerGroups = [
  { title: "Painting Services", icon: Paintbrush, items: [["Nippon Paint Singapore", "4.8", "From $4/sqft"], ["PS Painting Services", "4.7", "From $3.50/sqft"], ["Stamford Paint & Decoration", "4.6", "From $3/sqft"]] },
  { title: "Cleaning Services", icon: Sparkles, items: [["Helpling Singapore", "4.9", "From $25/hour"], ["Sureclean", "4.8", "From $188/session"], ["Luce SG", "4.7", "From $23/hour"]] },
  { title: "Repair and Handyman", icon: Wrench, items: [["Handyman Singapore", "4.8", "From $80/hour"], ["HelloToby Handyman", "4.9", "From $50/job"], ["A1 Handyman Singapore", "4.7", "From $60/hour"]] },
  { title: "Plumbing Services", icon: Wrench, items: [["Mr Plumber Singapore", "4.9", "From $80/call-out"], ["Kiasu Plumber", "4.8", "From $70/call-out"], ["HDB 24 Hrs Plumber Service", "4.7", "From $60/call-out"]] },
];

const guides = [
  ["Add Property", "Fill in address, rent, bedrooms, bathrooms, photos, amenities, and availability."],
  ["Assign Leases", "Select a property, assign a tenant, set lease terms, then generate the digital agreement."],
  ["Send Invoices", "Generate rent, utility, or custom invoices with due dates and payment tracking."],
  ["Manage Maintenance", "Prioritize requests, assign contractors, upload photos, and close after confirmation."],
];

const faqs = [
  ["Pricing", "What pricing plans do you offer?", "How does the free plan work?", "Can I upgrade or downgrade my plan?"],
  ["Features", "Can I manage multiple properties?", "Does the platform support lease management?", "Can I generate reports and analytics?"],
  ["Support", "What kind of support do you provide?", "Can I import my existing property data?", "Is training available?"],
  ["Security", "Is my data secure?", "Who has access to property and tenant data?", "How do you handle PDPA compliance?"],
  ["Technical", "Is there a mobile app available?", "Can I integrate with other software?", "What browsers are supported?"],
];

const routeFromHash = () => window.location.hash.replace("#/", "") || "home";

function App() {
  const [route, setRoute] = React.useState(routeFromHash);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [activityFilter, setActivityFilter] = React.useState("All");

  React.useEffect(() => {
    const onHashChange = () => {
      setRoute(routeFromHash());
      setMenuOpen(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const page = route === "auth" || route === "faq" ? route : pages.some((item) => item.id === route) ? route : "home";

  return (
    <div className="app-shell">
      <Announcement />
      <Header route={page} menuOpen={menuOpen} onMenu={() => setMenuOpen((value) => !value)} />
      <main>
        {page === "home" && <HomePage />}
        {page === "listings" && <ListingsPage query={query} setQuery={setQuery} />}
        {page === "explore" && <ExplorePage filter={activityFilter} setFilter={setActivityFilter} />}
        {page === "articles" && <ArticlesPage />}
        {page === "community" && <CommunityPage />}
        {page === "partners" && <PartnersPage />}
        {page === "help" && <HelpPage />}
        {page === "faq" && <FaqPage />}
        {page === "auth" && <AuthPage />}
      </main>
      {page !== "auth" && <Footer />}
    </div>
  );
}

function Announcement() {
  return (
    <div className="topline">
      <div className="ticker">{[...headlines, ...headlines].map((headline, index) => <span key={`${headline}-${index}`}>{headline}</span>)}</div>
    </div>
  );
}

function Header({ route, menuOpen, onMenu }) {
  return (
    <header className="site-header">
      <div className="nav-inner">
        <a className="brand" href="#/home" aria-label="NasiLemakSG home">
          <span className="brand-mark" aria-hidden="true">N</span>
          <span><strong>NasiLemakSG</strong><small>Lease Management</small></span>
        </a>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Primary">
          {pages.map(({ id, label, icon: Icon }) => (
            <a className={route === id ? "active" : ""} href={`#/${id}`} key={id}><Icon size={16} />{label}</a>
          ))}
        </nav>
        <div className="nav-actions">
          <a className="text-link" href="#/auth"><LogIn size={16} />Log in</a>
          <a className="button" href="#/auth"><KeyRound size={16} />Get Started</a>
          <button className="icon-button" type="button" onClick={onMenu} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </div>
    </header>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero product-hero">
        <div className="hero-content">
          <p className="kicker">Your Property Kopitiam</p>
          <h1>NasiLemakSG</h1>
          <p>Singapore's proptech lease management platform powered by AI, real-time property data, and workflows for agents, landlords, and tenants.</p>
          <div className="hero-actions">
            <a className="button" href="#/auth"><Sparkles size={16} />Get Started Free</a>
            <a className="button secondary" href="#/listings"><Search size={16} />Browse Properties</a>
          </div>
        </div>
      </section>
      <Section kicker="Platform Features" title="Enterprise-grade proptech solutions built for Singapore leasing operations." copy="Data-driven pages, reusable React views, and interface patterns pulled from the NasiLemakSG structure.">
        <div className="feature-grid">{featureCards.map((card) => <FeatureCard key={card.label} {...card} />)}</div>
      </Section>
      <MarketDataModule />
      <Section kicker="For Real Estate Professionals" title="Plans for agents growing from a few listings to a larger portfolio.">
        <div className="pricing-grid">
          <Plan title="Starter" price="Free" items={["Up to 6 active listings", "Client CRM", "Document uploads", "Mobile app access"]} />
          <Plan title="Growth" price="S$58.00/year" featured items={["Up to 25 active listings", "Advanced CRM", "Lease management", "Priority support"]} />
          <Plan title="Professional" price="S$147.06/year" items={["Up to 50 active listings", "Full CRM suite", "Analytics", "API access"]} />
        </div>
      </Section>
    </>
  );
}

function ListingsPage({ query, setQuery }) {
  return (
    <Page title="Property Listings" kicker="Singapore Real Estate Search" copy="Search across PropertyGuru, 99.co, and EdgeProp with the crawled empty-state experience kept intact.">
      <div className="toolbar">
        <label><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by town, condo, district, or address" /></label>
        <select><option>All property types</option><option>HDB</option><option>Condo</option><option>Landed</option></select>
        <select><option>Any budget</option><option>Below $2,700</option><option>$3,000-$3,500</option><option>$5,000+</option></select>
        <button className="button blue" type="button"><BarChart3 size={16} />Refresh Live Data</button>
      </div>
      <div className="stat-grid four"><StatCard value="0" label="Listings found" /><StatCard value="773ms" label="Crawled response time" /><StatCard value="3" label="Source portals" /><StatCard value={query || "Search"} label="Current query" /></div>
      <EmptyState title="No listings found" copy="Try adjusting your search criteria or filters." action="Clear filters" onAction={() => setQuery("")} />
    </Page>
  );
}

function ExplorePage({ filter, setFilter }) {
  const filters = ["All", "Nature", "Food", "Family", "Nightlife", "Landmarks", "Shopping", "Wildlife"];
  const visible = filter === "All" ? activities : activities.filter((activity) => activity.type === filter);
  return (
    <Page title="Fun Things to Do in Singapore" kicker="Expat Guide" copy="Activities, attractions, and hidden gems from the crawled Explore Singapore page.">
      <SegmentedControl options={filters} value={filter} onChange={setFilter} />
      <div className="media-grid">{visible.map((activity) => <ActivityCard key={activity.title} activity={activity} />)}</div>
    </Page>
  );
}

function ArticlesPage() {
  return (
    <Page title="Singapore Rental Market Articles" kicker="Latest Market Insights" copy="Rental trends, URA analysis, and yield guidance for Singapore property professionals.">
      <div className="content-grid">{articles.map((article) => <ArticleCard key={article.title} article={article} />)}</div>
    </Page>
  );
}

function CommunityPage() {
  const categories = ["Rentals & Deposits", "Neighborhoods", "Property Types", "Legal & Rights", "Utilities & Costs", "Agents & Fees", "Resources & Apps"];
  return (
    <Page title="Singapore Property Community" kicker="Community Forum" copy="A Q&A space for expat housing, rentals, deposits, neighborhoods, agent fees, and practical resources.">
      <SegmentedControl options={["All Questions", "Featured", "Trending", "My Questions"]} value="All Questions" onChange={() => {}} />
      <div className="stat-grid four"><StatCard value="0" label="Questions" /><StatCard value="0" label="Answers" /><StatCard value="Growing" label="Members" /><StatCard value="0" label="Resolved" /></div>
      <div className="split-layout">
        <div className="panel"><h3>Categories</h3><div className="tag-row">{categories.map((item) => <span className="chip" key={item}>{item} 0</span>)}</div></div>
        <EmptyState title="No questions found" copy="Be the first to ask a question in this category." action="Ask the First Question" />
      </div>
    </Page>
  );
}

function PartnersPage() {
  return (
    <Page title="Trusted Service Partners" kicker="Verified Property Services" copy="Painting, cleaning, repair, handyman, and plumbing partners adapted from the crawled partner directory.">
      <div className="stat-grid three"><StatCard value="Verified" label="Background checked" /><StatCard value="Quality" label="Assured services" /><StatCard value="Insured" label="Provider focus" /></div>
      <div className="partner-list">{partnerGroups.map((group) => <PartnerGroup key={group.title} group={group} />)}</div>
    </Page>
  );
}

function HelpPage() {
  return (
    <Page title="Help & Support Center" kicker="Support" copy="Quick actions, guides, and compliance notes from the NasiLemakSG help center.">
      <div className="content-grid">{guides.map(([title, copy]) => <FeatureCard key={title} icon={ClipboardList} label="Guide" title={title} copy={copy} />)}</div>
      <Section kicker="PDPA Compliance" title="Privacy and security notes from the support crawl." compact>
        <div className="content-grid three">
          <FeatureCard icon={ShieldCheck} label="Data Collection" title="Property management purpose" copy="Personal data is collected for tenant information, payment records, and communication history." />
          <FeatureCard icon={CircleDollarSign} label="Data Retention" title="Financial records" copy="Financial records are retained for seven years, with other data kept during service use plus compliance periods." />
          <FeatureCard icon={HelpCircle} label="Your Rights" title="Access and correction" copy="Users can request access, correction, or deletion through support." />
        </div>
      </Section>
    </Page>
  );
}

function FaqPage() {
  return (
    <Page title="Frequently Asked Questions" kicker="FAQ" copy="Common pricing, feature, support, security, and technical questions from the crawl.">
      <div className="content-grid">{faqs.map(([category, ...questions]) => <div className="card" key={category}><span className="label">{category}</span><h3>{category}</h3>{questions.map((question) => <p className="question" key={question}>{question}</p>)}</div>)}</div>
    </Page>
  );
}

function AuthPage() {
  return (
    <div className="auth-page">
      <section className="auth-art">
        <p className="kicker">Welcome Back</p>
        <h1>NasiLemakSG</h1>
        <p>Sign in to your Singapore property lease management workspace.</p>
      </section>
      <section className="auth-card">
        <p className="kicker">Welcome Back</p>
        <h2>Sign in to your account</h2>
        <label>Email<input type="email" placeholder="you@example.com" /></label>
        <label>Password<input type="password" placeholder="Password" /></label>
        <button className="button" type="button"><LogIn size={16} />Sign In</button>
        <button className="button secondary" type="button">Continue with Google</button>
        <p>By continuing, you agree to the Terms of Service and Privacy Policy.</p>
      </section>
    </div>
  );
}

function Page({ title, kicker, copy, children }) {
  return (
    <>
      <section className="page-hero"><div><p className="kicker">{kicker}</p><h1>{title}</h1><p>{copy}</p></div></section>
      <section className="section"><div className="section-inner">{children}</div></section>
    </>
  );
}

function Section({ kicker, title, copy, children, alt = false, compact = false }) {
  return <section className={alt ? "section alt" : compact ? "section compact" : "section"}><div className="section-inner"><div className="section-head"><div><p className="kicker">{kicker}</p><h2>{title}</h2></div>{copy && <p>{copy}</p>}</div>{children}</div></section>;
}

function FeatureCard({ icon: Icon, label, title, copy }) {
  return <article className="card"><div className="card-icon"><Icon size={20} /></div><span className="label">{label}</span><h3>{title}</h3><p>{copy}</p></article>;
}

function StatCard({ value, label }) {
  return <article className="stat"><strong>{value}</strong><span>{label}</span></article>;
}

function Plan({ title, price, items, featured }) {
  return <article className={featured ? "card plan featured" : "card plan"}>{featured && <span className="label hot">Most Popular</span>}<h3>{title}</h3><strong>{price}</strong>{items.map((item) => <p key={item}><Check size={15} />{item}</p>)}</article>;
}

function SegmentedControl({ options, value, onChange }) {
  return <div className="segments">{options.map((option) => <button className={value === option ? "active" : ""} key={option} onClick={() => onChange(option)} type="button">{option}</button>)}</div>;
}

function ActivityCard({ activity }) {
  return <article className="media-card"><img src={activity.image} alt={activity.title} /><div><span className="label">{activity.type}</span><h3>{activity.title}</h3><p>{activity.copy}</p><div className="tag-row"><span>{activity.area}</span><span>{activity.rating} rating</span><span>{activity.duration}</span></div></div></article>;
}

function ArticleCard({ article }) {
  return <article className="card article-card"><span className="label">{article.tag}</span><h3>{article.title}</h3><p>{article.copy}</p><div className="tag-row"><span>{article.minutes}</span><span>{article.author}</span></div><a href="#/articles">Read analysis <ChevronRight size={16} /></a></article>;
}

function PartnerGroup({ group }) {
  const Icon = group.icon;
  return <section><h2><Icon size={22} />{group.title}</h2><div className="content-grid three">{group.items.map(([name, rating, price]) => <article className="card partner-card" key={name}><span className="label">Verified</span><h3>{name}</h3><p>Trusted professionals in {group.title.toLowerCase()} for Singapore property maintenance needs.</p><div className="tag-row"><span>{rating} rating</span><span>{price}</span></div></article>)}</div></section>;
}

function EmptyState({ title, copy, action, onAction }) {
  return <div className="empty-state"><h2>{title}</h2><p>{copy}</p>{action && <button className="button secondary" type="button" onClick={onAction}>{action}</button>}</div>;
}

function Footer() {
  return <footer className="site-footer"><div><h2>NasiLemakSG Lease Management</h2><p>Singapore's premier property management and market intelligence platform.</p></div><nav><a href="#/listings">Browse Listings</a><a href="#/articles">Market Insights</a><a href="#/explore">Explore Singapore</a><a href="#/help">Help Center</a><a href="#/faq">FAQ</a><a href="#/partners">Partners</a></nav><a className="button secondary" href="#/auth">Launch Workspace <ArrowRight size={16} /></a></footer>;
}

createRoot(document.getElementById("root")).render(<App />);
