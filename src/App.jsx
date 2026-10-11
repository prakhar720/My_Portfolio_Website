import React, { useEffect, useState, useCallback } from 'react'
import { Menu, X, ArrowUpRight, Download, Linkedin, Github, Mail, Phone, ChevronLeft, ChevronRight } from 'lucide-react'
import { person, filters, projects, experience, achievements, skills, clubs } from './data.js'

const NAV = [['home', 'Home'], ['about', 'About'], ['work', 'Work'], ['experience', 'Experience'], ['achievements', 'Achievements'], ['contact', 'Contact']]
const useRoute = () => {
  const get = () => (location.hash.startsWith('#/work/') ? location.hash.slice(7) : null)
  const [slug, setSlug] = useState(get)
  useEffect(() => { const f = () => setSlug(get()); addEventListener('hashchange', f); return () => removeEventListener('hashchange', f) }, [])
  return slug
}
const goHome = (id) => { if (location.hash.startsWith('#/work/')) { location.hash = ''; setTimeout(() => document.getElementById(id)?.scrollIntoView(), 50) } else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }
const Ext = ({ href, children, className = 'btn ghost', ...r }) => <a className={className} href={href} target="_blank" rel="noopener noreferrer" {...r}>{children}<ArrowUpRight size={15} aria-hidden /></a>
const Social = () => (<div className="social">
  <a href={person.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
  <a href={person.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={18} /></a></div>)

function Nav({ active }) {
  const [open, setOpen] = useState(false)
  const go = (id) => { setOpen(false); goHome(id) }
  return (<header className="nav"><div className="wrap navin">
    <button className="logo" onClick={() => go('home')}>Prakhar Agrawal<span>.</span></button>
    <nav className={open ? 'links open' : 'links'} aria-label="Primary">
      {NAV.map(([id, l]) => <button key={id} className={active === id ? 'on' : ''} onClick={() => go(id)}>{l}</button>)}
    </nav>
    <div className="navr"><Social /><a className="btn dark sm" href={person.resume} target="_blank" rel="noopener noreferrer">Resume</a>
      <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div>
  </div></header>)
}

function Hero() {
  return (<section id="home" className="hero wrap">
    <div className="herol">
      <p className="eyebrow">Product management · Fintech · Strategy</p>
      <h1>Building thoughtful products at the intersection of <em>users</em>, business and technology.</h1>
      <p className="lead">I'm Prakhar, a Mechanical Engineering student at IIT (ISM) Dhanbad exploring product management, fintech and data-driven problem solving. I like understanding user problems, turning research into product decisions, and building solutions that create value.</p>
      <div className="row"><button className="btn dark" onClick={() => goHome('work')}>Explore my work</button>
        <a className="btn ghost" href={person.resume} target="_blank" rel="noopener noreferrer">View resume</a><Social /></div>
    </div>
    <figure className="herop"><img src="/portrait.jpg" alt="Portrait of Prakhar Agrawal" width="560" height="560" /><figcaption>IIT (ISM) Dhanbad · B.Tech, expected May 2029</figcaption></figure>
  </section>)
}

function About() {
  const steps = [['Understand', 'the user and business context'], ['Research', 'and analyze the problem'], ['Compare', 'alternatives and weigh trade-offs'], ['Prioritize', 'the most useful solution'], ['Validate', 'assumptions and define success metrics'], ['Iterate', 'with the team']]
  return (<><section id="about" className="wrap sec"><p className="eyebrow">About</p>
    <div className="two"><h2>Analytical training, product-minded questions.</h2>
      <div><p className="lead">I study Mechanical Engineering at IIT (ISM) Dhanbad (CGPA 8.37/10). Engineering taught me to break a problem into parts and test assumptions; case competitions and projects are where I practise applying that to users, markets and money.</p>
        <p>My interests are product management, fintech and data-driven decision making. I also work as a Research Consultant at WorldQuant BRAIN, which keeps me close to experimentation and metrics. I am early in my career and aim to be specific about what I did, what was a team effort, and what is only a proposal.</p>
        <p className="small">Clubs: {clubs.join(' · ')}</p></div></div></section>
    <section className="band"><div className="wrap"><p className="eyebrow">How I work</p><h2>Understand first. Decide with intent.</h2>
      <ol className="steps">{steps.map(([a, b], i) => <li key={a}><span>0{i + 1}</span><h3>{a}</h3><p>{b}</p></li>)}</ol></div></section></>)
}

function Card({ p }) {
  return (<a className="card" href={`#/work/${p.slug}`}>
    <div className="cover">{p.noSlides ? <div className="ct"><b>CT</b><span>SHA-256 hash chain</span></div> : <img loading="lazy" src={`/slides/${p.cover}.jpg`} alt={`${p.title} deck cover`} />}</div>
    <div className="cbody"><p className="kind">{p.kind}</p><h3>{p.title}</h3><p>{p.short}</p>
      <div className="chips">{p.labels.map((l) => <span key={l}>{l}</span>)}</div><span className="more">Read case study <ArrowUpRight size={15} /></span></div></a>)
}
function Work() {
  const [f, setF] = useState('All')
  const list = projects.filter((p) => f === 'All' || p.tags.includes(f))
  return (<section id="work" className="wrap sec"><p className="eyebrow">Selected work</p>
    <div className="two"><h2>Decisions backed by reasoning.</h2><p className="lead">Case studies and projects. Team work is labelled as team work, and proposals and estimates are labelled as such, not presented as shipped outcomes.</p></div>
    <div className="filters" role="group" aria-label="Filter projects">{filters.map((x) => <button key={x} aria-pressed={f === x} className={f === x ? 'on' : ''} onClick={() => setF(x)}>{x}</button>)}</div>
    <div className="grid">{list.map((p) => <Card key={p.slug} p={p} />)}</div></section>)
}

function Viewer({ p }) {
  const [i, setI] = useState(1)
  const n = p.pages
  const name = (k) => (n === 1 ? `${p.deck}-1` : `${p.deck}-${String(k).padStart(2, '0')}`)
  const move = useCallback((d) => setI((v) => Math.min(n, Math.max(1, v + d))), [n])
  useEffect(() => { const f = (e) => { if (e.key === 'ArrowRight') move(1); if (e.key === 'ArrowLeft') move(-1) }; addEventListener('keydown', f); return () => removeEventListener('keydown', f) }, [move])
  return (<div className="viewer"><div className={p.scroll ? 'vimg scroll' : 'vimg'}><img src={`/slides/${name(i)}.jpg`} alt={`${p.title}, slide ${i} of ${n}`} /></div>
    <div className="vbar">{n > 1 ? <><button onClick={() => move(-1)} disabled={i === 1} aria-label="Previous slide"><ChevronLeft /></button><span>Slide {i} / {n}</span><button onClick={() => move(1)} disabled={i === n} aria-label="Next slide"><ChevronRight /></button></> : <span>Original poster slide (scroll to read)</span>}
      <a className="btn ghost sm" href={p.pdf} download>Download deck PDF <Download size={14} /></a></div></div>)
}

function Case({ slug }) {
  const idx = projects.findIndex((p) => p.slug === slug)
  const p = projects[idx]
  useEffect(() => { scrollTo(0, 0); document.title = p ? `${p.title} | Prakhar Agrawal` : 'Not found | Prakhar Agrawal'; return () => { document.title = 'Prakhar Agrawal | Product Management Portfolio' } }, [slug])
  if (!p) return <div className="wrap sec"><h2>Project not found</h2><a className="btn dark" href="#">Back home</a></div>
  const prev = projects[(idx + projects.length - 1) % projects.length], next = projects[(idx + 1) % projects.length]
  return (<article className="wrap case"><a className="back" href="#work" onClick={(e) => { e.preventDefault(); goHome('work') }}>← All work</a>
    <p className="eyebrow">{p.kind}</p><h1 className="ctitle">{p.title}</h1><p className="lead">{p.short}</p>
    <dl className="meta"><div><dt>Context</dt><dd>{p.context}</dd></div>{p.team && <div><dt>Team</dt><dd>{p.team}</dd></div>}<div><dt>Focus</dt><dd>{p.labels.join(' · ')}</dd></div></dl>
    {p.links.length > 0 && <div className="row">{p.links.map(([l, h], k) => <Ext key={h} href={h} className={k ? 'btn ghost' : 'btn dark'}>{l}</Ext>)}</div>}
    {!p.noSlides && <Viewer p={p} />}
    <div className="body">{p.sections.map(([h, ps]) => <section key={h}><h2>{h}</h2>{ps.map((t) => <p key={t}>{t}</p>)}</section>)}</div>
    <div className="status">{p.status.map(([l, t]) => <div key={l}><b>{l}</b><p>{t}</p></div>)}</div>
    <nav className="pn" aria-label="Project navigation"><a href={`#/work/${prev.slug}`}><small>Previous</small>{prev.title}</a><a href={`#/work/${next.slug}`}><small>Next</small>{next.title}</a></nav></article>)
}

function Experience() {
  return (<><section id="experience" className="wrap sec"><p className="eyebrow">Experience</p>
    <div className="two"><h2>Quantitative work, iterated.</h2><div className="exp"><h3>{experience.org}</h3><p className="small">{experience.role} · {experience.dates}</p><ul>{experience.points.map((t) => <li key={t}>{t}</li>)}</ul></div></div></section>
    <section className="wrap sec tight"><p className="eyebrow">Skills</p><div className="skills">{Object.entries(skills).map(([k, v]) => <div key={k}><h3>{k}</h3><div className="chips">{v.map((s) => <span key={s}>{s}</span>)}</div></div>)}</div></section></>)
}
function Achievements() {
  return (<section id="achievements" className="wrap sec"><p className="eyebrow">Achievements</p><div className="ach">{achievements.map(([a, b, c]) => <div key={a}><h3>{a}</h3><p className="small">{b}</p><p>{c}</p></div>)}</div></section>)
}
function Contact() {
  return (<section id="contact" className="band contact"><div className="wrap"><p className="eyebrow">Contact</p><h2>Let's talk about product.</h2>
    <p className="lead">Open to product opportunities, collaborations, and interesting ideas. A short note with the role or problem is enough to start.</p>
    <div className="clist"><a href={`mailto:${person.email}`}><Mail size={18} />{person.email}</a><a href={person.phoneHref}><Phone size={18} />{person.phone}</a>
      <Ext href={person.linkedin} className="">LinkedIn</Ext><Ext href={person.github} className="">GitHub</Ext></div></div></section>)
}
function Footer() {
  return (<footer className="foot"><div className="wrap row"><span>© 2026 Prakhar Agrawal</span><Social /><a href={person.resume} download="Prakhar_Agrawal_Resume.pdf">Download resume <Download size={14} /></a><button onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}>Back to top ↑</button></div></footer>)
}

export default function App() {
  const slug = useRoute()
  const [active, setActive] = useState('home')
  useEffect(() => {
    if (slug) return
    const els = NAV.map(([id]) => document.getElementById(id)).filter(Boolean)
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    els.forEach((e) => io.observe(e)); return () => io.disconnect()
  }, [slug])
  return (<><a className="skip" href="#main">Skip to content</a><Nav active={slug ? 'work' : active} />
    <main id="main">{slug ? <Case slug={slug} /> : <><Hero /><About /><Work /><Experience /><Achievements /><Contact /></>}</main><Footer /></>)
}
