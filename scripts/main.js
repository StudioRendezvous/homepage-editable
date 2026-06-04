// Refined interactions for the static homepage (matching draft behaviors)
document.addEventListener('DOMContentLoaded', () => {
  // Audience segmented control (visual toggle only for now)
  const segs = document.querySelectorAll('.audience-toggle .seg');
  segs.forEach(seg => {
    seg.addEventListener('click', () => {
      segs.forEach(s => s.classList.remove('active'));
      seg.classList.add('active');
      // Optional: could swap some text or CTAs based on audience in future small edits
    });
  });

  // Standard tiles: click to expand/collapse (Mint variant behavior)
  const tiles = document.querySelectorAll('.std-tile');
  tiles.forEach(tile => {
    tile.addEventListener('click', () => {
      const isOpen = tile.classList.contains('open');
      // Close all others (single open like source)
      tiles.forEach(t => {
        t.classList.remove('open');
        const plus = t.querySelector('.tile-plus');
        if (plus) plus.textContent = '+';
      });
      if (!isOpen) {
        tile.classList.add('open');
        const plus = tile.querySelector('.tile-plus');
        if (plus) plus.textContent = '×';
      }
    });

    // Hover hint (subtle)
    tile.addEventListener('mouseenter', () => {
      if (!tile.classList.contains('open')) {
        tile.style.boxShadow = '0 14px 32px rgba(0, 0, 0, 0.22)';
      }
    });
    tile.addEventListener('mouseleave', () => {
      if (!tile.classList.contains('open')) {
        tile.style.boxShadow = '0 10px 24px rgba(0, 0, 0, 0.18)';
      }
    });
  });

  // FAQ open state (single open)
  const details = document.querySelectorAll('.faq details');
  details.forEach(d => {
    d.addEventListener('toggle', () => {
      if (d.open) {
        details.forEach(other => { if (other !== d) other.open = false; });
      }
    });
  });
});
