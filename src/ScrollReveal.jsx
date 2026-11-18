import { useLayoutEffect } from 'react'
import './scroll-reveal.css'

// O hero tem uma entrada própria no CSS. O restante aparece durante o scroll.
const selectors = [
  '.benefits .section-heading',
  '.benefit-card',
  '.steps .section-heading',
  '.steps__grid .step',
  '.steps__disclaimer',
  '.gallery .section-heading',
  '.gallery__grid',
  '.philosophy .section-heading',
  '.philosophy-card',
  '.faq .section-heading',
  '.faq-item',
  '.faq__photo',
  '.contact__panel',
]

export default function ScrollReveal({ children }) {
  useLayoutEffect(() => {
    if (!('IntersectionObserver' in window)) return

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (motion.matches) return

    const elements = Array.from(document.querySelectorAll(
      selectors.map(selector => `main ${selector}`).join(', ')
    ))

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return

        // Espera até 40% do elemento entrar na tela. Para conteúdos muito
        // altos, limita a altura exigida a 32% da área visível.
        const elementHeight = entry.boundingClientRect.height
        const viewportHeight = entry.rootBounds?.height ?? window.innerHeight
        const requiredHeight = Math.min(elementHeight * 0.4, viewportHeight * 0.32)

        if (entry.intersectionRect.height >= requiredHeight) {
          reveal(entry.target)
        }
      })
    }, {
      threshold: [0, 0.025, 0.05, 0.075, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.6, 0.75, 1],
      // No celular, considera também a barra fixa de contato.
      rootMargin: window.matchMedia('(max-width: 650px)').matches
        ? '0px 0px -64px 0px'
        : '0px 0px -32px 0px',
    })

    function reveal(element) {
      element.dataset.scrollReveal = 'visible'
      observer.unobserve(element)
    }

    function clearStates() {
      elements.forEach(element => {
        delete element.dataset.scrollReveal
        element.style.removeProperty('--scroll-reveal-delay')
      })
    }

    elements.forEach(element => {
      const rect = element.getBoundingClientRect()
      // Mantém visíveis os itens que já passaram e ignora os ocultos no layout.
      if (rect.bottom <= 0 || rect.height === 0 || rect.width === 0) return

      const stagger = element.matches('.benefit-card, .step, .philosophy-card, .faq-item')
        ? Math.min(Array.from(element.parentElement.children).indexOf(element), 3) * 65
        : 0

      element.style.setProperty('--scroll-reveal-delay', `${stagger}ms`)
      element.dataset.scrollReveal = 'pending'
      observer.observe(element)
    })

    const handleFocus = event => {
      const target = event.target.closest?.('[data-scroll-reveal="pending"]')
      if (target) reveal(target)
    }

    const handleMotionChange = event => {
      if (event.matches) {
        observer.disconnect()
        clearStates()
      }
    }

    document.addEventListener('focusin', handleFocus)
    motion.addEventListener?.('change', handleMotionChange)

    return () => {
      observer.disconnect()
      document.removeEventListener('focusin', handleFocus)
      motion.removeEventListener?.('change', handleMotionChange)
      clearStates()
    }
  }, [])

  return children
}
