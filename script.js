// Smooth scroll para los links de navegación
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const destino = document.querySelector(this.getAttribute('href'));
      if (destino) {
        destino.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // (Opcional) Mensaje al hacer clic en el botón de WhatsApp
  const whatsappBtn = document.querySelector('.whatsapp-button');
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', () => {
      console.log('Redirigiendo a WhatsApp...');
    });
  }
  