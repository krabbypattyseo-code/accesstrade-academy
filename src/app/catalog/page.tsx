'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useToast } from '@/components/Toast';

const COURSES = [
  { bg: 'linear-gradient(135deg,#1a1a18,#3a2020)', icon: '🎯', tag: 'Getting Started', title: 'Dasar-dasar Affiliate Marketing untuk Pemula', rating: '4.8', students: '3.4k pelajar', progress: 75 },
  { bg: 'linear-gradient(135deg,#0f1a2e,#1a2a3a)', icon: '📱', tag: 'TikTok', title: 'TikTok for Business — Affiliate Strategy', rating: '4.9', students: '5.2k pelajar', progress: null },
  { bg: 'linear-gradient(135deg,#0d2010,#1a3520)', icon: '🔍', tag: 'SEO / Blog', title: 'Cara Keyword Research untuk Konten Affiliate', rating: '4.5', students: '1.5k pelajar', progress: null },
  { bg: 'linear-gradient(135deg,#2a1520,#3a2030)', icon: '📸', tag: 'Instagram', title: 'Strategi Konten Instagram untuk Komisi Maksimal', rating: '4.6', students: '2.1k pelajar', progress: 100 },
  { bg: 'linear-gradient(135deg,#201010,#3a1515)', icon: '🎬', tag: 'YouTube', title: 'Jadi YouTube Creator Pemula Bersama Yoko Bomb', rating: '4.7', students: '4.8k pelajar', progress: null },
  { bg: 'linear-gradient(135deg,#10201a,#1a3530)', icon: '📈', tag: 'Scaling', title: 'Cara Scale Affiliate dengan Paid Ads & Multiple Campaign', rating: '4.4', students: '876 pelajar', progress: null },
];

const FILTER_PILLS = ['Semua', 'Getting Started', 'TikTok', 'Instagram', 'SEO / Blog', 'YouTube', 'Scaling'];

const SIDEBAR_FILTERS = {
  level: [
    { label: 'Pemula', checked: true },
    { label: 'Menengah', checked: true },
    { label: 'Advanced', checked: false },
  ],
  format: [
    { label: 'Video', checked: true },
    { label: 'Artikel', checked: true },
    { label: 'Webinar', checked: false },
  ],
  duration: [
    { label: 'Di bawah 5 menit', checked: false },
    { label: '5–15 menit', checked: true },
    { label: 'Di atas 15 menit', checked: false },
  ],
};

export default function CatalogPage() {
  const { showToast } = useToast();
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [checks, setChecks] = useState(SIDEBAR_FILTERS);

  const toggleCheck = (section: keyof typeof SIDEBAR_FILTERS, idx: number) => {
    setChecks(prev => ({
      ...prev,
      [section]: prev[section].map((item, i) => i === idx ? { ...item, checked: !item.checked } : item),
    }));
  };

  const filteredCourses = activeFilter === 'Semua'
    ? COURSES
    : COURSES.filter(c => c.tag === activeFilter);

  return (
    <>
      <Navbar />

      <div className="catalog-header">
        <div className="catalog-header-inner">
          <div className="catalog-breadcrumb">
            <Link href="/"><span>Beranda</span></Link>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>›</span>
            <span>Semua Kursus</span>
          </div>
          <h1 className="catalog-title">Semua Kursus</h1>
          <p className="catalog-sub">200+ konten gratis untuk membantu kamu jadi publisher yang menghasilkan</p>
        </div>
      </div>

      <div className="catalog-filter-bar">
        <div className="catalog-filter-bar-inner">
          <div className="filter-search-wrap">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M9.5 9.5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input className="filter-search" placeholder="Cari kursus, topik, instruktur…" />
          </div>
          <div className="filter-pills">
            {FILTER_PILLS.map(pill => (
              <button
                key={pill}
                className={`filter-pill${activeFilter === pill ? ' active' : ''}`}
                onClick={() => setActiveFilter(pill)}
              >
                {pill}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 40px' }}>
        <div className="catalog-body" style={{ padding: '32px 0' }}>
          {/* Sidebar */}
          <div>
            {Object.entries(checks).map(([section, items]) => (
              <div className="sidebar-section" key={section}>
                <div className="sidebar-section-title">
                  {section === 'level' ? 'Level' : section === 'format' ? 'Format Konten' : 'Durasi'}
                </div>
                {items.map((item, idx) => (
                  <div className="sidebar-check-item" key={item.label} onClick={() => toggleCheck(section as keyof typeof SIDEBAR_FILTERS, idx)}>
                    <div className={`sidebar-checkbox${item.checked ? ' checked' : ''}`}>
                      {item.checked && (
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="white">
                          <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                        </svg>
                      )}
                    </div>
                    <div className="sidebar-item-label">{item.label}</div>
                  </div>
                ))}
              </div>
            ))}
            <div className="sidebar-section">
              <div className="sidebar-section-title">Do &amp; Don&apos;t</div>
              <div className="sidebar-check-item">
                <div className="sidebar-checkbox"></div>
                <div className="sidebar-item-label">Hanya yang punya Do &amp; Don&apos;t</div>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div>
            <div style={{ fontSize: 13, color: 'var(--text2)', marginBottom: 16 }}>
              Menampilkan <strong>{filteredCourses.length} kursus</strong>
            </div>
            <div className="catalog-grid">
              {filteredCourses.map((course) => (
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
          </div>
        </div>
      </div>

      <Footer slim />
    </>
  );
}
