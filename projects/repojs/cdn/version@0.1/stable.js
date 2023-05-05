fetch('https://cdn.jsdelivr.net/gh/KevinAlavik/repojs/src/stable/index.js')
  .then(response => response.text())
  .then(data => {
    const script = document.createElement('script');
    script.textContent = data;
    document.head.appendChild(script);
  })
  .catch(error => {
    console.error('Error fetching script:', error);
    alert("[REPOJS ERROR]\nCould'nt fetch repojs. Error: " + error)
  });
