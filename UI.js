  // safe DOM references
  function initUI() {
    const btn = document.getElementById('openDialog');
    const dialog = document.getElementById('infoDialog');

    if (btn && dialog) {
      btn.addEventListener('click', () => {
        if (!dialog.open) dialog.showModal();
      });

      const closeBtn = dialog.querySelector('.close');
      if (closeBtn) closeBtn.addEventListener('click', () => dialog.close());

      const cancel = dialog.querySelector('#cancel');
      if (cancel) cancel.addEventListener('click', () => dialog.close());

      const track = dialog.querySelector('#track');
      if (track) {
        track.addEventListener('click', () => {
          const val = document.getElementById('trackingNumber').value.trim();
          if (!val) { alert('Enter a tracking number'); return; }
          dialog.close();
          alert('Tracking: ' + val);
        });
      }
    }
  }
      // accessibility: toggle aria-expanded on dropdown trigger
      document.querySelectorAll('.has-dropdown > a').forEach(trigger => {
        trigger.addEventListener('click', (e) => {
          e.preventDefault();
          const expanded = trigger.getAttribute('aria-expanded') === 'true';
          trigger.setAttribute('aria-expanded', String(!expanded));
          trigger.parentElement.classList.toggle('open', !expanded);
        });
      });
    