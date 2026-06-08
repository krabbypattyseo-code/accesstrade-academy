'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/Toast';

export default function LoginPage() {
  const { showToast } = useToast();
  const router = useRouter();
  const [showPass, setShowPass] = useState(false);

  const handleLogin = () => {
    showToast('🎉 Berhasil masuk! Selamat datang kembali di Academy.');
    setTimeout(() => router.push('/my-learning'), 1200);
  };

  return (
    <div className="auth-page">
      {/* Left */}
      <div className="auth-left">
        <div className="auth-left-glow"></div>
        <div className="auth-left-glow2"></div>

        <Link href="/" className="auth-brand">
          <div className="auth-brand-mark">A</div>
          <div className="auth-brand-name">ACCESSTRADE <span>Academy</span></div>
        </Link>

        <div className="auth-left-body">
          <div className="auth-left-tag">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1l1.5 3 3.5.5-2.5 2.5.5 3.5L6 9l-3 1.5.5-3.5L1 4.5 4.5 4z" fill="#e8503f" /></svg>
            Selamat datang kembali
          </div>
          <h1 className="auth-left-title">Lanjutkan<br />perjalanan <em>belajar</em><br />kamu</h1>
          <p className="auth-left-desc">Masuk dengan akun ACCESSTRADE publisher kamu untuk melanjutkan progress belajar, streak mingguan, dan kursus yang sedang dikerjakan.</p>
          <div className="auth-features">
            {[
              { icon: '📊', title: 'Progress tersimpan otomatis', desc: 'Kursus yang sudah dimulai langsung bisa dilanjutkan dari titik terakhir' },
              { icon: '🔥', title: 'Streak belajar mingguan', desc: 'Pantau konsistensi belajar kamu dan raih milestone streak' },
              { icon: '🏆', title: 'Dashboard komisi terintegrasi', desc: 'Lihat progress komisi dan sisa menuju payout Rp100.000 pertama' },
            ].map(f => (
              <div className="auth-feature" key={f.title}>
                <div className="auth-feature-icon">{f.icon}</div>
                <div>
                  <div className="auth-feature-title">{f.title}</div>
                  <div className="auth-feature-desc">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="auth-left-footer">© 2026 ACCESSTRADE Indonesia · Semua hak dilindungi</div>
      </div>

      {/* Right */}
      <div className="auth-right">
        <div className="auth-form-wrap">
          <div style={{ marginBottom: 28 }}>
            <div className="auth-form-title">Masuk ke Academy</div>
            <div className="auth-form-sub">
              Belum punya akun publisher? <Link href="/register">Daftar gratis sekarang →</Link>
            </div>
          </div>

          <button className="btn-auth-google" onClick={() => showToast('🔗 Menghubungkan ke akun Google...')}>
            <svg width="18" height="18" viewBox="0 0 18 18">
              <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4" />
              <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853" />
              <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05" />
              <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58z" fill="#EA4335" />
            </svg>
            Masuk dengan Google
          </button>

          <div className="auth-divider">
            <div className="auth-divider-line"></div>
            <div className="auth-divider-text">atau masuk dengan email</div>
            <div className="auth-divider-line"></div>
          </div>

          <div className="auth-field">
            <label className="auth-field-label">Email Publisher <span>*</span></label>
            <input className="auth-input" type="email" placeholder="email@kamu.com" />
            <div className="auth-field-hint">Gunakan email yang terdaftar di dashboard ACCESSTRADE</div>
          </div>

          <div className="auth-field">
            <label className="auth-field-label">Password <span>*</span></label>
            <div className="auth-input-wrap">
              <input className="auth-input" type={showPass ? 'text' : 'password'} placeholder="Masukkan password kamu" style={{ paddingRight: 40 }} />
              <div className="auth-input-icon" onClick={() => setShowPass(p => !p)}>{showPass ? '🙈' : '👁'}</div>
            </div>
          </div>

          <div className="auth-forgot" onClick={() => showToast('📧 Link reset password dikirim ke email kamu')}>Lupa password?</div>

          <button className="btn-auth" onClick={handleLogin}>Masuk ke Academy</button>

          <div style={{ textAlign: 'center', fontSize: 12, color: 'var(--text3)', marginBottom: 16 }}>
            Akun publisher kamu juga bisa dipakai di{' '}
            <a href="#" style={{ color: 'var(--red)', fontWeight: 600 }} onClick={(e) => { e.preventDefault(); showToast('Membuka dashboard ACCESSTRADE...'); }}>dashboard.accesstrade.id</a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, paddingTop: 16, borderTop: '1px solid var(--gray2)' }}>
            {[{ icon: '🔒', label: 'SSL Secured' }, { icon: '🛡️', label: 'Data Terlindungi' }, { icon: '✅', label: 'Gratis Selamanya' }].map((item, i) => (
              <>
                {i > 0 && <div key={`sep-${i}`} style={{ width: 1, height: 14, background: 'var(--gray3)' }}></div>}
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, color: 'var(--text3)' }}>
                  <span>{item.icon}</span> {item.label}
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
