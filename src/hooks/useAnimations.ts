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
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observer les éléments à animer
    document.querySelectorAll('.block, .solution-block, .impact-card, .partner-logo, .durabilite-feature').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      observer.observe(el);
    });

    // Header sticky avec effet de transparence
    let lastScroll = 0;
    const header = document.querySelector('.nav');

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
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || '');
        
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Animation des boutons au hover
    document.querySelectorAll('.btn').forEach(btn => {
      btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
        this.style.transition = 'transform 0.3s ease';
      });
      
      btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
      });
    });

    // Effet de parallaxe léger sur le hero
    const handleParallax = () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector('.hero-bg img');
      
      if (hero) {
        const rate = scrolled * -0.3;
        hero.style.transform = `translateY(${rate}px) scale(1.04)`;
      }
    };

    window.addEventListener('scroll', handleParallax);

    // Animation des cartes d'impact au hover
    document.querySelectorAll('.impact-card').forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
        this.style.boxShadow = '0 12px 40px rgba(14, 26, 43, 0.15)';
        this.style.transition = 'all 0.3s ease';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 20px rgba(14, 26, 43, 0.08)';
      });
    });

    // Animation des blocs colorés
    document.querySelectorAll('.block').forEach(block => {
      block.addEventListener('mouseenter', function() {
        if (this.classList.contains('block--image')) return;
        this.style.transform = 'scale(1.02)';
        this.style.transition = 'transform 0.3s ease';
      });
      
      block.addEventListener('mouseleave', function() {
        if (this.classList.contains('block--image')) return;
        this.style.transform = 'scale(1)';
      });
    });

    // Animation des icônes de fonctionnalités
    document.querySelectorAll('.feature-icon').forEach(icon => {
      icon.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.2) rotate(5deg)';
        this.style.transition = 'transform 0.3s ease';
      });
      
      icon.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
      });
    });

    // Animation du logo au scroll
    const handleLogoAnimation = () => {
      const scrolled = window.pageYOffset;
      const logo = document.querySelector('.brand img');
      
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
      logo.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.05)';
        this.style.transition = 'all 0.3s ease';
      });
      
      logo.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
      });
    });

    // Gestion des erreurs d'images
    document.querySelectorAll('img').forEach(img => {
      img.addEventListener('error', function() {
        this.src = 'https://placehold.co/400x300?text=Image+non+disponible';
        this.alt = 'Image non disponible';
      });
    });

    // Animation des liens de navigation
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.transition = 'transform 0.2s ease';
      });
      
      link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
      });
    });

    // Effet de focus amélioré pour l'accessibilité
    document.querySelectorAll('a, button, input').forEach(element => {
      element.addEventListener('focus', function() {
        this.style.outline = '2px solid var(--primary)';
        this.style.outlineOffset = '2px';
      });
      
      element.addEventListener('blur', function() {
        this.style.outline = 'none';
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
