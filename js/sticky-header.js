document.addEventListener('DOMContentLoaded', function() {
    const headerUpper = document.querySelector('.header-upper');
    const headerTop = document.querySelector('.header-top');
    let lastScrollTop = 0;

    // Get header heights for calculations
    const headerUpperHeight = headerUpper.offsetHeight;
    const headerTopHeight = headerTop.offsetHeight;

    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove sticky class based on scroll position
        if (scrollTop > headerTopHeight) {
            headerUpper.classList.add('sticky-upper-header');
            headerTop.style.opacity = '0';
            headerTop.style.visibility = 'hidden';
        } else {
            headerUpper.classList.remove('sticky-upper-header');
            headerTop.style.opacity = '1';
            headerTop.style.visibility = 'visible';
        }

        lastScrollTop = scrollTop;
    }

    window.addEventListener('scroll', handleScroll);
});