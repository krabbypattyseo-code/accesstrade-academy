'use client';

const programs = [
  {
    title: 'Challenge Affiliate Basic Q1 2025',
    date: '1 Jan – 31 Mar 2025',
    status: 'aktif',
    peserta: '1.247', submission: '892', target: '1.500',
    progress: 73, fillClass: 'red',
  },
  {
    title: 'SEO Sprint untuk Publisher',
    date: '15 Feb – 30 Apr 2025',
    status: 'aktif',
    peserta: '892', submission: '401', target: '900',
    progress: 45, fillClass: 'red',
  },
  {
    title: 'Social Media Affiliate Challenge',
    date: '1 Okt – 31 Des 2024',
    status: 'selesai',
    peserta: '2.103', submission: '2.103', target: '2.000',
    progress: 100, fillClass: 'green',
  },
  {
    title: 'Content Creation Bootcamp',
    date: 'Belum ditentukan',
    status: 'draft',
    peserta: '—', submission: '—', target: '500',
    progress: 0, fillClass: 'gray',
  },
  {
    title: 'Email Marketing Mastery Challenge',
    date: '1 Jul – 30 Sep 2024',
    status: 'selesai',
    peserta: '1.456', submission: '1.456', target: '1.200',
    progress: 100, fillClass: 'green',
  },
  {
    title: 'Advanced Affiliate Mastery Q2',
    date: 'Belum ditentukan',
    status: 'draft',
    peserta: '—', submission: '—', target: '800',
    progress: 0, fillClass: 'gray',
  },
];

function StatusBadge({ status }: { status: string }) {
  if (status === 'aktif') return <span className="badge-aktif">Aktif</span>;
  if (status === 'selesai') return <span className="badge-selesai">Selesai</span>;
  return <span className="badge-draft-ch">Draft</span>;
}

export default function ATChallengePage() {
  return (
    <>
      <div className="admin-topbar">
        <div>
          <div className="admin-topbar-title">AT Challenge · Program List</div>
          <div className="admin-topbar-breadcrumb">
            Dashboard / AT Challenge / <span>Program List</span>
          </div>
        </div>
        <div className="admin-topbar-right">
          <div className="admin-avatar-sm">SR</div>
        </div>
      </div>

      <div className="admin-content">
        {/* Summary stats */}
        <div className="admin-stats-row" style={{ marginBottom: 20 }}>
          <div className="admin-stat-card">
            <div className="admin-stat-label">Program Aktif</div>
            <div className="admin-stat-value" style={{ color: 'var(--red)', fontSize: 28 }}>3</div>
          </div>
          <div className="admin-stat-card">
            <div className="admin-stat-label">Total Peserta</div>
            <div className="admin-stat-value" style={{ color: '#3b82f6' }}>5.846</div>
          </div>
          <div className="admin-stat-card">
            <div className="admin-stat-label">Submission Bulan Ini</div>
            <div className="admin-stat-value" style={{ color: '#1D9E75' }}>3.251</div>
          </div>
          <div className="admin-stat-card">
            <div className="admin-stat-label">Program Selesai</div>
            <div className="admin-stat-value">2</div>
          </div>
        </div>

        {/* Filters + CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
          <select className="admin-filter-select">
            <option>Semua Status</option>
            <option>Aktif</option>
            <option>Selesai</option>
            <option>Draft</option>
          </select>
          <select className="admin-filter-select">
            <option>Tahun 2025</option>
            <option>Tahun 2024</option>
            <option>Tahun 2026</option>
          </select>
          <div style={{ flex: 1 }} />
          <button className="btn-admin-primary">+ Buat Program</button>
        </div>

        {/* Program cards */}
        <div className="admin-challenge-grid">
          {programs.map((p) => (
            <div key={p.title} className="admin-challenge-program-card">
              <div className="admin-cp-header">
                <div>
                  <div className="admin-cp-title">{p.title}</div>
                  <div className="admin-cp-date">{p.date}</div>
                </div>
                <StatusBadge status={p.status} />
              </div>
              <div className="admin-cp-body">
                <div className="admin-cp-stats">
                  <div>
                    <div className="admin-cp-stat-val">{p.peserta}</div>
                    <div className="admin-cp-stat-label">Peserta</div>
                  </div>
                  <div>
                    <div className="admin-cp-stat-val">{p.submission}</div>
                    <div className="admin-cp-stat-label">Submission</div>
                  </div>
                  <div>
                    <div className="admin-cp-stat-val">{p.target}</div>
                    <div className="admin-cp-stat-label">Target</div>
                  </div>
                </div>
                <div className="admin-cp-progress-label">Progress: {p.progress}%</div>
                <div className="admin-cp-track">
                  <div className={`admin-cp-fill ${p.fillClass}`} style={{ width: `${p.progress}%` }} />
                </div>
                <div className="admin-cp-actions">
                  <button className="btn-admin-outline">Lihat Detail</button>
                  <button className="btn-admin-sm">Edit</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
