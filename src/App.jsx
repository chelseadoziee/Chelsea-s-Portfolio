import { useEffect, useState } from 'react'

import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  BriefcaseBusiness,
  Clock3,
  Menu,
  X,
  ChevronUp,
} from 'lucide-react'

const projects = [
  {
    number: '01',
    type: 'AI / HEALTH / NLP',
    title: 'HerSignal',
    subtitle: 'Intelligent Conversational System for PCOS Awareness',
    description:
      'An intelligent conversational system that helps women make sense of complex PCOS symptoms by combining interactive conversation, guided symptom analysis and explainable visual insights.',
    technologies: [
      'Python',
      'Flask',
      'NLP',
      'Sentence Transformers',
      'Data Analysis',
      'Visualisation',
    ],
    overview:
      'For my Final Year Project, I wanted to explore a topic that I had a genuine personal interest in. I chose PCOS because of how complex and interconnected its symptoms can be, and wanted to create a system that could help women understand the patterns behind their symptoms rather than simply looking at them individually.',
    focus:
      'HerSignal initially began as a chatbot designed to answer general PCOS questions and help users understand common terminology. However, once I completed the initial prototype, I felt that something was missing. I began questioning whether women actually living with PCOS would find the application useful beyond simply receiving information. To explore this, I conducted a questionnaire with 28 responses from women, using their experiences to reassess the direction of the project. The findings highlighted a recurring difficulty around symptom overlap and understanding the patterns connecting different symptoms. This became the turning point for HerSignal, evolving it from a conventional FAQ chatbot into a more comprehensive conversational system incorporating a guided symptom checker, structured symptom scoring and clearer visual results.',
    outcome:
      'The final system brought conversation, symptom exploration and personalised educational results together in one application. Five participants also completed usability testing, resulting in an average SUS score of 74.5. The project showed how research and user feedback could directly shape the development of a technology solution.',
    github: 'https://github.com/chelseadoziee/HerSignal.git',
    visual: 'health',
    featured: true,
  },

  {
    number: '02',
    type: 'AI / FORECASTING / BUSINESS',
    title: 'Salpha Predict',
    subtitle: 'Sales Forecasting & Decision Support for Salpha Energy',
    description:
      'An AI-powered forecasting system designed to turn historical sales data into clearer insights about future sales and business decisions.',
    technologies: [
      'Python',
      'Streamlit',
      'Pandas',
      'Scikit-learn',
      'Forecasting',
      'Data Analysis',
    ],
    overview:
      'Salpha Predict began as a personal project driven by my curiosity about how AI and predictive technology could be used to understand what might happen next in a real business. After graduating, I decided to explore the idea using sales data from my sister’s solar company. What started as a personal experiment gradually became more structured as I explored different forecasting approaches and discussed the system’s potential with her. This eventually developed into a forecasting and decision-support system designed to turn historical sales data into clearer insights about future sales and business decisions.',
    focus:
      'I developed the idea of Smart Forecast, allowing the system to compare different forecasting approaches and select the most suitable one for an individual product rather than expecting the user to understand which model to choose. I also focused on making the forecasting process easier to understand through simple terminology and clear outputs.',
    outcome:
      'The result was a system that connects historical sales analysis with future forecasting and business-focused insights. It demonstrates how data and predictive technology can be turned into something more practical and understandable for everyday decision-making.',
    github: 'https://github.com/chelseadoziee/SalphaPredict.git',
    visual: 'forecast',
  },

  {
    number: '03',
    type: 'SOFTWARE ENGINEERING / REST',
    title: 'CycleNest',
    subtitle: 'RESTful Service Orchestration System',
    description:
      'A RESTful backend for a peer-to-peer item-rental marketplace, allowing users to search for available items, submit and manage rental requests, and access location-based distance information. The project was built to explore how APIs, cloud-based data storage and external services can work together within a service-oriented system.',
    technologies: [
      'Java',
      'REST APIs',
      'MongoDB',
      'JAX-RS / Jersey',
      'OSRM',
      'JMeter',
    ],
    overview:
      'CycleNest was developed as a peer-to-peer item-rental marketplace, with the backend responsible for handling key rental activities such as finding items, requesting rentals and managing cancellations.',
    focus:
      'I worked on the Java REST backend, including service communication, MongoDB data storage, request handling and validation. The system also connected with an external routing service and was tested as part of the project’s quality-of-service work.',
    outcome:
      'The project gave me practical experience building a service-oriented backend and working across APIs, databases, external services and system testing within one application.',
    github: 'https://olympus.ntu.ac.uk/T0407477/CycleNest_2.git',
    visual: 'cloud',
  },

  {
    number: '04',
    type: 'AI / COMPUTER VISION / NLP',
    title: 'BloomBud',
    subtitle: 'Intelligent Multi-Modal AI Chatbot',
    description:
      'A compact AI project exploring how conversation, reasoning and image recognition could be brought together within one interactive application.',
    technologies: [
      'Python',
      'AIML',
      'NLTK',
      'TensorFlow',
      'Keras',
      'CNN',
    ],
    overview:
      'BloomBud was created as an exploration of how different areas of artificial intelligence could work together within one application, rather than treating each technique as a separate exercise.',
    focus:
      'The project combined a conversational chatbot with natural-language processing, logical reasoning and image recognition. This allowed users to interact with the system through conversation while also exploring flower classification through images.',
    outcome:
      'BloomBud gave me practical experience combining several AI approaches within one project and helped me understand how different intelligent systems can work together to create a more interactive user experience.',
    github: null,
    visual: 'bloom',
  },

  {
    number: '05',
    type: 'UX / PRODUCT / SYSTEM DESIGN',
    title: 'FFsmart',
    subtitle: 'Smart Inventory & Food Management System',
    description:
      'A collaborative smart-fridge concept designed around restaurant inventory management, food expiry and everyday staff workflows.',
    technologies: [
      'Requirements Analysis',
      'HCI',
      'MoSCoW',
      'Use Cases',
      'UML',
      'Interface Design',
    ],
    overview:
      'FFsmart explored how a smart inventory system could help restaurant staff manage stock, monitor food and keep track of expiry-related information more effectively.',
    focus:
      'The project involved understanding stakeholder requirements, mapping workflows and developing the proposed interface. My strongest individual contribution focused on the Interfaces section, applying established usability principles to shape how the system would work for its users.',
    outcome:
      'The project gave me experience translating business requirements and user needs into a structured digital product concept while working collaboratively within a larger team.',
    github:
      'https://olympus.ntu.ac.uk/T0407477/advanced-analysis-group.git',
    visual: 'product',
  },
]

function BrandMark({ type }) {
  if (type === 'github') {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-4 w-4 fill-current"
      >
        <path d="M12 .7A11.3 11.3 0 0 0 8.42 22.75c.57.1.78-.25.78-.55v-2.17c-3.18.69-3.85-1.34-3.85-1.34-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.73-1.54-2.54-.29-5.21-1.27-5.21-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.12 1.17a10.82 10.82 0 0 1 5.68 0c2.16-1.48 3.11-1.17 3.11-1.17.62 1.58.23 2.75.12 3.04.73.8 1.17 1.82 1.17 3.07 0 4.4-2.68 5.36-5.23 5.64.41.36.78 1.07.78 2.16v3.2c0 .3.2.65.79.54A11.3 11.3 0 0 0 12 .7Z" />
      </svg>
    )
  }

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4 fill-current"
    >
      <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.67H9.35V8.99h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.59 0 4.25 2.36 4.25 5.43v6.32ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.57V8.99H3.56v11.46ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.21 24 24 .77 24 1.72v20.56c0 .95-.79 1.72-1.77 1.72Z" />
    </svg>
  )
}

function ProjectVisual({ type }) {
  if (type === 'health') {
    return (
      <div className="relative h-full min-h-[280px] overflow-hidden rounded-[2rem] bg-[#f2e9e9]">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[28px] border-white/70" />
        <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full border-[34px] border-[#d9c2c2]/70" />

        <div className="absolute left-8 top-8 text-[11px] font-semibold tracking-[0.2em] text-[#806565]">
          HERSIGNAL
        </div>

        <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2">
          <div className="mb-4 flex items-end gap-2">
            <div className="h-10 w-10 rounded-full bg-[#FFFDFC]/80" />
            <div className="h-16 w-16 rounded-full bg-[#c99f9f]/70" />
            <div className="h-24 w-24 rounded-full bg-[#a87575]/80" />
            <div className="h-14 w-14 rounded-full bg-[#FFFDFC]/80" />
          </div>

          <div className="rounded-2xl border border-white/70 bg-[#FFFDFC]/65 p-5 backdrop-blur-sm">
            <div className="mb-3 h-2 w-24 rounded-full bg-[#8c6969]/60" />
            <div className="mb-2 h-2 w-full rounded-full bg-[#c8b0b0]/60" />
            <div className="h-2 w-4/5 rounded-full bg-[#c8b0b0]/60" />
          </div>
        </div>
      </div>
    )
  }

  if (type === 'forecast') {
    return (
      <div className="relative h-full min-h-[250px] overflow-hidden rounded-[2rem] bg-[#e8edf3]">
        <div className="absolute left-8 top-8 text-[11px] font-semibold tracking-[0.2em] text-[#526273]">
          SALPHA PREDICT
        </div>

        <div className="absolute inset-x-8 bottom-8 top-20">
          <div className="absolute inset-0 opacity-50">
            <div className="h-full border-l border-b border-[#9ba9b8]" />
            <div className="absolute left-0 right-0 top-1/4 border-t border-[#b6c0ca]" />
            <div className="absolute left-0 right-0 top-2/4 border-t border-[#b6c0ca]" />
            <div className="absolute left-0 right-0 top-3/4 border-t border-[#b6c0ca]" />
          </div>

          <svg
            viewBox="0 0 400 180"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
          >
            <path
              d="M0 145 C40 125 60 150 95 105 S150 95 180 112 S230 65 265 88 S320 35 400 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              className="text-[#55697c]"
            />

            <path
              d="M0 145 C40 125 60 150 95 105 S150 95 180 112 S230 65 265 88 S320 35 400 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="10"
              opacity=".08"
              className="text-[#55697c]"
            />
          </svg>

          <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[9px] font-medium tracking-wider text-[#718091]">
            <span>HISTORICAL</span>
            <span>FORECAST</span>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'cloud') {
    return (
      <div className="relative h-full min-h-[250px] overflow-hidden rounded-[2rem] bg-[#e9edf0]">
        <div className="absolute left-8 top-8 text-[11px] font-semibold tracking-[0.2em] text-[#56636d]">
          CYCLENEST
        </div>

        <div className="absolute left-1/2 top-1/2 w-[75%] -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center justify-between">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#9ca8b0] bg-[#FFFDFC]/70 text-[10px] font-bold text-[#53616b]">
              API
            </div>

            <div className="mx-3 h-px flex-1 bg-[#8d9aa3]" />

            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#8d9aa3] bg-[#FFFDFC]/70">
              <div className="h-9 w-9 rounded-full border-[6px] border-[#74838e]" />
            </div>

            <div className="mx-3 h-px flex-1 bg-[#8d9aa3]" />

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#9ca8b0] bg-[#FFFDFC]/70 text-[10px] font-bold text-[#53616b]">
              DB
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-2">
            <div className="h-1.5 rounded-full bg-[#aeb8bf]" />
            <div className="h-1.5 rounded-full bg-[#8f9da6]" />
            <div className="h-1.5 rounded-full bg-[#c1c8cd]" />
          </div>
        </div>
      </div>
    )
  }

  if (type === 'bloom') {
    return (
      <div className="relative h-full min-h-[250px] overflow-hidden rounded-[2rem] bg-[#e9eee6]">
        <div className="absolute left-8 top-8 text-[11px] font-semibold tracking-[0.2em] text-[#5c6958]">
          BLOOMBUD
        </div>

        <div className="absolute bottom-0 left-1/2 h-[72%] w-px -translate-x-1/2 bg-[#71806d]" />

        <div className="absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2">
          <div className="relative h-32 w-32">
            <div className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#bd9d68]" />
            <div className="absolute left-1/2 top-0 h-20 w-12 -translate-x-1/2 rounded-full bg-[#b7c5ae]" />
            <div className="absolute bottom-0 left-1/2 h-20 w-12 -translate-x-1/2 rotate-180 rounded-full bg-[#aabca0]" />
            <div className="absolute left-0 top-1/2 h-12 w-20 -translate-y-1/2 -rotate-45 rounded-full bg-[#c3cfba]" />
            <div className="absolute right-0 top-1/2 h-12 w-20 -translate-y-1/2 rotate-45 rounded-full bg-[#a9bca0]" />
          </div>
        </div>

        <div className="absolute bottom-7 left-8 right-8 flex items-center justify-between text-[9px] font-semibold tracking-[0.16em] text-[#667362]">
          <span>NLP</span>
          <span>VISION</span>
          <span>REASONING</span>
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-full min-h-[250px] overflow-hidden rounded-[2rem] bg-[#eeeae3]">
      <div className="absolute left-8 top-8 text-[11px] font-semibold tracking-[0.2em] text-[#6a6257]">
        FFSMART
      </div>

      <div className="absolute left-1/2 top-1/2 w-[76%] -translate-x-1/2 -translate-y-1/2">
        <div className="rounded-3xl border border-[#aaa399] bg-[#FFFDFC]/60 p-4">
          <div className="mb-4 flex items-center justify-between">
            <div className="h-3 w-20 rounded-full bg-[#9b9388]" />
            <div className="h-7 w-7 rounded-lg border border-[#9b9388]" />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="h-20 rounded-2xl border border-[#b4ada4] bg-[#f8f6f2]" />
            <div className="h-20 rounded-2xl border border-[#b4ada4] bg-[#f8f6f2]" />
            <div className="h-20 rounded-2xl border border-[#b4ada4] bg-[#f8f6f2]" />
          </div>

          <div className="mt-4 h-2 w-2/3 rounded-full bg-[#c2bbb1]" />
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false)

  return (
    <article
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect()

        event.currentTarget.style.setProperty(
          '--mx',
          `${event.clientX - rect.left}px`,
        )

        event.currentTarget.style.setProperty(
          '--my',
          `${event.clientY - rect.top}px`,
        )
      }}
      className={`project-card group overflow-hidden rounded-[2rem] border border-[#E6D9D3] bg-[#FFFDFC] transition-all duration-300 hover:border-[#C9B4C8] ${
        project.featured ? 'lg:col-span-2' : ''
      }`}
    >
      <div
        className={`grid gap-0 ${
          project.featured
            ? 'lg:grid-cols-[0.9fr_1.1fr]'
            : 'lg:grid-cols-[0.78fr_1.22fr]'
        }`}
      >
        <ProjectVisual type={project.visual} />

        <div className="flex flex-col justify-between p-7 sm:p-9">
          <div>
            <div className="mb-5 flex items-start justify-between gap-4">
              <span className="text-[11px] font-bold tracking-[0.18em] text-[#8B788A]">
                {project.number}
              </span>

              <span className="text-right text-[10px] font-bold tracking-[0.14em] text-[#8B788A]">
                {project.type}
              </span>
            </div>

            <h3 className="font-display text-3xl font-semibold tracking-[-0.03em] text-[#241526] sm:text-4xl">
              {project.title}
            </h3>

            <p className="mt-2 text-sm font-medium text-[#6D5D6F]">
              {project.subtitle}
            </p>

            <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[#625667]">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-[#E6D9D3] bg-[#FBF5F8] px-3 py-1.5 text-[11px] font-medium text-[#625667]"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="inline-flex items-center gap-2 rounded-full bg-[#70456F] px-5 py-3 text-xs font-semibold text-white transition-transform hover:-translate-y-0.5"
              aria-expanded={open}
            >
              {open ? 'Close case study' : 'Read case study'}

              <ArrowDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  open ? 'rotate-180' : ''
                }`}
              />
            </button>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#E6D9D3] px-4 py-3 text-xs font-semibold text-[#3B3040] transition-colors hover:bg-[#F2E9EE]"
              >
                <BrandMark type="github" />
                GitHub
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>

      {open && (
        <div className="border-t border-[#E8DED9] bg-[#FBF5F8]">
          <div className="divide-y divide-[#E8DED9]">
            <div className="px-7 py-7 sm:px-10">
              <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#927F91]">
                Overview
              </div>

              <p className="max-w-5xl text-[15px] leading-7 text-[#544658]">
                {project.overview}
              </p>
            </div>

            <div className="px-7 py-7 sm:px-10">
              <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#927F91]">
                What I worked on
              </div>

              <p className="max-w-5xl text-[15px] leading-7 text-[#544658]">
                {project.focus}
              </p>
            </div>

            <div className="px-7 py-7 sm:px-10">
              <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#927F91]">
                Outcome
              </div>

              <p className="max-w-5xl text-[15px] leading-7 text-[#544658]">
                {project.outcome}
              </p>
            </div>
          </div>
        </div>
      )}
    </article>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showTopButton, setShowTopButton] = useState(false)

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    document.documentElement.classList.add('reveal-ready')

    const sections = Array.from(
      document.querySelectorAll('main section[id]'),
    )

    const navLinks = Array.from(
      document.querySelectorAll('[data-nav-link]'),
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')

            navLinks.forEach((link) => {
              link.classList.toggle(
                'nav-active',
                link.getAttribute('href') === `#${entry.target.id}`,
              )
            })
          }
        })
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0.01,
      },
    )

    sections.forEach((section) => {
      section.classList.add('reveal-section')
      observer.observe(section)
    })

    const handleScroll = () => {
      setShowTopButton(window.scrollY > 700)

      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight

      const progress =
        scrollable > 0 ? window.scrollY / scrollable : 0

      document.documentElement.style.setProperty(
        '--scroll-progress',
        `${Math.min(Math.max(progress, 0), 1) * 100}%`,
      )
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    window.addEventListener('keydown', handleKeyDown)

    handleScroll()

    return () => {
      observer.disconnect()

      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('keydown', handleKeyDown)

      document.documentElement.classList.remove('reveal-ready')
      document.documentElement.style.removeProperty('--scroll-progress')
      document.documentElement.style.removeProperty('scroll-behavior')
    }
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-[#FAF7F3] text-[#241526]">
      <style>{`
        html {
          --scroll-progress: 0%;
        }

        html::before {
          content: '';
          position: fixed;
          z-index: 100;
          top: 0;
          left: 0;
          width: var(--scroll-progress);
          height: 2px;
          background: #70456F;
          pointer-events: none;
          transition: width 80ms linear;
        }

        .reveal-ready .reveal-section {
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 800ms ease,
            transform 800ms ease;
        }

        .reveal-ready .reveal-section.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .project-card {
          position: relative;
          isolation: isolate;
        }

        .project-card::before {
          content: '';
          position: absolute;
          z-index: -1;
          width: 240px;
          height: 240px;
          left: calc(var(--mx, 50%) - 120px);
          top: calc(var(--my, 50%) - 120px);
          border-radius: 999px;
          background: radial-gradient(
            circle,
            rgba(112, 69, 111, 0.12),
            transparent 68%
          );
          opacity: 0;
          transition: opacity 250ms ease;
          pointer-events: none;
        }

        @media (hover: hover) and (pointer: fine) {
          .project-card:hover::before {
            opacity: 1;
          }

          .project-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 24px 55px rgba(36, 21, 38, 0.08);
          }

          .interactive-link {
            transition:
              transform 180ms ease,
              color 180ms ease;
          }

          .interactive-link:hover {
            transform: translateX(4px);
          }
        }

        .nav-link {
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -7px;
          width: 0;
          height: 1px;
          background: #70456F;
          transition: width 200ms ease;
        }

        .nav-active {
          color: #70456F !important;
        }

        .nav-active::after {
          width: 100% !important;
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto !important;
          }

          .reveal-ready .reveal-section,
          .reveal-ready .reveal-section.is-visible {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .project-card,
          .interactive-link {
            transition: none !important;
          }
        }
      `}</style>

      <header className="sticky top-0 z-50 border-b border-[#E8DED9]/80 bg-[#FAF7F3]/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12 xl:px-16">
          <a
            href="#top"
            className="font-display text-lg font-semibold tracking-[-0.03em]"
          >
            Chelsea Dozie
          </a>

          <div className="hidden items-center gap-8 text-xs font-semibold text-[#625667] md:flex">
            <a
              data-nav-link
              href="#about"
              className="nav-link transition-colors hover:text-[#241526]"
            >
              About
            </a>

            <a
              data-nav-link
              href="#skills"
              className="nav-link transition-colors hover:text-[#241526]"
            >
              Skills
            </a>

            <a
              data-nav-link
              href="#experience"
              className="nav-link transition-colors hover:text-[#241526]"
            >
              Experience
            </a>

            <a
              data-nav-link
              href="#projects"
              className="nav-link transition-colors hover:text-[#241526]"
            >
              Projects
            </a>

            <a
              data-nav-link
              href="#why-me"
              className="nav-link transition-colors hover:text-[#241526]"
            >
              Why Me
            </a>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-full bg-[#70456F] px-4 py-2.5 text-xs font-semibold text-white transition-transform hover:-translate-y-0.5 sm:inline-flex"
            >
              Let's talk
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E6D9D3] bg-[#FFFDFC] text-[#241526] md:hidden"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        <div
          className={`border-t border-[#E8DED9] bg-[#FFFDFC] px-6 py-5 md:hidden ${
            menuOpen ? 'block' : 'hidden'
          }`}
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {[
              ['About', '#about'],
              ['Skills', '#skills'],
              ['Experience', '#experience'],
              ['Projects', '#projects'],
              ['Why Me', '#why-me'],
              ['Contact', '#contact'],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-[#625667] transition-colors hover:bg-[#F2E9EE] hover:text-[#70456F]"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <main id="top">
        <section className="relative mx-auto max-w-7xl overflow-hidden px-6 pb-24 pt-20 sm:px-8 lg:px-12 lg:pb-32 lg:pt-28 xl:px-16">
          <div className="pointer-events-none absolute -right-16 top-16 h-48 w-48 rounded-full border border-[#C8B4D6]/50" />

          <div className="pointer-events-none absolute right-8 top-24 h-3 w-3 rounded-full bg-[#C9A47E] shadow-[0_0_0_10px_rgba(201,164,126,.10)]" />

          <div className="pointer-events-none absolute bottom-16 left-1/2 h-px w-28 bg-gradient-to-r from-transparent via-[#C8B4D6] to-transparent" />

          <div className="relative grid items-end gap-12 lg:grid-cols-[1.35fr_0.65fr]">
            <div>
              <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.22em] text-[#7A687A]">
                Computer Science · Information Systems · AI · Data Analysis
              </p>

              <h1 className="max-w-5xl font-display text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
                Chelsea
                <span className="text-[#70456F]"> Dozie</span>
              </h1>
            </div>

            <div className="max-w-sm lg:justify-self-end">
              <p className="text-[15px] leading-7 text-[#625667]">
                Computer Science graduate interested in the space where
                technology and business needs meet.
              </p>

              <a
                href="#projects"
                className="interactive-link mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#241526]"
              >
                Explore my work
                <ArrowDown className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="mt-16 border-t border-[#E6D9D3] pt-5">
            <div className="flex flex-wrap items-center justify-between gap-4 text-[10px] font-bold uppercase tracking-[0.17em] text-[#8B788A]">
              <span>Python</span>
              <span>Java</span>
              <span>AI / ML</span>
              <span>REST APIs</span>
              <span>Data</span>
              <span>UX / Systems</span>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="border-t border-[#E8DED9] bg-[#FFFDFC]"
        >
          <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28 xl:px-16">
            <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div className="relative flex justify-center lg:justify-start">
                <div className="relative w-full max-w-md">
                  <div className="absolute inset-x-4 bottom-4 top-10 rounded-[3rem] bg-[#F2E9EE]" />

                  <div className="absolute -left-4 top-16 h-24 w-24 rounded-full border border-[#C9A47E]/50" />

                  <div className="absolute -right-2 top-8 h-14 w-14 rounded-full bg-[#C8B4D6]/60" />

                  <img
                    src="/chelsea-cutout.png"
                    alt="Chelsea"
                    className="relative z-10 w-full object-contain"
                  />
                </div>
              </div>

              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#70456F]">
                  About Me
                </p>

                <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-[#241526] sm:text-5xl">
                  Technology with a business mindset.
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-[#625667]">
                  I’m a Computer Science graduate with an interest in
                  technology, AI and the ways digital solutions can improve
                  how people and businesses work.
                </p>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-[#625667]">
                  My experience spans software development, artificial
                  intelligence, data analysis, systems design and user-focused
                  problem solving. I enjoy taking complex ideas and turning
                  them into practical, understandable solutions.
                </p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div className="rounded-2xl bg-[#F2E9EE] p-5">
                    <p className="text-sm font-semibold text-[#241526]">
                      Education
                    </p>

                    <p className="mt-1 text-sm leading-6 text-[#625667]">
                      BSc (Hons) Computer Science
                      <br />
                      Nottingham Trent University
                      <br />
                      Upper Second-Class Honours (2:1)
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#F2E9EE] p-5">
                    <p className="text-sm font-semibold text-[#241526]">
                      Interests
                    </p>

                    <p className="mt-1 text-sm leading-6 text-[#625667]">
                      AI &amp; emerging technology
                      <br />
                      Software &amp; digital products
                      <br />
                      Data &amp; business technology
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="border-y border-[#E6D9D3] bg-[#FAF7F3]"
        >
          <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28 xl:px-16">
            <div className="mb-12">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#70456F]">
                Skills
              </p>

              <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">
                What I work with
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Artificial Intelligence & Machine Learning',
                  skills: [
                    'NLP',
                    'Machine Learning',
                    'Computer Vision',
                    'Predictive Modelling',
                    'AI Prototyping',
                  ],
                },
                {
                  title: 'Data & Analytics',
                  skills: [
                    'Python',
                    'Pandas',
                    'NumPy',
                    'Data Analysis',
                    'Data Visualisation',
                    'Forecasting',
                  ],
                },
                {
                  title: 'Software Development',
                  skills: [
                    'Java',
                    'Python',
                    'JavaScript',
                    'HTML / CSS',
                    'Flask',
                    'REST APIs',
                  ],
                },
                {
                  title: 'Databases & Systems',
                  skills: [
                    'SQL',
                    'MongoDB',
                    'SQLite',
                    'Service-Oriented Architecture',
                    'Systems Analysis',
                  ],
                },
                {
                  title: 'Tools & Platforms',
                  skills: [
                    'Git / GitHub',
                    'Streamlit',
                    'JMeter',
                    'Postman',
                    'Microsoft 365',
                  ],
                },
                {
                  title: 'UX / Product',
                  skills: [
                    'Requirements Analysis',
                    'HCI',
                    'UML',
                    'User-Centred Design',
                    'Interface Design',
                  ],
                },
              ].map((group) => (
                <div
                  key={group.title}
                  className="rounded-[1.5rem] border border-[#E6D9D3] bg-[#FFFDFC] p-6 sm:p-7"
                >
                  <h3 className="font-display text-xl font-semibold tracking-[-0.025em] text-[#241526]">
                    {group.title}
                  </h3>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[#E6D9D3] bg-[#FBF5F8] px-3 py-1.5 text-[11px] font-medium text-[#625667]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="border-y border-[#E6D9D3] bg-[#FFFDFC]"
        >
          <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28 xl:px-16">
            <div className="grid gap-12 lg:grid-cols-[0.25fr_0.75fr]">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8B788A]">
                  Experience
                </p>

                <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                  Where I've worked
                </h2>
              </div>

              <div className="relative">
                <div className="absolute bottom-2 left-[7px] top-2 w-px bg-[#D8CBD7]" />

                <div className="relative pl-10">
                  <div className="absolute left-0 top-2 flex h-[15px] w-[15px] items-center justify-center rounded-full border-[3px] border-[#FFFDFC] bg-[#70456F] ring-1 ring-[#70456F]" />

                  <div className="mb-6">
                    <span className="inline-flex rounded-full bg-[#F2E9EE] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#70456F]">
                      October 2021 — February 2022
                    </span>
                  </div>

                  <div className="rounded-[2rem] border border-[#E6D9D3] bg-[#FBF5F8] p-7 sm:p-9">
                    <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#927F91]">
                          Administrative Assistant
                        </p>

                        <h3 className="mt-2 font-display text-3xl font-semibold tracking-[-0.035em] text-[#241526]">
                          Dozzy Oil &amp; Gas
                        </h3>

                        <p className="mt-2 text-sm text-[#6D5D6F]">
                          Lagos, Nigeria
                        </p>
                      </div>

                      <span className="rounded-full bg-[#F0E5F1] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#70456F]">
                        Professional Experience
                      </span>
                    </div>

                    <p className="mt-8 max-w-3xl text-[15px] leading-7 text-[#625667]">
                      Supported administrative and operational activities
                      within an oil and gas business, managing company
                      records, reports, contracts and invoices while
                      maintaining accurate documentation and supporting
                      internal communication and day-to-day business
                      processes.
                    </p>

                    <div className="mt-8 border-t border-[#E8DED9] pt-7">
                      <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#927F91]">
                        Key Activities
                      </p>

                      <ul className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
                        <li className="flex gap-3 text-[14px] leading-6 text-[#625667]">
                          <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#70456F]" />
                          <span>
                            Prepared and organised reports, contracts,
                            invoices and other business documentation.
                          </span>
                        </li>

                        <li className="flex gap-3 text-[14px] leading-6 text-[#625667]">
                          <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#70456F]" />
                          <span>
                            Maintained and updated records, ensuring
                            information was organised and accessible.
                          </span>
                        </li>

                        <li className="flex gap-3 text-[14px] leading-6 text-[#625667]">
                          <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#70456F]" />
                          <span>
                            Used Microsoft Excel and Word to work with
                            business information and documentation.
                          </span>
                        </li>

                        <li className="flex gap-3 text-[14px] leading-6 text-[#625667]">
                          <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#70456F]" />
                          <span>
                            Checked data and documentation to identify
                            discrepancies and maintain accuracy.
                          </span>
                        </li>

                        <li className="flex gap-3 text-[14px] leading-6 text-[#625667]">
                          <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#70456F]" />
                          <span>
                            Supported meetings and internal communication
                            using Microsoft Teams.
                          </span>
                        </li>

                        <li className="flex gap-3 text-[14px] leading-6 text-[#625667]">
                          <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#70456F]" />
                          <span>
                            Assisted with general administrative tasks
                            supporting everyday business operations.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="border-y border-[#E6D9D3] bg-[#FFFDFC]"
        >
          <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28 xl:px-16">
            <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8B788A]">
                  Selected Work
                </p>

                <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">
                  Projects
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-[#6D5D6F]" />
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="why-me"
          className="border-y border-[#3B263F] bg-[#241526] text-white"
        >
          <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28 xl:px-16">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A47E]">
                Why Hire Me
              </p>

              <h2 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-6xl">
                Practical thinking and a willingness to learn.
              </h2>
            </div>

            <div className="mt-12 grid gap-4 lg:grid-cols-2">
              {[
                'I build beyond the brief, using projects to explore how an initial idea could become something more useful and practical.',
                'I connect technology to real problems, from symptom interpretation and sales forecasting to service design and inventory management.',
                'I can move across different technical areas, with experience spanning AI, data analysis, software engineering, REST APIs, databases and UX.',
                'I learn by building, using practical projects to understand unfamiliar technologies and turn concepts into working systems.',
                'I think about the person using the technology, not only whether the technical solution works, but whether it is understandable and useful.',
                'I bring adaptability across technical and business contexts, with a strong interest in how technology can improve everyday processes and decisions.',
              ].map((point, index) => (
                <div
                  key={index}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-6 sm:p-7"
                >
                  <div className="flex gap-4">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#C8B4D6] text-[#C8B4D6]">
                      <span className="text-sm">✓</span>
                    </div>

                    <p className="text-[15px] leading-7 text-white/75">
                      {point}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C8B4D6]">
                What I Can Help With
              </p>

              <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {[
                  'Data analysis & insight',
                  'Sales forecasting',
                  'AI & machine learning prototypes',
                  'Python development',
                  'REST API development',
                  'Data-driven applications',
                  'Business intelligence & reporting',
                  'AI-assisted workflows',
                  'Systems & process analysis',
                  'User-centred digital solutions',
                  'Technical research & prototyping',
                  'Junior software development',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 text-sm font-medium text-white/80"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-6 sm:p-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
                Roles I’m exploring
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  'Data Analyst',
                  'Junior Data Analyst',
                  'BI Analyst',
                  'Junior Data Scientist',
                  'Data / AI Analyst',
                  'Business Analyst',
                  'Junior Software Developer',
                  'Python Developer',
                  'AI / ML Graduate Roles',
                ].map((role) => (
                  <span
                    key={role}
                    className="rounded-full bg-[#F0E5F1] px-3.5 py-2 text-[11px] font-semibold text-[#70456F]"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="border-t border-[#3B263F] bg-[#241526] text-white"
        >
          <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28 xl:px-16">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C8B4D6]">
                Contact
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">
                Let's talk.
              </h2>

              <p className="mt-6 max-w-2xl text-[15px] leading-7 text-white/65">
                Open to opportunities across data, AI, software development,
                business analysis and technology-focused roles.
              </p>
            </div>

            <div className="mt-14 grid gap-4 lg:grid-cols-2">
              <a
                href="mailto:chelseachukwudozie@gmail.com"
                className="rounded-2xl border border-white/10 bg-white/[0.05] px-7 py-6 transition-colors hover:bg-white/[0.08]"
              >
                <Mail
                  size={20}
                  strokeWidth={1.8}
                  className="mb-4 text-[#C8B4D6]"
                />

                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
                  Email
                </p>

                <p className="mt-3 text-[15px] font-medium text-white">
                  chelseachukwudozie@gmail.com
                </p>
              </a>

              <a
                href="tel:07831803697"
                className="rounded-2xl border border-white/10 bg-white/[0.05] px-7 py-6 transition-colors hover:bg-white/[0.08]"
              >
                <Phone
                  size={20}
                  strokeWidth={1.8}
                  className="mb-4 text-[#C8B4D6]"
                />

                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
                  Phone
                </p>

                <p className="mt-3 text-[15px] font-medium text-white">
                  07831803697
                </p>
              </a>

              <a
                href="https://github.com/chelseadoziee"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 bg-white/[0.05] px-7 py-6 transition-colors hover:bg-white/[0.08]"
              >
                <div className="mb-4 text-[#C8B4D6]">
                  <BrandMark type="github" />
                </div>

                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
                  GitHub
                </p>

                <p className="mt-3 text-[15px] font-medium text-white">
                  github.com/chelseadoziee
                </p>
              </a>

              <a
                href="https://www.linkedin.com/in/chelsea-c-1a336b1b9/"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 bg-white/[0.05] px-7 py-6 transition-colors hover:bg-white/[0.08]"
              >
                <div className="mb-4 text-[#C8B4D6]">
                  <BrandMark type="linkedin" />
                </div>

                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
                  LinkedIn
                </p>

                <p className="mt-3 text-[15px] font-medium text-white">
                  Linkedin
                </p>
              </a>

              <div className="rounded-2xl border border-white/10 bg-white/[0.05] px-7 py-6">
                <MapPin
                  size={20}
                  strokeWidth={1.8}
                  className="mb-4 text-[#C8B4D6]"
                />

                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
                  Location
                </p>

                <p className="mt-3 text-[15px] font-medium text-white">
                  UK / Nigeria
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.05] px-7 py-6">
                <BriefcaseBusiness
                  size={20}
                  strokeWidth={1.8}
                  className="mb-4 text-[#C8B4D6]"
                />

                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
                  Right to work
                </p>

                <p className="mt-3 text-[15px] font-medium text-white">
                  USA Citizen
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.05] px-7 py-6 lg:col-span-2">
                <Clock3
                  size={20}
                  strokeWidth={1.8}
                  className="mb-4 text-[#C8B4D6]"
                />

                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
                  Availability
                </p>

                <p className="mt-3 text-[15px] font-medium text-white">
                  Available 24/7
                </p>
              </div>
            </div>
          </div>
        </section>

        <button
          type="button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }
          className={`fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#70456F] text-white shadow-lg shadow-[#241526]/15 transition-all duration-300 hover:-translate-y-1 ${
            showTopButton
              ? 'translate-y-0 opacity-100'
              : 'pointer-events-none translate-y-4 opacity-0'
          }`}
          aria-label="Back to top"
        >
          <ChevronUp size={19} />
        </button>
      </main>

      <footer className="border-t border-[#E6D9D3]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-6 py-6 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#8b857c] sm:flex-row sm:px-8 lg:px-12 xl:px-16">
          <span>© {new Date().getFullYear()} Chelsea Dozie</span>

          <span>Computer Science · AI · Technology</span>
        </div>
      </footer>
    </div>
  )
}

export default App