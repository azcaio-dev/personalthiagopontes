import { useEffect, useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck2,
  Check,
  ChevronDown,
  Dumbbell,
  Instagram,
  Menu,
  ShieldCheck,
  Target,
  TrendingUp,
  UserRound,
  X,
} from 'lucide-react'

const INSTAGRAM_URL = 'https://www.instagram.com/thiagopontespersonal/'
const CREF = '014681-G/PE'

const navLinks = [
  { text: 'Início', href: '#inicio' },
  { text: 'Sobre', href: '#sobre' },
  { text: 'Serviços', href: '#beneficios' },
  { text: 'Resultados', href: '#galeria' },
  { text: 'Contato', href: '#contato' },
]

const benefits = [
  {
    Icon: UserRound,
    title: 'Acompanhamento individual',
    description: 'Um treino pensado para o seu nível, sua rotina e o que você deseja conquistar.',
  },
  {
    Icon: TrendingUp,
    title: 'Foco em resultados',
    description: 'Estratégia, regularidade e evolução gradual para construir resultados consistentes.',
  },
  {
    Icon: ShieldCheck,
    title: 'Técnica e segurança',
    description: 'Atenção à execução dos movimentos e à progressão responsável dos exercícios.',
  },
  {
    Icon: CalendarCheck2,
    title: 'Treino que se adapta',
    description: 'Orientação direcionada para conciliar seus objetivos com a realidade do dia a dia.',
  },
]

const steps = [
  { title: 'Avaliação', description: 'Conversa sobre seu objetivo, histórico e rotina.' },
  { title: 'Planejamento', description: 'Definição de uma estratégia adequada ao seu perfil.' },
  { title: 'Acompanhamento', description: 'Treino, orientação e ajustes conforme sua evolução.' },
]

const gallery = [
  { image: '/images/thiago-pool.webp', alt: 'Thiago em uma piscina', label: 'DEDICAÇÃO' },
  { image: '/images/thiago-gym-black.webp', alt: 'Thiago na academia, usando camiseta preta', label: 'ROTINA DE TREINO' },
  { image: '/images/thiago-shirt.webp', alt: 'Thiago com a camiseta da marca Personal Trainer', label: 'IDENTIDADE' },
  { image: '/images/thiago-beach.webp', alt: 'Thiago ao ar livre na praia', label: 'ESTILO DE VIDA' },
  { image: '/images/thiago-gym-green.webp', alt: 'Thiago em uma academia com regata verde', label: 'CONSTÂNCIA' },
]

const principles = [
  { number: '01', title: 'Direção', description: 'Saiba por que você está treinando e qual é o próximo passo.' },
  { number: '02', title: 'Consistência', description: 'Faça da atividade física uma parte sustentável da sua rotina.' },
  { number: '03', title: 'Evolução', description: 'Acompanhe seu caminho e ajuste a estratégia ao longo do tempo.' },
]

const questions = [
  {
    question: 'Para quem é o acompanhamento?',
    answer: 'Pessoas com diferentes níveis de experiência podem conversar sobre o atendimento. O formato e a indicação devem ser definidos com Thiago, considerando seus objetivos e necessidades.',
  },
  {
    question: 'Os treinos são realmente personalizados?',
    answer: 'A proposta apresentada é de orientação individual. Entre em contato para confirmar como funciona a avaliação, a montagem dos treinos e os ajustes ao longo do acompanhamento.',
  },
  {
    question: 'Você atende presencialmente ou online?',
    answer: 'Os formatos e locais disponíveis ainda precisam ser confirmados diretamente com Thiago. O perfil informa vínculo com a Cia do Corpo Concept.',
  },
  {
    question: 'Com que frequência os treinos são ajustados?',
    answer: 'A periodicidade deve ser combinada com o profissional, de acordo com a necessidade de cada aluno e o modelo de serviço contratado.',
  },
  {
    question: 'Como agendar uma avaliação?',
    answer: 'Use um dos botões desta página para abrir o Instagram oficial @thiagopontespersonal e solicitar informações sobre avaliação, horários e disponibilidade.',
  },
]

function Brand({ compact = false }) {
  return (
    <a className={`brand ${compact ? 'brand--compact' : ''}`} href="#inicio" aria-label="Thiago Pontes — início">
      <span className="brand__symbol">TP</span>
      <span className="brand__divider" />
      <span className="brand__text">THIAGO PONTES <small>PERSONAL TRAINER</small></span>
    </a>
  )
}

function ContactLink({ children, className = '', icon: Icon = ArrowUpRight }) {
  return (
    <a
      className={`btn ${className}`}
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={typeof children === 'string' ? `${children} — abrir Instagram` : 'Entrar em contato pelo Instagram'}
    >
      {children}
      <Icon aria-hidden="true" size={19} strokeWidth={2.25} />
    </a>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function escapeClose(event) {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', escapeClose)
    return () => window.removeEventListener('keydown', escapeClose)
  }, [])

  return (
    <header className="site-header">
      <div className="container header__inner">
        <Brand />
        <nav id="main-navigation" className={`navigation ${menuOpen ? 'navigation--open' : ''}`} aria-label="Navegação principal">
          {navLinks.map((item, index) => (
            <a
              className={index === 0 ? 'navigation__link navigation__link--active' : 'navigation__link'}
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.text}
            </a>
          ))}
          <ContactLink className="btn--primary navigation__mobile-cta" icon={CalendarCheck2}>Agendar avaliação</ContactLink>
        </nav>
        <ContactLink className="btn--primary header__cta" icon={CalendarCheck2}>Agendar avaliação</ContactLink>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-controls="main-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero__backdrop" />
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="section-mark" />
          <p className="hero__eyebrow">PERSONAL TRAINER • EDUCAÇÃO FÍSICA</p>
          <h1 id="hero-title">
            Treinamento personalizado para transformar seu corpo com{' '}
            <span>estratégia, constância e resultado.</span>
          </h1>
          <p className="hero__description">
            Acompanhamento individual, método e direção para você evoluir com segurança, performance e qualidade de vida.
          </p>
          <div className="hero__buttons">
            <ContactLink className="btn--primary" icon={ArrowRight}>Agendar avaliação</ContactLink>
            <ContactLink className="btn--outline" icon={Instagram}>Falar no Instagram</ContactLink>
          </div>
          <div className="hero__perks" aria-label="Diferenciais">
            <span><UserRound size={19} /> Atendimento personalizado</span>
            <span><Dumbbell size={19} /> Treinos individualizados</span>
            <span><TrendingUp size={19} /> Foco em evolução</span>
          </div>
        </div>
        <div className="hero__visual" id="sobre">
          <div className="hero__signature">
            <strong>Thiago Pontes</strong>
            <span>Personal Trainer</span>
            <small>CREF {CREF}</small>
          </div>
        </div>
      </div>
      <div className="hero__bottom-edge" />
    </section>
  )
}

function Benefits() {
  return (
    <section className="section benefits" id="beneficios" aria-labelledby="benefits-title">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="section-mark" />
            <p className="kicker">O QUE FAZ A DIFERENÇA</p>
            <h2 id="benefits-title">Por que treinar com Thiago?</h2>
          </div>
          <p>Treinar melhor começa com objetivos claros e orientação adequada ao seu momento.</p>
        </div>
        <div className="benefits__grid">
          {benefits.map(({ Icon, title, description }) => (
            <article className="benefit-card" key={title}>
              <Icon aria-hidden="true" size={35} strokeWidth={1.7} />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Steps() {
  return (
    <section className="steps" id="como-funciona" aria-labelledby="steps-title">
      <div className="container">
        <div className="section-heading section-heading--stacked">
          <span className="section-mark" />
          <p className="kicker">UM CAMINHO CLARO PARA COMEÇAR</p>
          <h2 id="steps-title">Como funciona</h2>
          <p>Conheça as etapas que podem orientar sua jornada de treinamento.</p>
        </div>
        <div className="steps__grid">
          {steps.map((step, index) => (
            <div className="step" key={step.title}>
              <span className="step__number">{index + 1}</span>
              <div className="step__copy">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {index !== steps.length - 1 && <span className="step__line" aria-hidden="true" />}
            </div>
          ))}
        </div>
        <p className="steps__disclaimer">* Detalhes do atendimento, disponibilidade e formato devem ser confirmados diretamente com o profissional.</p>
      </div>
    </section>
  )
}

function Gallery() {
  return (
    <section className="section gallery" id="galeria" aria-labelledby="gallery-title">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="section-mark" />
            <p className="kicker">ROTINA • TREINO • ESTILO DE VIDA</p>
            <h2 id="gallery-title">Conheça um pouco do meu trabalho</h2>
          </div>
          <a className="text-link" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            Ver Instagram <ArrowUpRight size={19} />
          </a>
        </div>
        <div className="gallery__grid">
          {gallery.map((item) => (
            <figure className="gallery__item" key={item.image}>
              <img src={item.image} alt={item.alt} loading="lazy" />
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function Philosophy() {
  return (
    <section className="philosophy" aria-labelledby="philosophy-title">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="section-mark" />
            <p className="kicker">CONSTRUINDO SUA MELHOR VERSÃO</p>
            <h2 id="philosophy-title">Resultado é consequência do processo.</h2>
          </div>
          <p>Uma jornada de treino começa com decisões simples, praticadas com intenção.</p>
        </div>
        <div className="philosophy__grid">
          {principles.map((item) => (
            <article className="philosophy-card" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <Check size={18} aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const [opened, setOpened] = useState(0)
  return (
    <section className="section faq" id="perguntas" aria-labelledby="faq-title">
      <div className="container">
        <div className="section-heading section-heading--simple">
          <div>
            <span className="section-mark" />
            <h2 id="faq-title">Perguntas frequentes</h2>
          </div>
        </div>
        <div className="faq__grid">
          <div className="faq__questions">
            {questions.map(({ question, answer }, index) => (
              <div className={`faq-item ${opened === index ? 'faq-item--open' : ''}`} key={question}>
                <h3>
                  <button type="button" id={`faq-trigger-${index}`} aria-controls={`faq-answer-${index}`} aria-expanded={opened === index} onClick={() => setOpened(opened === index ? -1 : index)}>
                    <span>{question}</span>
                    <ChevronDown aria-hidden="true" size={19} />
                  </button>
                </h3>
                {opened === index && <p id={`faq-answer-${index}`} role="region" aria-labelledby={`faq-trigger-${index}`}>{answer}</p>}
              </div>
            ))}
          </div>
          <div className="faq__photo" role="img" aria-label="Halteres em uma academia escura" />
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact" id="contato" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact__panel">
          <div className="contact__instagram-icon"><Instagram size={38} strokeWidth={1.6} /></div>
          <div className="contact__copy">
            <h2 id="contact-title">Vamos conversar sobre o seu objetivo?</h2>
            <p>Tire suas dúvidas, conheça as possibilidades de acompanhamento e converse com o Thiago diretamente pelo Instagram.</p>
          </div>
          <ContactLink className="btn--primary" icon={ArrowRight}>Falar no Instagram</ContactLink>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <Brand compact />
        <p>CREF {CREF}<small>© {new Date().getFullYear()} Thiago Pontes. Todos os direitos reservados.</small></p>
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram do Thiago Pontes" className="footer__social"><Instagram size={22} /></a>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Steps />
        <Gallery />
        <Philosophy />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <div className="mobile-contact"><ContactLink className="btn--primary" icon={ArrowRight}>Falar com Thiago</ContactLink></div>
    </>
  )
}
