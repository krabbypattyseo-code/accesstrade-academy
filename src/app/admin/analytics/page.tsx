'use client';

const funnelData = [
  { stage: 'Page Views', event: null, count: '48.293', pct: 100, bar: 100, conv: null, convClass: '' },
  { stage: 'Course Detail View', event: 'course_detail_view', count: '12.847', pct: 26.6, bar: 26.6, conv: '26.6%', convClass: 'med' },
  { stage: 'course_enroll', event: 'course_enroll', count: '4.207', pct: 8.7, bar: 32.7, conv: '32.7%', convClass: 'good' },
  { stage: 'lesson_start', event: 'lesson_start', count: '3.891', pct: 8.1, bar: 42.5, conv: '42.5%', convClass: 'good' },
  { stage: 'video_complete_academy', event: 'video_complete_academy', count: '2.634', pct: 5.5, bar: 47.7, conv: '47.7%', convClass: 'med' },
  { stage: 'course_complete', event: 'course_complete', count: '1.456', pct: 3, bar: 55.3, conv: '55.3%', convClass: 'good' },
  { stage: 'track_complete ⭐', event: 'track_complete', count: '289', pct: 0.6, bar: 19.8, conv: '19.8%', convClass: 'bad' },
];

const trafficSources = [
  { color: '#ef4444', name: 'Blog Accesstrade', src: 'utm_medium_internal_link', val: '16.902', pct: '35%', barWidth: 35 },
  { color: '#3b82f6', name: 'Email CRM (Blast S1/S2)', src: 'utm_medium_email_blast', val: '10.624', pct: '22%', barWidth: 22 },
  { color: '#8b5cf6', name: 'Social Media (IG · TikTok)', src: 'utm_medium social_organic / paid_social', val: '8.693', pct: '18%', barWidth: 18 },
  { color: '#f59e0b', name: 'AT Dashboard (Banner)', src: 'utm_medium_banner / navigation', val: '7.244', pct: '10%', barWidth: 10 },
  { color: '#6b7280', name: 'Direct / Organic', src: 'utm_source (direct)', val: '4.830', pct: '10%', barWidth: 10 },
];

const gaEvents = [
  { cat: 'A – Scroll Depth', total: 4, mandatory: 3, priority: 1, optional: 0, status: 'notyet', key: 'scroll_25/50/75/100_academy + page_type, course_id, phase' },
  { cat: 'B – Registration & Auth', total: 4, mandatory: 4, priority: 4, optional: 0, status: 'notyet', key: 'academy_register_click, academy_register_success, login_success' },
  { cat: 'C – Course Enrollment & Progress', total: 7, mandatory: 7, priority: 0, optional: 0, status: 'notyet', key: 'course_enroll, lesson_start, lesson_complete, course_complete + track_complete ⭐' },
  { cat: 'D – Video Player Interaction', total: 6, mandatory: 3, priority: 1, optional: 2, status: 'notyet', key: 'video_start_academy, video_progress_academy, video_complete_academy' },
  { cat: 'E – Navigation & Quick Journey', total: 4, mandatory: 3, priority: 1, optional: 0, status: 'notyet', key: 'quick_journey_click, category_click, catalog_course, card_click' },
  { cat: 'F – Do & Don\'t Tab', total: 3, mandatory: 1, priority: 2, optional: 0, status: 'notyet', key: 'dodont_tab_click, dodont_scroll_complete, violation_risk_awareness' },
  { cat: 'G – My Learning Dashboard', total: 4, mandatory: 1, priority: 2, optional: 1, status: 'notyet', key: 'my_learning_visit, streak_achieved, schedule_reminder_set, wishlist_add' },
  { cat: 'H – CTA & Conversion', total: 6, mandatory: 3, priority: 1, optional: 2, status: 'notyet', key: 'to_register, publisher → to_bank, screen_directory, to_bank_sorbet, certificate_download' },
  { cat: 'I – Q&A & Community', total: 4, mandatory: 0, priority: 3, optional: 1, status: 'notyet', key: 'qa_tab_click, qa_question_submit, telegram_community_click' },
  { cat: 'J – UTM & Source Tracking', total: 4, mandatory: 4, priority: 0, optional: 0, status: 'notyet', key: 'academy_from_blog, academy_from_email, academy_from_scamed, academy_from_direct' },
];

export default function AnalyticsPage() {
  return (
    <>
      <div className="admin-topbar">
        <div>
          <div className="admin-topbar-title">Analytics · GA4 Dashboard</div>
          <div className="admin-topbar-breadcrumb">
            Dashboard / Analytics / <span>Overview</span> · Periode: 1–30 Apr 2026
          </div>
        </div>
        <div className="admin-topbar-right">
          <div className="admin-ga-connected">GA4 Connected</div>
          <div className="admin-avatar-sm">SR</div>
        </div>
      </div>

      <div className="admin-content">
        {/* Property bar */}
        <div className="admin-analytics-header-bar">
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text)' }}>
              Properti GA4: AT Academy (ID: G-XXXXXXXX) · Platform: academy.accesstrade.id · Data realtime – GTM v1.0 Q3 2026
            </div>
            <div className="admin-analytics-property">42 Events Tracked (Planned)</div>
          </div>
          <div className="admin-analytics-events-badge">42 Events Tracked (Planned)</div>
        </div>

        {/* Top stats */}
        <div className="admin-stats-row" style={{ marginBottom: 16 }}>
          <div className="admin-stat-card">
            <div className="admin-stat-label">Total Sessions</div>
            <div className="admin-stat-value" style={{ color: 'var(--text)' }}>48.293</div>
            <div className="admin-stat-delta up">↑ +18.2% ↑</div>
          </div>
          <div className="admin-stat-card">
            <div className="admin-stat-label">Publisher dari Academy</div>
            <div className="admin-stat-value" style={{ color: 'var(--red)' }}>1.247</div>
            <div style={{ fontSize: 10, color: 'var(--text3)' }}>academy_register_success ✓</div>
          </div>
          <div className="admin-stat-card">
            <div className="admin-stat-label">Course Completion Rate</div>
            <div className="admin-stat-value" style={{ color: '#3b82f6' }}>34.6%</div>
            <div style={{ fontSize: 10, color: 'var(--text3)' }}>course_complete ÷ course_enroll ✓</div>
          </div>
          <div className="admin-stat-card">
            <div className="admin-stat-label">Track Completions</div>
            <div className="admin-stat-value" style={{ color: '#1D9E75' }}>289</div>
            <div style={{ fontSize: 10, color: 'var(--text3)' }}>track_complete (A+B) ⭐</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 14, marginBottom: 14 }}>
          {/* Learning funnel */}
          <div className="admin-card" style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ padding: '14px 16px 10px', borderBottom: '1px solid var(--border)' }}>
              <div className="admin-card-title">Learning Funnel</div>
              <div className="admin-card-sub" style={{ marginBottom: 0 }}>GA4 Events · academy_register_success → track_complete · Apr 2026 · Total: 48.293</div>
            </div>
            <table className="admin-funnel-table">
              <thead>
                <tr>
                  <th>Funnel Stage</th>
                  <th style={{ textAlign: 'right' }}>Count</th>
                  <th style={{ textAlign: 'right' }}>% Total</th>
                  <th>Bar (normalized)</th>
                  <th>Step Conv.</th>
                </tr>
              </thead>
              <tbody>
                {funnelData.map((row) => (
                  <tr key={row.stage}>
                    <td>
                      {row.event ? (
                        <span className="admin-funnel-link">{row.stage}</span>
                      ) : (
                        <span style={{ fontWeight: 600 }}>{row.stage}</span>
                      )}
                    </td>
                    <td style={{ textAlign: 'right', fontWeight: 700 }}>{row.count}</td>
                    <td style={{ textAlign: 'right', color: 'var(--text3)' }}>{row.pct}%</td>
                    <td className="admin-funnel-bar-cell">
                      <div className="admin-funnel-bar-bg">
                        <div
                          className="admin-funnel-bar-fill"
                          style={{ width: `${row.bar}%`, background: row.event ? '#3b82f6' : '#1a1a18' }}
                        />
                      </div>
                    </td>
                    <td>
                      {row.conv && (
                        <span className={`admin-funnel-conv ${row.convClass}`}>{row.conv}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Traffic sources */}
          <div className="admin-card">
            <div className="admin-card-title">Traffic Source (UTM Attribution)</div>
            <div className="admin-card-sub">Sessions by utm_source · academy.accesstrade.id · Apr 2026 · Total: 48.293</div>
            {trafficSources.map((t) => (
              <div key={t.name} className="admin-traffic-item">
                <div className="admin-traffic-dot" style={{ background: t.color }} />
                <div className="admin-traffic-name">
                  {t.name}
                  <small>{t.src}</small>
                </div>
                <div>
                  <div className="admin-traffic-val">{t.val}</div>
                  <div className="admin-traffic-bar" style={{ marginTop: 4 }}>
                    <div className="admin-traffic-bar-fill" style={{ width: `${t.barWidth}%`, background: t.color }} />
                  </div>
                </div>
                <span className="admin-traffic-pct" style={{ background: t.color + '20', color: t.color }}>{t.pct}</span>
              </div>
            ))}
          </div>
        </div>

        {/* GA4 Event Tracker */}
        <div className="admin-card" style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{ padding: '14px 16px 10px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div className="admin-card-title">GA4 Event Implementation Tracker</div>
              <div className="admin-card-sub" style={{ marginBottom: 0 }}>Sumber: AT_Academy_GTM_Plan.xlsx v1.0 · 42 events total · 10 kategori · Status: Siap Implementasi (Not Yet)</div>
            </div>
            <div style={{ display: 'flex', gap: 12, fontSize: 11, color: 'var(--text3)', alignItems: 'center' }}>
              <span><span className="admin-event-dot mandatory" />Mandatory</span>
              <span><span className="admin-event-dot priority" />Priority</span>
              <span><span className="admin-event-dot optional" />Optional</span>
            </div>
          </div>
          <table className="admin-event-table">
            <thead>
              <tr>
                <th>Kategori Event</th>
                <th style={{ textAlign: 'center' }}>Events</th>
                <th style={{ textAlign: 'center' }}>● Mandatory</th>
                <th style={{ textAlign: 'center' }}>● Priority</th>
                <th style={{ textAlign: 'center' }}>● Optional</th>
                <th>Status</th>
                <th>Key Events (sample)</th>
              </tr>
            </thead>
            <tbody>
              {gaEvents.map((ev) => (
                <tr key={ev.cat}>
                  <td className="admin-event-cat">{ev.cat}</td>
                  <td style={{ textAlign: 'center', fontWeight: 700 }}>{ev.total}</td>
                  <td style={{ textAlign: 'center' }}>
                    <span style={{ color: 'var(--red)', fontWeight: 700 }}>{ev.mandatory}</span>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <span style={{ color: '#f59e0b', fontWeight: 700 }}>{ev.priority}</span>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <span style={{ color: '#3b82f6', fontWeight: 700 }}>{ev.optional}</span>
                  </td>
                  <td><span className="badge-notyet">Not Yet</span></td>
                  <td className="admin-event-key">{ev.key}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
