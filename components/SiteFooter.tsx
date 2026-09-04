import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="eyebrow">PAWCIRCLE LLC</p>
          <h2>Technology that helps small businesses work better.</h2>
        </div>
        <div className="footer-links">
          <Link href="/services">Services</Link>
          <Link href="/routeledger">RouteLedger</Link>
          <Link href="/work">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <a href="mailto:pawcirclellc@gmail.com">pawcirclellc@gmail.com</a>
        </div>
      </div>
      <div className="shell footer-bottom">© 2026 PawCircle LLC · Rochester, Minnesota</div>
    </footer>
  );
}
