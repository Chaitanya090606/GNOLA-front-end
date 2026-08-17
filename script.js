/* GNOLA landing page interactions */
const nav = document.querySelector('#main-nav'); const toggle = document.querySelector('#menu-toggle');
      toggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', open); toggle.textContent = open ? '×' : '☰'; });
      document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.textContent = '☰'; }));
      const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .12 }); document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
      document.querySelector('#join-form').addEventListener('submit', event => { event.preventDefault(); const toast = document.querySelector('#toast'); toast.classList.add('show'); event.target.reset(); setTimeout(() => toast.classList.remove('show'), 3800); });

