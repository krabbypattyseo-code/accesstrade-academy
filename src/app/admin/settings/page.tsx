'use client';

export default function SettingsPage() {
  return (
    <>
      <div className="admin-topbar">
        <div>
          <div className="admin-topbar-title">Settings</div>
          <div className="admin-topbar-breadcrumb">Dashboard / <span>Settings</span></div>
        </div>
        <div className="admin-topbar-right">
          <div className="admin-avatar-sm">SR</div>
        </div>
      </div>
      <div className="admin-content">
        <div className="admin-form-section" style={{ maxWidth: 520 }}>
          <div className="admin-form-section-title">Pengaturan Akun</div>
          <div className="admin-form-section-sub">Kelola preferensi dan keamanan akun admin kamu.</div>
          <div className="admin-form-field">
            <label className="admin-form-label">Nama Lengkap</label>
            <input className="admin-form-input" defaultValue="Siti Rahayu" />
          </div>
          <div className="admin-form-field">
            <label className="admin-form-label">Email Internal</label>
            <input className="admin-form-input" defaultValue="siti.rahayu@accesstrade.id" />
          </div>
          <div className="admin-form-field">
            <label className="admin-form-label">Role</label>
            <input className="admin-form-input" defaultValue="Curriculum Coordinator" readOnly style={{ background: 'var(--gray)', color: 'var(--text3)' }} />
          </div>
          <div className="admin-form-actions">
            <button className="btn-admin-publish">Simpan Perubahan</button>
          </div>
        </div>
      </div>
    </>
  );
}
