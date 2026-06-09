'use client';
import { useState } from 'react';
import Link from 'next/link';

const lessons = [
  { num: '01', title: 'Pengenalan Affiliate Marketing', type: 'video', dur: '12:30' },
  { num: '02', title: 'Cara Kerja Platform ACCESSTRADE', type: 'video', dur: '8:45' },
  { num: '03', title: 'Mendaftar sebagai Publisher', type: 'video', dur: '6:20' },
  { num: '04', title: 'Quiz: Dasar Affiliate', type: 'quiz', dur: '10 soal' },
  { num: '05', title: 'Memilih Produk yang Tepat', type: 'video', dur: '15:00' },
  { num: '06', title: 'Optimasi Performa Campaign', type: 'video', dur: '11:10' },
  { num: '07', title: 'Studi Kasus: Publisher Sukses', type: 'video', dur: '9:30' },
  { num: '08', title: 'Evaluasi Akhir', type: 'quiz', dur: '15 soal' },
];

export default function CourseEditorPage() {
  const [isPublished, setIsPublished] = useState(true);
  const [title, setTitle] = useState('Dasar-dasar Affiliate Marketing');
  const [desc, setDesc] = useState('Pelajari cara memulai affiliate marketing dan bergabung sebagai publisher di platform ACCESSTRADE');
  const [tags, setTags] = useState('affiliate, publisher, monetisasi');

  return (
    <>
      <div className="admin-topbar">
        <div>
          <div className="admin-topbar-title">Curriculum · Course Editor</div>
          <div className="admin-topbar-breadcrumb">
            Dashboard / Curriculum / Course List / <span>Edit Kursus</span>
          </div>
        </div>
        <div className="admin-topbar-right">
          <div className="admin-avatar-sm">SR</div>
        </div>
      </div>

      <div className="admin-content">
        <div className="admin-editor-grid">
          {/* Form */}
          <div className="admin-form-section">
            <div className="admin-form-section-title">Informasi Kursus</div>
            <div className="admin-form-section-sub">Lengkapi detail kursus sebelum dipublish</div>

            <div className="admin-form-field">
              <label className="admin-form-label">Judul Kursus <span>*</span></label>
              <input
                className="admin-form-input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Masukkan judul kursus"
              />
            </div>

            <div className="admin-form-field">
              <label className="admin-form-label">Deskripsi Singkat <span>*</span></label>
              <textarea
                className="admin-form-textarea"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="Deskripsikan kursus ini secara singkat"
                rows={3}
              />
            </div>

            <div className="admin-form-row">
              <div className="admin-form-field">
                <label className="admin-form-label">Kategori <span>*</span></label>
                <select className="admin-form-select" defaultValue="Affiliate Marketing">
                  <option>Affiliate Marketing</option>
                  <option>SEO</option>
                  <option>Content Marketing</option>
                  <option>Social Media</option>
                  <option>Paid Ads</option>
                  <option>Email Marketing</option>
                  <option>Analytics</option>
                </select>
              </div>
              <div className="admin-form-field">
                <label className="admin-form-label">Level <span>*</span></label>
                <select className="admin-form-select" defaultValue="Beginner">
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>
            </div>

            <div className="admin-form-field">
              <label className="admin-form-label">Instruktur</label>
              <input className="admin-form-input" defaultValue="Budi Santoso" placeholder="Nama instruktur" />
            </div>

            <div className="admin-form-field">
              <label className="admin-form-label">Thumbnail Kursus</label>
              <div className="admin-upload-zone">
                <div className="admin-upload-icon">🖼️</div>
                <div className="admin-upload-label">Upload Gambar</div>
                <div className="admin-upload-hint">PNG · JPG · WebP · Maks 2MB · Rasio 16:9</div>
              </div>
            </div>

            <div className="admin-form-field">
              <label className="admin-form-label">Tags</label>
              <input
                className="admin-form-input"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="affiliate, publisher, monetisasi"
              />
            </div>

            <div className="admin-form-actions">
              <button className="btn-admin-draft">Simpan Draft</button>
              <button className="btn-admin-publish">Publish Kursus</button>
            </div>

            <div className="admin-toggle-row">
              <div>
                <div className="admin-toggle-label">Status: {isPublished ? 'Published' : 'Draft'}</div>
              </div>
              <div
                className={`admin-toggle ${isPublished ? 'on' : ''}`}
                onClick={() => setIsPublished(!isPublished)}
              >
                <div className="admin-toggle-knob" />
              </div>
            </div>
          </div>

          {/* Lesson list */}
          <div>
            <div className="admin-form-section" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 16px 12px' }}>
                <div className="admin-form-section-title" style={{ marginBottom: 0 }}>Daftar Lesson</div>
                <button className="btn-admin-publish" style={{ fontSize: 12, padding: '6px 12px' }}>+ Tambah Lesson</button>
              </div>
              <div className="admin-lesson-list">
                {lessons.map((l) => (
                  <div key={l.num} className="admin-lesson-item">
                    <div className="admin-lesson-num">{l.num}</div>
                    <div className="admin-lesson-text">
                      <div className="admin-lesson-title">{l.title}</div>
                      <span className={`admin-lesson-type ${l.type}`}>{l.type === 'video' ? 'Video' : 'Quiz'}</span>
                    </div>
                    <div className="admin-lesson-dur">{l.dur}</div>
                    <div className="admin-lesson-drag">⠿</div>
                  </div>
                ))}
              </div>
              <div className="admin-lesson-footer">
                Total: {lessons.length} Lesson · Estimasi ~1 jam 18 Menit
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
