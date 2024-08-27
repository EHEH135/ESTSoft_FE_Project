function toggleMenu() {
    const menu = document.querySelector('.navbar-menu');
    const hamburger = document.querySelector('.navbar-togglebtn');
    const isMenuVisible = menu.style.display === 'flex';
    
    // 메뉴가 열려있으면 닫고, 닫혀있으면 연다
    menu.style.display = isMenuVisible ? 'none' : 'flex';
    hamburger.style.display = isMenuVisible ? 'block' : 'none';
}