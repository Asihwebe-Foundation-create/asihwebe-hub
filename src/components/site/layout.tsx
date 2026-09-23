import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Linkedin, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Brand } from "./brand";

const nav = [["Home", "/"], ["About Us", "/about"], ["Our Programmes", "/programmes"], ["Partnerships", "/partnerships"], ["Impact", "/impact"], ["Contact", "/contact"]] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return <header className="sticky top-0 z-50 border-b border-brand-navy/10 bg-background/95 backdrop-blur">
    <div className="site-container flex h-20 items-center justify-between gap-6">
      <Brand />
      <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
        {nav.map(([label, to]) => <Link key={to} to={to} className={`nav-link ${pathname === to ? "nav-link-active" : ""}`}>{label}</Link>)}
      </nav>
      <div className="hidden lg:block"><Button asChild variant="gold"><Link to="/support">Support Our Work</Link></Button></div>
      <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <nav className="border-t bg-background px-5 py-5 lg:hidden" aria-label="Mobile navigation"><div className="mx-auto flex max-w-xl flex-col gap-1">{nav.map(([label, to]) => <Link key={to} to={to} onClick={() => setOpen(false)} className="rounded-sm px-3 py-3 font-semibold text-brand-navy hover:bg-muted">{label}</Link>)}<Button asChild variant="gold" className="mt-3"><Link to="/support" onClick={() => setOpen(false)}>Support Our Work</Link></Button></div></nav>}
  </header>;
}

export function SiteFooter() {
  const links = [["Home", "/"], ["About Us", "/about"], ["Our Programmes", "/programmes"], ["TRDEA", "/trdea"], ["Partnerships", "/partnerships"], ["Impact", "/impact"], ["Contact", "/contact"], ["Support Our Work", "/support"]] as const;
  return <footer className="bg-brand-navy text-primary-foreground"><div className="site-container grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
    <div><Brand inverse /><p className="mt-5 max-w-sm text-sm leading-6 text-primary-foreground/70">Empowering Communities. Enabling Opportunity. Shaping Futures.</p></div>
    <div><h2 className="footer-heading">Navigate</h2><div className="grid grid-cols-2 gap-x-6 gap-y-3">{links.map(([label,to]) => <Link key={to} to={to} className="text-sm text-primary-foreground/70 hover:text-brand-gold">{label}</Link>)}</div></div>
    <div><h2 className="footer-heading">Contact</h2><p className="footer-line"><MapPin />South Africa</p><a className="footer-line hover:text-brand-gold" href="mailto:info@asihwebe.org.za"><Mail />info@asihwebe.org.za</a><span className="footer-line"><Linkedin />LinkedIn profile coming soon</span></div>
  </div><div className="border-t border-primary-foreground/15"><div className="site-container flex flex-col gap-3 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Asihwebe Foundation. All rights reserved.</p><div className="flex gap-5"><Link to="/privacy">Privacy Policy</Link><Link to="/terms">Website Terms</Link></div></div></div></footer>;
}
