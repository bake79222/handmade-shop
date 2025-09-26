const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    // e.preventDefault(); // 如果不想跳頁
    navLinks.forEach(l => l.classList.remove('active')); // 移除所有 active
    link.classList.add('active'); // 當前加上 active
  });
});
