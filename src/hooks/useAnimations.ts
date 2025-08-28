'use client';

import { useEffect } from 'react';

export function useAnimations() {
  useEffect(() => {
    // Animation des éléments au scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.style.opacity = '1';
          target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observer les éléments à animer
    document.querySelectorAll('.block, .solution-block, .impact-card, .partner-logo, .durabilite-feature').forEach(el => {
      const element = el as HTMLElement;
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      observer.observe(el);
    });

    // Header sticky avec effet de transparence
    let lastScroll = 0;
    const header = document.querySelector('.nav') as HTMLElement | null;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      
      if (header) {
        if (currentScroll > 100) {
          header.style.background = 'rgba(255, 255, 255, 0.98)';
          header.style.boxShadow = '0 2px 20px rgba(14, 26, 43, 0.15)';
        } else {
          header.style.background = 'rgba(255, 255, 255, 0.95)';
          header.style.boxShadow = 'none';
        }
      }
      
      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);

    // Smooth scroll pour les ancres
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });

    // Animation des boutons au hover
    document.querySelectorAll('.btn').forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        const button = btn as HTMLElement;
        button.style.transform = 'translateY(-3px)';
        button.style.transition = 'transform 0.3s ease';
      });
      
      btn.addEventListener('mouseleave', () => {
        const button = btn as HTMLElement;
        button.style.transform = 'translateY(0)';
      });
    });

    // Effet de parallaxe léger sur le hero
    const handleParallax = () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector('.hero-bg img') as HTMLImageElement | null;
      
      if (hero) {
        const rate = scrolled * -0.3;
        hero.style.transform = `translateY(${rate}px) scale(1.04)`;
      }
    };

    window.addEventListener('scroll', handleParallax);

    // Animation des cartes d'impact au hover
    document.querySelectorAll('.impact-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        const cardElement = card as HTMLElement;
        cardElement.style.transform = 'translateY(-8px)';
        cardElement.style.boxShadow = '0 12px 40px rgba(14, 26, 43, 0.15)';
        cardElement.style.transition = 'all 0.3s ease';
      });
      
      card.addEventListener('mouseleave', () => {
        const cardElement = card as HTMLElement;
        cardElement.style.transform = 'translateY(0)';
        cardElement.style.boxShadow = '0 4px 20px rgba(14, 26, 43, 0.08)';
      });
    });

    // Animation des blocs colorés
    document.querySelectorAll('.block').forEach(block => {
      block.addEventListener('mouseenter', () => {
        if (block.classList.contains('block--image')) return;
        const blockElement = block as HTMLElement;
        blockElement.style.transform = 'scale(1.02)';
        blockElement.style.transition = 'transform 0.3s ease';
      });
      
      block.addEventListener('mouseleave', () => {
        if (block.classList.contains('block--image')) return;
        const blockElement = block as HTMLElement;
        blockElement.style.transform = 'scale(1)';
      });
    });

    // Animation des icônes de fonctionnalités
    document.querySelectorAll('.feature-icon').forEach(icon => {
      icon.addEventListener('mouseenter', () => {
        const iconElement = icon as HTMLElement;
        iconElement.style.transform = 'scale(1.2) rotate(5deg)';
        iconElement.style.transition = 'transform 0.3s ease';
      });
      
      icon.addEventListener('mouseleave', () => {
        const iconElement = icon as HTMLElement;
        iconElement.style.transform = 'scale(1) rotate(0deg)';
      });
    });

    // Animation du logo au scroll
    const handleLogoAnimation = () => {
      const scrolled = window.pageYOffset;
      const logo = document.querySelector('.brand img') as HTMLImageElement | null;
      
      if (logo && scrolled > 50) {
        logo.style.transform = 'scale(0.9)';
        logo.style.transition = 'transform 0.3s ease';
      } else if (logo) {
        logo.style.transform = 'scale(1)';
      }
    };

    window.addEventListener('scroll', handleLogoAnimation);

    // Animation des cartes de partenaires
    document.querySelectorAll('.partner-logo').forEach(logo => {
      logo.addEventListener('mouseenter', () => {
        const logoElement = logo as HTMLElement;
        logoElement.style.transform = 'translateY(-8px) scale(1.05)';
        logoElement.style.transition = 'all 0.3s ease';
      });
      
      logo.addEventListener('mouseleave', () => {
        const logoElement = logo as HTMLElement;
        logoElement.style.transform = 'translateY(0) scale(1)';
      });
    });

    // Gestion des erreurs d'images
    document.querySelectorAll('img').forEach(img => {
      img.addEventListener('error', () => {
        const imgElement = img as HTMLImageElement;
        imgElement.src = 'https://placehold.co/400x300?text=Image+non+disponible';
        imgElement.alt = 'Image non disponible';
      });
    });

    // Animation des liens de navigation
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('mouseenter', () => {
        const linkElement = link as HTMLElement;
        linkElement.style.transform = 'translateY(-2px)';
        linkElement.style.transition = 'transform 0.2s ease';
      });
      
      link.addEventListener('mouseleave', () => {
        const linkElement = link as HTMLElement;
        linkElement.style.transform = 'translateY(0)';
      });
    });

    // Effet de focus amélioré pour l'accessibilité
    document.querySelectorAll('a, button, input').forEach(element => {
      element.addEventListener('focus', () => {
        const focusElement = element as HTMLElement;
        focusElement.style.outline = '2px solid var(--primary)';
        focusElement.style.outlineOffset = '2px';
      });
      
      element.addEventListener('blur', () => {
        const blurElement = element as HTMLElement;
        blurElement.style.outline = 'none';
      });
    });

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleParallax);
      window.removeEventListener('scroll', handleLogoAnimation);
      observer.disconnect();
    };
  }, []);

  console.log('BubbleBox - Animations chargées avec succès ! 🚿');
}
