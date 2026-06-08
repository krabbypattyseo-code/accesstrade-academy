'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <Link href="/" className="navbar-logo" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div className="navbar-logo-mark">A</div>
        <div className="navbar-logo-text">ACCESSTRADE <span>Academy</span></div>
      </Link>
      <div className="navbar-links">
        <Link href="/" className={`navbar-link${pathname === '/' ? ' active' : ''}`}>Beranda</Link>
        <Link href="/catalog" className={`navbar-link${pathname === '/catalog' ? ' active' : ''}`}>Kursus</Link>
        <Link href="/artikel" className={`navbar-link${pathname.startsWith('/artikel') ? ' active' : ''}`}>Artikel</Link>
        <Link href="/my-learning" className={`navbar-link${pathname === '/my-learning' ? ' active' : ''}`}>My Learning</Link>
      </div>
      <div className="navbar-right">
        <Link href="/login"><button className="btn-ghost">Masuk</button></Link>
        <Link href="/register"><button className="btn-primary">Daftar Gratis</button></Link>
      </div>
    </nav>
  );
}
