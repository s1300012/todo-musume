export const loadGoogleFont = () => {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
};