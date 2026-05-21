/**
 * CORPORACIÓN EDUCATIVA GENERAL SANTANDER
 * Script Principal - main.js
 * Funcionalidades interactivas del sitio web
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ===== PROGRAM MODAL DATA =====
  const programsData = {
    1: {
      title: "Auxiliar Administrativo",
      category: "Administración",
      icon: "📋",
      description: "Gestión documental, atención al cliente y manejo de oficina moderna.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
      duration: "6 meses",
      certification: "Certificado Técnico",
      features: ["Gestión de documentos", "Atención al cliente", "Uso de herramientas ofimáticas", "Archivo y registro"],
      whatsapp: "Hola%2C%20quiero%20inscribirme%20en%20el%20programa%20de%20*Auxiliar%20Administrativo*"
    },
    2: {
      title: "Auxiliar Contable y Financiero",
      category: "Finanzas",
      icon: "📊",
      description: "Contabilidad, nómina, tributación y software contable.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
      duration: "8 meses",
      certification: "Certificado Técnico",
      features: ["Contabilidad básica", "Nómina y prestaciones", "Tributación", "Software contable"],
      whatsapp: "Hola%2C%20quiero%20inscribirme%20en%20el%20programa%20de%20*Auxiliar%20Contable%20y%20Financiero*"
    },
    3: {
      title: "Atención a la Primera Infancia",
      category: "Educación",
      icon: "👶",
      description: "Cuidado, educación y desarrollo integral en niños menores.",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80",
      duration: "6 meses",
      certification: "Certificado Técnico",
      features: ["Desarrollo infantil", "Juegos didácticos", "Primeros auxilios", "Estimulación temprana"],
      whatsapp: "Hola%2C%20quiero%20inscribirme%20en%20el%20programa%20de%20*Atención%20a%20la%20Primera%20Infancia*"
    },
    4: {
      title: "Salud Ocupacional",
      category: "SG-SST",
      icon: "⛑️",
      description: "Sistema de gestión de seguridad y salud en el trabajo.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
      duration: "6 meses",
      certification: "Certificado Técnico",
      features: ["Normas de seguridad", "Prevención de riesgos", "Primeros auxilios laborales", "Gestión SST"],
      whatsapp: "Hola%2C%20quiero%20inscribirme%20en%20el%20programa%20de%20*Salud%20Ocupacional*"
    },
    5: {
      title: "Belleza Integral",
      category: "Belleza",
      icon: "💇",
      description: "Estética facial, corporal, peluquería y maquillaje profesional.",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
      duration: "8 meses",
      certification: "Certificado Técnico",
      features: ["Estética facial y corporal", "Peluquería profesional", "Maquillaje artístico", "Cuidado capilar"],
      whatsapp: "Hola%2C%20quiero%20inscribirme%20en%20el%20programa%20de%20*Belleza%20Integral*"
    },
    6: {
      title: "Servicios Farmacéuticos",
      category: "Salud",
      icon: "💊",
      description: "Dispensación de medicamentos y atención farmacéutica integral.",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=80",
      duration: "8 meses",
      certification: "Certificado Técnico",
      features: ["Dispensación de medicamentos", "Control de inventarios", "Atención farmacéutica", "Legislación sanitaria"],
      whatsapp: "Hola%2C%20quiero%20inscribirme%20en%20el%20programa%20de%20*Servicios%20Farmacéuticos*"
    },
    7: {
      title: "Auxiliar en Enfermería",
      category: "Salud",
      icon: "💉",
      description: "Cuidado del paciente, primeros auxilios y atención clínica.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80",
      duration: "12 meses",
      certification: "Certificado Técnico",
      features: ["Cuidado del paciente", "Primeros auxilios", "Técnicas de enfermería", "Atención clínica"],
      whatsapp: "Hola%2C%20quiero%20inscribirme%20en%20el%20programa%20de%20*Auxiliar%20en%20Enfermería*"
    },
    8: {
      title: "Auxiliar en Trabajo Social y Comunitario",
      category: "Social",
      icon: "👥",
      description: "Intervención social, comunitaria y proyectos de impacto.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80",
      duration: "6 meses",
      certification: "Certificado Técnico",
      features: ["Intervención social", "Proyectos comunitarios", "Derechos humanos", "Trabajo en equipo"],
      whatsapp: "Hola%2C%20quiero%20inscribirme%20en%20el%20programa%20de%20*Trabajo%20Social%20y%20Comunitario*"
    },
    9: {
      title: "Maquinaria Pesada",
      category: "Industrial",
      icon: "🚜",
      description: "Operación de retroexcavadoras, bulldozers y equipos pesados.",
      image: "https://www.senati.edu.pe/sites/default/files/2017/carrera/11/carrera-dual-mecanico-de-maquinaria-pesada-senati-1800x1190.jpg",
      duration: "10 meses",
      certification: "Certificado Técnico",
      features: ["Operación de equipos", "Mantenimiento básico", "Seguridad industrial", "Lectura de planos"],
      whatsapp: "Hola%2C%20quiero%20inscribirme%20en%20el%20programa%20de%20*Maquinaria%20Pesada*"
    },
    10: {
      title: "Bachillerato Flexible",
      category: "Educación Básica",
      icon: "🎓",
      description: "Termina tu bachillerato con horarios adaptables a tu vida.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80",
      duration: "Flexible",
      certification: "Diploma",
      features: ["Horarios adaptables", "Modalidad virtual", "Docentes especializados", "Aprendizaje autónomo"],
      whatsapp: "Hola%2C%20quiero%20inscribirme%20en%20el%20programa%20de%20*Bachillerato%20Flexible*"
    }
  };

  // ===== PROGRAM MODAL =====
  const modal = document.getElementById('programModal');
  const modalClose = document.getElementById('modalClose');
  const modalTitle = document.getElementById('modalTitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalIcon = document.getElementById('modalIcon');
  const modalImage = document.getElementById('modalImage');
  const modalDescription = document.getElementById('modalDescription');
  const modalDuration = document.getElementById('modalDuration');
  const modalCertification = document.getElementById('modalCertification');
  const modalFeatures = document.getElementById('modalFeatures');
  const modalBtn = document.getElementById('modalBtn');

  function openModal(programId) {
    const program = programsData[programId];
    if (!program) return;
    
    modalTitle.textContent = program.title;
    modalCategory.textContent = program.category;
    modalIcon.textContent = program.icon;
    modalImage.src = program.image;
    modalImage.alt = program.title;
    modalDescription.textContent = program.description;
    modalDuration.textContent = program.duration;
    modalCertification.textContent = program.certification;
    
    modalFeatures.innerHTML = '';
    program.features.forEach(f => {
      const li = document.createElement('li');
      li.textContent = f;
      modalFeatures.appendChild(li);
    });
    
    modalBtn.href = `https://wa.me/573133202324?text=${program.whatsapp}%20de%20la%20Corporación%20Educativa%20General%20Santander%20-%20Sede%20Tibú.`;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
  });

  // Add click handlers to program cards
  document.querySelectorAll('.program-card').forEach((card, index) => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => openModal((index % 10) + 1));
  });

  // ===== NAVBAR SCROLL EFFECT =====
  const navbar = document.getElementById('navbar');
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    navbar.classList.toggle('scrolled', scroll > 50);
    backToTop.classList.toggle('visible', scroll > 500);
  }, { passive: true });

  // ===== MOBILE MENU TOGGLE =====
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const mobileOverlay = document.getElementById('mobileOverlay');

  function toggleMenu() {
    const isActive = navLinks.classList.contains('active');
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    mobileOverlay.classList.toggle('active');
    document.body.style.overflow = !isActive ? 'hidden' : '';
    hamburger.setAttribute('aria-expanded', !isActive);
  }

  function closeMenu() {
    if (navLinks.classList.contains('active')) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
      mobileOverlay.classList.remove('active');
      document.body.style.overflow = '';
      hamburger.setAttribute('aria-expanded', 'false');
    }
  }

  hamburger.addEventListener('click', toggleMenu);
  mobileOverlay.addEventListener('click', closeMenu);
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => e.key === 'Escape' && closeMenu());
  window.addEventListener('resize', () => window.innerWidth > 768 && closeMenu());

  // ===== FAQ ACCORDION =====
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', function() {
      const item = this.parentElement;
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(f => f.classList.remove('active'));
      if (!isActive) item.classList.add('active');
    });
  });

  // ===== SCROLL REVEAL ANIMATIONS =====
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // ===== HERO PARTICLES =====
  const particlesContainer = document.getElementById('particles');
  if (particlesContainer) {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 25; i++) {
      const p = document.createElement('div');
      p.classList.add('particle');
      p.style.left = Math.random() * 100 + '%';
      const size = Math.random() * 4 + 2;
      p.style.width = p.style.height = size + 'px';
      p.style.animationDuration = Math.random() * 10 + 8 + 's';
      p.style.animationDelay = Math.random() * 10 + 's';
      fragment.appendChild(p);
    }
    particlesContainer.appendChild(fragment);
  }

  // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.pageYOffset - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // ===== HERO CAROUSEL =====
  const heroSlides = document.querySelectorAll('.hero-slide');
  let currentSlide = 0;
  if (heroSlides.length > 0) {
    setInterval(() => {
      heroSlides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % heroSlides.length;
      heroSlides[currentSlide].classList.add('active');
    }, 5000);
  }

  // ===== PAUSE CAROUSELS WHEN OUT OF VIEW =====
  const carousels = document.querySelectorAll('.gallery-track, .programs-carousel');
  const carouselObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      entry.target.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused';
    });
  }, { threshold: 0 });
  carousels.forEach(c => carouselObserver.observe(c));

  // ===== COUNTDOWN TIMER =====
  function getDeadline() {
    const now = new Date();
    const currentYear = now.getFullYear();
    let deadline = new Date(currentYear, 4, 31, 23, 59, 59); // Mes 4 = Mayo (0-indexed)
    
    // Si ya pasó el 31 de mayo de este año, usar el del próximo año
    if (now > deadline) {
      deadline = new Date(currentYear + 1, 4, 31, 23, 59, 59);
    }
    return deadline;
  }

  const deadline = getDeadline();
  const cdDays = document.getElementById('cdDays');
  const cdHours = document.getElementById('cdHours');
  const cdMinutes = document.getElementById('cdMinutes');
  const cdSeconds = document.getElementById('cdSeconds');
  const countdownGrid = document.getElementById('countdownGrid');

  function pad(num) {
    return String(num).padStart(2, '0');
  }

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = deadline.getTime() - now;

    if (distance < 0) {
      if (countdownGrid) {
        countdownGrid.innerHTML = '<div class="countdown-expired">¡Las matrículas han cerrado! Contáctanos para próximas convocatorias</div>';
      }
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (cdDays) cdDays.textContent = pad(days);
    if (cdHours) cdHours.textContent = pad(hours);
    if (cdMinutes) cdMinutes.textContent = pad(minutes);
    if (cdSeconds) cdSeconds.textContent = pad(seconds);
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

}); // End DOMContentLoaded