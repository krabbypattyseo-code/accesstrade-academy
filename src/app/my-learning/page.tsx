'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useToast } from '@/components/Toast';

type TabId = 'semua' | 'wishlist' | 'learning-paths' | 'profil';

const COURSES_IN_PROGRESS = [
  { bg: '#2c2420', icon: '🎯', title: 'Dasar-dasar Affiliate Marketing untuk Pemula', progress: 7, stars: 1 },
  { bg: '#1e2a20', icon: '📱', title: 'TikTok for Business — Affiliate Strategy', progress: 13, stars: 2 },
  { bg: '#20241e', icon: '🔍', title: 'Cara Keyword Research untuk Konten Affiliate', progress: 18, stars: 4 },
  { bg: '#28201a', icon: '📸', title: 'Strategi Konten Instagram untuk Komisi Maksimal', progress: 69, stars: 5 },
];

const WISHLIST_COURSES = [
  { bg: '#201020', icon: '🎬', title: 'Teknik Video Review Produk Tech yang Convert' },
  { bg: '#0f1a2e', icon: '⚡', title: 'TikTok Algorithm Masterclass — Kejar FYP 2026' },
];

export default function MyLearningPage() {
  const { showToast } = useToast();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabId>('semua');

  const TABS: { id: TabId; label: string }[] = [
    { id: 'semua', label: 'Semua Kursus' },
    { id: 'wishlist', label: 'Wishlist' },
    { id: 'learning-paths', label: 'Learning Paths' },
    { id: 'profil', label: 'Profil' },
  ];

  return (
    <div className="ml-page">
      <Navbar />

      <div className="ml-header">
        <div className="ml-header-inner">
          <h1 className="ml-page-title">My Learning</h1>
          <div className="ml-tabs">
            {TABS.map(tab => (
              <div key={tab.id} className={`ml-tab${activeTab === tab.id ? ' active' : ''}`} onClick={() => setActiveTab(tab.id)}>
                {tab.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TAB: SEMUA */}
      {activeTab === 'semua' && (
        <div className="ml-body">
          <div className="ml-streak-card">
            <div style={{ flex: 1 }}>
              <div className="ml-streak-title">Mulai streak mingguan</div>
              <div className="ml-streak-sub">Tonton 5 menit video per hari untuk mencapai target belajarmu</div>
            </div>
            <div className="ml-streak-mid">
              <div className="ml-streak-icon">🔥</div>
              <div>
                <div className="ml-streak-num">0</div>
                <div className="ml-streak-lbl">minggu</div>
              </div>
            </div>
            <div className="ml-streak-right">
              <svg width="52" height="52" viewBox="0 0 52 52">
                <circle cx="26" cy="26" r="20" fill="none" stroke="#e5e5e2" strokeWidth="5" />
                <circle cx="26" cy="26" r="20" fill="none" stroke="#1D9E75" strokeWidth="5" strokeDasharray="125.6" strokeDashoffset="110" strokeLinecap="round" transform="rotate(-90 26 26)" />
              </svg>
              <div>
                <div className="ml-streak-label-item"><div className="ml-streak-label-dot" style={{ background: 'var(--red)' }}></div>0/30 menit kursus</div>
                <div className="ml-streak-label-item"><div className="ml-streak-label-dot" style={{ background: '#1D9E75' }}></div>1/1 kunjungan</div>
                <div className="ml-streak-date">27 Apr — 4 Mei</div>
              </div>
            </div>
          </div>

          <div className="ml-schedule-card">
            <div className="ml-sch-icon">⏰</div>
            <div style={{ flex: 1 }}>
              <div className="ml-sch-title">Atur jadwal belajar</div>
              <div className="ml-sch-desc">Belajar sedikit setiap hari itu penting. Riset menunjukkan pelajar yang membuat jadwal belajar lebih mudah mencapai tujuan mereka. Luangkan waktu dan dapatkan pengingat lewat penjadwal belajarmu.</div>
              <div className="ml-sch-btns">
                <button className="ml-btn-r" onClick={() => showToast('📅 Jadwal belajar berhasil diatur!')}>Mulai atur</button>
                <button className="ml-btn-g" onClick={() => showToast('Reminder dinonaktifkan')}>Abaikan</button>
              </div>
            </div>
          </div>

          <div>
            <div className="ml-section-title">Kursus yang sedang dipelajari</div>
            <div className="ml-grid">
              {COURSES_IN_PROGRESS.map(c => (
                <div className="ml-ccard" key={c.title} onClick={() => router.push('/player')}>
                  <div className="ml-cthumb" style={{ background: c.bg }}>
                    <div className="ml-cthumb-bg">{c.icon}</div>
                    <div className="ml-cmenu-btn" onClick={(e) => { e.stopPropagation(); showToast('Opsi kursus'); }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="rgba(255,255,255,0.8)">
                        <circle cx="7" cy="3" r="1.2" /><circle cx="7" cy="7" r="1.2" /><circle cx="7" cy="11" r="1.2" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-cbody">
                    <div className="ml-ctitle">{c.title}</div>
                    <div className="ml-cauthor">ACCESSTRADE Academy</div>
                    <div className="ml-cprogress-row">
                      <span className="ml-cpct">{c.progress}% selesai</span>
                      <div style={{ display: 'flex', gap: 2 }}>
                        {[1,2,3,4,5].map(s => (
                          <span key={s} style={{ fontSize: 10, color: s <= c.stars ? '#f59e0b' : 'var(--gray2)' }}>★</span>
                        ))}
                      </div>
                    </div>
                    <div className="ml-cbar"><div className="ml-cbar-fill" style={{ width: `${c.progress}%` }}></div></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB: WISHLIST */}
      {activeTab === 'wishlist' && (
        <div className="ml-body">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
            <div className="ml-section-title" style={{ margin: 0 }}>Kursus di Wishlist</div>
            <span style={{ fontSize: 12, color: 'var(--text3)' }}>2 kursus</span>
          </div>
          <div className="ml-grid" style={{ marginTop: 16 }}>
            {WISHLIST_COURSES.map(c => (
              <div className="ml-ccard" key={c.title} onClick={() => router.push('/player')}>
                <div className="ml-cthumb" style={{ background: c.bg }}>
                  <div className="ml-cthumb-bg">{c.icon}</div>
                  <div className="ml-cmenu-btn" onClick={(e) => { e.stopPropagation(); showToast('Hapus dari Wishlist?'); }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="rgba(255,255,255,0.8)">
                      <circle cx="7" cy="3" r="1.2" /><circle cx="7" cy="7" r="1.2" /><circle cx="7" cy="11" r="1.2" />
                    </svg>
                  </div>
                </div>
                <div className="ml-cbody">
                  <div className="ml-ctitle">{c.title}</div>
                  <div className="ml-cauthor">ACCESSTRADE Academy</div>
                  <div style={{ marginTop: 10 }}>
                    <button className="btn-start-course" onClick={(e) => { e.stopPropagation(); router.push('/player'); }}>Mulai Kursus →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB: LEARNING PATHS */}
      {activeTab === 'learning-paths' && (
        <div className="ml-body">
          <div style={{ background: 'linear-gradient(135deg,#1a1a18,#2c2c2a)', borderRadius: 16, padding: '20px 24px', display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 8 }}>
            <div style={{ fontSize: 28, flexShrink: 0 }}>🤖</div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, color: 'white', marginBottom: 4 }}>Rekomendasi dipersonalisasi untuk Harist</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>Berdasarkan profil kamu sebagai <strong style={{ color: 'rgba(255,255,255,0.8)' }}>Tech Content Creator di TikTok &amp; Instagram</strong>, algoritma Academy merekomendasikan jalur belajar berikut untuk memaksimalkan komisi affiliate kamu.</div>
            </div>
          </div>

          {/* Path 1 */}
          <div style={{ border: '1.5px solid var(--border2)', borderRadius: 16, overflow: 'hidden', marginBottom: 16 }}>
            <div style={{ background: 'linear-gradient(135deg,#0f1a2e,#1a2a3a)', padding: '20px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>📱</div>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 3 }}>COCOK UNTUK KAMU · Tech Creator</div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: 'white' }}>TikTok Affiliate Masterclass</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>6 kursus · ~3.5 jam · Intermediate</div>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginBottom: 4 }}>Progress</div>
                <div style={{ fontSize: 22, fontWeight: 800, color: 'white' }}>13%</div>
              </div>
            </div>
            <div style={{ padding: '16px 22px', background: 'var(--white)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px', background: 'var(--gray)', borderRadius: 8 }}>
                  <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--red)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" /></svg>
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>TikTok for Business — Affiliate Strategy</span>
                  <span style={{ marginLeft: 'auto', fontSize: 11, color: 'var(--text3)' }}>Selesai</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px', background: 'var(--red-light)', borderRadius: 8, border: '1px solid rgba(192,57,43,0.2)' }}>
                  <div style={{ width: 22, height: 22, borderRadius: '50%', border: '2px solid var(--red)', background: 'rgba(192,57,43,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--red)' }}></div>
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--red)' }}>TikTok Algorithm &amp; FYP Strategy 2026</span>
                  <span style={{ marginLeft: 'auto', fontSize: 11, color: 'var(--red)', fontWeight: 600 }}>Lanjutkan →</span>
                </div>
                {['Hook Formula: 3 Detik Pertama yang Convert', 'Review Produk Tech yang Bikin Penonton Beli'].map(t => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px', borderRadius: 8, border: '1px solid var(--border)' }}>
                    <div style={{ width: 22, height: 22, borderRadius: '50%', border: '1.5px solid var(--gray3)', flexShrink: 0 }}></div>
                    <span style={{ fontSize: 13, color: 'var(--text2)' }}>{t}</span>
                    <span style={{ marginLeft: 'auto', fontSize: 11, color: 'var(--text3)' }}>Terkunci</span>
                  </div>
                ))}
              </div>
              <button className="btn-start-course" onClick={() => router.push('/player')}>Lanjutkan Path Ini →</button>
            </div>
          </div>

          {/* Path 2 */}
          <div style={{ border: '1.5px solid var(--border2)', borderRadius: 16, overflow: 'hidden', marginBottom: 16 }}>
            <div style={{ background: 'linear-gradient(135deg,#2a1020,#3a1535)', padding: '20px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>📸</div>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 3 }}>COCOK UNTUK KAMU · Tech Creator</div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: 'white' }}>Instagram Affiliate untuk Tech Creator</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>5 kursus · ~2.5 jam · Intermediate</div>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginBottom: 4 }}>Progress</div>
                <div style={{ fontSize: 22, fontWeight: 800, color: 'white' }}>69%</div>
              </div>
            </div>
            <div style={{ padding: '16px 22px', background: 'var(--white)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px', background: 'var(--gray)', borderRadius: 8 }}>
                  <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--red)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" /></svg>
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>Strategi Konten Instagram untuk Komisi Maksimal</span>
                  <span style={{ marginLeft: 'auto', fontSize: 11, color: 'var(--text3)' }}>69%</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px', background: 'var(--red-light)', borderRadius: 8, border: '1px solid rgba(192,57,43,0.2)' }}>
                  <div style={{ width: 22, height: 22, borderRadius: '50%', border: '2px solid var(--red)', background: 'rgba(192,57,43,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--red)' }}></div>
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--red)' }}>IG Reels untuk Review Produk Tech</span>
                  <span style={{ marginLeft: 'auto', fontSize: 11, color: 'var(--red)', fontWeight: 600 }}>Mulai →</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px', borderRadius: 8, border: '1px solid var(--border)' }}>
                  <div style={{ width: 22, height: 22, borderRadius: '50%', border: '1.5px solid var(--gray3)', flexShrink: 0 }}></div>
                  <span style={{ fontSize: 13, color: 'var(--text2)' }}>Link di Bio &amp; Swipe-Up Strategy untuk Affiliate</span>
                  <span style={{ marginLeft: 'auto', fontSize: 11, color: 'var(--text3)' }}>Terkunci</span>
                </div>
              </div>
              <button className="btn-start-course" onClick={() => router.push('/player')}>Lanjutkan Path Ini →</button>
            </div>
          </div>

          {/* Path 3 — Locked */}
          <div style={{ border: '1.5px solid var(--border)', borderRadius: 16, overflow: 'hidden', opacity: 0.7 }}>
            <div style={{ background: 'linear-gradient(135deg,#1a1810,#2a2815)', padding: '20px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>💰</div>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 3 }}>DIREKOMENDASIKAN · Selesaikan Path 1 dulu</div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: 'rgba(255,255,255,0.7)' }}>Monetisasi Tech Gadget — Komisi Premium</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>4 kursus · ~2 jam · Advanced</div>
                </div>
              </div>
              <div style={{ fontSize: 11, padding: '4px 10px', background: 'rgba(255,255,255,0.1)', borderRadius: 20, color: 'rgba(255,255,255,0.5)' }}>🔒 Terkunci</div>
            </div>
          </div>
        </div>
      )}

      {/* TAB: PROFIL */}
      {activeTab === 'profil' && (
        <div className="ml-body" style={{ maxWidth: 860 }}>
          {/* Profile Header */}
          <div style={{ background: 'linear-gradient(135deg,var(--dark),#2c2c2a)', borderRadius: 20, padding: 28, display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -60, right: -40, width: 220, height: 220, borderRadius: '50%', background: 'radial-gradient(circle,rgba(192,57,43,0.2) 0%,transparent 70%)' }}></div>
            <div style={{ position: 'relative', flexShrink: 0 }}>
              <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'var(--red)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, fontWeight: 800, color: 'white', border: '3px solid rgba(255,255,255,0.15)' }}>MH</div>
              <div style={{ position: 'absolute', bottom: 0, right: 0, width: 20, height: 20, borderRadius: '50%', background: '#1D9E75', border: '2px solid var(--dark)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="9" height="9" viewBox="0 0 9 9" fill="white"><circle cx="4.5" cy="4.5" r="3" /></svg>
              </div>
            </div>
            <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                <div style={{ fontSize: 20, fontWeight: 800, color: 'white' }}>Muhammad Harist</div>
                <div style={{ padding: '3px 10px', background: 'var(--red)', borderRadius: 20, fontSize: 10, fontWeight: 700, color: 'white', letterSpacing: '0.04em' }}>Publisher Aktif</div>
              </div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 14 }}>@muhammadharist · bergabung Januari 2025</div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {[{ icon: '📱', label: 'TikTok Creator' }, { icon: '📸', label: 'Instagram Creator' }, { icon: '💻', label: 'Tech Niche' }].map(badge => (
                  <div key={badge.label} style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '5px 12px', background: 'rgba(255,255,255,0.07)', borderRadius: 20, border: '1px solid rgba(255,255,255,0.1)' }}>
                    <span style={{ fontSize: 14 }}>{badge.icon}</span>
                    <span style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.8)' }}>{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <button style={{ padding: '8px 16px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.06)', fontFamily: 'var(--font)', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.7)', cursor: 'pointer', position: 'relative', zIndex: 1 }} onClick={() => showToast('✏️ Mode edit profil dibuka')}>Edit Profil</button>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12, marginBottom: 20 }}>
            {[
              { num: '5', label: 'Kursus Aktif', bg: 'var(--white)', border: '1px solid var(--border)', numColor: 'var(--text)', lblColor: 'var(--text3)' },
              { num: '0', label: 'Streak Minggu', bg: 'var(--white)', border: '1px solid var(--border)', numColor: 'var(--text)', lblColor: 'var(--text3)' },
              { num: 'Rp72k', label: 'Komisi Terkumpul', bg: 'var(--red-light)', border: '1.5px solid rgba(192,57,43,0.2)', numColor: 'var(--red)', lblColor: 'var(--red)' },
              { num: '72%', label: 'Menuju Payout', bg: '#E1F5EE', border: '1.5px solid rgba(29,158,117,0.2)', numColor: '#1D9E75', lblColor: '#1D9E75' },
            ].map(stat => (
              <div key={stat.label} style={{ background: stat.bg, border: stat.border, borderRadius: 12, padding: 16, textAlign: 'center' }}>
                <div style={{ fontSize: 24, fontWeight: 800, color: stat.numColor, lineHeight: 1, marginBottom: 4 }}>{stat.num}</div>
                <div style={{ fontSize: 11, color: stat.lblColor }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Payout Progress */}
          <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 14, padding: '18px 20px', marginBottom: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>Progress Payout Pertama</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#1D9E75' }}>Rp72.000 / Rp100.000</div>
            </div>
            <div style={{ height: 8, background: 'var(--gray2)', borderRadius: 4, overflow: 'hidden', marginBottom: 8 }}>
              <div style={{ height: 8, width: '72%', background: 'linear-gradient(90deg,#1D9E75,#2ecc71)', borderRadius: 4 }}></div>
            </div>
            <div style={{ fontSize: 12, color: 'var(--text3)' }}>Butuh <strong style={{ color: 'var(--text)' }}>Rp28.000 lagi</strong> untuk cairkan komisi pertama kamu 🎯</div>
          </div>

          {/* Profile Info */}
          <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 14, padding: '18px 20px', marginBottom: 20 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)', marginBottom: 16 }}>Profil Publisher</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {[
                { label: 'Nama Lengkap', val: 'Muhammad Harist' },
                { label: 'Tipe Publisher', val: 'Content Creator' },
                { label: 'Platform Utama', val: 'TikTok & Instagram' },
                { label: 'Niche Konten', val: 'Tech & Gadget' },
                { label: 'Segmen', val: 'S2 — Sudah Klik, Menuju Konversi' },
                { label: 'Bergabung', val: 'Januari 2025' },
              ].map(item => (
                <div key={item.label}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>{item.label}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>{item.val}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 14, padding: '18px 20px', marginBottom: 20 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)', marginBottom: 14 }}>Skill yang Sudah Dikuasai</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {[
                { label: '🎯 Affiliate Marketing Basics', bg: 'var(--red-light)', color: 'var(--red)' },
                { label: '📱 TikTok for Affiliate', bg: '#E6F1FB', color: '#2563EB' },
                { label: '📸 Instagram Strategy', bg: '#FBEAF0', color: '#BE185D' },
                { label: '🔗 Generate Affiliate Link', bg: 'var(--gray)', color: 'var(--text2)' },
                { label: '📊 Baca Dashboard Komisi', bg: 'var(--gray)', color: 'var(--text2)' },
              ].map(skill => (
                <div key={skill.label} style={{ padding: '6px 14px', background: skill.bg, borderRadius: 20, fontSize: 12, fontWeight: 600, color: skill.color }}>{skill.label}</div>
              ))}
            </div>
          </div>

          {/* Recommendation */}
          <div style={{ background: 'linear-gradient(135deg,#FAECE7,#fff5f5)', border: '1.5px solid rgba(192,57,43,0.2)', borderRadius: 14, padding: '18px 20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
              <span style={{ fontSize: 16 }}>💡</span>
              <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>Saran berdasarkan profilmu</div>
            </div>
            <div style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.65, marginBottom: 14 }}>Sebagai Tech Creator di TikTok &amp; Instagram, kamu paling cocok mempromosikan campaign <strong>gadget, aksesoris HP, dan software/apps</strong>. Konten review dan unboxing di TikTok kamu bisa langsung dimonetisasi dengan link affiliate di bio.</div>
            <button style={{ padding: '9px 18px', background: 'var(--red)', color: 'white', border: 'none', borderRadius: 8, fontFamily: 'var(--font)', fontSize: 13, fontWeight: 700, cursor: 'pointer' }} onClick={() => showToast('🎯 Membuka campaign Tech yang cocok untukmu...')}>Lihat Campaign Tech yang Cocok →</button>
          </div>
        </div>
      )}

      <Footer slim />
    </div>
  );
}
