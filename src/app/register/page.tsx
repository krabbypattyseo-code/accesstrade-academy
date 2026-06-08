'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/Toast';

const PUBLISHER_TYPES = [
  { icon: '📱', title: 'TikTok Creator', sub: 'Video pendek, review produk, lifestyle' },
  { icon: '📸', title: 'Instagram Creator', sub: 'Feed, Reels, Stories, lifestyle' },
  { icon: '✍️', title: 'Blogger / SEO', sub: 'Konten artikel, review panjang, website' },
  { icon: '🎬', title: 'YouTube Creator', sub: 'Video panjang, tutorial, review gadget' },
  { icon: '💬', title: 'Community Manager', sub: 'WhatsApp group, Telegram, forum' },
  { icon: '🧑‍💻', title: 'Lainnya', sub: 'Email marketing, paid ads, atau cara lain' },
];

export default function RegisterPage() {
  const { showToast } = useToast();
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [showPass, setShowPass] = useState(false);

  const handleRegister = () => {
    showToast('🎉 Pendaftaran berhasil! Selamat bergabung di ACCESSTRADE Academy!');
    setTimeout(() => router.push('/'), 1400);
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
            <svg width="10" height="10" viewBox="0 0 10 10" fill="#e8503f"><circle cx="5" cy="5" r="5" /></svg>
            100% Gratis · Daftar Sekarang
          </div>
          <h1 className="auth-left-title">Bergabung dengan<br /><em>ribuan publisher</em><br />aktif ACCESSTRADE</h1>
          <p className="auth-left-desc">Daftar sebagai publisher, akses seluruh materi Academy, dan mulai hasilkan komisi pertama kamu — tanpa modal, tanpa biaya pendaftaran.</p>

          <div style={{ display: 'flex', gap: 16, marginBottom: 28 }}>
            {[{ num: '2.500+', label: 'Publisher Aktif' }, { num: '200+', label: 'Materi Gratis' }, { num: 'Rp0', label: 'Biaya Daftar' }].map(stat => (
              <div key={stat.label} style={{ flex: 1, textAlign: 'center', padding: 14, background: 'rgba(255,255,255,0.06)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontSize: 22, fontWeight: 800, color: 'white', lineHeight: 1, marginBottom: 4 }}>{stat.num}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="auth-features">
            {[
              { icon: '🎯', title: 'Akses 200+ materi gratis', desc: 'TikTok, Instagram, SEO, YouTube — semua tersedia langsung setelah daftar' },
              { icon: '💰', title: 'Mulai hasilkan komisi', desc: 'Daftar campaign, ambil link, promosi, dan komisi masuk ke akunmu' },
              { icon: '🤝', title: 'Bergabung komunitas publisher', desc: 'Belajar bareng ribuan publisher aktif di Telegram & forum ACCESSTRADE' },
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
      <div className="auth-right" style={{ background: 'var(--gray)' }}>
        <div className="auth-form-wrap">
          {/* Stepper */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text2)' }}>
              {step === 1 ? 'Langkah 1 dari 2' : 'Langkah 2 dari 2'}
            </div>
            <div style={{ fontSize: 12, color: 'var(--text3)' }}>
              {step === 1 ? 'Informasi Akun' : 'Tipe Publisher'}
            </div>
          </div>
          <div className="auth-stepper" style={{ marginBottom: 28 }}>
            <div className={`auth-step${step >= 1 ? ' done' : ''}`} style={{ flex: 1 }}></div>
            <div className={`auth-step${step >= 2 ? ' active' : ''}`} style={{ flex: 1 }}></div>
          </div>

          {/* Step 1 */}
          {step === 1 && (
            <>
              <div style={{ marginBottom: 28 }}>
                <div className="auth-form-title">Daftar ke Academy</div>
                <div className="auth-form-sub">
                  Sudah punya akun publisher? <Link href="/login">Masuk sekarang →</Link>
                </div>
              </div>

              <button className="btn-auth-google" onClick={() => showToast('🔗 Mendaftar dengan Google...')}>
                <svg width="18" height="18" viewBox="0 0 18 18">
                  <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4" />
                  <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853" />
                  <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05" />
                  <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58z" fill="#EA4335" />
                </svg>
                Daftar dengan Google
              </button>

              <div className="auth-divider">
                <div className="auth-divider-line"></div>
                <div className="auth-divider-text">atau daftar dengan email</div>
                <div className="auth-divider-line"></div>
              </div>

              <div className="auth-field-row">
                <div className="auth-field">
                  <label className="auth-field-label">Nama Depan <span>*</span></label>
                  <input className="auth-input" placeholder="Muhammad" />
                </div>
                <div className="auth-field">
                  <label className="auth-field-label">Nama Belakang</label>
                  <input className="auth-input" placeholder="Harist" />
                </div>
              </div>

              <div className="auth-field">
                <label className="auth-field-label">Email <span>*</span></label>
                <input className="auth-input" type="email" placeholder="email@kamu.com" />
              </div>

              <div className="auth-field">
                <label className="auth-field-label">Password <span>*</span></label>
                <div className="auth-input-wrap">
                  <input className="auth-input" type={showPass ? 'text' : 'password'} placeholder="Min. 8 karakter" style={{ paddingRight: 40 }} />
                  <div className="auth-input-icon" onClick={() => setShowPass(p => !p)}>{showPass ? '🙈' : '👁'}</div>
                </div>
                <div className="auth-field-hint">Min. 8 karakter, kombinasi huruf dan angka</div>
              </div>

              <div className="auth-terms">
                Dengan mendaftar, kamu menyetujui <a href="#">Syarat &amp; Ketentuan</a> dan <a href="#">Kebijakan Privasi</a> ACCESSTRADE Academy
              </div>

              <button className="btn-auth" onClick={() => setStep(2)}>Lanjut ke Langkah 2 →</button>
            </>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <>
              <div style={{ marginBottom: 20 }}>
                <div className="auth-form-title">Tipe Publisher Kamu</div>
                <div style={{ fontSize: 14, color: 'var(--text2)', marginBottom: 0 }}>Pilih yang paling sesuai dengan cara kamu membuat konten</div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginBottom: 0 }}>
                {PUBLISHER_TYPES.map(type => (
                  <div
                    key={type.title}
                    className={`auth-publisher-badge${selectedType === type.title ? ' selected' : ''}`}
                    onClick={() => setSelectedType(type.title)}
                  >
                    <div className="auth-pb-icon">{type.icon}</div>
                    <div>
                      <div className="auth-pb-title">{type.title}</div>
                      <div className="auth-pb-sub">{type.sub}</div>
                    </div>
                    <div className="auth-pb-radio">
                      {selectedType === type.title && (
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="white">
                          <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                        </svg>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ background: 'var(--red-light)', borderRadius: 12, padding: 14, marginTop: 16, marginBottom: 20 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--red)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Yang kamu dapatkan setelah daftar</div>
                {['Akses 200+ materi gratis di Academy', 'Komisi dari 500+ brand & campaign aktif', 'Bank konten video & banner gratis', 'Komunitas publisher ACCESSTRADE'].map(b => (
                  <div className="auth-benefit-row" key={b}>{b}</div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: 10 }}>
                <button style={{ flex: 1, padding: 12, borderRadius: 10, border: '1.5px solid var(--gray3)', fontFamily: 'var(--font)', fontSize: 13, fontWeight: 600, color: 'var(--text2)', background: 'white', cursor: 'pointer' }} onClick={() => setStep(1)}>← Kembali</button>
                <button className="btn-auth" style={{ flex: 2, marginBottom: 0 }} onClick={handleRegister}>Daftar Sekarang 🎉</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
