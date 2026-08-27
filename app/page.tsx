'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, Check, ChevronDown, Menu, X, Quote, Sparkles, ShieldCheck, Users, TrendingUp, Mail, Phone, MapPin } from 'lucide-react'

const services = [
  { title: '資產配置顧問', desc: '以專業視角梳理資產結構，為你打造穩健且具成長性的配置策略。', href: 'loan.html', icon: TrendingUp },
  { title: '精品藝廊', desc: '探索值得收藏的當代作品，讓生活品味與長期價值自然交會。', href: 'gallery.html', icon: Sparkles },
  { title: '運動產業投資', desc: '深入洞察產業脈動，連結機會與資源，掌握下一個成長曲線。', href: 'cpbl.html', icon: Users },
  { title: '娛樂事業顧問', desc: '從策略規劃到資源整合，提供專業、透明且高效的顧問服務。', href: 'baccarat.html', icon: ShieldCheck },
]

const testimonials = [
  { quote: '小莊國際不只是提供建議，而是真正理解我們的目標，陪伴我們做出每個重要決定。', name: '林先生', role: '企業家' },
  { quote: '專業、細緻又值得信賴。每次合作都能感受到團隊對品質的堅持。', name: '陳小姐', role: '品牌創辦人' },
  { quote: '他們讓複雜的事情變得清晰，並且總能在關鍵時刻提供最剛好的支持。', name: '王先生', role: '投資人' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <main className="site-shell">
      <a href="#main-content" className="skip-link">跳至主要內容</a>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container nav-inner">
          <a href="#home" className="brand" onClick={closeMenu} aria-label="小莊國際首頁"><img className="brand-logo" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%B0%8F%E8%8E%8ALOGO-2kGoegpwhEQLjiO1Hab3clrr16QwLK.png" alt="小莊國際 Logo" /><span>小莊<span className="brand-light">國際</span></span></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? '關閉選單' : '開啟選單'}>{menuOpen ? <X /> : <Menu />}</button>
          <nav className={`main-nav ${menuOpen ? 'open' : ''}`} aria-label="主選單">
            {[['#about','關於我們'],['#services','服務項目'],['#team','團隊介紹'],['#reviews','客戶評價']].map(([href,label]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
            <a href="#contact" className="nav-cta" onClick={closeMenu}>聯絡我們 <ArrowUpRight size={15} /></a>
          </nav>
          <button className="lang-button" aria-label="切換語言">中 <ChevronDown size={14} /></button>
        </div>
      </header>

      <section id="home" className="hero" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="container hero-content">
          <div className="eyebrow"><span className="eyebrow-line" /> EST. 2012 · TAIPEI</div>
          <h1 id="hero-title">讓每一個<br /><em>重要決定</em>，更有價值。</h1>
          <p className="hero-copy">小莊國際以專業、遠見與真誠，為你連結跨領域的資源與機會，開啟下一段成長。</p>
          <div className="hero-actions"><a className="button button-primary" href="#contact">開始對話 <ArrowUpRight size={17} /></a><a className="text-link" href="#about">認識小莊國際 <span>↘</span></a></div>
          <div className="hero-note"><span className="note-dot" /> 與值得信賴的人，一起成就非凡
          </div>
        </div>
        <div className="hero-side" aria-hidden="true"><span>SCROLL TO EXPLORE</span><div /></div>
      </section>

      <section id="about" className="section about-section"><div className="container split-layout"><div><p className="section-kicker">/ 關於我們</p><h2>眼光之外，<br /><span>更在乎你的方向。</span></h2></div><div className="about-copy"><p className="lead">我們相信，真正有價值的合作，始於理解。</p><p>小莊國際串連金融、藝術、運動與娛樂等多元領域，致力於提供超越期待的專業服務。我們不追逐短期風口，而是陪伴每一位夥伴，看見更長遠的可能。</p><a className="text-link" href="#services">探索我們的專業 <ArrowUpRight size={16} /></a></div></div></section>

      <section id="services" className="section services-section"><div className="container"><div className="section-heading"><div><p className="section-kicker">/ 服務項目</p><h2>專業，為你<br /><span>創造更多可能。</span></h2></div><p className="section-intro">跨域整合的專業能力，<br />成為你前進時最可靠的後盾。</p></div><div className="service-grid">{services.map(({ title, desc, href, icon: Icon }, i) => <a href={href} className="service-card" key={title}><div className="service-top"><span className="service-number">0{i + 1}</span><Icon size={24} strokeWidth={1.3} /></div><h3>{title}</h3><p>{desc}</p><span className="card-arrow"><ArrowUpRight size={18} /></span></a>)}</div></div></section>

      <section id="team" className="section team-section"><div className="container"><div className="section-heading"><div><p className="section-kicker">/ 團隊介紹</p><h2>一群相信<br /><span>可能性的人。</span></h2></div><p className="section-intro">多元背景，累積深厚經驗。<br />我們以團隊之力，為你看得更遠。</p></div><div className="team-list">{['小莊｜創辦人 & 執行長','Kevin｜策略顧問','Amy｜藝術事業總監'].map((name, i) => <div className="team-member" key={name}><div className="avatar">{['Z','K','A'][i]}</div><div><h3>{name}</h3><p>{['以全局視野，定義品牌的下一步。','連結資源，讓策略真正發生。','發掘作品與人之間的深度共鳴。'][i]}</p></div><ArrowUpRight size={19} /></div>)}</div></div></section>

      <section id="reviews" className="section reviews-section"><div className="container"><p className="section-kicker">/ 客戶評價</p><div className="reviews-heading"><h2>他們的信任，<br /><span>是我們最珍惜的事。</span></h2><Quote size={45} strokeWidth={1} /></div><div className="review-grid">{testimonials.map((item) => <article className="review-card" key={item.name}><Quote size={22} /><p>「{item.quote}」</p><div><strong>{item.name}</strong><span>{item.role}</span></div></article>)}</div></div></section>

      <section id="contact" className="contact-section"><div className="container contact-layout"><div><p className="section-kicker">/ 聯絡我們</p><h2>下一個重要決定，<br /><em>從這裡開始。</em></h2><p className="contact-copy">告訴我們你的想法，讓我們一起探索可能。</p><div className="contact-details"><p><Mail size={16} /> hello@zhuang.com</p><p><Phone size={16} /> +886 2 2345 6789</p><p><MapPin size={16} /> 台北市信義區</p></div></div><form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSent(true) }} aria-label="聯絡表單">{sent ? <div className="success-message"><Check size={30} /><h3>已收到你的訊息</h3><p>我們會盡快與你聯繫，謝謝。</p></div> : <><label>你的稱呼<input required name="name" placeholder="請輸入姓名" /></label><label>電子信箱<input required type="email" name="email" placeholder="name@example.com" /></label><label>想和我們聊聊<textarea required name="message" rows={4} placeholder="告訴我們你正在思考的事..." /></label><button className="button button-primary" type="submit">送出訊息 <ArrowUpRight size={17} /></button></>}</form></div></section>
      <footer className="site-footer"><div className="container footer-inner"><a href="#home" className="brand"><img className="brand-logo" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%B0%8F%E8%8E%8ALOGO-2kGoegpwhEQLjiO1Hab3clrr16QwLK.png" alt="小莊國際 Logo" /><span>小莊<span className="brand-light">國際</span></span></a><p>© 2024 小莊國際. All rights reserved.</p><a href="#home" className="back-top">回到頂端 ↑</a></div></footer>
    </main>
  )
}
