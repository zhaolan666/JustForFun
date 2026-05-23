(() => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const setting = localStorage.getItem('vp-theme') || (prefersDark ? 'dark' : 'light')
  if (setting === 'dark')
    document.documentElement.classList.add('dark')
})()
