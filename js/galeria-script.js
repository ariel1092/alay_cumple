document.querySelectorAll('#photo-gallery img').forEach(img => {
    img.addEventListener('mouseenter', function() {
        this.classList.add('zoom-in');
    });

    img.addEventListener('mouseleave', function() {
        this.classList.remove('zoom-in');
    });
});
