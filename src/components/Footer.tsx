import Link from 'next/link';

export default function Footer({ slim = false }: { slim?: boolean }) {
  if (slim) {
    return (
      <footer className="footer" style={{ marginTop: 40 }}>
        <div className="footer-bottom" style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="footer-copy">© 2025 ACCESSTRADE Academy. All rights reserved.</div>
          <div className="footer-copy">Indonesia · Thailand · Vietnam</div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="footer-logo-row">
            <div className="footer-logo-mark">A</div>
            <div className="footer-brand-name">ACCESSTRADE <span>Academy</span></div>
          </div>
          <p className="footer-brand-desc">Platform belajar affiliate marketing gratis untuk semua publisher ACCESSTRADE Indonesia.</p>
        </div>
        <div>
          <div className="footer-col-title">Belajar</div>
          <Link href="/catalog" className="footer-link">Semua Kursus</Link>
          <span className="footer-link">Learning Path</span>
          <span className="footer-link">Webinar AT Talk</span>
          <span className="footer-link">Artikel</span>
        </div>
        <div>
          <div className="footer-col-title">Topik</div>
          <span className="footer-link">Getting Started</span>
          <span className="footer-link">TikTok</span>
          <span className="footer-link">Instagram</span>
          <span className="footer-link">SEO &amp; Blog</span>
        </div>
        <div>
          <div className="footer-col-title">ACCESSTRADE</div>
          <span className="footer-link">Dashboard</span>
          <span className="footer-link">SuperPoint</span>
          <span className="footer-link">Selfback</span>
          <span className="footer-link">Komunitas</span>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">© 2025 ACCESSTRADE Academy. All rights reserved.</div>
        <div className="footer-copy">Indonesia · Thailand · Vietnam</div>
      </div>
    </footer>
  );
}
