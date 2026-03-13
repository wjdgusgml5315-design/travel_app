document.addEventListener('DOMContentLoaded', () => {
    console.log("TripFlow App Initialized");
    
    // Simple Navigation Logic for static prototype
    const navItems = document.querySelectorAll('.bottom-nav__item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const screen = item.dataset.screen;
            if (screen) {
                window.location.href = `${screen}.html`;
            }
        });
    });

    // Active Screen Highlighting
    const currentPath = window.location.pathname;
    const filename = currentPath.split('/').pop() || 'index.html';
    
    navItems.forEach(item => {
        const screenName = item.dataset.screen || 'index';
        if (filename.includes(screenName) || (filename === 'index.html' && screenName === 'index')) {
            item.classList.add('bottom-nav__item--active');
        } else {
            item.classList.remove('bottom-nav__item--active');
        }
    });
});
