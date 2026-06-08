'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useToast } from '@/components/Toast';

type TabKey = 'kurikulum' | 'overview' | 'challenge';

export default function CourseDetailPage() {
  const { showToast } = useToast();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabKey>('kurikulum');
  const [challengeJoined, setChallengeJoined] = useState(false);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className="detail-hero">
        <div className="detail-hero-inner">
          <div>
            <div className="detail-breadcrumb">
              <Link href="/"><span>Beranda</span></Link>
              <span style={{ color: 'rgba(255,255,255,0.25)' }}>›</span>
              <Link href="/catalog"><span>Kursus</span></Link>
              <span style={{ color: 'rgba(255,255,255,0.25)' }}>›</span>
              <span style={{ color: 'rgba(255,255,255,0.4)', cursor: 'default' }}>Getting Started</span>
            </div>
            <h1 className="detail-title">Dasar-dasar Affiliate Marketing<br />untuk Pemula</h1>
            <p className="detail-desc">Pelajari cara kerja affiliate marketing dari nol — mulai dari daftar publisher, pilih campaign, sampai posting link pertama kamu dan dapat klik nyata.</p>
            <div className="detail-tags">
              <span className="detail-tag red">🌱 Pemula</span>
              <span className="detail-tag green">✓ Video + Artikel</span>
              <span className="detail-tag blue">🆓 100% Gratis</span>
            </div>
            <div className="detail-meta-row">
              <div className="detail-meta-item">
                <div className="detail-meta-dot" style={{ background: '#C0392B' }}></div>
                <span>★ 4.8 (2.4k rating)</span>
              </div>
              <div className="detail-meta-item">
                <div className="detail-meta-dot" style={{ background: '#1D9E75' }}></div>
                <span>3.400+ pelajar</span>
              </div>
              <div className="detail-meta-item">
                <div className="detail-meta-dot" style={{ background: '#378ADD' }}></div>
                <span>7 topik · 45 menit</span>
              </div>
            </div>
          </div>

          {/* Sticky Card */}
          <div className="detail-sticky-card">
            <div className="dsc-video" onClick={() => showToast('▶ Preview video dimulai...')}>
              <div className="dsc-video-bg">🎯</div>
              <div className="dsc-play-btn">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="white"><path d="M4 2.5l10 5.5-10 5.5V2.5z" /></svg>
              </div>
            </div>
            <div className="dsc-body">
              <div className="dsc-free">Gratis <span>· Akses Selamanya</span></div>
              <button className="btn-enroll" onClick={() => router.push('/player')}>Mulai Belajar Sekarang</button>
              <button className="btn-wishlist" onClick={() => showToast('❤️ Ditambahkan ke wishlist')}>+ Tambah ke Wishlist</button>
              <div>
                <div className="dsc-includes-title">Termasuk dalam kursus:</div>
                {['7 video pembelajaran', 'Checklist pemula (PDF)', 'Akses komunitas publisher', 'Update konten reguler'].map(item => (
                  <div className="dsc-include-item" key={item}>
                    <div className="dci-dot"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="detail-body-wrap">
        <div className="detail-body-inner">
          <div>
            {/* Tabs */}
            <div className="detail-tabs-bar">
              {(['kurikulum', 'overview', 'challenge'] as TabKey[]).map(tab => (
                <div
                  key={tab}
                  className={`detail-tab${activeTab === tab ? ' active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === 'kurikulum' ? 'Kurikulum' : tab === 'overview' ? 'Overview' : 'AT Challenge'}
                </div>
              ))}
            </div>

            {/* Kurikulum */}
            {activeTab === 'kurikulum' && (
              <div>
                {[
                  {
                    title: 'Bab 1 — Mengenal Affiliate Marketing', meta: '4 topik · 22 mnt',
                    lessons: [
                      { title: '1.1 Apa itu Affiliate Marketing?', dur: '5:30', done: true },
                      { title: '1.2 Cara Kerja Platform ACCESSTRADE', dur: '7:15', done: true },
                      { title: '1.3 Publisher vs Advertiser — Bedanya Apa?', dur: '4:00', done: false },
                      { title: '1.4 Model Komisi: CPA, CPL, CPS', dur: '5:45', done: false },
                    ]
                  },
                  {
                    title: 'Bab 2 — Setup Akun & Campaign Pertama', meta: '3 topik · 23 mnt',
                    lessons: [
                      { title: '2.1 Cara Daftar sebagai Publisher', dur: '6:00', done: false },
                      { title: '2.2 Apply Campaign yang Cocok untuk Pemula', dur: '8:30', done: false },
                      { title: '2.3 Generate Link Affiliate Pertama Kamu', dur: '8:45', done: false },
                    ]
                  }
                ].map(mod => (
                  <div className="curriculum-module" key={mod.title}>
                    <div className="cm-header">
                      <div className="cm-title">{mod.title}</div>
                      <div className="cm-meta">{mod.meta}</div>
                    </div>
                    {mod.lessons.map(lesson => (
                      <div
                        className="cm-lesson"
                        key={lesson.title}
                        onClick={() => showToast(lesson.done ? `▶ Membuka: ${lesson.title}` : '🔒 Login dulu untuk akses materi ini')}
                      >
                        <div className={`cm-play${lesson.done ? ' done' : ''}`}>
                          {lesson.done
                            ? <svg width="10" height="10" viewBox="0 0 10 10" fill="white"><path d="M2.5 1.5l6 3.5-6 3.5V1.5z" /></svg>
                            : <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2.5 1.5l6 3.5-6 3.5V1.5z" stroke="currentColor" strokeWidth="1.2" fill="none" /></svg>
                          }
                        </div>
                        <div className="cm-lesson-title">{lesson.title}</div>
                        <div className="cm-lesson-dur">{lesson.dur}</div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {/* Overview */}
            {activeTab === 'overview' && (
              <div style={{ paddingTop: 8 }}>
                <p style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.65, marginBottom: 20 }}>
                  Setelah menyelesaikan kursus ini, kamu akan menguasai 6 skill yang langsung bisa dipraktikkan untuk menghasilkan komisi pertama di ACCESSTRADE.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 20 }}>
                  {[
                    { icon: '🎯', title: 'Memahami cara kerja affiliate', desc: 'Tahu perbedaan CPA, CPL, CPS dan cara platform ACCESSTRADE menghitung komisi', level: 'Foundation', color: 'var(--red)', width: '100%' },
                    { icon: '🔗', title: 'Generate & sebar link affiliate', desc: 'Ambil link dari dashboard, buat deep link, dan sebar ke berbagai platform secara aman', level: 'Foundation', color: 'var(--red)', width: '100%' },
                    { icon: '📱', title: 'Pilih campaign yang tepat', desc: 'Baca dan pilih campaign berdasarkan niche, besaran komisi, dan potensi konversi', level: 'Intermediate', color: '#D97706', width: '75%' },
                    { icon: '📊', title: 'Baca laporan & dashboard', desc: 'Paham data klik, konversi, dan komisi di dashboard untuk optimasi promosi', level: 'Intermediate', color: '#D97706', width: '75%' },
                    { icon: '💸', title: 'Proses pencairan komisi', desc: 'Tahu syarat, jadwal, dan cara cairkan komisi — termasuk minimum payout Rp100.000', level: 'Foundation', color: 'var(--red)', width: '100%' },
                    { icon: '🛡️', title: 'Hindari pelanggaran terms', desc: 'Paham aturan tiap campaign supaya komisi tidak dibatalkan dan akun tetap aman', level: 'Foundation', color: 'var(--red)', width: '100%' },
                  ].map(skill => (
                    <div key={skill.title} style={{ border: '1.5px solid var(--border)', borderRadius: 12, padding: 14 }}>
                      <div style={{ fontSize: 20, marginBottom: 8 }}>{skill.icon}</div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>{skill.title}</div>
                      <div style={{ fontSize: 12, color: 'var(--text2)', lineHeight: 1.5, marginBottom: 10 }}>{skill.desc}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <div style={{ height: 3, flex: 1, background: 'var(--gray2)', borderRadius: 2, overflow: 'hidden' }}>
                          <div style={{ height: 3, width: skill.width, background: skill.color, borderRadius: 2 }}></div>
                        </div>
                        <span style={{ fontSize: 10, fontWeight: 700, color: skill.color, whiteSpace: 'nowrap' }}>{skill.level}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ background: 'var(--gray)', borderRadius: 10, padding: 14, display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <div style={{ fontSize: 16, flexShrink: 0 }}>📋</div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 3 }}>Prasyarat</div>
                    <div style={{ fontSize: 13, color: 'var(--text2)' }}>Tidak ada prasyarat khusus. Kursus ini cocok untuk publisher yang baru bergabung di ACCESSTRADE — mulai dari nol pun oke.</div>
                  </div>
                </div>
              </div>
            )}

            {/* AT Challenge */}
            {activeTab === 'challenge' && (
              <div style={{ paddingTop: 8 }}>
                <div style={{ borderRadius: 14, overflow: 'hidden', marginBottom: 16, background: 'linear-gradient(135deg,#F59E0B 0%,#EA580C 60%,#C0392B 100%)', padding: 20, position: 'relative' }}>
                  <div style={{ position: 'absolute', top: -20, right: -10, fontSize: 100, opacity: 0.08, lineHeight: 1, pointerEvents: 'none' }}>🏆</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                    <div style={{ background: 'white', borderRadius: 5, padding: '3px 8px', fontSize: 10, fontWeight: 800, color: '#EA580C', letterSpacing: '0.05em' }}>ACCESSTRADE</div>
                    <div style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.8)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Affiliate Challenge</div>
                  </div>
                  <div style={{ fontSize: 19, fontWeight: 800, color: 'white', lineHeight: 1.25, marginBottom: 5 }}>Dapetin Bonus Komisi<br />dengan Posting Link Affiliate!</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.85)', marginBottom: 14 }}>Program khusus publisher aktif — buat konten, kumpulkan klik, raih bonus.</div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--text)', marginBottom: 8 }}>Description</div>
                    <div style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.65, marginBottom: 12 }}>Program buat kamu para creator di sosial media, di mana kamu berkesempatan dapat bonus komisi dengan membuat postingan di sosial media kamu.</div>
                    <div style={{ marginTop: 18 }}>
                      <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--text)', marginBottom: 8 }}>Terms &amp; Conditions</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                        {[
                          'Program berlangsung selama bulan berjalan',
                          'Peserta harus memasang link afiliasi brand yang diambil dari dashboard ACCESSTRADE',
                          'Buat minimal 10 postingan (foto atau video) disertai link afiliasi',
                          'Submit screenshot bukti tayang beserta link postingan',
                          'Submit akan direview tim ACCESSTRADE — jika belum memenuhi kriteria dapat submit ulang',
                          'Peserta dengan performa terbaik (30 klik) mendapatkan bonus komisi',
                        ].map((t, i) => (
                          <div key={i} style={{ display: 'flex', gap: 7, fontSize: 12, color: 'var(--text2)', lineHeight: 1.5 }}>
                            <span style={{ color: 'var(--red)', fontWeight: 700, flexShrink: 0 }}>•</span>
                            <span>{t}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div style={{ background: 'var(--gray)', borderRadius: 12, padding: 14, marginBottom: 10 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Status Challenge kamu</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 12 }}>
                        <div style={{ width: 9, height: 9, borderRadius: '50%', background: challengeJoined ? '#1D9E75' : '#D97706' }}></div>
                        <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>{challengeJoined ? 'Sudah Join ✓' : 'Belum Join'}</span>
                      </div>
                      <div style={{ fontSize: 11, color: 'var(--text2)', marginBottom: 5 }}>Progress postingan</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 12 }}>
                        <div style={{ flex: 1, height: 5, background: 'var(--gray2)', borderRadius: 3, overflow: 'hidden' }}>
                          <div style={{ height: 5, width: '0%', background: 'var(--red)', borderRadius: 3 }}></div>
                        </div>
                        <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--text3)' }}>0/10</span>
                      </div>
                      <button
                        style={{ width: '100%', padding: 11, background: challengeJoined ? '#1D9E75' : 'var(--red)', color: 'white', border: 'none', borderRadius: 8, fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'var(--font)', opacity: challengeJoined ? 0.8 : 1 }}
                        onClick={() => { if (!challengeJoined) { setChallengeJoined(true); showToast('🎉 Berhasil join AT Challenge! Mulai buat 10 postingan kamu.'); } }}
                        disabled={challengeJoined}
                      >
                        {challengeJoined ? '✓ Sudah Join!' : 'JOIN NOW'}
                      </button>
                    </div>
                    <div style={{ border: '1px solid var(--border2)', borderRadius: 12, padding: 12, display: 'flex', gap: 9, alignItems: 'center', marginBottom: 10 }}>
                      <div style={{ fontSize: 20, flexShrink: 0 }}>📅</div>
                      <div>
                        <div style={{ fontSize: 11, color: 'var(--text3)', marginBottom: 2 }}>Batas submit</div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)' }}>30 Mei 2026</div>
                        <div style={{ fontSize: 11, color: 'var(--text3)', marginTop: 1 }}>19 hari lagi</div>
                      </div>
                    </div>
                    <div style={{ border: '1.5px solid #F59E0B', borderRadius: 12, padding: 12, background: '#FFFBEB' }}>
                      <div style={{ fontSize: 11, fontWeight: 800, color: '#92400E', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>🏆 Hadiah</div>
                      <div style={{ fontSize: 12, color: '#78350F', lineHeight: 1.6 }}>Peserta dengan <strong>performa terbaik (30+ klik)</strong> mendapatkan <strong>bonus komisi eksklusif</strong> dari ACCESSTRADE.</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Progress Sidebar */}
          <div>
            <div className="progress-widget">
              <div className="pw-title">Progress kamu</div>
              <div className="pw-ring-wrap">
                <div style={{ position: 'relative', width: 64, height: 64, flexShrink: 0 }}>
                  <svg width="64" height="64" viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r="26" fill="none" stroke="var(--gray2)" strokeWidth="6" />
                    <circle cx="32" cy="32" r="26" fill="none" stroke="var(--red)" strokeWidth="6"
                      strokeDasharray="163" strokeDashoffset="114"
                      strokeLinecap="round" transform="rotate(-90 32 32)" />
                  </svg>
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 800, color: 'var(--text)' }}>30%</div>
                </div>
                <div>
                  <div className="pw-ring-pct">2/7</div>
                  <div className="pw-ring-label">topik selesai</div>
                </div>
              </div>
              <div className="pw-checklist">
                {[
                  { label: 'Apa itu Affiliate?', done: true },
                  { label: 'Cara Kerja ACCESSTRADE', done: true },
                  { label: 'Publisher vs Advertiser', done: false },
                  { label: 'Model Komisi CPA/CPL/CPS', done: false },
                  { label: 'Cara Daftar Publisher', done: false },
                ].map(item => (
                  <div className="pwc-item" key={item.label}>
                    <div className={`pwc-dot${item.done ? ' done' : ' todo'}`}>
                      {item.done && <svg width="10" height="10" viewBox="0 0 10 10" fill="white"><path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" /></svg>}
                    </div>
                    <div className="pwc-label" style={{ color: item.done ? 'var(--text2)' : 'var(--text3)' }}>{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="next-lesson-widget">
              <div className="nw-label">Lanjutkan belajar</div>
              <div className="nw-title">Publisher vs Advertiser</div>
              <div className="nw-sub">Bab 1 · Topik 3 · 4 menit</div>
              <button className="btn-next-lesson" onClick={() => showToast('▶ Melanjutkan ke Topik 3...')}>Lanjut Sekarang →</button>
            </div>
          </div>
        </div>
      </div>

      <Footer slim />
    </>
  );
}
