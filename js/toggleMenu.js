function toggleMenu() {
    const menu = document.querySelector('.navbar-menu');
    const hamburger = document.querySelector('.navbar-togglebtn');
    const isMenuVisible = menu.style.display === 'flex';
    
    menu.style.display = isMenuVisible ? 'none' : 'flex';
    hamburger.style.display = isMenuVisible ? 'block' : 'none';
}