'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useToast } from '@/components/Toast';

type PlayerTab = 'overview' | 'notes' | 'challenge';

export default function PlayerPage() {
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState<PlayerTab>('overview');
  const [challengeJoined, setChallengeJoined] = useState(false);

  const CURRICULUM = [
    {
      num: 1, title: 'Mengenal Affiliate Marketing', meta: '4 topik · 22 mnt',
      lessons: [
        { title: '1.1 Apa itu Affiliate Marketing?', dur: '5:30', status: 'done' },
        { title: '1.2 Cara Kerja Platform ACCESSTRADE', dur: '7:15 · Sedang diputar', status: 'now' },
        { title: '1.3 Publisher vs Advertiser', dur: '4:00', status: 'todo' },
        { title: '1.4 Model Komisi: CPA, CPL, CPS', dur: '5:45', status: 'todo' },
      ]
    },
    {
      num: 2, title: 'Setup Akun & Campaign', meta: '3 topik · 23 mnt',
      lessons: [
        { title: '2.1 Cara Daftar sebagai Publisher', dur: '6:00', status: 'todo', locked: true as const },
        { title: '2.2 Apply Campaign untuk Pemula', dur: '8:30', status: 'todo', locked: true as const },
        { title: '2.3 Generate Link Affiliate', dur: '8:45', status: 'todo', locked: true as const },
      ]
    },
    { num: 3, title: 'Konten & Channel', meta: '3 topik · 18 mnt', lessons: [] as { title: string; dur: string; status: string; locked?: true }[] },
    { num: 4, title: 'Tips & Optimasi', meta: '2 topik · 12 mnt', lessons: [] as { title: string; dur: string; status: string; locked?: true }[] },
    { num: 5, title: 'Performance & Komisi', meta: '3 topik · 16 mnt', lessons: [] as { title: string; dur: string; status: string; locked?: true }[] },
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--dark)' }}>
      {/* Player Navbar */}
      <nav className="player-navbar">
        <div className="player-navbar-left">
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div className="navbar-logo-mark">A</div>
            <div className="navbar-logo-text">ACCESSTRADE <span>Academy</span></div>
          </Link>
          <div className="player-navbar-sep"></div>
          <div className="player-course-title">Dasar-dasar Affiliate Marketing untuk Pemula</div>
        </div>
        <div className="player-navbar-right">
          <div className="player-progress-wrap">
            <span className="player-progress-label">Progress kamu</span>
            <div className="player-progress-track"><div className="player-progress-fill"></div></div>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>30%</span>
          </div>
          <Link href="/my-learning"><button className="btn-ghost" style={{ fontSize: 12 }}>My Learning</button></Link>
        </div>
      </nav>

      {/* Split Layout */}
      <div className="player-layout" style={{ flex: 1 }}>
        {/* Left: Video + Tabs */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* Video */}
          <div className="player-video" onClick={() => showToast('▶ Video sedang diputar...')}>
            <div className="player-play-btn">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="white"><path d="M5 3l13 7-13 7V3z" /></svg>
            </div>
          </div>

          {/* Controls */}
          <div className="player-controls">
            <div className="pc-btn" onClick={() => showToast('⏮ Topik sebelumnya')}></div>
            <div className="pc-btn" onClick={() => showToast('▶ Play/Pause')}></div>
            <div className="pc-btn" onClick={() => showToast('⏭ Topik berikutnya')}></div>
            <span className="pc-time">1:45 / 5:30</span>
            <div className="pc-track" onClick={() => showToast('🎯 Seeking...')}><div className="pc-fill"></div></div>
            <div className="pc-btn" onClick={() => showToast('🔊 Volume')}></div>
            <div className="pc-btn" onClick={() => showToast('⚙️ Pengaturan')}></div>
            <div className="pc-btn" onClick={() => showToast('⛶ Fullscreen')}></div>
          </div>

          {/* Content Tabs */}
          <div className="player-content">
            <div className="player-tabs">
              {(['overview', 'notes', 'challenge'] as PlayerTab[]).map(tab => (
                <div key={tab} className={`player-tab${activeTab === tab ? ' active' : ''}`} onClick={() => setActiveTab(tab)}>
                  {tab === 'overview' ? 'Overview' : tab === 'notes' ? 'Catatan' : 'AT Challenge'}
                </div>
              ))}
            </div>

            {/* Overview */}
            {activeTab === 'overview' && (
              <div className="player-overview">
                <div>
                  <h2 className="po-title">Yang akan kamu kuasai dari kursus ini</h2>
                  <p style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.65, marginBottom: 24 }}>Setelah menyelesaikan seluruh topik dalam kursus ini, kamu akan memiliki skill set berikut yang langsung bisa dipraktikkan untuk menghasilkan komisi pertama di ACCESSTRADE.</p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 28 }}>
                    {[
                      { icon: '🎯', title: 'Memahami cara kerja affiliate', desc: 'Tahu perbedaan CPA, CPL, CPS dan cara platform ACCESSTRADE menghitung komisi kamu', level: 'Foundation', color: 'var(--red)', w: '100%' },
                      { icon: '🔗', title: 'Generate & sebar link affiliate', desc: 'Bisa ambil link dari dashboard, buat deep link, dan sebar ke berbagai platform secara aman', level: 'Foundation', color: 'var(--red)', w: '100%' },
                      { icon: '📱', title: 'Pilih campaign yang tepat', desc: 'Bisa membaca dan memilih campaign berdasarkan niche, komisi, dan potensi konversi di platformmu', level: 'Intermediate', color: '#D97706', w: '75%' },
                      { icon: '📊', title: 'Baca laporan & dashboard', desc: 'Paham cara membaca data klik, konversi, dan komisi di dashboard ACCESSTRADE untuk optimasi', level: 'Intermediate', color: '#D97706', w: '75%' },
                      { icon: '💸', title: 'Proses pencairan komisi', desc: 'Tahu syarat, jadwal, dan cara mencairkan komisi — termasuk minimum payout Rp100.000', level: 'Foundation', color: 'var(--red)', w: '100%' },
                      { icon: '🛡️', title: 'Hindari pelanggaran terms', desc: 'Paham aturan main di tiap campaign supaya komisi tidak dibatalkan dan akun tetap aman', level: 'Foundation', color: 'var(--red)', w: '100%' },
                    ].map(skill => (
                      <div key={skill.title} style={{ border: '1.5px solid var(--border)', borderRadius: 12, padding: 16, background: 'var(--white)' }}>
                        <div style={{ fontSize: 22, marginBottom: 10 }}>{skill.icon}</div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>{skill.title}</div>
                        <div style={{ fontSize: 12, color: 'var(--text2)', lineHeight: 1.5 }}>{skill.desc}</div>
                        <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
                          <div style={{ height: 4, flex: 1, background: 'var(--gray2)', borderRadius: 2, overflow: 'hidden' }}>
                            <div style={{ height: 4, width: skill.w, background: skill.color, borderRadius: 2 }}></div>
                          </div>
                          <span style={{ fontSize: 10, fontWeight: 700, color: skill.color }}>{skill.level}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{ background: 'var(--gray)', borderRadius: 10, padding: 16, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <div style={{ fontSize: 18, flexShrink: 0 }}>📋</div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>Prasyarat kursus ini</div>
                      <div style={{ fontSize: 13, color: 'var(--text2)' }}>Tidak ada prasyarat khusus. Kursus ini dirancang untuk publisher yang baru pertama kali bergabung di ACCESSTRADE — mulai dari nol pun oke.</div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="po-progress-card">
                    <div className="po-prog-title">Progress kamu</div>
                    <div className="po-prog-ring-row">
                      <svg width="52" height="52" viewBox="0 0 52 52">
                        <circle cx="26" cy="26" r="20" fill="none" stroke="#e5e5e2" strokeWidth="5" />
                        <circle cx="26" cy="26" r="20" fill="none" stroke="#C0392B" strokeWidth="5" strokeDasharray="125.6" strokeDashoffset="87.9" strokeLinecap="round" transform="rotate(-90 26 26)" />
                      </svg>
                      <div>
                        <div className="po-prog-pct">30%</div>
                        <div className="po-prog-sub">2 dari 7 selesai</div>
                      </div>
                    </div>
                    <div className="po-prog-bar"><div className="po-prog-bar-fill"></div></div>
                    <button className="btn-continue" onClick={() => showToast('▶ Melanjutkan ke topik berikutnya...')}>Lanjut Belajar →</button>
                  </div>
                  <div style={{ border: '1px solid var(--border2)', borderRadius: 12, padding: 16, marginTop: 12 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 14 }}>Ringkasan skill</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: 12, color: 'var(--text2)' }}>Foundation skills</span>
                        <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--red)' }}>4 skill</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: 12, color: 'var(--text2)' }}>Intermediate skills</span>
                        <span style={{ fontSize: 12, fontWeight: 700, color: '#D97706' }}>2 skill</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10, borderTop: '1px solid var(--border)' }}>
                        <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--text)' }}>Total skill baru</span>
                        <span style={{ fontSize: 14, fontWeight: 800, color: 'var(--text)' }}>6 skill</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Notes */}
            {activeTab === 'notes' && (
              <div style={{ padding: '40px 0', textAlign: 'center', color: 'var(--text2)' }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>📝</div>
                <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>Catatan kosong</div>
                <div style={{ fontSize: 13 }}>Tambahkan catatan saat menonton video</div>
              </div>
            )}

            {/* Challenge */}
            {activeTab === 'challenge' && (
              <div>
                <div style={{ borderRadius: 14, overflow: 'hidden', marginBottom: 20, background: 'linear-gradient(135deg,#F59E0B 0%,#EA580C 60%,#C0392B 100%)', padding: 24, position: 'relative' }}>
                  <div style={{ position: 'absolute', top: -30, right: -20, fontSize: 120, opacity: 0.1, lineHeight: 1 }}>🏆</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                    <div style={{ background: 'white', borderRadius: 6, padding: '4px 10px', fontSize: 11, fontWeight: 800, color: '#EA580C', letterSpacing: '0.05em' }}>ACCESSTRADE</div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.8)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Affiliate Challenge</div>
                  </div>
                  <div style={{ fontSize: 22, fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: 6 }}>Dapetin Bonus Komisi<br />dengan Posting Link Affiliate!</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)' }}>Program khusus publisher aktif — buat konten, kumpulkan klik, raih bonus.</div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 800, color: 'var(--text)', marginBottom: 10 }}>Description</div>
                    <div style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.65, marginBottom: 16 }}>Program buat kamu para creator di sosial media, di mana kamu berkesempatan dapat bonus komisi dengan membuat postingan di sosial media kamu.</div>
                    <div style={{ fontSize: 15, fontWeight: 800, color: 'var(--text)', marginBottom: 10 }}>Terms &amp; Conditions</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {['Program berlangsung selama bulan berjalan', 'Peserta harus memasang link afiliasi brand yang diambil dari dashboard ACCESSTRADE', 'Buat minimal 10 postingan (foto atau video) disertai link afiliasi', 'Submit screenshot bukti tayang beserta link postingan', 'Submit akan direview tim ACCESSTRADE — jika belum memenuhi kriteria dapat submit ulang', 'Peserta dengan performa terbaik (30 klik) mendapatkan bonus komisi'].map((t, i) => (
                        <div key={i} style={{ display: 'flex', gap: 8, fontSize: 13, color: 'var(--text2)' }}>
                          <span style={{ color: 'var(--red)', flexShrink: 0, fontWeight: 700 }}>•</span>
                          <span>{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div style={{ background: 'var(--gray)', borderRadius: 12, padding: 16, marginBottom: 12 }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>Status Challenge kamu</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                        <div style={{ width: 10, height: 10, borderRadius: '50%', background: challengeJoined ? '#1D9E75' : '#D97706', flexShrink: 0 }}></div>
                        <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>{challengeJoined ? 'Sudah Join ✓' : 'Belum Join'}</span>
                      </div>
                      <div style={{ fontSize: 12, color: 'var(--text2)', marginBottom: 6 }}>Progress postingan</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                        <div style={{ flex: 1, height: 6, background: 'var(--gray2)', borderRadius: 3, overflow: 'hidden' }}>
                          <div style={{ height: 6, width: '0%', background: 'var(--red)', borderRadius: 3 }}></div>
                        </div>
                        <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--text3)' }}>0/10 post</span>
                      </div>
                      <button
                        style={{ width: '100%', padding: 12, background: challengeJoined ? '#1D9E75' : 'var(--red)', color: 'white', border: 'none', borderRadius: 9, fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'var(--font)' }}
                        onClick={() => { if (!challengeJoined) { setChallengeJoined(true); showToast('🎉 Berhasil join AT Challenge! Mulai buat 10 postingan kamu.'); } }}
                        disabled={challengeJoined}
                      >
                        {challengeJoined ? '✓ Sudah Join!' : 'JOIN NOW'}
                      </button>
                    </div>
                    <div style={{ border: '1px solid var(--border2)', borderRadius: 12, padding: 14, display: 'flex', gap: 10, alignItems: 'center' }}>
                      <div style={{ fontSize: 22, flexShrink: 0 }}>📅</div>
                      <div>
                        <div style={{ fontSize: 12, color: 'var(--text3)', marginBottom: 2 }}>Batas submit</div>
                        <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>30 Mei 2026</div>
                        <div style={{ fontSize: 11, color: 'var(--text3)', marginTop: 2 }}>19 hari lagi</div>
                      </div>
                    </div>
                    <div style={{ border: '1.5px solid #F59E0B', borderRadius: 12, padding: 14, marginTop: 12, background: '#FFFBEB' }}>
                      <div style={{ fontSize: 12, fontWeight: 800, color: '#92400E', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>🏆 Hadiah</div>
                      <div style={{ fontSize: 13, color: '#78350F', lineHeight: 1.6 }}>Peserta dengan <strong>performa terbaik (30+ klik)</strong> mendapatkan <strong>bonus komisi eksklusif</strong> dari ACCESSTRADE.</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right: Curriculum Sidebar */}
        <div className="player-sidebar">
          <div className="ps-tabs">
            {['Kurikulum', 'Q&A', 'Catatan'].map((tab, i) => (
              <div key={tab} className={`ps-tab${i === 0 ? ' active' : ''}`} onClick={() => showToast('Tab ' + tab + ' dipilih')}>
                {tab}
              </div>
            ))}
          </div>

          {CURRICULUM.map(section => (
            <div className="ps-section" key={section.num}>
              <div className="ps-section-hd">
                <div className="ps-section-left">
                  <div className="ps-section-num">{section.num}</div>
                  <div className="ps-section-title">{section.title}</div>
                </div>
                <div className="ps-section-meta">{section.meta}</div>
              </div>
              {section.lessons.map(lesson => (
                <div
                  key={lesson.title}
                  className={`ps-lesson${lesson.status === 'now' ? ' now' : ''}`}
                  onClick={() => showToast(lesson.locked ? '🔒 Selesaikan Bab 1 dulu' : `▶ Memutar: ${lesson.title}`)}
                >
                  <div className={`ps-lesson-check ${lesson.status}`}></div>
                  <div className="ps-lesson-text">
                    <div className={`ps-lesson-title${lesson.status === 'now' ? ' bright' : ''}`}>{lesson.title}</div>
                    <div className="ps-lesson-dur">{lesson.dur}</div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
