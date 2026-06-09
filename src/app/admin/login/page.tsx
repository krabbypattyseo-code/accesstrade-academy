'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const [role, setRole] = useState<'coordinator' | 'reviewer'>('coordinator');
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    router.push('/admin/dashboard');
  }

  return (
    <div className="admin-login-page">
      {/* Left panel */}
      <div className="admin-login-left">
        <div className="admin-login-glow" />
        <div className="admin-login-glow2" />

        <div className="admin-login-brand">
          <div className="admin-login-mark">A</div>
          <div>
            <div className="admin-login-brand-text">ACCESSTRADE</div>
            <div className="admin-login-brand-sub">Academy Admin</div>
          </div>
        </div>

        <div className="admin-login-body">
          <div className="admin-login-tag">🔒 Internal Access Only</div>
          <h1 className="admin-login-title">Dashboard Kurikulum AT Academy</h1>
          <p className="admin-login-desc">
            Portal internal untuk Curriculum Coordinator mengelola konten, kurikulum, program AT Challenge, dan data registrasi publisher.
          </p>

          {[
            { icon: '📚', title: 'Kelola Kurikulum', desc: 'Tambah, edit, dan publikasikan kursus & materi' },
            { icon: '🏆', title: 'Program AT Challenge', desc: 'Buat dan monitor program challenge publisher' },
            { icon: '📊', title: 'Performance Analytics', desc: 'Pantau engagement, enrollment, dan completion rate' },
            { icon: '👥', title: 'Data Registrasi', desc: 'Kelola dan review data user yang terdaftar' },
          ].map((f) => (
            <div key={f.title} className="admin-login-feature">
              <div className="admin-login-feature-icon">{f.icon}</div>
              <div>
                <div className="admin-login-feature-title">{f.title}</div>
                <div className="admin-login-feature-desc">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="admin-login-footer">
          ⚠️ Akses terbatas untuk staff internal ACCESSTRADE Indonesia
        </div>
      </div>

      {/* Right panel */}
      <div className="admin-login-right">
        <div className="admin-login-form">
          <div className="admin-login-form-icon">A</div>
          <h2 className="admin-login-form-title">Masuk ke Admin Panel</h2>
          <p className="admin-login-form-sub">
            Gunakan email internal @accesstrade.id dan password yang telah diberikan oleh IT Admin.
          </p>

          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text)', marginBottom: 6 }}>Login sebagai</div>
            <div className="admin-role-tabs">
              <button
                type="button"
                className={`admin-role-tab ${role === 'coordinator' ? 'active' : ''}`}
                onClick={() => setRole('coordinator')}
              >
                🎓 Curriculum Coordinator
              </button>
              <button
                type="button"
                className={`admin-role-tab ${role === 'reviewer' ? 'active' : ''}`}
                onClick={() => setRole('reviewer')}
              >
                🔍 Content Reviewer
              </button>
            </div>
          </div>

          <form onSubmit={handleLogin}>
            <div className="admin-form-field">
              <label className="admin-form-label">
                Email Internal <span>*</span>
              </label>
              <div className="auth-input-wrap">
                <input
                  type="email"
                  className="admin-form-input"
                  placeholder="nama@accesstrade.id"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <span className="auth-input-icon">✉️</span>
              </div>
            </div>

            <div className="admin-form-field">
              <label className="admin-form-label">
                Password <span>*</span>
              </label>
              <div className="auth-input-wrap">
                <input
                  type={showPass ? 'text' : 'password'}
                  className="admin-form-input"
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span className="auth-input-icon" onClick={() => setShowPass(!showPass)} style={{ cursor: 'pointer' }}>
                  {showPass ? '🙈' : '👁️'}
                </span>
              </div>
            </div>

            <button type="submit" className="btn-admin-publish" style={{ width: '100%', padding: '13px', fontSize: 14, borderRadius: 10, marginTop: 8 }}>
              Masuk ke Dashboard
            </button>
          </form>

          <div className="admin-login-hint">
            Lupa password? Hubungi IT Admin di Slack #it-support
          </div>

          <div className="admin-login-secure">
            {['🔒 SSL Encrypted', '🏢 Internal Network', '📋 Activity Logged'].map((s) => (
              <div key={s} className="admin-login-secure-item">{s}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
