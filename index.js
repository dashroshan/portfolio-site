const goToTop = document.getElementById('gototop');

goToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});