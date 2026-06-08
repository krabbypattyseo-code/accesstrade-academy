'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useToast } from '@/components/Toast';

export default function HomePage() {
  const { showToast } = useToast();

  const scrollToJourney = () => {
    document.getElementById('journey-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <div>
            <div className="hero-eyebrow fade-up fade-up-1">Publisher Academy</div>
            <h1 className="hero-title fade-up fade-up-2">
              Dari Nol<br />sampai <em>Komisi</em><br />Pertama
            </h1>
            <p className="hero-subtitle fade-up fade-up-3">
              Belajar affiliate marketing secara gratis — dengan jalur belajar yang disesuaikan kondisi kamu sekarang.
            </p>
            <div className="hero-ctas fade-up fade-up-4">
              <button className="btn-hero-primary" onClick={scrollToJourney}>Mulai dari Nol →</button>
              <Link href="/catalog"><button className="btn-hero-secondary">Lihat Semua Kursus</button></Link>
            </div>
            <div className="hero-stats fade-up fade-up-4">
              <div className="hero-stat">
                <div className="hero-stat-num">200+</div>
                <div className="hero-stat-label">Total Konten</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">23</div>
                <div className="hero-stat-label">Kategori</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">Gratis</div>
                <div className="hero-stat-label">100% Free</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card-main">
              <div className="hcm-label">Progress Belajar Kamu</div>
              <div className="hcm-progress-item">
                <div className="hcm-pi-icon r">🚀</div>
                <div className="hcm-pi-text">
                  <div className="hcm-pi-name">Getting Started</div>
                  <div className="hcm-pi-bar"><div className="hcm-pi-fill r" style={{ width: '80%' }}></div></div>
                </div>
                <div className="hcm-pi-pct">80%</div>
              </div>
              <div className="hcm-progress-item">
                <div className="hcm-pi-icon g">🎯</div>
                <div className="hcm-pi-text">
                  <div className="hcm-pi-name">Campaign &amp; Link</div>
                  <div className="hcm-pi-bar"><div className="hcm-pi-fill g" style={{ width: '45%' }}></div></div>
                </div>
                <div className="hcm-pi-pct">45%</div>
              </div>
              <div className="hcm-progress-item">
                <div className="hcm-pi-icon b">📱</div>
                <div className="hcm-pi-text">
                  <div className="hcm-pi-name">Konten TikTok</div>
                  <div className="hcm-pi-bar"><div className="hcm-pi-fill b" style={{ width: '20%' }}></div></div>
                </div>
                <div className="hcm-pi-pct">20%</div>
              </div>
            </div>
            <div className="hero-card-float">
              <div className="hcf-icon">🎉</div>
              <div>
                <div className="hcf-num">Rp 254.000</div>
                <div className="hcf-label">Komisi bulan ini</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="journey-section" id="journey-section">
        <div className="section-header" style={{ maxWidth: 1200 }}>
          <div className="section-eyebrow">Mulai dari Sini</div>
          <h2 className="section-title">Kamu lagi di tahap <em>mana?</em></h2>
          <p className="section-sub">Pilih kondisi kamu sekarang — kami tunjukkan jalur belajar yang paling tepat untukmu</p>
        </div>
        <div className="journey-grid">
          {[
            { step: '01', icon: '🌱', title: 'Belum tahu apa itu affiliate', desc: 'Baru pertama dengar soal ACCESSTRADE dan mau mulai dari awal', tag: 'Mulai dari Sini' },
            { step: '02', icon: '🔧', title: 'Sudah daftar tapi bingung', desc: 'Punya akun ACCESSTRADE tapi belum tahu harus ngapain selanjutnya', tag: 'Setup Akun' },
            { step: '03', icon: '📊', title: 'Sudah posting tapi belum ada klik', desc: 'Konten sudah jalan tapi link affiliate sepi — perlu strategi yang beda', tag: 'Optimasi Konten' },
            { step: '04', icon: '💰', title: 'Ada klik tapi belum dapat komisi', desc: 'Traffic sudah masuk tapi konversi masih nol — ini masalah yang bisa diperbaiki', tag: 'Kejar Konversi' },
          ].map((item) => (
            <Link href="/catalog" key={item.step} className="journey-card">
              <div className="jc-step">TAHAP {item.step}</div>
              <div className="jc-icon">{item.icon}</div>
              <div className="jc-title">{item.title}</div>
              <div className="jc-desc">{item.desc}</div>
              <div className="jc-tag">
                {item.tag}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M7 3l3 3-3 3" stroke="#C0392B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>
          ))}
          <Link href="/catalog" className="journey-card payout">
            <div className="jc-step">TAHAP 05</div>
            <div className="jc-icon">🏆</div>
            <div className="jc-title">Komisi ada, tapi belum bisa cair</div>
            <div className="jc-desc">Kamu butuh Rp100.000 komisi untuk pencairan pertama — ayo capai milestone ini</div>
            <div className="payout-milestone">
              <div className="payout-milestone-bar"><div className="payout-milestone-fill"></div></div>
              <div className="payout-milestone-label">Rp72k / Rp100k</div>
            </div>
            <div className="jc-tag" style={{ marginTop: 12 }}>
              Cairkan Komisi
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M7 3l3 3-3 3" stroke="#1D9E75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="categories-section">
        <div className="section-header">
          <div className="section-eyebrow">Semua Kategori</div>
          <h2 className="section-title">Jelajahi semua <em>topik</em></h2>
        </div>
        <div className="cat-grid">
          {[
            { bg: '#FAECE7', icon: '🚀', name: 'Getting Started', count: 9 },
            { bg: '#E1F5EE', icon: '🎯', name: 'Campaign & Link', count: 14 },
            { bg: '#E6F1FB', icon: '📱', name: 'TikTok for Affiliate', count: 12 },
            { bg: '#FBEAF0', icon: '📸', name: 'Instagram Marketing', count: 14 },
            { bg: '#EAF3DE', icon: '🔍', name: 'SEO & Blog', count: 14 },
            { bg: '#FAEEDA', icon: '🎬', name: 'YouTube Creator', count: 20 },
            { bg: '#FAECE7', icon: '📈', name: 'Tips & Trik', count: 20 },
            { bg: '#EEEDFE', icon: '📊', name: 'Performance', count: 8 },
            { bg: '#E1F5EE', icon: '🏆', name: 'Scaling & Growth', count: 10 },
            { bg: '#FCEBEB', icon: '🎁', name: 'Program & Challenge', count: 6 },
          ].map((cat) => (
            <Link href="/catalog" key={cat.name} className="cat-card">
              <div className="cat-icon" style={{ background: cat.bg }}>{cat.icon}</div>
              <div className="cat-name">{cat.name}</div>
              <div className="cat-count">{cat.count} kursus</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Courses */}
      <section className="courses-section">
        <div className="section-header">
          <div className="section-eyebrow">Kursus Unggulan</div>
          <h2 className="section-title">Paling banyak <em>dipelajari</em></h2>
        </div>
        <div className="courses-tabs">
          {['Populer', 'Terbaru', 'Untuk Pemula', 'Webinar AT Talk'].map((tab, i) => (
            <button key={tab} className={`course-tab${i === 0 ? ' active' : ''}`}
              onClick={(e) => {
                (e.currentTarget.closest('.courses-tabs') as HTMLElement)?.querySelectorAll('.course-tab').forEach(t => t.classList.remove('active'));
                e.currentTarget.classList.add('active');
                showToast('Menampilkan: ' + tab);
              }}>
              {tab}
            </button>
          ))}
        </div>
        <div className="courses-grid">
          {[
            { bg: 'linear-gradient(135deg,#1a1a18,#3a2020)', icon: '🎯', tag: 'Getting Started', title: 'Dasar-dasar Affiliate Marketing untuk Pemula', rating: '4.8', students: '3.4k pelajar', progress: 75 },
            { bg: 'linear-gradient(135deg,#0f1a2e,#1a2a3a)', icon: '📱', tag: 'TikTok', title: 'TikTok for Business — Affiliate Strategy', rating: '4.9', students: '5.2k pelajar', progress: null },
            { bg: 'linear-gradient(135deg,#0d2010,#1a3520)', icon: '🔍', tag: 'SEO / Blog', title: 'Cara Keyword Research untuk Konten Affiliate', rating: '4.5', students: '1.5k pelajar', progress: null },
            { bg: 'linear-gradient(135deg,#2a1520,#3a2030)', icon: '📸', tag: 'Instagram', title: 'Strategi Konten Instagram untuk Komisi Maksimal', rating: '4.6', students: '2.1k pelajar', progress: null },
          ].map((course) => (
            <Link href="/courses/dasar-affiliate" key={course.title} className="course-card">
              <div className="cc-thumb-bg" style={{ background: course.bg }}>{course.icon}</div>
              <div className="cc-body">
                <span className="cc-tag">{course.tag}</span>
                <div className="cc-title">{course.title}</div>
                <div className="cc-meta">
                  <div className="cc-rating">★ {course.rating}</div>
                  <div className="cc-students">{course.students}</div>
                </div>
                {course.progress !== null && (
                  <div className="cc-progress-wrap">
                    <div className="cc-progress-label"><span>Progress</span><span>{course.progress}%</span></div>
                    <div className="cc-progress-bar"><div className="cc-progress-fill" style={{ width: `${course.progress}%` }}></div></div>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Learning Path */}
      <section className="learning-path-section">
        <div className="lp-inner">
          <div className="lp-left">
            <div className="lp-badge">🎓 Learning Path</div>
            <h2 className="lp-title">Jalur belajar<br />dari Nol sampai<br /><em>Komisi Pertama</em></h2>
            <p className="lp-desc">4 langkah terstruktur yang sudah terbukti mengantarkan ribuan publisher mendapatkan komisi pertama mereka</p>
            <div className="lp-steps">
              {[
                { title: 'Pahami cara kerja affiliate', sub: 'Dasar-dasar, platform, dan cara monetisasi' },
                { title: 'Setup akun & pilih campaign', sub: 'Daftar, apply campaign, generate link pertama' },
                { title: 'Buat konten yang dapat klik', sub: 'Strategi per platform: TikTok, IG, Blog' },
                { title: 'Optimasi hingga konversi', sub: 'CTA, copywriting, dan tracking komisi' },
              ].map((step, i) => (
                <div className="lp-step" key={i}>
                  <div className="lp-step-num">{i + 1}</div>
                  <div>
                    <div className="lp-step-title">{step.title}</div>
                    <div className="lp-step-sub">{step.sub}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/courses/dasar-affiliate"><button className="btn-hero-primary">Mulai Learning Path →</button></Link>
          </div>
          <div className="lp-right">
            {[
              { icon: '🚀', title: 'Apa itu Affiliate Marketing?', sub: 'Video · 5 menit', done: true },
              { icon: '🔑', title: 'Cara Kerja ACCESSTRADE', sub: 'Video · 7 menit', done: true },
              { icon: '🎯', title: 'Pilih Campaign yang Tepat', sub: 'Video · 8 menit', done: false },
              { icon: '📱', title: 'Buat Konten Pertama di TikTok', sub: 'Video · 12 menit', done: false },
              { icon: '💸', title: 'Strategi CTA yang Convert', sub: 'Artikel · 5 menit baca', done: false },
            ].map((m) => (
              <div key={m.title} className="lp-module" onClick={() => showToast('▶ Membuka: ' + m.title)}>
                <div className={`lpm-icon ${m.done ? 'done' : 'todo'}`}>{m.icon}</div>
                <div className="lpm-text">
                  <div className="lpm-title">{m.title}</div>
                  <div className="lpm-sub">{m.sub}</div>
                </div>
                <div className={`lpm-check ${m.done ? 'done' : 'todo'}`}>
                  {m.done && (
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="white">
                      <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
