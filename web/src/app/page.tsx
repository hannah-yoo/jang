import Link from 'next/link'
import {MotionToggle} from '@/components/MotionToggle'

const navigation = [
  {label: 'HOME', href: '#home'},
  {label: 'ABOUT', href: '#about'},
  {label: 'ISSUES', href: '#issues'},
  {label: 'EXHIBITIONS', href: '#exhibitions'},
  {label: 'ARCHIVE', href: '#archive'},
]

const imagePanels = [
  {className: 'image-panel image-panel--green', label: 'IMAGE 01'},
  {className: 'image-panel image-panel--pink', label: 'IMAGE 02'},
  {className: 'image-panel image-panel--blue', label: 'IMAGE 03'},
]

export default function Home() {
  return (
    <div className="magazine-shell" id="home">
      <aside className="sidebar" aria-label="Main navigation">
        <Link className="wordmark" href="#home" aria-label="Jang home">
          <span>JANG</span>
          <small>WEB MAGAZINE</small>
        </Link>

        <nav className="side-nav">
          {navigation.map((item, index) => (
            <Link href={item.href} key={item.label} className={index === 0 ? 'is-current' : ''}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <MotionToggle />

        <p className="sidebar-note" id="about">
          TO BE INDICATED
          <br />
          <span>TO BE INDICATED</span>
        </p>

        <div className="sidebar-bottom">
          <Link href="#archive">VISITOR: TO BE INDICATED</Link>
          <Link href="#archive">PAGE INFO +</Link>
          <p>SEOUL · KR</p>
        </div>
      </aside>

      <main className="magazine-main">
        <header className="topline">
          <span>INDEPENDENT PUBLICATION</span>
          <span>SEOUL, KOREA</span>
          <span>EST. TO BE INDICATED</span>
        </header>

        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-images" aria-label="Image placeholders">
            {imagePanels.map((panel) => (
              <div className={panel.className} key={panel.label}>
                <span className="image-label">{panel.label}</span>
                <span className="image-placeholder">TO BE INDICATED</span>
              </div>
            ))}
          </div>

          <div className="hero-overlay">
            <p className="hero-kicker">A MAGAZINE ABOUT EVERYTHING / NOTHING</p>
            <h1 id="hero-title">JANG</h1>
            <div className="intro-card">
              <span className="card-index">00 / INTRODUCTION</span>
              <p>TO BE INDICATED</p>
              <span className="card-footer">TO BE INDICATED ↗</span>
            </div>
            <details className="quick-links">
              <summary>
                QUICK LINKS <span aria-hidden="true">+</span>
              </summary>
              <div className="quick-links-panel">
                <Link href="#issues">TO BE INDICATED ↗</Link>
                <Link href="#exhibitions">TO BE INDICATED ↗</Link>
                <Link href="#archive">TO BE INDICATED ↗</Link>
              </div>
            </details>
          </div>

          <div className="hero-caption">
            <span>FIG. 001</span>
            <span>IMAGE / TO BE INDICATED</span>
          </div>
        </section>

        <nav className="page-index" aria-label="On this page">
          <span>ON THIS PAGE</span>
          <Link href="#issues">TO BE INDICATED</Link>
          <Link href="#exhibitions">TO BE INDICATED</Link>
          <Link href="#calendar">TO BE INDICATED</Link>
        </nav>

        <section className="bulletin" id="issues" aria-labelledby="bulletin-title">
          <div className="section-heading">
            <span>01 — NOTICE BOARD</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
          <h2 id="bulletin-title">TO BE INDICATED</h2>
          <div className="bulletin-content">
            <p>TO BE INDICATED</p>
            <p>TO BE INDICATED</p>
            <p>TO BE INDICATED</p>
            <span className="editor-mark">EDITED / TO BE INDICATED</span>
          </div>
        </section>

        <section className="exhibitions" id="exhibitions" aria-labelledby="exhibitions-title">
          <div className="section-heading">
            <span>02 — ON VIEW</span>
            <span>TO BE INDICATED</span>
          </div>
          <h2 id="exhibitions-title">TO BE INDICATED</h2>
          <div className="exhibition-grid">
            <article className="exhibition-card">
              <div className="exhibition-image exhibition-image--orange">
                <span>IMAGE 04</span>
                <strong>TO BE INDICATED</strong>
              </div>
              <p>TO BE INDICATED <span>↗</span></p>
            </article>
            <article className="exhibition-card">
              <div className="exhibition-image exhibition-image--violet">
                <span>IMAGE 05</span>
                <strong>TO BE INDICATED</strong>
              </div>
              <p>TO BE INDICATED <span>↗</span></p>
            </article>
            <article className="exhibition-card">
              <div className="exhibition-image exhibition-image--yellow">
                <span>IMAGE 06</span>
                <strong>TO BE INDICATED</strong>
              </div>
              <p>TO BE INDICATED <span>↗</span></p>
            </article>
          </div>
        </section>

        <section className="calendar" id="calendar" aria-labelledby="calendar-title">
          <div className="calendar-heading">
            <span>03 — THE CALENDAR</span>
            <span>ISSUE 00 / 2026</span>
          </div>
          <h2 id="calendar-title">TO BE INDICATED</h2>
          <div className="calendar-board">
            <div className="calendar-controls" aria-label="Calendar sections">
              <Link href="#calendar">←</Link>
              <Link href="#calendar">→</Link>
              <span>TO BE INDICATED</span>
              <Link href="#archive">FILTER +</Link>
              <Link href="#archive">SEARCH ↗</Link>
            </div>
            <div className="calendar-placeholder">
              <span>CALENDAR / TO BE INDICATED</span>
              <span>TO BE INDICATED</span>
            </div>
          </div>
        </section>

        <footer className="site-footer" id="archive">
          <span>JANG — WEB MAGAZINE</span>
          <span>ALL CONTENT / TO BE INDICATED</span>
          <Link href="#home">BACK TO TOP ↑</Link>
        </footer>
      </main>
    </div>
  )
}
