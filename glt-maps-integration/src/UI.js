// UI.js - dialog + estimate button wiring
function initUI() {
  // dialog controls
  const btn = document.getElementById('openDialog');
  const dialog = document.getElementById('infoDialog');
  if (btn && dialog) {
    btn.addEventListener('click', () => { if (!dialog.open) dialog.showModal(); });
    const closeBtn = dialog.querySelector('.close');
    if (closeBtn) closeBtn.addEventListener('click', () => dialog.close());
    const cancel = dialog.querySelector('#cancel');
    if (cancel) cancel.addEventListener('click', () => dialog.close());
    const track = dialog.querySelector('#track');
    if (track) track.addEventListener('click', () => {
      const val = document.getElementById('trackingNumber').value.trim();
      if (!val) { alert('Enter a tracking number'); return; }
      dialog.close();
      alert('Tracking: ' + val);
    });
  }

  // dropdown toggles
  document.querySelectorAll('.has-dropdown > a').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const expanded = trigger.getAttribute('aria-expanded') === 'true';
      trigger.setAttribute('aria-expanded', String(!expanded));
      trigger.parentElement.classList.toggle('open', !expanded);
    });
  });

  // Estimate button: uses window._placeCoords and calculateDistanceMatrix()
  const estimateBtn = document.getElementById('estimateBtn');
  if (estimateBtn) {
    estimateBtn.addEventListener('click', async () => {
      const pu = window._placeCoords && window._placeCoords.pickup;
      const doff = window._placeCoords && window._placeCoords.dropoff;
      if (!pu || !doff) {
        alert('Please select both pickup and dropoff from suggestions.');
        return;
      }
      try {
        const result = await calculateDistanceMatrix(pu, doff);
        // Basic example: show distance/time; later you can compute price from result.distanceMeters
        alert(`Distance: ${result.distanceText}\nDuration: ${result.durationText}`);
      } catch (err) {
        console.error(err);
        alert('Could not calculate distance. See console for details.');
      }
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initUI);
} else {
  initUI();
}