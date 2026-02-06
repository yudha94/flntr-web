window.onload = function() {
    const slider = document.getElementById('productGrid');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // control carousel

        // --- FITUR TOMBOL ---
        const scrollAmount = 300;
        nextBtn.addEventListener('click', () => {
            slider.style.scrollBehavior = 'smooth';
            slider.scrollLeft += scrollAmount;
        });

        prevBtn.addEventListener('click', () => {
            slider.style.scrollBehavior = 'smooth';
            slider.scrollLeft -= scrollAmount;
        });

        // --- FITUR MOUSE DRAG ---
        let isDown = false;
        let startX, scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
            slider.style.scrollBehavior = 'auto';
        });

        slider.addEventListener('mouseleave', () => { isDown = false; });
        slider.addEventListener('mouseup', () => { isDown = false; });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2;
            slider.scrollLeft = scrollLeft - walk;
        });
    
};