'use client';
import { useState } from 'react';
import Link from 'next/link';

const courses = [
  { no: 1, title: 'Dasar-dasar Affiliate Marketing', cat: 'Affiliate', instruktur: 'Budi Santoso', level: 'Beginner', status: 'published', updated: '12 Mar 2025' },
  { no: 2, title: 'SEO untuk Publisher Pemula', cat: 'SEO', instruktur: 'Andi Pratama', level: 'Intermediate', status: 'published', updated: '15 Mar 2025' },
  { no: 3, title: 'Content Marketing Strategies', cat: 'Content', instruktur: 'Sari Dewi', level: 'Advanced', status: 'draft', updated: '18 Mar 2025' },
  { no: 4, title: 'Social Media Monetization', cat: 'SocialMedia', instruktur: 'Rini Wulandari', level: 'Beginner', status: 'published', updated: '20 Mar 2025' },
  { no: 5, title: 'Google Ads untuk Affiliator', cat: 'PaidAds', instruktur: 'Doni Setiawan', level: 'Intermediate', status: 'pending', updated: '22 Mar 2025' },
  { no: 6, title: 'Email Marketing Mastery', cat: 'Email', instruktur: 'Maya Putri', level: 'Advanced', status: 'draft', updated: '25 Mar 2025' },
  { no: 7, title: 'Landing Page Optimization', cat: 'Conversion', instruktur: 'Eko Prasetyo', level: 'Intermediate', status: 'published', updated: '28 Mar 2025' },
  { no: 8, title: 'Analytics & Data Tracking', cat: 'Analytics', instruktur: 'Lia Rahma', level: 'Advanced', status: 'pending', updated: '01 Apr 2025' },
  { no: 9, title: 'Video Marketing Basics', cat: 'Video', instruktur: 'Budi Santoso', level: 'Beginner', status: 'draft', updated: '03 Apr 2025' },
  { no: 10, title: 'Copywriting Persuasif', cat: 'Copywriting', instruktur: 'Andi Pratama', level: 'Intermediate', status: 'published', updated: '05 Apr 2025' },
];

const statusLabel: Record<string, string> = { published: 'Published', draft: 'Draft', pending: 'Pending' };

export default function CurriculumPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [catFilter, setCatFilter] = useState('');

  const filtered = courses.filter((c) => {
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase());
    const matchStatus = !statusFilter || c.status === statusFilter;
    const matchCat = !catFilter || c.cat === catFilter;
    return matchSearch && matchStatus && matchCat;
  });

  return (
    <>
      <div className="admin-topbar">
        <div>
          <div className="admin-topbar-title">Curriculum · Course List</div>
          <div className="admin-topbar-breadcrumb">
            Dashboard / Curriculum / <span>Course List</span>
          </div>
        </div>
        <div className="admin-topbar-right">
          <div className="admin-avatar-sm">SR</div>
        </div>
      </div>

      <div className="admin-content">
        <div className="admin-table-wrap">
          {/* Header */}
          <div className="admin-table-header">
            <div className="admin-search-wrap" style={{ flex: 1, maxWidth: 260 }}>
              <span className="admin-search-icon">🔍</span>
              <input
                className="admin-search"
                placeholder="Cari kursus..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ width: '100%' }}
              />
            </div>
            <select
              className="admin-filter-select"
              value={catFilter}
              onChange={(e) => setCatFilter(e.target.value)}
            >
              <option value="">Kategori ▾</option>
              <option value="Affiliate">Affiliate</option>
              <option value="SEO">SEO</option>
              <option value="Content">Content</option>
              <option value="SocialMedia">Social Media</option>
              <option value="PaidAds">Paid Ads</option>
              <option value="Email">Email</option>
              <option value="Video">Video</option>
              <option value="Analytics">Analytics</option>
            </select>
            <select
              className="admin-filter-select"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="">Status ▾</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
              <option value="pending">Pending</option>
            </select>
            <div style={{ flex: 1 }} />
            <Link href="/admin/curriculum/edit">
              <button className="btn-admin-primary">+ Tambah Kursus</button>
            </Link>
          </div>

          {/* Table */}
          <table className="admin-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Judul Kursus</th>
                <th>Kategori</th>
                <th>Instruktur</th>
                <th>Level</th>
                <th>Status</th>
                <th>Diperbarui</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((c) => (
                <tr key={c.no}>
                  <td className="course-num">{c.no}</td>
                  <td className="course-title">{c.title}</td>
                  <td><span className="badge-cat">{c.cat}</span></td>
                  <td className="course-meta">{c.instruktur}</td>
                  <td className="course-meta">{c.level}</td>
                  <td><span className={`badge ${c.status}`}>{statusLabel[c.status]}</span></td>
                  <td className="course-meta">{c.updated}</td>
                  <td>
                    <Link href="/admin/curriculum/edit">
                      <button className="btn-tbl-edit">Edit</button>
                    </Link>
                    <button className="btn-tbl-del">Del</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="admin-pagination">
            <div className="admin-pagination-info">
              Menampilkan 1–{filtered.length} dari {courses.length} kursus
            </div>
            <div className="admin-pagination-pages">
              {[1, 2, 3, 4].map((p) => (
                <button key={p} className={`admin-page-btn ${p === 1 ? 'active' : ''}`}>{p}</button>
              ))}
              <button className="admin-page-btn arrow">›</button>
              <span style={{ fontSize: 12, color: 'var(--text3)', padding: '0 4px' }}>Next »</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
