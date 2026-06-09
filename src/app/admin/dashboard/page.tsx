'use client';
import Link from 'next/link';

const stats = [
  { icon: '👥', label: 'Total Publisher', value: '12.483', delta: '+8.2%', dir: 'up' },
  { icon: '📚', label: 'Enrollment Aktif', value: '4.207', delta: '+12.5%', dir: 'up' },
  { icon: '✅', label: 'Completion Rate', value: '34.6%', delta: '-1.2%', dir: 'down' },
  { icon: '🎓', label: 'Kursus Aktif', value: '27', delta: '+3 kursus', dir: 'up' },
];

const barData = [
  { label: 'Sen', total: 744, pub: 180 },
  { label: 'Sel', total: 540, pub: 120 },
  { label: 'Rab', total: 936, pub: 200 },
  { label: 'Kam', total: 660, pub: 150 },
  { label: 'Jum', total: 1080, pub: 240 },
  { label: 'Sab', total: 864, pub: 190 },
  { label: 'Min', total: 1296, pub: 280 },
];

const maxBar = 1296;

const topCourses = [
  { rank: 1, name: 'Dasar-dasar Affiliate Marketing', count: '1.204', label: 'pelajar' },
  { rank: 2, name: 'TikTok for Business — Strategy', count: '987', label: 'pelajar' },
  { rank: 3, name: 'Cara Keyword Research Affiliate', count: '612', label: 'pelajar' },
  { rank: 4, name: 'Strategi Instagram untuk Komisi', count: '540', label: 'pelajar' },
  { rank: 5, name: 'YouTube Creator — Yoko Bomb', count: '489', label: 'pelajar' },
];

const activities = [
  { icon: '✅', bg: '#d1fae5', text: 'Kursus "TikTok Algorithm 2026" dipublikasikan', time: '2 jam lalu' },
  { icon: '📝', bg: '#fef3c7', text: 'Lesson baru ditambahkan ke "Getting Started"', time: '5 jam lalu' },
  { icon: '🏆', bg: '#fef3c7', text: 'AT Challenge Mei 2026 dibuat & aktif', time: '1 hari lalu' },
  { icon: '👤', bg: '#eff6ff', text: '234 user baru terdaftar hari ini', time: 'Hari ini' },
  { icon: '⚠️', bg: '#fef3c7', text: 'Review: 3 submission challenge menunggu', time: 'Kemarin' },
];

export default function AdminDashboardPage() {
  return (
    <>
      <div className="admin-topbar">
        <div>
          <div className="admin-topbar-title">Performance Dashboard</div>
          <div className="admin-topbar-breadcrumb">Minggu ini vs minggu lalu</div>
        </div>
        <div className="admin-topbar-right">
          <div className="admin-search-wrap">
            <span className="admin-search-icon">🔍</span>
            <input className="admin-search" placeholder="Cari kursus, user..." />
          </div>
          <div className="admin-notif-btn">
            🔔
            <span className="admin-notif-dot" />
          </div>
          <div className="admin-avatar-sm">SK</div>
          <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text)' }}>Sari K.</div>
        </div>
      </div>

      <div className="admin-content">
        {/* Stats */}
        <div className="admin-stats-row">
          {stats.map((s) => (
            <div key={s.label} className="admin-stat-card">
              <div className="admin-stat-label">
                <span className="stat-icon">{s.icon}</span>
                {s.label}
              </div>
              <div className="admin-stat-value">{s.value}</div>
              <div className={`admin-stat-delta ${s.dir}`}>
                {s.dir === 'up' ? '↑' : '↓'} {s.delta}
              </div>
            </div>
          ))}
        </div>

        {/* Charts row */}
        <div className="admin-dash-grid" style={{ marginBottom: 14 }}>
          {/* Enrollment trend */}
          <div className="admin-card">
            <div className="admin-card-title">Enrollment Trend</div>
            <div className="admin-card-sub">7 hari terakhir · Publisher aktif per hari</div>
            <div className="admin-chart-bars">
              {barData.map((d) => (
                <div key={d.label} className="admin-bar-group">
                  <div className="admin-bar-val" style={{ fontSize: 9 }}>{d.total}</div>
                  <div className="admin-bar-wrap" style={{ height: 90, alignItems: 'flex-end' }}>
                    <div
                      className="admin-bar blue"
                      style={{ height: `${(d.total / maxBar) * 90}px` }}
                      title={`Total: ${d.total}`}
                    />
                    <div
                      className="admin-bar blue-light"
                      style={{ height: `${(d.pub / maxBar) * 90}px` }}
                      title={`Publisher: ${d.pub}`}
                    />
                  </div>
                  <div className="admin-bar-label">{d.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Top courses */}
          <div className="admin-card">
            <div className="admin-card-title">Top Kursus Minggu Ini</div>
            <div className="admin-card-sub">Berdasarkan jumlah pelajar aktif</div>
            <div className="admin-lesson-list">
              {topCourses.map((c) => (
                <div key={c.rank} className="admin-top-course-item">
                  <div className={`admin-tci-rank ${c.rank === 1 ? 'top' : ''}`}>{c.rank}</div>
                  <div className="admin-tci-name">{c.name}</div>
                  <div>
                    <div className="admin-tci-count">{c.count}</div>
                    <div className="admin-tci-sub">{c.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="admin-dash-grid3">
          {/* Aktivitas terbaru */}
          <div className="admin-card">
            <div className="admin-card-title">Aktivitas Terbaru</div>
            <div style={{ marginTop: 12 }}>
              {activities.map((a, i) => (
                <div key={i} className="admin-activity-item">
                  <div className="admin-activity-dot" style={{ background: a.bg }}>{a.icon}</div>
                  <div className="admin-activity-text">{a.text}</div>
                  <div className="admin-activity-time">{a.time}</div>
                </div>
              ))}
            </div>
          </div>

          {/* AT Challenge aktif */}
          <div className="admin-card" style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ padding: '18px 18px 14px' }}>
              <div className="admin-card-title">AT Challenge Aktif</div>
            </div>
            <div style={{ padding: '0 16px 16px' }}>
              <div className="admin-challenge-card">
                <div className="admin-challenge-badge">🏆 Challenge Mei 2026</div>
                <div className="admin-challenge-title">Challenge Affiliate Basic Q1 2025</div>
                <div className="admin-challenge-meta">Batas: 30 Mei 2026 · 15 hari lagi</div>
                <div className="admin-challenge-stats">
                  <div>
                    <div className="admin-cs-val" style={{ color: '#f59e0b' }}>67</div>
                    <div className="admin-cs-label">/ 100 target join</div>
                  </div>
                </div>
                <div className="admin-challenge-progress-track">
                  <div className="admin-challenge-progress-fill" style={{ width: '67%' }} />
                </div>
                <div className="admin-challenge-progress-label">
                  <span>Submission: 42 masuk · 18 disetujui · 6 ditolak</span>
                </div>
                <div style={{ marginTop: 12 }}>
                  <Link href="/admin/at-challenge">
                    <button className="btn-admin-orange">Review Submission →</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Ringkasan kurikulum */}
          <div className="admin-card">
            <div className="admin-card-title">Ringkasan Kurikulum</div>
            <div style={{ marginTop: 14 }}>
              <div className="admin-curriculum-summary">
                <div className="admin-cs-box">
                  <div className="admin-cs-box-val">27</div>
                  <div className="admin-cs-box-label">Kursus Aktif</div>
                </div>
                <div className="admin-cs-box">
                  <div className="admin-cs-box-val" style={{ color: '#f59e0b' }}>8</div>
                  <div className="admin-cs-box-label">Draft / Pending</div>
                </div>
                <div className="admin-cs-box">
                  <div className="admin-cs-box-val" style={{ color: '#3b82f6' }}>194</div>
                  <div className="admin-cs-box-label">Total Lesson</div>
                </div>
                <div className="admin-cs-box">
                  <div className="admin-cs-box-val" style={{ color: '#1D9E75' }}>12.483</div>
                  <div className="admin-cs-box-label">Total Enrolled</div>
                </div>
              </div>
              <div style={{ marginTop: 14 }}>
                <Link href="/admin/curriculum">
                  <button className="btn-admin-publish" style={{ width: '100%', fontFamily: 'var(--font)' }}>
                    Kelola Kurikulum →
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
