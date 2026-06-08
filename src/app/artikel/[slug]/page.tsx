'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useToast } from '@/components/Toast';

const ARTICLE = {
  slug: 'strategi-affiliate-marketing-komisi-tinggi',
  category: 'Strategi',
  readTime: '8 menit baca',
  title: 'Strategi Affiliate Marketing yang Terbukti Menghasilkan',
  titleEm: 'Komisi Tinggi',
  excerpt:
    'Pelajari 5 strategi yang sudah dipraktikkan ribuan publisher ACCESSTRADE untuk meningkatkan komisi affiliate secara konsisten — dari pemilihan produk hingga optimasi konten.',
  author: { initials: 'HN', name: 'Harist Nazili', date: '5 Juni 2026' },
  tags: ['Affiliate Marketing', 'Strategi', 'Komisi', 'Publisher', 'Konten', 'SEO', 'ACCESSTRADE'],
  relatedCourse: {
    emoji: '📊',
    title: 'Dasar-Dasar Affiliate Marketing',
    subtitle: '12 modul · Gratis · Bersertifikat',
  },
};

const TOC = [
  { id: 'pilih-produk', label: 'Pilih Produk yang Tepat', sub: false },
  { id: 'buat-konten', label: 'Buat Konten yang Relevan', sub: false },
  { id: 'optimasi-seo', label: 'Optimasi SEO untuk Traffic Organik', sub: false },
  { id: 'manfaatkan-sosmed', label: 'Manfaatkan Media Sosial', sub: false },
  { id: 'analisa-data', label: 'Analisa Data & Tingkatkan Konversi', sub: false },
  { id: 'kesimpulan', label: 'Kesimpulan', sub: false },
];

const RELATED = [
  {
    slug: 'cara-daftar-publisher-accesstrade',
    emoji: '🚀',
    category: 'Panduan',
    title: 'Cara Daftar Jadi Publisher ACCESSTRADE dan Mulai Earn Pertamamu',
    author: 'Tim ACCESSTRADE',
    date: '2 Jun 2026',
    readTime: '5 menit',
  },
  {
    slug: 'optimasi-link-affiliate',
    emoji: '🔗',
    category: 'Teknis',
    title: 'Cara Optimasi Link Affiliate agar CTR Naik Signifikan',
    author: 'Budi Santoso',
    date: '28 Mei 2026',
    readTime: '6 menit',
  },
  {
    slug: 'konten-review-produk',
    emoji: '✍️',
    category: 'Konten',
    title: 'Panduan Menulis Review Produk yang Jujur dan Tetap Menghasilkan',
    author: 'Sari Dewi',
    date: '20 Mei 2026',
    readTime: '7 menit',
  },
];

export default function ArticlePage() {
  const router = useRouter();
  const { showToast } = useToast();
  const [tocOpen, setTocOpen] = useState(true);
  const [activeId, setActiveId] = useState('pilih-produk');
  const [progress, setProgress] = useState(0);
  const proseRef = useRef<HTMLDivElement>(null);

  // Scroll spy
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('.article-prose h2[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-80px 0px -60% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Reading progress
  useEffect(() => {
    const onScroll = () => {
      const prose = proseRef.current;
      if (!prose) return;
      const rect = prose.getBoundingClientRect();
      const scrolled = Math.min(Math.max(-rect.top / prose.offsetHeight, 0), 1);
      setProgress(scrolled * 100);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <Navbar />

      {/* Reading progress bar */}
      <div className="reading-progress">
        <div className="reading-progress-fill" style={{ width: `${progress}%` }} />
      </div>

      {/* ── ARTICLE HERO ── */}
      <section className="article-hero">
        <div className="article-hero-inner">
          {/* Left col */}
          <div>
            <nav className="detail-breadcrumb">
              <Link href="/">Beranda</Link>
              <span style={{ color: 'rgba(255,255,255,0.25)' }}>›</span>
              <Link href="/artikel">Artikel</Link>
              <span style={{ color: 'rgba(255,255,255,0.25)' }}>›</span>
              <span>{ARTICLE.category}</span>
            </nav>

            <div className="article-hero-meta">
              <span className="article-cat-tag">{ARTICLE.category}</span>
              <span className="article-read-time">⏱ {ARTICLE.readTime}</span>
            </div>

            <h1 className="article-title">
              {ARTICLE.title} <em>{ARTICLE.titleEm}</em>
            </h1>

            <p className="article-excerpt">{ARTICLE.excerpt}</p>

            <div className="article-author-row">
              <div className="article-author-avatar">{ARTICLE.author.initials}</div>
              <div className="article-author-info">
                <div className="article-author-name">{ARTICLE.author.name}</div>
                <div className="article-author-date">{ARTICLE.author.date}</div>
              </div>
              <div className="article-badges">
                <span className="detail-tag green">Verified Content</span>
                <span className="detail-tag blue">Gratis</span>
              </div>
            </div>
          </div>

          {/* Right col — sticky course card */}
          <div className="article-hero-sticky-col">
            <div className="detail-sticky-card">
              <div className="dsc-video">
                <span className="dsc-video-bg">{ARTICLE.relatedCourse.emoji}</span>
                <div
                  className="dsc-play-btn"
                  onClick={() => router.push('/courses/dasar-affiliate')}
                >
                  ▶
                </div>
              </div>
              <div className="dsc-body">
                <div style={{ fontSize: 11, color: 'var(--text3)', marginBottom: 6, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Kursus Terkait Artikel Ini
                </div>
                <div style={{ fontSize: 15, fontWeight: 800, color: 'var(--text)', marginBottom: 4, lineHeight: 1.3 }}>
                  {ARTICLE.relatedCourse.title}
                </div>
                <div style={{ fontSize: 12, color: 'var(--text3)', marginBottom: 14 }}>
                  {ARTICLE.relatedCourse.subtitle}
                </div>
                <div className="dsc-free">
                  Gratis <span>selamanya</span>
                </div>
                <button className="btn-enroll" onClick={() => router.push('/courses/dasar-affiliate')}>
                  Mulai Belajar Sekarang
                </button>
                <button
                  className="btn-wishlist"
                  onClick={() => showToast('Ditambahkan ke Wishlist!')}
                >
                  ♡ Tambah ke Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ── */}
      <section className="article-page-body">
        <div className="article-body-inner">
          {/* Main content */}
          <div>
            {/* TOC */}
            <div className="article-toc">
              <div className="article-toc-header" onClick={() => setTocOpen(!tocOpen)}>
                <span>📋 Daftar Isi</span>
                <span className="toc-toggle-icon">{tocOpen ? '▼' : '▶'}</span>
              </div>
              {tocOpen && (
                <div className="article-toc-list">
                  {TOC.map((item, i) => (
                    <a
                      key={item.id}
                      className={`toc-item${item.sub ? ' sub' : ''}${activeId === item.id ? ' active' : ''}`}
                      onClick={(e) => { e.preventDefault(); scrollTo(item.id); }}
                      href={`#${item.id}`}
                    >
                      {i + 1}. {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Prose */}
            <div className="article-prose" ref={proseRef}>
              <h2 id="pilih-produk">1. Pilih Produk yang Tepat untuk Audiensmu</h2>
              <p>
                Kesalahan paling umum publisher pemula adalah mempromosikan semua produk tanpa seleksi.
                Padahal, <strong>relevansi antara produk dan audiens</strong> adalah faktor terbesar yang menentukan konversi.
              </p>
              <p>
                Sebelum mendaftar program affiliate, tanyakan pada dirimu: apakah audiens saya akan benar-benar
                tertarik dengan produk ini? Apakah saya sendiri sudah pernah mencobanya atau setidaknya
                memahaminya dengan baik?
              </p>
              <ul>
                <li>Pilih produk yang sesuai dengan niche kontenmu</li>
                <li>Prioritaskan produk dengan reputasi baik dan konversi tinggi</li>
                <li>Gunakan data dari dashboard ACCESSTRADE untuk melihat EPC (Earning Per Click)</li>
                <li>Jangan promosikan lebih dari 3–5 produk sekaligus di awal</li>
              </ul>

              <div className="article-callout">
                <div className="article-callout-icon">💡</div>
                <div>
                  <div className="article-callout-title">Key Takeaway</div>
                  <div className="article-callout-body">
                    Publisher dengan konversi tertinggi biasanya fokus pada satu atau dua kategori produk saja,
                    bukan menyebar ke semua kategori. Fokus membangun otoritas di niche tersebut.
                  </div>
                </div>
              </div>

              <h2 id="buat-konten">2. Buat Konten yang Benar-Benar Membantu</h2>
              <p>
                Konten affiliate yang berhasil bukan sekadar menyisipkan link di mana saja. Konten yang
                mengkonversi adalah konten yang <strong>membantu pembaca membuat keputusan</strong> — bukan
                konten yang memaksakan penjualan.
              </p>
              <p>
                Format konten yang paling efektif untuk affiliate marketing antara lain: review mendalam,
                perbandingan produk, panduan how-to yang menampilkan produk secara alami, dan daftar
                rekomendasi yang dikurasi.
              </p>

              <h3>Format Konten Terbaik untuk Affiliate</h3>
              <ol>
                <li><strong>Review Mendalam</strong> — kupas fitur, kelebihan, kekurangan, dan harga secara jujur</li>
                <li><strong>Perbandingan (A vs B)</strong> — bantu audiens memilih antara dua opsi</li>
                <li><strong>Tutorial / How-To</strong> — tunjukkan cara pakai produk step by step</li>
                <li><strong>Daftar Rekomendasi</strong> — &quot;5 tool terbaik untuk...&quot; selalu performa tinggi</li>
              </ol>

              <div className="article-inline-cta">
                <div className="aic-icon">🎓</div>
                <div className="aic-text">
                  <div className="aic-title">Pelajari cara membuat konten yang mengkonversi</div>
                  <div className="aic-subtitle">Modul khusus tersedia di kursus Dasar Affiliate Marketing</div>
                </div>
                <button className="aic-btn" onClick={() => router.push('/courses/dasar-affiliate')}>
                  Lihat Kursus
                </button>
              </div>

              <h2 id="optimasi-seo">3. Optimasi SEO untuk Traffic Organik Berkelanjutan</h2>
              <p>
                Traffic organik dari search engine adalah aset terbesar seorang affiliate marketer.
                Berbeda dengan traffic dari sosial media yang fluktuatif, traffic SEO bisa konsisten
                mengalir selama kontenmu tetap relevan.
              </p>
              <p>
                Fokus pada <strong>long-tail keyword</strong> yang memiliki intent pembelian tinggi.
                Contoh: bukan hanya &quot;laptop gaming&quot;, tapi &quot;laptop gaming terbaik di bawah 10 juta 2026&quot;.
                Keyword spesifik seperti ini memiliki persaingan lebih rendah tapi konversi jauh lebih tinggi.
              </p>

              <div className="article-callout">
                <div className="article-callout-icon">🔍</div>
                <div>
                  <div className="article-callout-title">Tips SEO untuk Affiliate</div>
                  <div className="article-callout-body">
                    Riset keyword dengan Google Keyword Planner atau Ubersuggest. Targetkan keyword dengan
                    volume 500–5.000 pencarian/bulan dan tingkat persaingan rendah–menengah untuk hasil
                    optimal di awal.
                  </div>
                </div>
              </div>

              <h2 id="manfaatkan-sosmed">4. Manfaatkan Media Sosial Secara Strategis</h2>
              <p>
                Media sosial bukan hanya tempat berbagi konten — ini adalah mesin distribusi yang bisa
                mempercepat pertumbuhan affiliate bisnismu jika digunakan dengan strategi yang tepat.
              </p>
              <p>
                Setiap platform memiliki karakteristik yang berbeda. Instagram dan TikTok efektif untuk
                produk visual dan lifestyle. YouTube untuk review dan tutorial. Twitter/X untuk komunitas
                tech dan finance. Pilih 1–2 platform yang paling sesuai dengan gaya kontenmu dan
                audiens yang ingin kamu jangkau.
              </p>

              <h2 id="analisa-data">5. Analisa Data dan Tingkatkan Konversi Terus-Menerus</h2>
              <p>
                Publisher yang sukses tidak hanya membuat konten lalu melupakan. Mereka secara rutin
                menganalisa performa — mana link yang diklik, halaman mana yang menghasilkan komisi,
                dan konten apa yang bounce rate-nya tinggi.
              </p>
              <p>
                Gunakan dashboard ACCESSTRADE untuk memantau <strong>EPC, Click Rate, dan Conversion Rate</strong>
                tiap campaign. Dari sana, kamu bisa tahu produk mana yang layak dipush lebih kencang
                dan mana yang perlu diganti.
              </p>

              <div className="article-inline-cta">
                <div className="aic-icon">📊</div>
                <div className="aic-text">
                  <div className="aic-title">Gabung ACCESSTRADE dan mulai track komisimu</div>
                  <div className="aic-subtitle">Gratis selamanya · Lebih dari 500 program tersedia</div>
                </div>
                <button className="aic-btn" onClick={() => router.push('/register')}>
                  Daftar Sekarang
                </button>
              </div>

              <h2 id="kesimpulan">Kesimpulan</h2>
              <p>
                Affiliate marketing yang menghasilkan komisi tinggi bukan soal keberuntungan — ini soal
                sistem. Pilih produk yang tepat, buat konten yang benar-benar membantu, bangun traffic
                organik melalui SEO, manfaatkan sosial media secara konsisten, dan selalu analisa
                data untuk terus meningkatkan performa.
              </p>
              <p>
                Mulai dengan satu langkah kecil hari ini. Daftar ke program affiliate yang sesuai
                niche-mu, buat satu artikel review yang jujur, dan pantau hasilnya. Dari sana,
                semuanya bisa dioptimasi dan ditingkatkan.
              </p>

              {/* Tags */}
              <div className="article-tags">
                <div className="article-tags-label">Tags</div>
                {ARTICLE.tags.map((tag) => (
                  <Link key={tag} href={`/artikel?tag=${tag.toLowerCase().replace(/ /g, '-')}`} className="article-tag">
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <aside className="article-sidebar">
            {/* TOC Widget */}
            <div className="sidebar-toc-widget">
              <div className="stw-title">Dalam Artikel Ini</div>
              {TOC.map((item, i) => (
                <a
                  key={item.id}
                  className={`stw-item${activeId === item.id ? ' active' : ''}`}
                  href={`#${item.id}`}
                  onClick={(e) => { e.preventDefault(); scrollTo(item.id); }}
                >
                  {i + 1}. {item.label}
                </a>
              ))}
            </div>

            {/* Author Card */}
            <div className="sidebar-author-card">
              <div className="sac-avatar">{ARTICLE.author.initials}</div>
              <div className="sac-name">{ARTICLE.author.name}</div>
              <div className="sac-role">Content Strategist · ACCESSTRADE</div>
              <div className="sac-bio">
                Menulis tentang affiliate marketing, strategi konten, dan monetisasi digital untuk
                publisher Indonesia.
              </div>
            </div>

            {/* CTA Card */}
            <div className="sidebar-cta-card">
              <div className="scc-icon">🎓</div>
              <div className="scc-title">Siap mulai earning?</div>
              <div className="scc-sub">Ikuti kursus gratis dan mulai hasilkan komisi hari ini.</div>
              <button
                className="btn-primary"
                style={{ width: '100%' }}
                onClick={() => router.push('/register')}
              >
                Daftar Gratis
              </button>
            </div>
          </aside>
        </div>
      </section>

      {/* ── RELATED ARTICLES ── */}
      <section className="related-articles">
        <div className="related-articles-inner">
          <div className="related-articles-header">
            <h2 className="related-articles-title">Artikel Terkait</h2>
            <Link href="/artikel" className="related-articles-link">Lihat semua →</Link>
          </div>
          <div className="articles-grid">
            {RELATED.map((a) => (
              <Link key={a.slug} href={`/artikel/${a.slug}`} className="article-card">
                <div className="article-card-thumb">
                  <span className="article-card-thumb-emoji">{a.emoji}</span>
                  <div className="article-card-thumb-gradient" />
                  <span className="article-card-thumb-tag">{a.category}</span>
                </div>
                <div className="article-card-body">
                  <div className="ac-title">{a.title}</div>
                  <div className="ac-meta">
                    <span>{a.author}</span>
                    <span>⏱ {a.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer slim />
    </>
  );
}
