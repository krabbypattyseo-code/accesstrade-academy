'use client';
import { useState } from 'react';

const users = [
  { initials: 'AN', name: 'Andi Nugroho', email: 'andi.nugroho@gmail.com', type: 'Publisher', status: 'active', date: '09 Jun 2026', enrolled: 3 },
  { initials: 'SR', name: 'Sari Rahmawati', email: 'sari.r@yahoo.com', type: 'Publisher', status: 'active', date: '08 Jun 2026', enrolled: 1 },
  { initials: 'BW', name: 'Budi Wibowo', email: 'budiwibowo@gmail.com', type: 'Publisher', status: 'pending', date: '08 Jun 2026', enrolled: 0 },
  { initials: 'DP', name: 'Dewi Putri', email: 'dewiputri@hotmail.com', type: 'Publisher', status: 'active', date: '07 Jun 2026', enrolled: 5 },
  { initials: 'RP', name: 'Rizky Pratama', email: 'rizkyp@gmail.com', type: 'Publisher', status: 'inactive', date: '07 Jun 2026', enrolled: 2 },
  { initials: 'LS', name: 'Lina Susanti', email: 'lina.s@gmail.com', type: 'Publisher', status: 'active', date: '06 Jun 2026', enrolled: 4 },
  { initials: 'MH', name: 'Muhammad Hasan', email: 'mhasan@gmail.com', type: 'Publisher', status: 'active', date: '06 Jun 2026', enrolled: 2 },
  { initials: 'YA', name: 'Yuliana Agustina', email: 'yuliana@gmail.com', type: 'Publisher', status: 'pending', date: '05 Jun 2026', enrolled: 0 },
];

const statusColors: Record<string, string> = {
  active: 'published',
  pending: 'pending',
  inactive: 'draft',
};

const statusLabel: Record<string, string> = {
  active: 'Aktif',
  pending: 'Pending',
  inactive: 'Nonaktif',
};

export default function RegistrationPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const filtered = users.filter((u) => {
    const matchSearch = u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase());
    const matchStatus = !statusFilter || u.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <>
      <div className="admin-topbar">
        <div>
          <div className="admin-topbar-title">Registration · User List</div>
          <div className="admin-topbar-breadcrumb">
            Dashboard / <span>Registration</span>
          </div>
        </div>
        <div className="admin-topbar-right">
          <div className="admin-avatar-sm">SR</div>
        </div>
      </div>

      <div className="admin-content">
        {/* Stats */}
        <div className="admin-reg-stats">
          <div className="admin-stat-card">
            <div className="admin-stat-label">Total Registrasi</div>
            <div className="admin-stat-value">12.483</div>
            <div className="admin-stat-delta up">↑ +234 hari ini</div>
          </div>
          <div className="admin-stat-card">
            <div className="admin-stat-label">User Aktif</div>
            <div className="admin-stat-value" style={{ color: '#1D9E75' }}>10.241</div>
          </div>
          <div className="admin-stat-card">
            <div className="admin-stat-label">Pending Verifikasi</div>
            <div className="admin-stat-value" style={{ color: '#f59e0b' }}>142</div>
          </div>
          <div className="admin-stat-card">
            <div className="admin-stat-label">Nonaktif</div>
            <div className="admin-stat-value" style={{ color: 'var(--text3)' }}>2.100</div>
          </div>
        </div>

        {/* Filter & export */}
        <div className="admin-table-wrap">
          <div className="admin-table-header">
            <div className="admin-search-wrap" style={{ flex: 1, maxWidth: 280 }}>
              <span className="admin-search-icon">🔍</span>
              <input
                className="admin-search"
                placeholder="Cari nama atau email..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ width: '100%' }}
              />
            </div>
            <select
              className="admin-filter-select"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="">Semua Status</option>
              <option value="active">Aktif</option>
              <option value="pending">Pending</option>
              <option value="inactive">Nonaktif</option>
            </select>
            <select className="admin-filter-select">
              <option>Semua Tipe</option>
              <option>Publisher</option>
              <option>Affiliate</option>
            </select>
            <div style={{ flex: 1 }} />
            <button className="btn-admin-primary">⬇ Export Data</button>
          </div>

          <table className="admin-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Email</th>
                <th>Tipe</th>
                <th>Status</th>
                <th>Kursus Diikuti</th>
                <th>Bergabung</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((u, i) => (
                <tr key={i}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                      <div className="admin-reg-avatar" style={{ width: 30, height: 30, fontSize: 11 }}>{u.initials}</div>
                      <div className="course-title" style={{ fontSize: 13 }}>{u.name}</div>
                    </div>
                  </td>
                  <td className="course-meta">{u.email}</td>
                  <td><span className="badge-cat">{u.type}</span></td>
                  <td><span className={`badge ${statusColors[u.status]}`}>{statusLabel[u.status]}</span></td>
                  <td className="course-meta" style={{ textAlign: 'center' }}>{u.enrolled}</td>
                  <td className="course-meta">{u.date}</td>
                  <td>
                    <button className="btn-tbl-edit">Detail</button>
                    {u.status === 'pending' && <button className="btn-admin-publish" style={{ fontSize: 11, padding: '3px 10px', borderRadius: 5 }}>Verifikasi</button>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="admin-pagination">
            <div className="admin-pagination-info">
              Menampilkan {filtered.length} dari {users.length} user
            </div>
            <div className="admin-pagination-pages">
              {[1, 2, 3].map((p) => (
                <button key={p} className={`admin-page-btn ${p === 1 ? 'active' : ''}`}>{p}</button>
              ))}
              <button className="admin-page-btn arrow">›</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
