'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/admin/dashboard', icon: '⚡', label: 'Dashboard' },
  {
    label: 'Curriculum', icon: '📚', href: '/admin/curriculum',
    sub: [
      { href: '/admin/curriculum', label: 'Daftar Kursus' },
      { href: '/admin/curriculum/edit', label: 'Tambah Kursus' },
      { href: '/admin/curriculum', label: 'Kategori' },
    ],
  },
  { href: '/admin/at-challenge', icon: '🏆', label: 'AT Challenge' },
  { href: '/admin/registration', icon: '👥', label: 'Registration' },
  { href: '/admin/analytics', icon: '📊', label: 'Analytics' },
  { href: '/admin/settings', icon: '⚙️', label: 'Settings' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname === '/admin/login' || pathname === '/admin') {
    return <>{children}</>;
  }

  return (
    <div className="admin-page">
      <aside className="admin-sidebar">
        <div className="admin-sidebar-brand">
          <div className="admin-sidebar-mark">A</div>
          <div className="admin-sidebar-brand-text">
            <div className="admin-sidebar-brand-name">AT Academy</div>
            <div className="admin-sidebar-brand-sub">Admin Panel</div>
          </div>
        </div>

        <nav className="admin-sidebar-nav">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href) && (item.href !== '/admin/curriculum' || pathname === '/admin/curriculum');
            const hasSub = item.sub && item.sub.length > 0;
            const isParentActive = item.href && pathname.startsWith(item.href);

            return (
              <div key={item.href || item.label}>
                <Link
                  href={item.href}
                  className={`admin-nav-item ${!hasSub && isActive ? 'active' : ''} ${hasSub && isParentActive ? 'active' : ''}`}
                >
                  <span className="nav-icon">{item.icon}</span>
                  {item.label}
                </Link>
                {hasSub && isParentActive && (
                  <div className="admin-nav-sub">
                    {item.sub!.map((s, i) => (
                      <Link key={i} href={s.href} className={`admin-nav-sub-item ${pathname === s.href && i === 0 ? 'active' : ''}`}>
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="admin-sidebar-user">
          <div className="admin-user-avatar">SR</div>
          <div style={{ flex: 1 }}>
            <div className="admin-user-name">Siti Rahayu</div>
            <div className="admin-user-role">Curriculum Coord.</div>
            <Link href="/admin/login" className="admin-logout">Keluar →</Link>
          </div>
        </div>
      </aside>

      <main className="admin-main">
        {children}
      </main>
    </div>
  );
}
