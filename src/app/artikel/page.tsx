'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ARTICLES = [
  {
    slug: 'strategi-affiliate-marketing-komisi-tinggi',
    emoji: '📊',
    category: 'Strategi',
    title: '5 Strategi Affiliate Marketing yang Terbukti Menghasilkan Komisi Tinggi',
    excerpt: 'Pelajari strategi yang sudah dipraktikkan ribuan publisher ACCESSTRADE untuk meningkatkan komisi secara konsisten.',
    author: 'Harist Nazili',
    date: '5 Jun 2026',
    readTime: '8 menit',
  },
  {
    slug: 'cara-daftar-publisher-accesstrade',
    emoji: '🚀',
    category: 'Panduan',
    title: 'Cara Daftar Jadi Publisher ACCESSTRADE dan Mulai Earn Pertamamu',
    excerpt: 'Panduan lengkap step-by-step untuk mendaftar, verifikasi akun, dan mendapatkan komisi pertama.',
    author: 'Tim ACCESSTRADE',
    date: '2 Jun 2026',
    readTime: '5 menit',
  },
  {
    slug: 'optimasi-link-affiliate',
    emoji: '🔗',
    category: 'Teknis',
    title: 'Cara Optimasi Link Affiliate agar CTR Naik Signifikan',
    excerpt: 'Teknik penempatan link, shortener, dan A/B testing yang terbukti meningkatkan click-through rate.',
    author: 'Budi Santoso',
    date: '28 Mei 2026',
    readTime: '6 menit',
  },
  {
    slug: 'konten-review-produk',
    emoji: '✍️',
    category: 'Konten',
    title: 'Panduan Menulis Review Produk yang Jujur dan Tetap Menghasilkan',
    excerpt: 'Struktur review yang dipercaya pembaca sekaligus mendorong konversi tanpa terasa seperti iklan.',
    author: 'Sari Dewi',
    date: '20 Mei 2026',
    readTime: '7 menit',
  },
  {
    slug: 'seo-untuk-affiliate',
    emoji: '🔍',
    category: 'SEO',
    title: 'Dasar SEO yang Wajib Dikuasai Setiap Affiliate Marketer',
    excerpt: 'Dari riset keyword hingga on-page optimization — semua yang kamu butuhkan untuk traffic organik.',
    author: 'Reza Firmansyah',
    date: '15 Mei 2026',
    readTime: '10 menit',
  },
  {
    slug: 'monetisasi-instagram',
    emoji: '📱',
    category: 'Sosial Media',
    title: 'Cara Monetisasi Instagram dengan Affiliate Marketing Tanpa Banyak Follower',
    excerpt: 'Strategi engagement-based yang efektif bahkan dengan akun nano (1.000–10.000 follower).',
    author: 'Dina Kusuma',
    date: '10 Mei 2026',
    readTime: '6 menit',
  },
];

const CATEGORIES = ['Semua', 'Strategi', 'Panduan', 'Teknis', 'Konten', 'SEO', 'Sosial Media'];

export default function ArticleListPage() {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filtered = activeCategory === 'Semua'
    ? ARTICLES
    : ARTICLES.filter((a) => a.category === activeCategory);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section style={{ background: 'var(--dark)', padding: '48px 40px 40px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>
            ACCESSTRADE Academy
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: 12, letterSpacing: '-0.02em' }}>
            Artikel & <em style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, color: '#F0997B' }}>Tips Affiliate</em>
          </h1>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', maxWidth: 520, lineHeight: 1.65 }}>
            Panduan praktis, strategi terbukti, dan insight terbaru untuk publisher affiliate Indonesia.
          </p>
        </div>
      </section>

      {/* Filter pills */}
      <div style={{ background: 'var(--dark)', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '0 40px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', gap: 6, paddingBottom: 16, overflowX: 'auto' }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '7px 16px', borderRadius: 20, fontSize: 13, fontWeight: 600,
                background: activeCategory === cat ? 'var(--red)' : 'rgba(255,255,255,0.07)',
                color: activeCategory === cat ? 'white' : 'rgba(255,255,255,0.6)',
                border: 'none', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'var(--transition)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles grid */}
      <section style={{ padding: '40px 40px 64px', background: 'var(--white)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="articles-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {filtered.map((a) => (
              <Link key={a.slug} href={`/artikel/${a.slug}`} className="article-card">
                <div className="article-card-thumb">
                  <span className="article-card-thumb-emoji">{a.emoji}</span>
                  <div className="article-card-thumb-gradient" />
                  <span className="article-card-thumb-tag">{a.category}</span>
                </div>
                <div className="article-card-body">
                  <div className="ac-title">{a.title}</div>
                  <p style={{ fontSize: 12, color: 'var(--text2)', lineHeight: 1.5, margin: '6px 0 10px' }}>
                    {a.excerpt}
                  </p>
                  <div className="ac-meta">
                    <span>{a.author} · {a.date}</span>
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
