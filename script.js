document.querySelectorAll('.glitch-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.add('glitch');

    // Hapus class glitch setelah selesai animasi
    setTimeout(() => {
      card.classList.remove('glitch');
      // Buka link
      const link = card.getAttribute('data-link');
      window.open(link, "_blank");
    }, 600); // durasi sama dengan animasi glitch
  });
});