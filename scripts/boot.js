(function boot() {
  const rootEl = document.getElementById('root');

  function showError(message) {
    const box = document.createElement('div');
    box.style.cssText = [
      'position:fixed',
      'inset:24px',
      'max-width:640px',
      'margin:auto',
      'height:fit-content',
      'font:14px/1.5 ui-monospace,Menlo,monospace',
      'color:#ff8a80',
      'background:#2a1215',
      'border:1px solid #5c2b2e',
      'border-radius:12px',
      'padding:20px 24px',
      'z-index:99999',
      'white-space:pre-wrap',
    ].join(';');
    box.textContent = message;
    document.body.appendChild(box);
  }

  if (window.location.protocol === 'file:') {
    showError(
      'Cannot load from file://\n\n' +
      'Start a local server from this folder, then open http://localhost:8081\n\n' +
      '  cd "/Users/shanefrench/Projects/Human Interest - Cursor/homepage-editable"\n' +
      '  python3 -m http.server 8081'
    );
    return;
  }

  if (typeof React === 'undefined' || typeof ReactDOM === 'undefined') {
    showError('React failed to load. Check vendor/react.production.min.js');
    return;
  }

  if (typeof Babel === 'undefined') {
    showError('Babel failed to load. Check vendor/babel.min.js');
    return;
  }

  const status = document.createElement('div');
  status.style.cssText = 'position:fixed;bottom:16px;right:16px;font:13px/1.4 system-ui,sans-serif;color:#666;background:#fff;padding:8px 14px;border-radius:8px;box-shadow:0 1px 4px rgba(0,0,0,.12);z-index:99999';
  status.textContent = 'Loading page…';
  document.body.appendChild(status);

  const componentScripts = [
    'scripts/raw-component-1-fd348cec.js',
    'scripts/raw-component-2-e6e43dfa.js',
    'scripts/raw-component-3-07db1e28.js',
    'scripts/raw-component-4-41ad4417.js',
  ];

  async function loadComponent(url) {
    let res;
    try {
      res = await fetch(url, { cache: 'no-store' });
    } catch (err) {
      throw new Error(`Network error loading ${url}\n${err.message}`);
    }
    if (!res.ok) throw new Error(`Failed to load ${url} (${res.status})`);
    const source = await res.text();
    let code;
    try {
      ({ code } = Babel.transform(source, { presets: ['react'] }));
    } catch (err) {
      throw new Error(`Babel error in ${url}\n${err.message}`);
    }
    (0, eval)(code);
  }

  (async function run() {
    try {
      for (const url of componentScripts) {
        status.textContent = `Loading ${url.split('/').pop()}…`;
        await loadComponent(url);
      }

      if (typeof CombinedLandingPage !== 'function') {
        throw new Error('CombinedLandingPage not found after loading components');
      }

      status.remove();
      ReactDOM.createRoot(rootEl).render(React.createElement(CombinedLandingPage));
    } catch (err) {
      status.remove();
      showError(String(err.message || err));
      console.error(err);
    }
  })();
})();
